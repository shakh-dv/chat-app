// src/messages/messages.service.ts
import {Injectable, NotFoundException} from '@nestjs/common';

import {Message} from '@prisma/client';
import {PrismaService} from '../core/infra/prisma/prisma.service';
import {CreateMessageDTO} from './dtos/create-message.dto';
import {TokenPayload} from '../auth/types/access-token-payload';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async createMessage(
    data: CreateMessageDTO,
    accessTokenPayload: TokenPayload
  ): Promise<Message> {
    const chatExists = await this.prisma.chat.findUnique({
      where: {id: data.chatId},
    });

    if (!chatExists) {
      throw new NotFoundException('Чат не найден.');
    }

    return this.prisma.message.create({
      data: {
        chatId: data.chatId,
        content: data.content,
        senderId: Number(accessTokenPayload.sub),
      },
    });
  }

  async findMessagesByChatId(chatId: number): Promise<Message[]> {
    const id = Number(chatId);
    return this.prisma.message.findMany({
      where: {chatId: id},
      orderBy: {sentAt: 'asc'}, // Сортировка по времени отправки
    });
  }
}
