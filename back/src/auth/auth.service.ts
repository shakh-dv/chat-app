import * as bcrypt from 'bcrypt';
import {Injectable, UnauthorizedException} from '@nestjs/common';

import {JwtService} from '@nestjs/jwt';
import {AccessTokenPayload} from './types/access-token-payload';
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

  async generateAccessToken(payload: AccessTokenPayload): Promise<string> {
    return this.jwtService.signAsync(payload);
  }

  async generateHashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, BCRYPT_HASH_SALT);
  }

  async verifyAcessToken(accessToken: string): Promise<AccessTokenPayload> {
    const payload: AccessTokenPayload =
      await this.jwtService.verifyAsync(accessToken);
    return payload;
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

    const accessToken = await this.generateAccessToken({
      email: user.email,
      userId: user.id,
    });

    return {
      accessToken,
    };
  }

  //TODO: For createsuper script
  async signUp(data: User) {
    const {email, password} = data;

    const user = await this.usersService.getByEmail(email);

    if (user) {
      throw new UnauthorizedException('User already exists');
    }

    const newUser = await this.usersService.create({
      email: email,
      password: await this.generateHashPassword(password),
    });

    const accessToken = await this.generateAccessToken({
      email: newUser.email,
      userId: newUser.id,
    });

    return {
      accessToken,
    };
  }
}
