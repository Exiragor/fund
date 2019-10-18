import env from "dotenv";
import express from 'express';
import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import bodyParser from 'body-parser';
import { allowCrossDomain } from './middlewares';
import routes from './routes';

const startServer = async () => {
    env.config();
    let app = express();
    //init db connection
    if (process.env.APP_MODE == 'development') {
        const dbConn: Connection = await createConnection();
        if (dbConn) {
            await dbConn.runMigrations();
        }
    }
    // middlewares
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(allowCrossDomain);
    app.use(routes);

    const port = process.env.APP_PORT || '8080';
    app.listen(port, () => console.log(`Application is working on port: http://localhost:${port}`));
};

startServer().catch(e => console.error(e.message));