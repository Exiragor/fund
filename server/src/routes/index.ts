import {Request, Response, Router} from "express";
import newsRouter from "./news";

const router: Router = Router();

router.use('/news', newsRouter);
router.get('/', (req: Request, res: Response) => res.json({ status: 200, text: "Hello world!"}));

export default router;