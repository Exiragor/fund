import {Request, Response, Router} from "express";
import slidersRouter from "./sliders";

const router: Router = Router();

router.use('/sliders', slidersRouter);
router.get('/', (req: Request, res: Response) => res.json({ status: 200, text: "Hello world!"}));

export default router;