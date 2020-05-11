'use strict';
const {get, save} = require('./user.dao');

const getUsersBusiness = async() => {
    return get();
}

const saveUserBusiness = async(user) => {
    let result = save(user);
    return result;
}

module.exports = {getUsersBusiness, saveUserBusiness};