import { Router, Request, Response } from "express";
import * as imgService from '../services/files';
import { upload } from '../helpers/upload';

export const fileRouter: Router = Router();
export const privateFileRouter: Router = Router();

privateFileRouter.post('/' , upload.single('file'), async (req: Request, res: Response) => {
    const id: number|null = await imgService.saveFile(req.file.filename, req.file.destination, '' + req.file.mimetype.split('/').pop());
    return res.send(`${id}`);
});

fileRouter.get('/:id', async (req: Request, res: Response) => {
    const filePath: string = await imgService.getFile(req.params.id);
    return res.sendFile(filePath);
});

fileRouter.get('/:id/:width/:height', async (req: Request, res: Response) => {
    let {width, height} = req.params;
    width = parseInt(width);
    height = parseInt(height);
    if (!width) return res.send("Unsupported width format");
    if (!height) return res.send("Unsupported height format");
    const filePath: string = await imgService.getImgFile(req.params.id, {width, height});
    return res.sendFile(filePath);
});

export default fileRouter;