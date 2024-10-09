// src/messages/dto/create-message.dto.ts
import {IsNotEmpty, IsInt} from 'class-validator';

export class CreateMessageDTO {
  @IsNotEmpty()
  content!: string;

  @IsInt()
  chatId!: number;

  @IsInt()
  senderId!: number; // Это ID пользователя, который отправляет сообщение
}
