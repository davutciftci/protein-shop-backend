import { Request, Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../middlewares/auth';
import * as reviewService from '../services/review';

export const createReviewController = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const userId = req.user?.userId!;
        const { productId, orderId, orderItemId, rating, comment } = req.body;

        const review = await reviewService.createReview(
            userId,
            productId,
            orderId,
            orderItemId,
            rating,
            comment
        );

        res.status(201).json({
            status: 'success',
            message: 'Yorumunuz başarıyla gönderildi. Onaylandıktan sonra yayınlanacaktır.',
            data: review
        });
    } catch (error) {
        next(error);
    }
};

export const getProductReviewsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const productId = parseInt(req.params.productId);
        const reviews = await reviewService.getProductReviews(productId);

        res.status(200).json({
            status: 'success',
            results: reviews.length,
            data: reviews
        });
    } catch (error) {
        next(error);
    }
};

export const getAllReviewsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const limit = parseInt(req.query.limit as string) || 10;
        const reviews = await reviewService.getAllApprovedReviews(limit);

        res.status(200).json({
            status: 'success',
            results: reviews.length,
            data: reviews
        });
    } catch (error) {
        next(error);
    }
};

export const getMyReviewableOrdersController = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const userId = req.user?.userId!;
        const orders = await reviewService.getUserReviewableOrders(userId);

        res.status(200).json({
            status: 'success',
            results: orders.length,
            data: orders
        });
    } catch (error) {
        next(error);
    }
};
