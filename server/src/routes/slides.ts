import { Router, Request, Response } from "express";
import * as slidesService from '../services/slides';
import {Slide} from "../models/Slide";

export const slidesRouter: Router = Router();
export const privateSlidesRouter: Router = Router();

slidesRouter.get("/:slider", async (req: Request, res: Response): Promise<Response> =>
    res.json(await slidesService.getSlider(req.params.slider, req.query.page || 1, req.query.count || 20)));

slidesRouter.get("/:slider/:prefix", async (req: Request, res: Response): Promise<Response> =>
    res.json(await slidesService.getSliderByPrefix(req.params.slider, req.params.prefix)));

slidesRouter.get('/slide/:id',async (req: Request, res: Response): Promise<Response> =>
    res.json(await slidesService.getOne(req.params.id)));

privateSlidesRouter.post('/', async (req: Request, res: Response) => {
    const allowedParams: string[] = ['title', 'text', 'link', 'photo', 'order', 'sliderName', 'url', 'prefix'];
    const params: any = allowedParams.reduce((obj: object, name: string) => (
        req.body[name] ? {...obj, [name]: req.body[name]} : obj
    ), {});

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
