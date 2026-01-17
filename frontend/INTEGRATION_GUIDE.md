# Frontend-Backend Entegrasyon Rehberi

Bu dokümanda frontend uygulamasını backend API'ye bağlamak için yapılan değişiklikler açıklanmaktadır.

---

## Yapılan Değişiklikler Özeti

| Klasör | Dosya | Açıklama |
|--------|-------|----------|
| `src/api/` | `client.ts` | Axios instance, JWT interceptors |
| `src/api/` | `endpoints.ts` | Tüm API endpoint path'leri |
| `src/types/` | `*.ts` | TypeScript tip tanımları |
| `src/services/` | `*.ts` | API servis fonksiyonları |
| `src/context/` | `AuthContext.tsx` | Yeni - Authentication yönetimi |
| `src/context/` | `CartContext.tsx` | Güncellendi - Backend entegrasyonu |
| `src/` | `main.tsx` | Güncellendi - AuthProvider eklendi |

---

## Kullanım Örnekleri

### Authentication

```tsx
import { useAuth } from '../context/AuthContext';

function LoginPage() {
    const { login, isAuthenticated, user } = useAuth();
    
    const handleLogin = async () => {
        await login({ email: 'test@test.com', password: '123456' });
    };
    
    if (isAuthenticated) {
        return <div>Hoşgeldin, {user?.firstName}!</div>;
    }
}
```

### Ürün Listesi

```tsx
import { productService } from '../services';
import { useState, useEffect } from 'react';
import type { Product } from '../types';

function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        productService.getProducts().then(setProducts);
    }, []);
}
```

### Sepet İşlemleri

```tsx
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
    const { addToCart } = useCart();
    
    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            description: product.description,
            price: parseFloat(product.price),
            image: product.photos?.[0]?.url || '',
            variantId: product.variants?.[0]?.id,
        });
    };
}
```

---

## API Base URL

API istekleri `http://localhost:3000/api` adresine yapılır.

Backend'in çalışıyor olduğundan emin olun:
```bash
cd back-end/protein-shop-backend/protein-shop-backend
npm run dev
```

---

## Tip Yapısı

Tüm tipler `src/types/index.ts` üzerinden import edilebilir:

```tsx
import type { User, Product, Order, Cart } from '../types';
```

---

## Servis Yapısı

Tüm servisler `src/services/index.ts` üzerinden import edilebilir:

```tsx
import { authService, productService, cartService } from '../services';
```

| Servis | Açıklama |
|--------|----------|
| `authService` | Login, register, logout, getCurrentUser |
| `productService` | Ürün listeleme, arama, sayfalı sonuçlar |
| `categoryService` | Kategori listeleme |
| `cartService` | Sepet CRUD işlemleri |
| `orderService` | Sipariş oluşturma, listeleme, ödeme |
| `addressService` | Adres CRUD işlemleri |
| `commentService` | Yorum ekleme, listeleme |

---

## Dikkat Edilmesi Gerekenler

1. **Backend Bağlantısı**: Frontend çalışmadan önce backend'in `localhost:3000` üzerinde çalışıyor olması gerekir.

2. **Misafir Kullanıcılar**: Giriş yapmamış kullanıcılar için sepet localStorage'da saklanır.

3. **Token Yönetimi**: JWT token otomatik olarak localStorage'da saklanır ve her istekte header'a eklenir.

4. **401 Hatası**: Oturum süresi dolmuşsa otomatik olarak `/giris` sayfasına yönlendirilir.

---

## Sonraki Adımlar

Bu altyapı üzerine sayfa bazlı entegrasyon yapılabilir:
- LoginPage ve RegisterPage formlarını `authService` ile bağlama
- Ürün sayfalarını `productService` ile bağlama
- Sipariş sayfalarını `orderService` ile bağlama
