import { Prisma } from '../../generated/prisma';
import { AppError, ValidationError } from '../utils/customErrors';
import { Request, Response, NextFunction } from 'express';


export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // ValidationError için özel handling - errors dizisi ile
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
            errors: err.errors
        });
    }

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        });
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            const field = (err.meta?.target as string[])?.[0] || 'alan';
            return res.status(409).json({
                status: 'error',
                message: `Bu ${field} zaten kullanılıyor`
            })
        }

        if (err.code == 'P2025') {
            return res.status(404).json({
                status: 'error',
                message: 'Kayıt bulunamadı'
            });
        }
    }

    console.log('ERROR', err);
    return res.status(500).json({
        status: 'error',
        message: 'Bir şeyler yanlış gitti'
    });
};