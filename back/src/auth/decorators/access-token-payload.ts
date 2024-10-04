import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {TokenPayload} from '../types/access-token-payload';
import {Request} from '../types/requests';

export const GetAccessTokenPayload = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): TokenPayload => {
    const request: Request = ctx.switchToHttp().getRequest();
    return request.accessTokenPayload as TokenPayload;
  }
);
