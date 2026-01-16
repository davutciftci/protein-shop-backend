import { useParams, Link } from 'react-router-dom';
import { VscSettings } from 'react-icons/vsc';
import { TfiPackage } from 'react-icons/tfi';
import { CiLocationOn } from 'react-icons/ci';

export default function OrderDetailPage() {
    const { orderId } = useParams();

    
    const orderData = {
        id: orderId || '290405',
        date: '14 Aralık 2022',
        status: 'Teslim Edildi',
        items: [
            {
                id: 1,
                name: 'MELATONİN',
                slug: 'melatonin',
                quantity: 2,
                price: 62,
                image: '/src/img/anasayfa/whey-protein.jpg',
                unit: '1 KUTU'
            },
            {
                id: 2,
                name: 'GÜNLÜK VİTAMİN PAKETİ',
                slug: 'gunluk-vitamin-paketi',
                quantity: 1,
                price: 449,
                image: '/src/img/anasayfa/fitness-package.jpg',
                unit: '1 Paket x 2 Adet'
            },
            {
                id: 3,
                name: 'BROMELAİN',
                slug: 'bromelain',
                quantity: 1,
                price: 197,
                image: '/src/img/anasayfa/pea-protein.jpg',
                unit: '1 KUTU x 2 Adet'
            }
        ],
        address: {
            title: 'Uğur İLTER',
            addressLine1: 'Barbaros, Nidakule Ataşehir Batı,',
            addressLine2: 'Begonya Sk. No: 1/2, 34746',
            city: 'Ataşehir/İstanbul'
        },
        payment: {
            method: 'Kredi Kartı',
            cardNumber: '**** **** **** **61',
            amount: 770
        },
        summary: {
            subtotal: 856,
            shipping: 0,
            tax: 8,
            discount: -86,
            total: 770
        }
    };

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row gap-8">
                    {}
                    <div className="md:w-64 flex-shrink-0">
                        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">Hesabım</h1>
                        <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-hide">
                            <style>{`
                                .scrollbar-hide::-webkit-scrollbar {
                                    display: none;
                                }
                                .scrollbar-hide {
                                    -ms-overflow-style: none;
                                    scrollbar-width: none;
                                }
                            `}</style>
                            <Link
                                to="/hesabim"
                                className="flex-shrink-0 md:w-full flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors border whitespace-nowrap text-sm bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200"
                            >
                                <VscSettings className="w-5 h-5" />
                                Hesap Bilgilerim
                            </Link>
                            <button
                                className="flex-shrink-0 md:w-full flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors border whitespace-nowrap text-sm bg-black text-white border-black"
                            >
                                <TfiPackage className="w-5 h-5" />
                                Siparişlerim
                            </button>
                            <Link
                                to="/hesabim"
                                className="flex-shrink-0 md:w-full flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors border whitespace-nowrap text-sm bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200"
                            >
                                <CiLocationOn className="w-5 h-5" />
                                Adreslerim
                            </Link>
                        </nav>
                    </div>

                    {}
                    <div className="flex-1">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-2">Sipariş Teslim Edildi</h2>
                            <p className="text-gray-600">
                                {orderData.date} Tarihinde Sipariş Verildi - {orderData.id} numaralı sipariş
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {}
                            <div className="flex-1">
                                <div className="border-b-2 border-t-2 border-gray-300 py-4">
                                    <div className="space-y-6">
                                        {orderData.items.map((item) => (
                                            <Link
                                                key={item.id}
                                                to={`/urun/${item.slug}`}
                                                className="flex gap-4 pb-6 last:border-0 hover:bg-gray-50 transition-colors rounded-lg p-2 -m-2"
                                            >
                                                <div className="w-24 h-24 flex-shrink-0 p-2">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-gray-900 mb-1">{item.name} x {item.quantity}</h3>
                                                    <p className="text-sm text-gray-900 font-semibold mb-1">{item.price} TL</p>
                                                    <p className="text-sm text-gray-600">Boyut: {item.unit}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-4">
                                    <p className="text-sm text-gray-700">hepsi:let</p>
                                    <p className="text-sm text-gray-700">Takip Numarası: HJ2192904051</p>
                                </div>
                            </div>

                            {}
                            <div className="lg:w-80 space-y-4">
                                {}
                                <div className="border-t-2 border-gray-300 py-4">
                                    <h3 className="font-bold text-gray-900 mb-3">Adres</h3>
                                    <p className="text-sm text-gray-700 font-semibold mb-1">{orderData.address.title}</p>
                                    <p className="text-sm text-gray-700">{orderData.address.addressLine1}</p>
                                    <p className="text-sm text-gray-700">{orderData.address.addressLine2}</p>
                                    <p className="text-sm text-gray-700 underline">{orderData.address.city}</p>
                                </div>

                                {}
                                <div className="border-t-2 border-gray-300 py-4">
                                    <h3 className="font-bold text-gray-900 mb-3">Ödeme</h3>
                                    <p className="text-sm text-gray-700 mb-1">{orderData.payment.method} - {orderData.payment.amount} TL</p>
                                    <p className="text-sm text-gray-700">{orderData.payment.cardNumber}</p>
                                </div>

                                {}
                                <div className="border-t-2 border-gray-300 py-4">
                                    <h3 className="font-bold text-gray-900 mb-3">Özet</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-700">Ara Toplam</span>
                                            <span className="text-gray-900">{orderData.summary.subtotal} TL</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-700">Kargo</span>
                                            <span className="text-gray-900">{orderData.summary.shipping} TL</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-700">Toplam Vergi</span>
                                            <span className="text-gray-900">{orderData.summary.tax} TL</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-700">Yüzde 10 indirim!</span>
                                            <span className="text-red-600">{orderData.summary.discount} TL</span>
                                        </div>
                                        <div className="flex justify-between text-base font-bold pt-2 border-t-2 border-gray-200">
                                            <span className="text-gray-900">Toplam</span>
                                            <span className="text-gray-900">{orderData.summary.total} TL</span>
                                        </div>
                                    </div>
                                </div>

                                {}
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-3">Yardıma mı ihtiyacın var?</h3>
                                    <Link to="/S.S.S" className="text-sm text-gray-700 hover:text-black transition-colors underline">
                                        Sıkça Sorulan Sorular
                                    </Link>
                                    <br />
                                    <button className="text-sm text-gray-700 hover:text-black transition-colors underline mt-2">
                                        Satış Sözleşmesi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
