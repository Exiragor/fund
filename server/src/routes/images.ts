import { Router, Request, Response } from "express";
import * as imgService from '../services/images';

const imgRouter: Router = Router();

imgRouter.post('/' ,(req: Request, res: Response) => {
    console.log(req);
    return res.send("ok");
});

export default imgRouter;