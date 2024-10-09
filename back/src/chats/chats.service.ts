import {BadRequestException, Injectable} from '@nestjs/common';
import {CreateChatDTO} from './dtos/create-chat.dto';
import {TokenPayload} from '../auth/types/access-token-payload';
import {PrismaService} from '../core/infra/prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateChatDTO, accessTokenPayload: TokenPayload) {
    const user1Id = Number(accessTokenPayload.sub);
    const user2Id = data.user2Id;

    // Проверка, существует ли уже чат между этими пользователями
    const existingChat = await this.findChat(data, accessTokenPayload);

    this.validateChatWithSelf(user1Id, user2Id);

    if (existingChat) {
      return existingChat;
    }

    return this.prisma.chat.create({
      data: {
        user1Id,
        user2Id,
      },
    });
  }

  private validateChatWithSelf(user1Id: number, user2Id: number): void {
    if (user1Id === user2Id) {
      throw new BadRequestException('Нельзя создать чат с самим собой.');
    }
  }

  async findChat(data: CreateChatDTO, accessTokenPayload: TokenPayload) {
    return this.prisma.chat.findFirst({
      where: {
        OR: [
          {
            user1Id: Number(accessTokenPayload.sub),
            user2Id: data.user2Id,
          },
          {
            user1Id: data.user2Id,
            user2Id: Number(accessTokenPayload.sub),
          },
        ],
      },
    });
  }

  async findAll(accessTokenPayload: TokenPayload) {
    const userId = Number(accessTokenPayload.sub);
    return this.prisma.chat.findMany({
      where: {
        OR: [{user1Id: userId}, {user2Id: userId}],
      },
      orderBy: {
        updatedAt: 'desc',
      },
      include: {
        user2: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
        messages: {
          orderBy: {
            sentAt: 'desc',
          },
          take: 1, // Берем только последнее сообщение
        },
      },
    });
  }
}
