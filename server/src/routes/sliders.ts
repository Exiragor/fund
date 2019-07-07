import { Router, Request, Response } from "express";

const slidersRouter: Router = Router();

slidersRouter.get("/", (req: Request, res: Response) => res.json({ data: []}));

export default slidersRouter;