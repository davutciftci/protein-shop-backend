export interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
    isActive: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface ProductVariant {
    id: number;
    name: string;
    sku: string;
    price: string;
    stockCount: number;
    isActive: boolean;
    attributes?: Record<string, string>;
    productId: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ProductPhoto {
    id: number;
    url: string;
    altText?: string;
    isPrimary: boolean;
    displayOrder: number;
    productId: number;
}

export interface ProductComment {
    id: number;
    rating: number;
    comment: string;
    isApproved: boolean;
    userId: number;
    productId: number;
    createdAt: string;
    updatedAt?: string;
    user?: {
        id: number;
        firstName: string;
        lastName: string;
    };
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    description?: string;
    price: string;
    stockCount: number;
    isActive: boolean;
    categoryId: number;
    category?: Category;
    variants?: ProductVariant[];
    photos?: ProductPhoto[];
    comments?: ProductComment[];
    createdAt?: string;
    updatedAt?: string;

    // Frontend-specific fields
    image?: string; // Primary image URL
    images?: string[]; // All image URLs
    aromas?: Array<{ id: number; name: string; color: string }>; // For flavor options
    sizes?: Array<{ id: number; weight: string; servings?: number; price: number; discount?: number }>; // For size/variant options
    features?: string[]; // Product features list
    nutritionInfo?: string[]; // Nutrition information list
    usage?: string[]; // Usage instructions list
    pricePerServing?: string; // Price per serving
    expirationDate?: string; // Expiration date
    reviews?: number; // Number of reviews
    rating?: number; // Average rating
    tags?: string[]; // Product tags
}

export interface ProductSearchParams {
    search?: string;
    categoryId?: number;
    minPrice?: number;
    maxPrice?: number;
    activeOnly?: boolean;
    sortBy?: 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc' | 'newest' | 'oldest';
}

export interface ProductPaginationParams extends ProductSearchParams {
    page?: number;
    limit?: number;
}

export interface CreateCommentRequest {
    rating: number;
    comment: string;
    productId: number;
}
