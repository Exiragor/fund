import { Router, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import env from "dotenv";
env.config();

const authRouter: Router = Router();

authRouter.post('/login' ,(req: Request, res: Response) => {
    if (req.body.login === 'admin' && req.body.password === process.env.APP_ADMIN_PASS) {
        const token = jwt.sign({ admin: true }, process.env.APP_SECRET_KEY || 'test_key');
        return res.json({
                token,
                message: 'Login succeeded!'
        });
    } else {
        return res.json({
            error: {
                message: 'Login failed!'
            }
        })
    }
});

export default authRouter;