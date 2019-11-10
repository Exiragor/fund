import { Router, Request, Response } from "express";
import * as newsService from '../services/news';

export const newsRouter: Router = Router();
export const privateNewsRouter: Router = Router();

newsRouter.get("/", async (req: Request, res: Response): Promise<Response> => 
    res.json(await newsService.getAll(req.query.page || 1, req.query.count || 20)));

privateNewsRouter.post('/', async (req: Request, res: Response) => {
    const {title, date, description, text, photo} = req.body;
    let id = await newsService.addNews(title, date, description, text, photo);
    return res.send(`${id}`);
});

export default newsRouter;
