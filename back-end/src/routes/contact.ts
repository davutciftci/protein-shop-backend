import { Router } from 'express';
import { sendContactMessage } from '../controllers/contact';
import { validate } from '../middlewares/validate';
import { contactSchema } from '../validators/contact';

const router = Router();

router.post('/submit', validate(contactSchema), sendContactMessage);

export default router;
