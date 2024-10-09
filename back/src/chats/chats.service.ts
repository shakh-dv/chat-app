import {Injectable} from '@nestjs/common';
import {CreateChatDTO} from './dtos/create-chat.dto';
import {TokenPayload} from '../auth/types/access-token-payload';
import {PrismaService} from '../core/infra/prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateChatDTO, accessTokenPayload: TokenPayload) {
    // Проверка, существует ли уже чат между этими пользователями
    const existingChat = await this.findChat(data, accessTokenPayload);

    if (existingChat) {
      return existingChat;
    }

    return this.prisma.chat.create({
      data: {
        user1Id: Number(accessTokenPayload.sub),
        user2Id: data.user2Id,
      },
    });
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
