import {LoginResponse, RegisterResponse} from "../types/auth.ts";
import {axios} from "./api.ts";
import {URLS} from "../constants";

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
    phone: string,
    address: string,
    name: string,
    surname?: string,
): Promise<RegisterResponse> => {
    const response = await axios.post(URLS.TOKENS, {
        username: username,
        password: password,
        phone: phone,
        address: address,
        name: name,
        surname: surname,
    })
    return response.data as RegisterResponse;
}
