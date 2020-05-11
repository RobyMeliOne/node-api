import { Request, Response } from 'express';
import UserBusiness from './user.business';
import User from './user.model';

export default class UserService {

    private _business = new UserBusiness();

    public getUsers = async(req: Request, res: Response) => {
        try {
            const users = await this._business.getUsersBusiness();
            res.statusCode = 200;
            res.send(users);
        }catch (err) {
            res.statusCode = 500;
            res.send({error:err});
        }
    }

    public saveUser = async(req: Request, res: Response) => {
        try {

            const user = new User();
            user.nombre = req.body.nombre;
            user.apellido = req.body.apellido;

            const result = await this._business.saveUserBusiness(user);
            res.statusCode = 200;
            res.send(result)
        }catch (err) {
            res.statusCode = 500;
            res.send({error:err});
        }
    }
}