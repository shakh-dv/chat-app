import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {Request} from '../types/requests';
import {TokenPayload} from '../types/access-token-payload';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const [, token] = String(request.headers.authorization).split(' ') || [];

    if (!token) {
      throw new UnauthorizedException();
    }

    const payload: TokenPayload = await this.jwtService
      .verifyAsync(token)
      .catch(() => {
        throw new UnauthorizedException();
      });

    request.accessTokenPayload = payload;

    return true;
  }
}
