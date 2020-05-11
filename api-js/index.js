#!/usr/bin/env node
'use strict';

require('dotenv').config();
let express = require('express');
let app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./service/api.router');
const port = process.env.PORT;

const init = () => {

    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    router(app);

    app.listen(port, () => {
        console.log(`Listening on port: ${port}`)
    });
}

init();

