import {ConflictException, Injectable} from '@nestjs/common';
import {PrismaService} from '../core/infra/prisma/prisma.service';
import {User} from '@prisma/client';
import {GetAllUsersDTOResult} from './dtos/get-all-users.dto';
import {CreateUserDTO, CreateUserDTOResult} from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateUserDTO): Promise<CreateUserDTOResult> {
    const {email, password} = data;

    const foundUser = await this.getByEmail(email);

    if (foundUser) {
      throw new ConflictException('User already exists');
    }

    return this.prismaService.user.create({
      data: {
        email,
        password,
      },
      select: {
        id: true,
        email: true,
        avatarUrl: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async getByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
  }

  getAll(): Promise<GetAllUsersDTOResult> {
    return this.prismaService.user.findMany({
      select: {
        id: true,
        email: true,
        avatarUrl: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
