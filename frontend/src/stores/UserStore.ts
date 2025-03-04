import {makeAutoObservable} from "mobx";
import {User} from "../types";
import {getUser} from "../services/users.ts";

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    currentUser: User = {
        id: 0,
        username: "",
        first_name: "",
        last_name: "",
        email: ""
    };

    async getUser(jwt: string) {
        const {id, username, first_name, last_name, email} = await getUser(jwt);
        this.currentUser.id = id;
        this.currentUser.username = username;
        this.currentUser.first_name = first_name;
        this.currentUser.last_name = last_name;
        this.currentUser.email = email;
    }
}

export default new UserStore();
