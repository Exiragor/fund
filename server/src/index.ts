import env from "dotenv";
import express from 'express';
import "reflect-metadata";
import {createConnection} from "typeorm";
import bodyparser from 'body-parser';
import { allowCrossDomain } from './middlewares';
import routes from './routes';

const startServer = async () => {
    env.config();
    let app = express();
    //init db connection
    if (process.env.APP_MODE == 'development') {
        const dbConn = await createConnection();
        if (dbConn) {
            await dbConn.runMigrations();
        }
    }
    // middlewares
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(bodyparser.json());
    app.use(allowCrossDomain);
    app.use(routes);


    const port = process.env.APP_PORT || '8000';
    app.listen(port, () => console.log(`Application is working on port: ${port}`));
};

startServer().catch(e => console.error(e.message));