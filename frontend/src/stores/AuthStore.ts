import {makeAutoObservable} from "mobx";
import {User} from "../types";
import {login, register} from "../services/auth.ts";

class AuthStore {
    currentUser?: User;
    accessToken?: string;
    refreshToken?: string;

    constructor() {
        makeAutoObservable(this);
    }

    load() {
        // loading tokens from local storage / cookies / smth
    }

    save() {
        // saving tokens into local storage / cookies smth
    }

    async login(username: string, password: string) {
        const {access, refresh} = await login(username, password);
        this.accessToken = access;
        this.refreshToken = refresh;
        if (this.accessToken) {
            localStorage.setItem("accessToken", this.accessToken);
        } else {
            localStorage.removeItem("accessToken");
        }
    }

    // async register(username: string, password: string, email: string, name: string, phone: string, address: string) {
    //     const {access, refresh} = await register(username, password, email, name, phone, address);
    // }

    async logout() {
        localStorage.removeItem("accessToken");
    }
}

export default new AuthStore();
