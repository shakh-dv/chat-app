import { PartialType } from '@nestjs/swagger';
import { CreateChatDTO } from './create-chat.dto';

export class UpdateChatDto extends PartialType(CreateChatDTO) {}
