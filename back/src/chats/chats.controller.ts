import {
  Controller,
  Post,
  Body, UseGuards, Get,
} from '@nestjs/common';
import {GetAccessTokenPayload} from '../auth/decorators/access-token-payload';
import {TokenPayload} from '../auth/types/access-token-payload';
import {CreateChatDTO} from './dtos/create-chat.dto';
import {ChatService} from './chats.service';
import {ApiBearerAuth} from '@nestjs/swagger';
import {AuthGuard} from '../auth/guards/auth.guard';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatService) {}

  @Post()
  create(
    @Body() data: CreateChatDTO,
    @GetAccessTokenPayload() accessTokenPayload: TokenPayload
  ) {
    return this.chatsService.create(data, accessTokenPayload);
  }

  @Get()
  findAll(@GetAccessTokenPayload() accessTokenPayload: TokenPayload) {
    return this.chatsService.findAll(accessTokenPayload);
  }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.chatsService.findOne(+id);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.chatsService.remove(+id);
  // }
}
