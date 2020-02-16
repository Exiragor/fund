import { Router, Request, Response } from "express";
import * as fileService from '../services/files';
import { upload } from '../helpers/upload';
import {File} from "../models/File";

export const fileRouter: Router = Router();
export const privateFileRouter: Router = Router();

privateFileRouter.post('/' , upload.single('file'), async (req: Request, res: Response) => {
    const file: File|null = await fileService.saveFile(req.file.originalname, req.file.destination, '' + req.file.mimetype.split('/').pop());
    return res.json(file);
});

fileRouter.get('/:id', async (req: Request, res: Response) => {
    const fileItem = await fileService.getFile(req.params.id);
    return res.sendFile(fileItem.path);
});

fileRouter.get('/:id/:filename', async (req: Request, res: Response) => {
    const fileItem = await fileService.getFile(req.params.id);
    return res.sendFile(fileItem.path);
});


fileRouter.get('/:id/:width/:height', async (req: Request, res: Response) => {
    let {width, height} = req.params;
    width = parseInt(width);
    height = parseInt(height);
    if (!width) return res.send("Unsupported width format");
    if (!height) return res.send("Unsupported height format");
    const filePath: string = await fileService.getImgFile(req.params.id, {width, height});
    return res.sendFile(filePath);
});

export default fileRouter;