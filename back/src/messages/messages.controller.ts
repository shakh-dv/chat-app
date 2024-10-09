import {Controller, Get, Post, Body, Param, UseGuards} from '@nestjs/common';
import {MessagesService} from './messages.service';
import {CreateMessageDTO} from './dtos/create-message.dto';
import {Message} from '@prisma/client';
import {TokenPayload} from '../auth/types/access-token-payload';
import {GetAccessTokenPayload} from '../auth/decorators/access-token-payload';
import {AuthGuard} from '../auth/guards/auth.guard';
import {ApiBearerAuth} from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async create(
    @Body() createMessageDTO: CreateMessageDTO,
    @GetAccessTokenPayload() accessTokenPayload: TokenPayload
  ): Promise<Message> {
    return this.messagesService.createMessage(
      createMessageDTO,
      accessTokenPayload
    );
  }

  @Get(':chatId')
  async findByChatId(@Param('chatId') chatId: number): Promise<Message[]> {
    return this.messagesService.findMessagesByChatId(chatId);
  }
}
