import {Request as ExpressRequest} from 'express';
import {TokenPayload} from './access-token-payload';

export type Request = ExpressRequest & {
  accessTokenPayload?: TokenPayload;
};
