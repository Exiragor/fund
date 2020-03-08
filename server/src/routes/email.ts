import { Router, Request, Response } from "express";
import * as emailService from '../services/email';

export const emailRouter: Router = Router();
export const privateEmailRouter: Router = Router();

privateEmailRouter.get("/", async (req: Request, res: Response): Promise<Response> =>
    res.json(await emailService.getAll(req.query.page || 1, req.query.count || 20)));

privateEmailRouter.get('/:alias',async (req: Request, res: Response): Promise<Response> =>
    res.json(await emailService.getOne(req.params.alias)));

emailRouter.post('/', async (req: Request, res: Response) => {
    const {value} = req.body;
    const id = await emailService.add({id: null, value, isActive: true});
    return res.send(`${id}`);
});

privateEmailRouter.put('/:id', async (req: Request, res: Response) => {
    res.send(await emailService.update(req.params.id, {...req.body}))
});

privateEmailRouter.delete('/:id', async (req: Request, res: Response) => {
    res.send(await emailService.del(req.params.id))
});

export default emailRouter;
