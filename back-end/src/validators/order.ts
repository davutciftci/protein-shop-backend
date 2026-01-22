import { z } from 'zod';
import { OrderStatus } from '../../generated/prisma';

export const createOrderSchema = z.object({
    shippingAddressId: z
        .number({ message: 'Adres ID gerekli' })
        .int({ message: 'Adres ID tam sayı olmalı' })
        .positive({ message: 'Adres ID pozitif olmalı' }),

    paymentMethod: z.string().optional(),
});


export const updateOrderStatusSchema = z.object({
    status: z.nativeEnum(OrderStatus),

    trackingNumber: z
        .string()
        .optional(),

    cancelReason: z
        .string()
        .max(500, 'İptal nedeni en fazla 500 karakter olmalı')
        .optional(),
});