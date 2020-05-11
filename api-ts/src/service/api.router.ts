import { Application } from "express";
import UserService from './user/user.services';

export default class Router {

    private _user = new UserService();

    constructor(private app: Application) {
        this.Init();
    }

    public Init = () => {
        this.app.get('/api/users',  this._user.getUsers);
        this.app.post('/api/users', this._user.saveUser);
    }
}