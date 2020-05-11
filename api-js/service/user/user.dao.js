let users = [];

const get = () => {
    // return new Promise((resolve,reject) => {
    //     sql.connection().then((success)=>{
    //         resolve(success)
    //     }, (error)=> {
    //         reject(error)
    //     })
    // })
    return users;
}

const save = (user) => {
    users.push(user);
    return users;
}

module.exports = {get, save};