import {ConflictException, Injectable} from '@nestjs/common';
import {CreateUserDTO, CreateUserDTOResult} from './dto/create-user.dto';
import {PrismaService} from '../core/infra/prisma/prisma.service';
import {User} from '@prisma/client';

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
        createAt: true,
        updatedAt: true,
        email: true,
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
}
