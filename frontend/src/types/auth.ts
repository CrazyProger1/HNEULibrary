export type LoginResponse = {
  access: string;
  refresh: string;
};

export type RegisterResponse = {
  username: string;
  email: string;
}

export type UserResponse = {
  id: number,
  username: string,
  first_name: string,
  last_name: string,
  email: string;
}
