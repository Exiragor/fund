import {Request, Response, Router} from "express";
import jwt from 'express-jwt';
import {privateNewsRouter, newsRouter} from "./news";
import {imgRouter, privateImgRouter} from './images';
import authRouter from './auth';
import env from "dotenv";
env.config();

const router: Router = Router();
const privateRouter: Router = Router();

// auth routes
privateRouter.use(jwt({ secret: process.env.APP_SECRET_KEY || 'test_key' }));
privateRouter.use('/images', privateImgRouter);
privateRouter.use('/news', privateNewsRouter);


// common routes
router.use('/private', privateRouter);
router.use('/auth', authRouter);
router.use('/news', newsRouter);
router.use('/images', imgRouter);
router.get('/', (req: Request, res: Response) => res.json({ status: 200, text: "Welcome to Api! It's working."}));


export default router;