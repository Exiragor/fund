import { Router, Request, Response } from "express";
import {createPayment} from '../services/payment';

export const paymentRouter: Router = Router();

paymentRouter.get('/create', async (req: Request, res: Response) => {
  res.json(await createPayment(req.query.amount));
});

export default paymentRouter;
