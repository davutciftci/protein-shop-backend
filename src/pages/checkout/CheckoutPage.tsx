import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';


const MOCK_ADDRESSES = [
    {
        id: 1,
        title: 'Ev',
        address: 'Ahmet Mah. Mehmetoğlu Sk., No: 1 Daire: 2, Ataşehir, İstanbul, Türkiye',
        city: 'İstanbul',
        district: 'Ataşehir',
        phone: '+90 537 265 80 23'
    },
    {
        id: 2,
        title: 'Ofis',
        address: 'Ayşe Mah. Fatmaoğlu Cad., No: 4 D: 4, Ataşehir, İstanbul, Türkiye',
        city: 'İstanbul',
        district: 'Ataşehir',
        phone: '+90 532 123 45 67'
    }
];

export default function CheckoutPage() {
    const { items, totalPrice } = useCart();
    const [step, setStep] = useState(1);
    const [selectedAddressId, setSelectedAddressId] = useState<number>(1);
    const [isEditing, setIsEditing] = useState(false);
    const [editingAddress, setEditingAddress] = useState<any>(null);

    const handleEditAddress = (address: any) => {
        setEditingAddress(address);
        setIsEditing(true);
    };

    const handleAddNewAddress = () => {
        setEditingAddress({ title: '', address: '', city: '', district: '', phone: '' });
        setIsEditing(true);
    };

    const handleSaveAddress = () => {

        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row">
            { }
            <div className="flex-1 lg:w-[60%] px-4 py-8 lg:px-16 lg:py-12">
                { }
                <div className="flex justify-between items-start mb-12">
                    <Link to="/" className="block">
                        <h1 className="text-2xl font-black italic tracking-tighter" style={{ fontFamily: 'Arial, sans-serif' }}>
                            OJS <br />
                            NUTRITION
                        </h1>
                    </Link>
                    <div className="text-right">
                        <div className="font-semibold text-gray-900">İsim Soyisim</div>
                        <div className="text-sm text-gray-500">isimsoyisim@mail.com</div>
                    </div>
                </div>

                { }
                <div className="space-y-8">
                    { }
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                                1
                            </div>
                            <h2 className={`text-xl font-bold ${step >= 1 ? 'text-gray-900' : 'text-gray-400'}`}>Adres</h2>
                        </div>

                        {step === 1 && (
                            <div className="pl-12">
                                {!isEditing ? (
                                    <>
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Teslimat Adresi</h3>
                                        <div className="space-y-4 mb-8">
                                            {MOCK_ADDRESSES.map((addr) => (
                                                <div
                                                    key={addr.id}
                                                    onClick={() => setSelectedAddressId(addr.id)}
                                                    className={`relative p-6 rounded-lg border-2 cursor-pointer transition-all ${selectedAddressId === addr.id
                                                        ? 'border-blue-600 bg-blue-50/10'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="flex items-center gap-3">
                                                            {selectedAddressId === addr.id ? (
                                                                <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
                                                                    <Check className="w-3 h-3" />
                                                                </div>
                                                            ) : (
                                                                <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                                                            )}
                                                            <span className="font-medium text-gray-900">{addr.title}</span>
                                                        </div>
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); handleEditAddress(addr); }}
                                                            className="text-sm text-gray-500 hover:text-black font-medium"
                                                        >
                                                            Düzenle
                                                        </button>
                                                    </div>
                                                    <p className="text-gray-600 text-sm pl-8 leading-relaxed">
                                                        {addr.address}
                                                    </p>
                                                </div>
                                            ))}

                                            { }
                                            <div
                                                onClick={handleAddNewAddress}
                                                className="p-6 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer flex items-center gap-3 text-gray-600"
                                            >
                                                <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                                                <span className="font-medium">Yeni Adres</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setStep(2)}
                                            className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-900 transition-colors"
                                        >
                                            Kargo ile Devam Et
                                        </button>
                                    </>
                                ) : (

                                    <div className="animate-fade-in">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-lg font-medium text-gray-900">Adres Düzenle</h3>
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="text-sm font-medium text-gray-500 hover:text-black"
                                            >
                                                Vazgeç
                                            </button>
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            <div className="space-y-1">
                                                <label className="text-xs text-gray-500 ml-1">Adres Başlığı</label>
                                                <input
                                                    type="text"
                                                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                                    defaultValue={editingAddress?.title}
                                                    placeholder="Örn: Ev, Ofis"
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-xs text-gray-500 ml-1">Adres</label>
                                                <textarea
                                                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors min-h-[100px] resize-none"
                                                    defaultValue={editingAddress?.address}
                                                    placeholder="Açık adresiniz"
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="text-xs text-gray-500 ml-1">İl</label>
                                                    <div className="relative">
                                                        <select className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black appearance-none bg-white">
                                                            <option>İstanbul</option>
                                                            <option>Ankara</option>
                                                            <option>İzmir</option>
                                                        </select>
                                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-xs text-gray-500 ml-1">İlçe</label>
                                                    <div className="relative">
                                                        <select className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-black appearance-none bg-white">
                                                            <option>Ataşehir</option>
                                                            <option>Kadıköy</option>
                                                            <option>Üsküdar</option>
                                                        </select>
                                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-xs text-gray-500 ml-1">Telefon</label>
                                                <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:border-black transition-colors">
                                                    <div className="bg-gray-50 px-4 flex items-center gap-2 border-r border-gray-200">
                                                        <img src="https://flagcdn.com/w20/tr.png" alt="TR" className="w-5" />
                                                        <span className="text-sm font-medium text-gray-700">+90</span>
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        className="flex-1 p-4 focus:outline-none"
                                                        defaultValue="537 265 80 23"
                                                        placeholder="5XX XXX XX XX"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <button className="flex-1 py-4 border border-gray-200 rounded-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                                                Adresi Sil
                                            </button>
                                            <button
                                                onClick={handleSaveAddress}
                                                className="flex-1 py-4 bg-black text-white rounded-lg font-bold hover:bg-gray-900 transition-colors"
                                            >
                                                Kaydet
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    { }
                    <div className="opacity-100">
                        <div className="flex items-center gap-4 mb-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step === 2 ? 'bg-black text-white' : 'bg-white border-2 border-gray-200 text-gray-400'}`}>
                                2
                            </div>
                            <h2 className={`text-xl font-bold ${step === 2 ? 'text-gray-900' : 'text-gray-400'}`}>Kargo</h2>
                        </div>
                        {step === 2 && (
                            <div className="pl-12 py-4">
                                <div className="p-4 bg-gray-50 rounded-lg text-gray-600">
                                    Kargo seçenekleri burada listelenecek...
                                </div>
                                <div className="flex gap-4 mt-6">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="px-6 py-3 border border-gray-200 rounded-lg font-medium text-gray-900 hover:bg-gray-50"
                                    >
                                        Geri
                                    </button>
                                    <button
                                        onClick={() => setStep(3)}
                                        className="flex-1 bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-900"
                                    >
                                        Ödemeye Geç
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    { }
                    <div className="opacity-100">
                        <div className="flex items-center gap-4 mb-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step === 3 ? 'bg-black text-white' : 'bg-white border-2 border-gray-200 text-gray-400'}`}>
                                3
                            </div>
                            <h2 className={`text-xl font-bold ${step === 3 ? 'text-gray-900' : 'text-gray-400'}`}>Ödeme</h2>
                        </div>
                        {step === 3 && (
                            <div className="pl-12 py-4">
                                <div className="p-4 bg-gray-50 rounded-lg text-gray-600">
                                    Ödeme formu burada olacak...
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                { }
                <div className="mt-20 pt-8 border-t border-gray-100 flex gap-6 text-xs text-gray-400 justify-center lg:justify-start">
                    <Link to="/iade" className="hover:text-gray-600">Para İade Politikası</Link>
                    <span>•</span>
                    <Link to="/kvkk" className="hover:text-gray-600">Gizlilik Politikası</Link>
                    <span>•</span>
                    <Link to="/sozlesme" className="hover:text-gray-600">Hizmet Şartları</Link>
                </div>
            </div>

            { }
            <div className="lg:w-[40%] bg-gray-50 px-4 py-8 lg:px-12 lg:py-12 border-l border-gray-200 min-h-screen">
                <div className="sticky top-8">
                    <div className="space-y-6 mb-8">
                        {items.length > 0 ? (
                            items.map((item) => (
                                <div key={item.id} className="flex gap-4 items-start">
                                    <div className="relative w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 object-contain"
                                        />
                                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#1F23AA] text-white text-xs font-bold rounded-full flex items-center justify-center">
                                            {item.quantity}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                                        <p className="text-xs text-gray-500 mt-1">{item.aroma ? item.aroma : 'Standart'}</p>
                                        <p className="text-xs text-gray-500">{item.size}</p>
                                    </div>
                                    <div className="text-sm font-medium text-gray-900">
                                        {item.price.toLocaleString('tr-TR')} TL
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-500 py-8">
                                Sepetinizde ürün bulunmamaktadır.
                            </div>
                        )}
                    </div>

                    <div className="border-t border-gray-200 py-6 space-y-4">
                        <div className="flex justify-between items-center text-gray-600">
                            <span className="text-sm flex items-center gap-1">
                                Ara Toplam
                                <span className="w-4 h-4 rounded-full bg-gray-200 text-gray-500 text-[10px] flex items-center justify-center cursor-help">?</span>
                            </span>
                            <span className="font-medium">{totalPrice.toLocaleString('tr-TR')} TL</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-gray-900">Toplam</span>
                            <span className="text-xl font-bold text-gray-900">{totalPrice.toLocaleString('tr-TR')} TL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
