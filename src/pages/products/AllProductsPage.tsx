import { Link, useSearchParams } from 'react-router-dom';
import { MdOutlineStar } from 'react-icons/md';
import { PRODUCTS } from '../../data/products';
import DiscountBadge from '../../components/ui/DiscountBadge';

export default function AllProductsPage() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('kategori');
    const searchQuery = searchParams.get('search');

    const filteredProducts = PRODUCTS.filter(product => {
        let matchesCategory = true;
        if (category) {
            if (category) {
                matchesCategory = product.category === 'spor' || product.category === 'spor-gidalari' || product.category === 'preworkout';
            } else {
                matchesCategory = product.category === category;
            }
        }

        let matchesSearch = true;
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            matchesSearch = product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query);
        }

        return matchesCategory && matchesSearch;
    });

    const getPageTitle = () => {
        if (searchQuery) {
            return `ARAMA SONUÇLARI: "${searchQuery}"`;
        }
        if (!category) return 'TÜM ÜRÜNLER';
        const categoryTitles: { [key: string]: string } = {
            'vitamin': 'VİTAMİN',
            'gida': 'GIDA',
            'spor-gidalari': 'SPOR GIDALARI',
            'saglik': 'SAĞLIK',
            'protein': 'PROTEİN',
        };
        return categoryTitles[category] || 'TÜM ÜRÜNLER';
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="container-custom py-8">
                <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8 uppercase tracking-wide">
                    {getPageTitle()}
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                    {filteredProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/urun/${product.slug}`}
                            className="group flex flex-col"
                        >
                            <div className="relative aspect-square mb-2">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                                />
                                {product.discountPercentage && (
                                    <DiscountBadge
                                        percentage={product.discountPercentage}
                                        className="absolute -top-2 -right-2 md:top-2 md:right-2"
                                    />
                                )}
                            </div>

                            <h3 className="text-xs sm:text-sm font-bold text-gray-900 text-center min-h-[1.75rem] flex items-center justify-center uppercase">
                                {product.name}
                            </h3>

                            <p className="text-[10px] sm:text-xs text-gray-500 text-center min-h-[1.5rem] flex items-center justify-center leading-tight">
                                {product.description}
                            </p>

                            <div className="flex items-center justify-center gap-0.5 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <MdOutlineStar
                                        key={i}
                                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-[10px] sm:text-xs text-gray-500 text-center mb-2">
                                {product.reviews.toLocaleString('tr-TR')} Yorum
                            </p>

                            <div className="flex items-center justify-center gap-2 flex-wrap">
                                <span className="text-sm font-bold text-gray-900">{product.price} TL</span>
                                {product.oldPrice && (
                                    <span className="text-xs text-red-500 line-through">{product.oldPrice} TL</span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center text-gray-900 text-sm font-bold m-24">
                    Toplam {filteredProducts.length} ürün görüntüleniyor
                </div>
            </div>
        </div>
    );
}
