export interface UserResponse {
  _id: string;
  username: string;
  email: string;
}

export interface UserExists {
  exists: boolean;
}
