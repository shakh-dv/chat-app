import {Controller, Post, Body, Get} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDTO} from './dto/create-user.dto';
import {GetAllUsersDTOResult} from './dtos/get-all-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDTO: CreateUserDTO) {
    return this.usersService.create(createUserDTO);
  }

  @Get()
  getAll(): Promise<GetAllUsersDTOResult> {
    return this.usersService.getAll();
  }
}
