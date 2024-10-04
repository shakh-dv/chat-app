import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ClsModule} from 'nestjs-cls';
import {LoggerModule} from './core/infra/logger/logger.module';
import {v4 as uuid} from 'uuid';
import {ConfigModule} from '@nestjs/config';
import {PrismaModule} from './core/infra/prisma/prisma.module';
import {UsersModule} from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    ClsModule.forRoot({
      middleware: {
        mount: true,
        generateId: true,
        idGenerator(request): string {
          return request.headers['x-request-id'] ?? uuid();
        },
      },
      global: true,
    }),
    LoggerModule,
    PrismaModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
