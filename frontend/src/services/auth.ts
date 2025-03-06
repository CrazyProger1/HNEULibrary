import { axios } from "./api.ts";
import { URLS } from "../constants";
import { Response, Tokens } from "../types";

export type LoginResponse = Response & Tokens;

export type RegisterResponse = Response & {
  username: string;
  email: string;
};

export const login = async (
  username: string,
  password: string,
): Promise<LoginResponse> => {
  const response = await axios.post(URLS.TOKENS, {
    username: username,
    password: password,
  });
  return response.data as LoginResponse;
};

export const register = async (
  username: string,
  password: string,
  email: string,
  phone: string,
  address: string,
  first_name: string,
  last_name: string,
): Promise<RegisterResponse> => {
  const response = await axios.post(URLS.USERS, {
    username: username,
    password: password,
    email: email,
    phone: phone,
    address: address,
    name: first_name,
    surname: last_name,
  });
  return {
    ...response.data,
    success: true,
  } as RegisterResponse;
};
