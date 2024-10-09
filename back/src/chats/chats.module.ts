import {Module} from '@nestjs/common';
import {ChatsController} from './chats.controller';
import {ChatService} from './chats.service';
import {PrismaModule} from '../core/infra/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ChatsController],
  providers: [ChatService],
})
export class ChatsModule {}
