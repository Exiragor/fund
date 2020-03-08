import {Request, Response, Router} from "express";
import jwt from 'express-jwt';
import {privateNewsRouter, newsRouter} from "./news";
import {fileRouter, privateFileRouter} from './files';
import {slidesRouter, privateSlidesRouter} from './slides';
import {contentRouter, privateContentRouter} from './content';
import {projectsRouter, privateProjectsRouter} from './projects';
import {feedbackRouter, privateFeedbackRouter} from './feedback';
import {emailRouter, privateEmailRouter} from './email';
import authRouter from './auth';
import env from "dotenv";
env.config();

const router: Router = Router();
const privateRouter: Router = Router();

// auth routes
privateRouter.use(jwt({ secret: process.env.APP_SECRET_KEY || 'test_key' }));
privateRouter.use('/files', privateFileRouter);
privateRouter.use('/news', privateNewsRouter);
privateRouter.use('/slides', privateSlidesRouter);
privateRouter.use('/content', privateContentRouter);
privateRouter.use('/projects', privateProjectsRouter);
privateRouter.use('/feedback', privateFeedbackRouter);
privateRouter.use('/email', privateEmailRouter);


// common routes
router.use('/private', privateRouter);
router.use('/auth', authRouter);
router.use('/news', newsRouter);
router.use('/files', fileRouter);
router.use('/slides', slidesRouter);
router.use('/content', contentRouter);
router.use('/projects', projectsRouter);
router.use('/feedback', feedbackRouter);
router.use('/email', emailRouter);
router.get('/', (req: Request, res: Response) => res.json({ status: 200, text: "Welcome to Api! It's working."}));


export default router;
