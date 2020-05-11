import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './service/api.router';

dotenv.config();
const app:express.Application = express();
const port = process.env.PORT;

const init = () => {

    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    const router = new Router(app);

    app.listen(port, () => {
        console.log(`Listening on port: ${port}`)
    });
}

init();