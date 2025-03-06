import { makeAutoObservable } from "mobx";
import { User } from "../types";
import { login, register } from "../services/auth.ts";

class AuthStore {
  currentUser?: User;
  accessToken?: string;
  refreshToken?: string;

  constructor() {
    makeAutoObservable(this);
  }

  async login(username: string, password: string) {
    const { access, refresh } = await login(username, password);
    this.accessToken = access;
    this.refreshToken = refresh;
    if (this.accessToken) {
      localStorage.setItem("accessToken", this.accessToken);
    } else {
      localStorage.removeItem("accessToken");
    }
  }

  async register(
    username: string,
    password: string,
    email: string,
    first_name: string,
    last_name: string,
    phone: string,
    address: string,
  ) {
    await register(
      username,
      password,
      email,
      first_name,
      last_name,
      phone,
      address,
    );
  }

  async logout() {
    localStorage.removeItem("accessToken");
  }
}

export default new AuthStore();
