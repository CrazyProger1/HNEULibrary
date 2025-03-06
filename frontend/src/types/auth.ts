export type Tokens = {
  access: string;
  refresh: string;
};
export type LoginFields = {
  username: string;
  password: string;
};
export type RegistrationFields = {
  username?: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  address?: string;
};
