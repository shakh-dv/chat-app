import {Request as ExpressRequest} from 'express';
import {AccessTokenPayload} from './access-token-payload';

export type Request = ExpressRequest & {
  accessTokenPayload?: AccessTokenPayload;
};
