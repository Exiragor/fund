import { Router, Request, Response } from "express";
import * as slidesService from '../services/slides';
import {Slide} from "../models/Slide";

export const slidesRouter: Router = Router();
export const privateSlidesRouter: Router = Router();

slidesRouter.get("/:slider", async (req: Request, res: Response): Promise<Response> =>
    res.json(await slidesService.getSlider(req.params.slider)));

privateSlidesRouter.post('/', async (req: Request, res: Response) => {
    let params: any = {};
    ['title', 'text', 'link', 'photo', 'sliderName'].forEach(item => {
        if (req.body[item]) {
            params[item] = req.body[item];
        }
    })
    const id = await slidesService.addSlide(params);
    return res.send(`${id}`);
});

privateSlidesRouter.put('/:id', async (req: Request, res: Response) => {
    res.send(await slidesService.update(req.params.id, {...req.body}))
});

privateSlidesRouter.delete('/:id', async (req: Request, res: Response) => {
    res.send(await slidesService.del(req.params.id))
});

export default slidesRouter;
