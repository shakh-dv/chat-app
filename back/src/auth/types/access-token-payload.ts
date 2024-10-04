export interface TokenPayload {
  email: string;
  iat?: Date;
  exp?: Date;
  sub?: string;
}
