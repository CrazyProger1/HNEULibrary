import { makeAutoObservable } from "mobx";
import { LoginFields, RegistrationFields, User } from "../types";
import { login, register } from "../services";
import { getUser } from "../services";

class AuthStore {
  currentUser?: User;
  isAuthenticated: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getCurrentUser(): Promise<User | undefined> {
    if (localStorage.getItem("accessToken")) {
      this.currentUser = await getUser();
      return this.currentUser;
    }
  }

  async login(data: LoginFields) {
    const { access } = await login(data);
    this.isAuthenticated = true;
    if (access) {
      localStorage.setItem("accessToken", access);
    } else {
      await this.logout();
    }
  }

  async register(data: RegistrationFields) {
    await register(data);
  }

  async logout() {
    localStorage.removeItem("accessToken");
    this.isAuthenticated = false;
  }
}

export default new AuthStore();
