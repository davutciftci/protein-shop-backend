import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { ValidationError } from '../utils/customErrors';

export const validate = (schema: z.ZodTypeAny) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error: any) {
            const errors = error.issues?.map((err: any) => ({
                field: err.path.join('.'),
                message: err.message,
            }));
            next(new ValidationError('Validasyon hatası', errors));
        }
    };
};