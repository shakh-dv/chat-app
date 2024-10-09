import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsNumber} from 'class-validator';

export class CreateChatDTO {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  user2Id!: number;
}
