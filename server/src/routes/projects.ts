import { Router, Request, Response } from "express";
import * as projectsService from '../services/projects';

export const projectsRouter: Router = Router();
export const privateProjectsRouter: Router = Router();

projectsRouter.get("/category/:category", async (req: Request, res: Response): Promise<Response> =>
    res.json(await projectsService.getAll(req.params.category)));

projectsRouter.get('/:id',async (req: Request, res: Response): Promise<Response> =>
    res.json(await projectsService.getOne(req.params.id)));

privateProjectsRouter.post('/', async (req: Request, res: Response) => {
    const {name, category, description, text, link, photo, order} = req.body;
    const id = await projectsService.add(
        {id: null, name, category, description, text, link, photo, order, isActive: true}
    );
    return res.send(`${id}`);
});

privateProjectsRouter.put('/:id', async (req: Request, res: Response) => {
    res.send(await projectsService.update(req.params.id, {...req.body}))
});

privateProjectsRouter.delete('/:id', async (req: Request, res: Response) => {
    res.send(await projectsService.del(req.params.id))
});

export default projectsRouter;
