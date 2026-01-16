import { Star } from 'lucide-react';


interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
    verified: boolean;
}

export default function AboutPage() {
    
    const reviews: Review[] = [
        {
            id: 1,
            name: 'Mevcut D',
            rating: 5,
            comment: 'C.cumhuri bir öneri ile geldik ölçü olmasına rağmen.',
            date: '06/04/2020',
            verified: true
        },
        {
            id: 2,
            name: 'Burt S',
            rating: 5,
            comment: 'Müşterilerim için sipariş etim çok beğendiler.',
            date: '06/04/2020',
            verified: true
        },
        {
            id: 3,
            name: 'Ene E',
            rating: 5,
            comment: 'Müşterilerim için sipariş etim çok beğendiler.',
            date: '06/04/2020',
            verified: true
        },
        {
            id: 4,
            name: 'SHANNON S',
            rating: 5,
            comment: 'Çalışmaya devam ediyorum ve gelecekte daha fazla sipariş vermeyi düşünüyorum. Kesin tavsiye ederim. Sitede sipariş vermek, ürün ve fiyatların çeşitliliği mükemmel.',
            date: '06/04/2020',
            verified: true
        },
        {
            id: 5,
            name: 'Yusuf A',
            rating: 5,
            comment: 'Müşterilerim için sipariş etim çok beğendiler.',
            date: '06/04/2020',
            verified: true
        },
        {
            id: 6,
            name: 'Hatice',
            rating: 5,
            comment: 'Harika',
            date: '06/04/2020',
            verified: true
        },
        {
            id: 7,
            name: 'Umar E',
            rating: 5,
            comment: 'Harika',
            date: '06/04/2020',
            verified: true
        },
        {
            id: 8,
            name: 'Umar E',
            rating: 5,
            comment: 'Şimdilik',
            date: '06/04/2020',
            verified: true
        },
        {
            id: 9,
            name: 'Muhammad L',
            rating: 5,
            comment: 'Kalite',
            date: '06/04/2020',
            verified: true
        },
        {
            id: 10,
            name: 'Nurhan K',
            rating: 5,
            comment: 'Süper',
            date: '06/04/2020',
            verified: true
        },
        {
            id: 11,
            name: 'pingpot',
            rating: 5,
            comment: 'Pome olarak geçmeden başarılı Ülke şimdi sürülerle zamanla oluşturulacak eşyalar yapıcaz sizin belirsiz biz yapınca en döşemeyi eşyaçılına koç yapışa biz şişleme bu yapinzi yi tekin bilemezlik',
            date: '06/04/2020',
            verified: true
        }
    ];

    const certificates = [
        '/src/img/anasayfa/certified.png',
        '/src/img/anasayfa/ghf.png',
        '/src/img/anasayfa/gmp.png',
        '/src/img/anasayfa/gıda.iso.png',
        '/src/img/anasayfa/helal.png',
        '/src/img/anasayfa/iso.png'
    ];

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container-custom max-w-4xl">
                {}
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">
                        Sağlıklı ve Fit Yaşamaya Zevkli ve Kolay Hale Getirmek İçin Varız
                    </h1>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Günümüzde sağlıklı yaşam tarzı ve fitness her zamankinden daha önemli hale geldi. Ancak yoğun iş temposu, stresli yaşam koşulları ve yetersiz beslenme alışkanlıkları nedeniyle birçok insan sağlıklı yaşamı sürdürmekte zorlanıyor.
                        </p>
                        <p>
                            İşte tam bu noktada devreye giriyoruz! OJS Nutrition olarak, sağlıklı ve fit yaşamı herkes için ulaşılabilir, keyifli ve sürdürülebilir kılma misyonuyla yola çıktık. Amacımız, en kaliteli spor gıda takviyelerini, bilimsel olarak desteklenmiş ürünleri ve uzman danışmanlık hizmetlerini bir araya getirerek, sizlerin hedeflerinize ulaşmasında yanınızda olmak.
                        </p>
                        <p>
                            Ürünlerimiz, uluslararası standartlara uygun olarak üretilmekte ve her biri titizlikle seçilmektedir. Protein tozlarından vitamin takviyelerine, sağlıklı atıştırmalıklardan performans artırıcı ürünlere kadar geniş bir yelpazede çözümler sunuyoruz.
                        </p>
                        <p>
                            Sadece ürün satmakla kalmıyor, aynı zamanda sağlıklı yaşam yolculuğunuzda size rehberlik ediyoruz. Uzman ekibimiz, beslenme programları, antrenman önerileri ve kişiselleştirilmiş danışmanlık hizmetleriyle her adımda yanınızda.
                        </p>
                    </div>
                </div>

                {}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        1.000.000+ den Fazla Mutlu Müşteri
                    </h2>
                </div>

                {}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Sertifikalarımız</h3>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                        {certificates.map((cert, index) => (
                            <div key={index} className="flex items-center justify-center">
                                <img
                                    src={cert}
                                    alt={`Sertifika ${index + 1}`}
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {}
                <div className="py-4">
                    <div className="flex items-center gap-2 mb-6 border-t-2 border-b-2 py-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">196900 Yorum</span>
                    </div>
                </div>

                {}
                <div className="my-4">
                    <button className="bg-gradient-to-r from-[#1F23AA] to-[#387EC7] hover:from-[#1a1e8f] hover:to-[#2e6ba5] text-white font-semibold px-6 py-3 transition-colors rounded-full">
                        ÜRÜN İNCELEMELİRİ
                    </button>
                </div>

                {}
                <div className="flex flex-col gap-4">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-gray-100 rounded-2xl p-8">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="text-sm font-semibold text-gray-900">{review.name}</span>
                                    {review.verified && (
                                        <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium ml-2">
                                            ONAYLANDI
                                        </span>
                                    )}
                                </div>
                                <span className="text-sm font-bold text-gray-500">{review.date}</span>
                            </div>
                            <h4 className="text-sm font-bold text-gray-900 mb-2">
                                {review.comment.length > 50 ? review.comment.substring(0, 50) : review.comment}
                            </h4>
                            <p className="text-sm text-gray-600">
                                {review.comment}
                            </p>
                        </div>
                    ))}
                </div>

                {}
                <div className="flex items-center justify-center gap-2 mt-8">
                    <button className="w-8 h-8 rounded-full hover:bg-gray-200 transition-colors">‹</button>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => (
                        <button
                            key={page}
                            className={`w-8 h-8 rounded-full transition-colors ${page === 1 ? 'bg-gray-900 text-white' : 'hover:bg-gray-200'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="w-8 h-8 rounded-full hover:bg-gray-200 transition-colors">›</button>
                </div>
            </div>
        </div>
    );
}
