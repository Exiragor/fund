import { Request, Response, NextFunction } from 'express'

export const allowCrossDomain = (req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('');

    next();
};