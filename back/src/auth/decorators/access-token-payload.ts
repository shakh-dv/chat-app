import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {AccessTokenPayload} from '../types/access-token-payload';
import {Request} from '../types/requests';

export const GetAccessTokenPayload = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): AccessTokenPayload => {
    const request: Request = ctx.switchToHttp().getRequest();
    return request.accessTokenPayload as AccessTokenPayload;
  }
);
