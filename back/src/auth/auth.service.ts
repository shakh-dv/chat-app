import * as bcrypt from 'bcrypt';
import {Injectable, UnauthorizedException} from '@nestjs/common';

import {JwtService} from '@nestjs/jwt';
import {TokenPayload} from './types/access-token-payload';
import {SignInDTO, SignInResultDTO} from './dtos/sign-in.dto';
import {UsersService} from '../users/users.service';
import {BCRYPT_HASH_SALT} from './constants/constants';
import {User} from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async generateAccessToken(
    subject: string | number,
    payload: TokenPayload
  ): Promise<string> {
    return await this.jwtService.signAsync(payload, {
      subject: String(subject),
    });
  }

  async generateHashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, BCRYPT_HASH_SALT);
  }

  async signIn(data: SignInDTO): Promise<SignInResultDTO> {
    const {email, password} = data;

    const user = await this.usersService.getByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if (!doesPasswordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      access_token: await this.generateAccessToken(user.id, {
        email: user.email,
      }),
    };
  }

  //TODO: For createsuper script
  async signUp(data: User) {
    const {email, password} = data;

    const user = await this.usersService.getByEmail(email);

    if (user) {
      throw new UnauthorizedException('User already exists');
    }

    return this.usersService.create({
      email: email,
      password: await this.generateHashPassword(password),
    });
  }
}
