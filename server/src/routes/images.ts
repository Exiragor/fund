import { Router, Request, Response } from "express";
import * as imgService from '../services/images';
import { upload } from '../helpers/upload';

const imgRouter: Router = Router();

imgRouter.post('/' , upload.single('image'), async (req: Request, res: Response) => {
    let id: number|null = await imgService.saveImg(req.file.filename, req.body.name, req.file.destination);
    return res.send(`${id}`);
});

export default imgRouter;