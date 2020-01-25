import { Router, Request, Response } from "express";
import * as feedbackService from '../services/feedback';

export const feedbackRouter: Router = Router();
export const privateFeedbackRouter: Router = Router();

privateFeedbackRouter.get("/", async (req: Request, res: Response): Promise<Response> =>
    res.json(await feedbackService.getAll(req.query.page || 1, req.query.count || 20)));

privateFeedbackRouter.get('/:alias',async (req: Request, res: Response): Promise<Response> =>
    res.json(await feedbackService.getOne(req.params.alias)));

feedbackRouter.post('/', async (req: Request, res: Response) => {
    const {name, phone, email, text} = req.body;
    const id = await feedbackService.add({id: null, name, phone, email, text});
    return res.send(`${id}`);
});

privateFeedbackRouter.put('/:id', async (req: Request, res: Response) => {
    res.send(await feedbackService.update(req.params.id, {...req.body}))
});

privateFeedbackRouter.delete('/:id', async (req: Request, res: Response) => {
    res.send(await feedbackService.del(req.params.id))
});

export default feedbackRouter;
