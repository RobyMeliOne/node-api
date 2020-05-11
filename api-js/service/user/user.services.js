'use strict';
const {getUsersBusiness, saveUserBusiness} = require('./user.business');

const getUsers = async(req, res) => {
    try {
        let users = await getUsersBusiness();
        res.send(users);
    }catch (err) {
        res.statusCode(500);
        res.send({error:err});
    }
}

const saveUser = async(req, res) => {
    try {
        let result = await saveUserBusiness(req.body);
        res.send(result)
    }catch (err) {
        res.statusCode(500);
        res.send({error:err});
    }
}

module.exports = {getUsers, saveUser};