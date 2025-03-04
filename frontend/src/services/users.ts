import {axios} from "./api.ts";
import {URLS} from "../constants";
import {UserResponse} from "../types/auth.ts";

export const getUser = async (
    jwt: string,
): Promise<UserResponse> => {
    const response = await axios.get(URLS.USER_ME, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    });
    return response.data as UserResponse;
};