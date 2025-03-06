import { axios } from "./api.ts";
import { URLS } from "../constants";
import { SuccessfulResponse, User } from "../types";

type UserResponse = User & SuccessfulResponse;

export const getUser = async (): Promise<UserResponse> => {
  const response = await axios.get(URLS.USER_ME);
  return {
    ...response.data,
    success: true,
  };
};
