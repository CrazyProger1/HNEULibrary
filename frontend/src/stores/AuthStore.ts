import { makeAutoObservable } from "mobx";
import { LoginFields, RegistrationFields, User } from "../types";
import { login, register } from "../services";

class AuthStore {
  currentUser?: User;
  accessToken?: string;
  refreshToken?: string;

  constructor() {
    makeAutoObservable(this);
  }

  async login(data: LoginFields) {
    const { access, refresh } = await login(data);
    this.accessToken = access;
    this.refreshToken = refresh;
    if (this.accessToken) {
      localStorage.setItem("accessToken", this.accessToken);
    } else {
      localStorage.removeItem("accessToken");
    }
  }

  async register(data: RegistrationFields) {
    await register(data);
  }

  async logout() {
    localStorage.removeItem("accessToken");
  }
}

export default new AuthStore();
