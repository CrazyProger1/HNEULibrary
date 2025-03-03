import { LoginResponse } from "../types";
import { axios } from "./api.ts";
import { URLS } from "../constants";

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
