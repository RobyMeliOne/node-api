#!/usr/bin/env node
'use strict';

const customMiddleware = (req, res, next) => {
    console.log('Validando token');
    next();
}

const coso = (parametro) => {
    console.log(parametro);
    coso2(1);
}

const coso2 = (param) => {
    console.log(param)
}

module.exports = {customMiddleware, coso};