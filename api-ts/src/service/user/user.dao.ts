import User from "./user.model";

export default class UserDao {

    public users: User[] = [];

    public get = (): User[] => {
        // return new Promise((resolve,reject) => {
        //     sql.connection().then((success)=>{
        //         resolve(success)
        //     }, (error)=> {
        //         reject(error)
        //     })
        // })
        return this.users;
    }

    public save = (user: User): User[] => {
        this.users.push(user);
        return this.users;
    }
}
