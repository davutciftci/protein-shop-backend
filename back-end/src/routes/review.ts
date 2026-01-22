import { Router } from 'express';
import { authenticate } from '../middlewares/auth';
import { validate } from '../middlewares/validate';
import * as reviewController from '../controllers/review';
import { createReviewSchema } from '../validators/review';

const router = Router();

// Yorum oluştur (AUTH required)
router.post('/', authenticate, validate(createReviewSchema), reviewController.createReviewController);

// Ürün yorumlarını getir (PUBLIC)
router.get('/product/:productId', reviewController.getProductReviewsController);

// Tüm yorumları getir (PUBLIC - Footer için)
router.get('/all', reviewController.getAllReviewsController);

// Kullanıcının yorum yapabileceği siparişleri getir (AUTH required)
router.get('/my/reviewable', authenticate, reviewController.getMyReviewableOrdersController);

export default router;
