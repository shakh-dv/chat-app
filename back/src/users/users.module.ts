import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {PrismaModule} from "../core/infra/prisma/prisma.module";

@Module({
  imports: [PrismaModule], // Добавляем PrismaModule в импорты
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
