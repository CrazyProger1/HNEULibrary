import { axios } from "./api.ts";
import { URLS } from "../constants";
import { LoginFields, RegistrationFields, Response, Tokens } from "../types";

export type LoginResponse = Response & Tokens;

export type RegistrationResponse = Response & {
  username: string;
  email: string;
};

export const login = async (data: LoginFields): Promise<LoginResponse> => {
  const response = await axios.post(URLS.TOKENS, data);
  return response.data as LoginResponse;
};

export const register = async (
  data: RegistrationFields,
): Promise<RegistrationResponse> => {
  const response = await axios.post(URLS.USERS, data);
  return {
    ...response.data,
    success: true,
  } as RegistrationResponse;
};
