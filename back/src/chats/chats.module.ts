import {Module} from '@nestjs/common';
import {ChatsController} from './chats.controller';
import {ChatService} from './chats.service';
import {PrismaService} from '../core/infra/prisma/prisma.service';

@Module({
  controllers: [ChatsController],
  providers: [ChatService, PrismaService],
})
export class ChatsModule {}
