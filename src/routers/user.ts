import { Router } from "express";
import { getProfile, login, register } from "../controllers/user";
import { authenticate } from "../middlewares/auth";
import { loginSchema, registerSchema } from "../validators/user";
import { validate } from "../middlewares/validate";

const router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
//korumalı route
router.get('/profile', authenticate, getProfile);


export default router;