import { Router, Request, Response } from "express";
import * as imgService from '../services/images';
import { upload } from '../helpers/upload';

export const imgRouter: Router = Router();
export const privateImgRouter: Router = Router();

privateImgRouter.post('/' , upload.single('image'), async (req: Request, res: Response) => {
    const id: number|null = await imgService.saveImg(req.file.filename, req.file.destination, '' + req.file.mimetype.split('/').pop());
    return res.send(`${id}`);
});

imgRouter.get('/:id', async (req: Request, res: Response) => {
    const filePath: string = await imgService.getImgFile(req.params.id, undefined);
    console.log(filePath);
    return res.sendFile(filePath);
});

imgRouter.get('/:id/:width/:height', async (req: Request, res: Response) => {
    let {width, height} = req.params;
    width = parseInt(width);
    height = parseInt(height);
    if (!width) return res.send("Unsupported width format");
    if (!height) return res.send("Unsupported height format");
    const filePath: string = await imgService.getImgFile(req.params.id, {width, height});
    return res.sendFile(filePath);
});

export default imgRouter;