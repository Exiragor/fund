import { Router, Request, Response } from "express";
import * as newsService from '../services/news';

export const newsRouter: Router = Router();
export const privateNewsRouter: Router = Router();

newsRouter.get("/", async (req: Request, res: Response): Promise<Response> =>
    res.json(await newsService.getAll(req.query.page || 1, req.query.count || 20)));

newsRouter.get('/:id',async (req: Request, res: Response): Promise<Response> =>
    res.json(await newsService.getOne(req.params.id)));

privateNewsRouter.post('/', async (req: Request, res: Response) => {
    const {title, date, description, text, photo} = req.body;
    let id = await newsService.addNews(title, date, description, text, photo);
    return res.send(`${id}`);
});

privateNewsRouter.put('/:id', async (req: Request, res: Response) => {
    res.send(await newsService.updateNews(req.params.id, {...req.body}))
});

privateNewsRouter.delete('/:id', async (req: Request, res: Response) => {
    res.send(await newsService.deleteNews(req.params.id))
});

export default newsRouter;
