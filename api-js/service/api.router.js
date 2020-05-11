'use strict';

const { customMiddleware } = require('../custom/middleware');
const {getUsers, saveUser} = require('./user/user.services');

const router = (app) => {
    
    app.get('/api/users', customMiddleware, getUsers);
    app.post('/api/users', saveUser);
}

module.exports = router;