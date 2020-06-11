import { Router, Request, Response } from "express";
import {createPayment, getPayment} from '../services/payment';

export const paymentRouter: Router = Router();

paymentRouter.get('/create', async (req: Request, res: Response) => {
  res.json(await createPayment(req.query.amount));
});

paymentRouter.get('/info', async (req: Request, res: Response) => {
  res.json(await getPayment(req.query.id));
});

export default paymentRouter;
