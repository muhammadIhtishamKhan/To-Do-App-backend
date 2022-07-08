export interface Request extends Express.Request {
  username: string;
  email: string;
}
