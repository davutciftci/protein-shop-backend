import type { ProductVariant, Product } from './product';

export interface CartItem {
    id: number;
    quantity: number;
    variantId: number;
    variant: ProductVariant & {
        product: Pick<Product, 'id' | 'name' | 'slug'> & {
            photos?: Array<{ url: string; isPrimary: boolean }>;
        };
    };
    createdAt?: string;
    updatedAt?: string;
}

export interface Cart {
    id: number;
    userId: number;
    items: CartItem[];
    createdAt?: string;
    updatedAt?: string;
}

export interface CartSummary {
    itemCount: number;
    totalPrice: string;
}

export interface CartResponse {
    cart: Cart;
    summary: CartSummary;
}

export interface AddToCartRequest {
    variantId: number;
    quantity: number;
}

export interface UpdateCartItemRequest {
    quantity: number;
}
