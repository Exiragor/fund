import { Router, Request, Response } from "express";
import { News } from '../models/News';
import {getRepository} from 'typeorm';

const newsRouter: Router = Router();

newsRouter.get("/", async (req: Request, res: Response) => {
    return res.json(await getRepository(News).find());
});

export default newsRouter;