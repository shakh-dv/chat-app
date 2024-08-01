import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
import {User} from '@prisma/client';
import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password!: string;
}

export type CreateUserDTOResult = Omit<User, 'password'>;
