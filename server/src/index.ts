import env from "dotenv";
import express from 'express';
import "reflect-metadata";
import bodyparser from 'body-parser';
import { allowCrossDomain } from './middlewares';
import routes from './routes';

env.config();
let app = express();
// middlewares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(allowCrossDomain);

app.use(routes);

const port = process.env.APP_PORT || '8000';
app.listen(port, () => console.log(`Application is working on port: ${port}`));