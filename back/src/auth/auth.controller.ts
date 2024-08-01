import {Controller, Post, Body} from '@nestjs/common';
import {AuthService} from './auth.service';
import {SignInDTO, SignInResultDTO} from './dtos/sign-in.dto';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {User} from '@prisma/client';

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  signIn(@Body() data: SignInDTO): Promise<SignInResultDTO> {
    return this.authService.signIn(data);
  }

  @Post('sign-up')
  async signUp(@Body() body: User) {
    await this.authService.signUp(body);
  }
}
