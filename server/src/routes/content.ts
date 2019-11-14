import { Router, Request, Response } from "express";
import * as contentService from '../services/content';

export const contentRouter: Router = Router();
export const privateContentRouter: Router = Router();

contentRouter.get("/", async (req: Request, res: Response): Promise<Response> =>
    res.json(await contentService.getAll(req.query.page || 1, req.query.count || 20)));

contentRouter.get('/:alias',async (req: Request, res: Response): Promise<Response> =>
    res.json(await contentService.getOne(req.params.alias)));

privateContentRouter.post('/', async (req: Request, res: Response) => {
    const {name, alias, value} = req.body;
    const id = await contentService.add({id: null, name, alias, value, isActive: true});
    return res.send(`${id}`);
});

privateContentRouter.put('/:id', async (req: Request, res: Response) => {
    res.send(await contentService.update(req.params.id, {...req.body}))
});

privateContentRouter.delete('/:id', async (req: Request, res: Response) => {
    res.send(await contentService.del(req.params.id))
});

export default contentRouter;
