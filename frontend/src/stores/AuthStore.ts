import {makeAutoObservable} from "mobx";
import {User} from "../types";
import {login, register} from "../services/auth.ts";

class AuthStore {
    currentUser?: User;
    accessToken?: string;
    refreshToken?: string;
    isAuthorized: boolean = false;

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
        this.isAuthorized = true;
    }


    async register(username: string, password: string, email: string, name: string, phone: string, address: string) {
        const {access, refresh} = await register(username, password, email, name, phone, address);
        this.accessToken = access;
        this.refreshToken = refresh;
        this.isAuthorized = true;
    }

    async logout() {
    }
}

export default new AuthStore();
