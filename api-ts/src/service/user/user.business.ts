import UserDao from './user.dao';
import User from './user.model';

export default class UserBusiness {

    private _dao = new UserDao();

    public getUsersBusiness = async() => {
        return this._dao.get();
    }

    public saveUserBusiness = async(user: User) => {
        const result = this._dao.save(user);
        return result;
    }
}
