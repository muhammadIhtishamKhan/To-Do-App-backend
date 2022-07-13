export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
}

export interface UpdateUserRequest {
  email?: string;
  password?: string;
}
