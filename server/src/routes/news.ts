import { Router, Request, Response } from "express";
import * as newsService from '../services/news';

export const newsRouter: Router = Router();
export const privateNewsRouter: Router = Router();

newsRouter.get("/", async (req: Request, res: Response): Promise<Response> => 
    res.json(await newsService.getAll(req.query.page || 1, req.query.count || 20)))



export default newsRouter;