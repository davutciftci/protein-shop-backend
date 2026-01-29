import { NextFunction, Request, Response } from 'express';
import { createUser, loginUser, requestPasswordReset as requestPasswordResetService, resetPassword as resetPasswordService } from '../services/user';
import { asyncHandler } from '../utils/asyncHandler';
import { AuthenticatedRequest } from '../middlewares/auth';
import prisma from '../utils/prisma';
import { NotFoundError } from '../utils/customErrors';
import jwt from 'jsonwebtoken';


interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birth_date: string;
}

export const register = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, password, birth_date } = req.body as RegisterRequest;
    const user = await createUser({
        firstName,
        lastName,
        email,
        password,
        birthDay: new Date(birth_date)
    });

    // Kayıt sonrası otomatik login için token oluştur
    const token = jwt.sign(
        { userId: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET!,
        { expiresIn: '7d' }
    );

    const { hashedPassword, ...userWithoutPassword } = user;

    return res.status(201).json({
        status: "success",
        message: 'Kullanıcı başarıyla oluşturuldu',
        data: { 
            user: userWithoutPassword,
            token 
        }
    });
});

export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const { user, token } = await loginUser(email, password);

    return res.status(200).json({
        status: 'success',
        message: 'Giriş yapıldı',
        data: { user, token },
    });
});

export const getProfile = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const userId = (req as AuthenticatedRequest).user?.userId;

    if (!userId) {
        throw new NotFoundError('Kullanıcı bulunamadı');
    }
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
            birthDay: true,
            role: true,
            createdAt: true,
            updatedAt: true,
        }
    });
    if (!user) {
        throw new NotFoundError('Kullanıcı bulunamadı');
    }

    return res.status(200).json({
        status: 'success',
        data: user,
    });

});

export const requestPasswordResetController = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    await requestPasswordResetService(email);

    return res.status(200).json({
        status: 'success',
        message: 'Eğer bu email adresi sistemde kayıtlıysa, şifre sıfırlama linki gönderilecektir.'
    });
});

export const resetPasswordController = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { token, newPassword } = req.body;

    await resetPasswordService(token, newPassword);

    return res.status(200).json({
        status: 'success',
        message: 'Şifreniz başarıyla güncellendi'
    });
});

export const updateProfile = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const userId = (req as AuthenticatedRequest).user?.userId;
    const { firstName, lastName, phoneNumber } = req.body;

    if (!userId) {
        throw new NotFoundError('Kullanıcı bulunamadı');
    }

    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
            ...(firstName && { firstName }),
            ...(lastName && { lastName }),
            ...(phoneNumber !== undefined && { phoneNumber }),
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
            birthDay: true,
            role: true,
            createdAt: true,
            updatedAt: true,
        }
    });

    return res.status(200).json({
        status: 'success',
        message: 'Profil başarıyla güncellendi',
        data: updatedUser,
    });
});

export const changePassword = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const userId = (req as AuthenticatedRequest).user?.userId;
    const { currentPassword, newPassword } = req.body;

    if (!userId) {
        throw new NotFoundError('Kullanıcı bulunamadı');
    }

    // Kullanıcıyı bul
    const user = await prisma.user.findUnique({
        where: { id: userId }
    });

    if (!user) {
        throw new NotFoundError('Kullanıcı bulunamadı');
    }

    // Mevcut şifreyi doğrula
    const bcrypt = require('bcrypt');
    const isPasswordValid = await bcrypt.compare(currentPassword, user.hashedPassword);

    if (!isPasswordValid) {
        return res.status(400).json({
            status: 'error',
            message: 'Mevcut şifre hatalı'
        });
    }

    // Yeni şifreyi hashle
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Şifreyi güncelle
    await prisma.user.update({
        where: { id: userId },
        data: { hashedPassword }
    });

    return res.status(200).json({
        status: 'success',
        message: 'Şifreniz başarıyla güncellendi'
    });
});

