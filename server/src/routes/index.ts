import {Request, Response, Router} from "express";
import newsRouter from "./news";
import imagesRouter from './images';

const router: Router = Router();

router.use('/news', newsRouter);
router.use('/images', imagesRouter);
router.get('/', (req: Request, res: Response) => res.json({ status: 200, text: "Welcome to Api! It's working."}));

export default router;