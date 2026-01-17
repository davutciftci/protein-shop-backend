export interface Aroma {
    id: number;
    name: string;
}

export interface Size {
    id: number;
    name: string;
    price: number;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    description: string;
    category: string;
    categorySlug: string;
    price: number;
    oldPrice: number | null;
    discountPercentage: number | null;
    rating: number;
    reviews: number;
    image: string;
    images?: string[];
    aromas?: Aroma[];
    sizes?: Size[];
    nutritionalInfo?: string[];
    usage?: string[];
    fullDescription?: string;
}

export interface Review {
    id: number;
    productId: number;
    userName: string;
    rating: number;
    date: string;
    comment: string;
    verified: boolean;
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'WHEY PROTEIN',
        slug: 'whey-protein',
        description: 'EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ',
        category: 'Protein',
        categorySlug: 'protein',
        price: 549,
        oldPrice: null,
        discountPercentage: null,
        rating: 5,
        reviews: 10869,
        image: '/src/img/anasayfa/whey-protein.jpg',
        images: [
            '/src/img/anasayfa/whey-protein.jpg',
            '/src/img/anasayfa/whey-protein.jpg',
            '/src/img/anasayfa/whey-protein.jpg'
        ],
        aromas: [
            { id: 1, name: 'Bisküvi' },
            { id: 2, name: 'Çikolata' },
            { id: 3, name: 'Muz' }
        ],
        sizes: [
            { id: 1, name: '400G', price: 549 },
            { id: 2, name: '1.6KG', price: 1749 }
        ],
        nutritionalInfo: [
            'Porsiyon: 25g',
            'Kalori: 95 kcal',
            'Protein: 24g',
            'Karbonhidrat: 1g',
            'Yağ: 1g'
        ],
        usage: [
            '1 ölçek (25g) tozu 200-250ml su veya süt ile karıştırın',
            'Antrenman sonrası veya öğünler arası tüketin',
            'Günde 1-2 porsiyon alınabilir'
        ],
        fullDescription: 'Whey Protein Isolate içeren premium protein tozu. Hızlı emilim özelliği sayesinde antrenman sonrası kas gelişimini destekler. Her serviste 24g yüksek kaliteli protein içerir.'
    },
    {
        id: 2,
        name: 'FITNESS PAKETİ',
        slug: 'fitness-paketi',
        description: 'EN POPÜLER ÜRÜNLER BİR ARADA',
        category: 'Spor Gıdaları',
        categorySlug: 'spor-gidalari',
        price: 799,
        oldPrice: 1126,
        discountPercentage: 29,
        rating: 5,
        reviews: 7650,
        image: '/src/img/anasayfa/fitness-package.jpg',
        images: [
            '/src/img/anasayfa/fitness-package.jpg'
        ],
        nutritionalInfo: [
            'Whey Protein 400g',
            'Creatine 300g',
            'BCAA 300g',
            'Shaker hediye'
        ],
        usage: [
            'Whey Protein: Antrenman sonrası',
            'Creatine: Antrenman öncesi',
            'BCAA: Antrenman sırasında'
        ],
        fullDescription: 'En popüler 3 ürünümüzü bir arada sunan avantajlı paket. Whey protein, creatine ve BCAA ile performansınızı maksimuma çıkarın.'
    },
    {
        id: 3,
        name: 'VİTAMİN PAKETİ',
        slug: 'vitamin-paketi',
        description: 'GÜNLÜK VİTAMİN İHTİYACINIZ',
        category: 'Vitamin',
        categorySlug: 'vitamin',
        price: 399,
        oldPrice: 550,
        discountPercentage: 27,
        rating: 5,
        reviews: 5013,
        image: '/src/img/anasayfa/pea-protein.jpg',
        nutritionalInfo: [
            'D3 Vitamini: 2000 IU',
            'C Vitamini: 1000mg',
            'B Kompleks',
            'Omega-3'
        ],
        usage: [
            'Sabah kahvaltı ile birlikte 1 tablet',
            'Bol su ile alınmalı',
            '30 günlük kullanım'
        ],
        fullDescription: 'Günlük vitamin ihtiyacınızı karşılayan komple paket. D3, C vitamini, B kompleks ve Omega-3 içerir.'
    },
    {
        id: 4,
        name: 'PRE-WORKOUT',
        slug: 'pre-workout',
        description: 'ANTRENMANA HAZIRLIK',
        category: 'Spor Gıdaları',
        categorySlug: 'spor-gidalari',
        price: 349,
        oldPrice: null,
        discountPercentage: null,
        rating: 5,
        reviews: 6738,
        image: '/src/img/anasayfa/micellar-casein.jpg',
        aromas: [
            { id: 1, name: 'Portakal' },
            { id: 2, name: 'Limon' },
            { id: 3, name: 'Karpuz' }
        ],
        sizes: [
            { id: 1, name: '300G', price: 349 }
        ],
        nutritionalInfo: [
            'Porsiyon: 10g',
            'Kafein: 200mg',
            'Beta-Alanin: 3.2g',
            'Citrulline Malate: 6g'
        ],
        usage: [
            'Antrenmandan 30 dakika önce',
            '1 ölçek (10g) tozu 200ml su ile karıştırın',
            'Günde 1 porsiyon'
        ],
        fullDescription: 'Antrenman öncesi enerji ve performans artırıcı formül. Beta-alanin, kafein ve citrulline malate içerir.'
    },
    {
        id: 5,
        name: 'PROTEIN BAR',
        slug: 'protein-bar',
        description: '%30 PROTEİN, ŞEKER İLAVESİZ',
        category: 'Gıda',
        categorySlug: 'gida',
        price: 249,
        oldPrice: 349,
        discountPercentage: 29,
        rating: 5,
        reviews: 5216,
        image: '/src/img/anasayfa/protein-bar.png',
        aromas: [
            { id: 1, name: 'Çikolata' },
            { id: 2, name: 'Fıstık' },
            { id: 3, name: 'Vanilya' }
        ],
        nutritionalInfo: [
            'Porsiyon: 60g',
            'Kalori: 220 kcal',
            'Protein: 18g',
            'Karbonhidrat: 20g',
            'Yağ: 8g'
        ],
        usage: [
            'Öğünler arası atıştırmalık',
            'Antrenman öncesi/sonrası',
            'Günde 1-2 bar'
        ],
        fullDescription: 'Yüksek proteinli, şeker ilavesiz lezzetli protein bar. Pratik ve doyurucu.'
    },
    {
        id: 6,
        name: 'CREATINE',
        slug: 'creatine',
        description: 'KAS GELİŞİMİ VE PERFORMANS',
        category: 'Spor Gıdaları',
        categorySlug: 'spor-gidalari',
        price: 299,
        oldPrice: null,
        discountPercentage: null,
        rating: 5,
        reviews: 8558,
        image: '/src/img/anasayfa/egg-white-powder.jpg',
        sizes: [
            { id: 1, name: '300G', price: 299 },
            { id: 2, name: '500G', price: 449 }
        ],
        nutritionalInfo: [
            'Porsiyon: 5g',
            'Creatine Monohydrate: 5g',
            '%100 Mikronize'
        ],
        usage: [
            'Günlük 5g (1 ölçek)',
            'Antrenman öncesi veya sonrası',
            'Bol su ile alın'
        ],
        fullDescription: 'Mikronize creatine monohydrate. Kas gücü ve performansını artırır, kas gelişimini destekler.'
    },
    {
        id: 7,
        name: 'MILK PROTEIN',
        slug: 'milk-protein',
        description: 'TAM PROTEİN KAYNAĞI',
        category: 'Protein',
        categorySlug: 'protein',
        price: 699,
        oldPrice: null,
        discountPercentage: null,
        rating: 5,
        reviews: 205,
        image: '/src/img/anasayfa/milk-protein.png',
        aromas: [
            { id: 1, name: 'Doğal' },
            { id: 2, name: 'Çikolata' },
            { id: 3, name: 'Vanilya' }
        ],
        sizes: [
            { id: 1, name: '500G', price: 699 }
        ],
        nutritionalInfo: [
            'Porsiyon: 30g',
            'Kalori: 110 kcal',
            'Protein: 24g',
            'Kazein: 20%',
            'Whey: 80%'
        ],
        usage: [
            '1 ölçek (30g) tozu 200-250ml süt/su ile',
            'Gece öncesi veya öğünler arası',
            'Günde 1-2 porsiyon'
        ],
        fullDescription: 'Whey ve kazein karışımı süt proteini. Hem hızlı hem yavaş emilim sağlar.'
    },
    {
        id: 8,
        name: 'SOYA PROTEIN',
        slug: 'soya-protein',
        description: 'VEGAN PROTEİN KAYNAĞI',
        category: 'Protein',
        categorySlug: 'protein',
        price: 449,
        oldPrice: null,
        discountPercentage: null,
        rating: 5,
        reviews: 374,
        image: '/src/img/anasayfa/soya-protein.png',
        aromas: [
            { id: 1, name: 'Doğal' },
            { id: 2, name: 'Vanilya' }
        ],
        sizes: [
            { id: 1, name: '400G', price: 449 }
        ],
        nutritionalInfo: [
            'Porsiyon: 25g',
            'Kalori: 90 kcal',
            'Protein: 20g',
            '%100 Bitkisel'
        ],
        usage: [
            '1 ölçek tozu 200ml bitkisel süt/su ile',
            'Vegan beslenme için ideal',
            'Günde 1-2 porsiyon'
        ],
        fullDescription: '%100 soya izolatı. Bitkisel beslenenlere özel yüksek kaliteli protein kaynağı.'
    },
    {
        id: 9,
        name: 'PROTEIN BAR 2\'Lİ PAKET',
        slug: 'protein-bar-2li',
        description: '%30 PROTEİN, ŞEKER İLAVESİZ',
        category: 'Gıda',
        categorySlug: 'gida',
        price: 59,
        oldPrice: 90,
        discountPercentage: 34,
        rating: 5,
        reviews: 180,
        image: '/src/img/anasayfa/protein-bar-2paket.png',
        nutritionalInfo: [
            '2 Adet Bar',
            'Toplam Protein: 36g',
            'Ekonomik Paket'
        ],
        usage: [
            'Öğünler arası atıştırmalık',
            'Pratik protein kaynağı'
        ],
        fullDescription: '2 adetlik protein bar paketi. Hem ekonomik hem pratik.'
    },
    {
        id: 10,
        name: 'MASS GAINER LANSMAN',
        slug: 'mass-gainer',
        description: 'YÜKSEK KALORİLİ PROTEİN ÖĞÜN',
        category: 'Spor Gıdaları',
        categorySlug: 'spor-gidalari',
        price: 699,
        oldPrice: 999,
        discountPercentage: 30,
        rating: 5,
        reviews: 329,
        image: '/src/img/anasayfa/mass-gainer-lansman.png',
        aromas: [
            { id: 1, name: 'Çikolata' },
            { id: 2, name: 'Vanilya' }
        ],
        sizes: [
            { id: 1, name: '2KG', price: 699 }
        ],
        nutritionalInfo: [
            'Porsiyon: 100g',
            'Kalori: 380 kcal',
            'Protein: 30g',
            'Karbonhidrat: 50g'
        ],
        usage: [
            '1 ölçek tozu 400ml süt ile',
            'Kilo almak isteyenler için',
            'Günde 1-2 porsiyon'
        ],
        fullDescription: 'Yüksek kalorili kilo alma formülü. Kas kütlesi artırmak isteyenler için ideal.'
    },
    {
        id: 11,
        name: 'PROTEIN BAR',
        slug: 'protein-bar-tekli',
        description: '%30 PROTEİN, ŞEKER İLAVESİZ',
        category: 'Gıda',
        categorySlug: 'gida',
        price: 249,
        oldPrice: 349,
        discountPercentage: 29,
        rating: 5,
        reviews: 504,
        image: '/src/img/anasayfa/protein-bar.png',
        nutritionalInfo: [
            'Porsiyon: 60g',
            'Protein: 18g'
        ],
        usage: [
            'Pratik protein kaynağı'
        ],
        fullDescription: 'Lezzetli protein bar.'
    },
    {
        id: 12,
        name: 'COLLAGEN COFFEE',
        slug: 'collagen-coffee',
        description: 'KOLAJENLİ KAHVE',
        category: 'Gıda',
        categorySlug: 'gida',
        price: 349,
        oldPrice: null,
        discountPercentage: null,
        rating: 5,
        reviews: 377,
        image: '/src/img/anasayfa/collagen-coffee.png',
        sizes: [
            { id: 1, name: '200G', price: 349 }
        ],
        nutritionalInfo: [
            'Kalori: 35 kcal',
            'Protein: 5g',
            'Kolajen: 5g',
            'Kafein: 80mg'
        ],
        usage: [
            '1 ölçek (10g) tozu 150ml sıcak su ile karıştırın',
            'Günde 1-2 porsiyon tüketin',
            'Sabah kahvesi yerine ideal'
        ],
        fullDescription: 'Kolajen peptitleri ile zenginleştirilmiş premium kahve.'
    }
];

// Helper functions for frontend use
export const getProductById = (id: number): Product | undefined => {
    return PRODUCTS.find(product => product.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
    return PRODUCTS.find(product => product.slug === slug);
};

export const getRelatedProducts = (productId: number, limit: number = 4): Product[] => {
    return PRODUCTS.filter(product => product.id !== productId).slice(0, limit);
};
