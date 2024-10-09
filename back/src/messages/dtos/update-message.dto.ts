import {PartialType} from '@nestjs/swagger';
import {CreateMessageDTO} from './create-message.dto';

export class UpdateMessageDto extends PartialType(CreateMessageDTO) {}
