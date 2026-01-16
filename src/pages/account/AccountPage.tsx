import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { VscSettings } from 'react-icons/vsc';
import { TfiPackage } from 'react-icons/tfi';
import { CiLocationOn } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import { ChevronDown } from 'lucide-react';

interface Address {
    id: number;
    title: string;
    fullAddress: string;
}

export default function AccountPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('account');
    const [selectedCountry, setSelectedCountry] = useState({ code: '+90', flag: 'tr', name: 'Türkiye' });
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    });

    const [addresses, setAddresses] = useState<Address[]>([
        {
            id: 1,
            title: 'Ev',
            fullAddress: 'Ahmet Mah. Mehmetoğlu Sk., No: 1\nDaire: 2, Ataşehir, İstanbul, Türkiye'
        },
        {
            id: 2,
            title: 'Ofis',
            fullAddress: 'Ayşe Mah. Fatmacıklı Cad., No: 4 D: 4,\nAtaşehir, İstanbul, Türkiye'
        }
    ]);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editingAddressId, setEditingAddressId] = useState<number | null>(null);
    const [addressFormData, setAddressFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        district: '',
        phone: ''
    });

    const countries = [
        { code: '+90', flag: 'tr', name: 'Türkiye' },
        { code: '+1', flag: 'us', name: 'Amerika' },
        { code: '+44', flag: 'gb', name: 'İngiltere' },
        { code: '+49', flag: 'de', name: 'Almanya' },
        { code: '+33', flag: 'fr', name: 'Fransa' },
        { code: '+7', flag: 'ru', name: 'Rusya' },
        { code: '+86', flag: 'cn', name: 'Çin' },
        { code: '+81', flag: 'jp', name: 'Japonya' },
        { code: '+91', flag: 'in', name: 'Hindistan' },
        { code: '+971', flag: 'ae', name: 'BAE' }
    ];

    const sampleOrders = [
        {
            id: '427795',
            productName: 'DEEP SLEEP',
            productSlug: 'deep-sleep',
            date: '31 Mart 2023',
            status: 'Teslim Edildi',
            image: '/src/img/anasayfa/whey-protein.jpg'
        },
        {
            id: '290405',
            productName: 'MELATONİN - GÜNLÜK VİTAMİN PAKETİ - BROMELAİN',
            productSlug: 'melatonin',
            date: '14 Aralık 2022',
            status: 'Teslim Edildi',
            image: '/src/img/anasayfa/fitness-package.jpg'
        },
        {
            id: '255554',
            productName: 'GAMER HACK - DETOX PAKETİ',
            productSlug: 'gamer-hack',
            date: '19 Kasım 2022',
            status: 'Teslim Edildi',
            image: '/src/img/anasayfa/pea-protein.jpg'
        },
        {
            id: '190462',
            productName: 'CREAM OF RICE',
            productSlug: 'cream-of-rice',
            date: '1 Ekim 2022',
            status: 'Teslim Edildi',
            image: '/src/img/anasayfa/micellar-casein.jpg'
        }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    const handleAddressInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAddressFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddNewAddress = () => {
        setShowAddressForm(true);
        setEditingAddressId(null);
        setAddressFormData({
            title: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            district: '',
            phone: ''
        });
    };

    const handleEditAddress = (address: Address) => {
        setShowAddressForm(true);
        setEditingAddressId(address.id);
        const [line1, line2] = address.fullAddress.split('\n');
        setAddressFormData({
            title: address.title,
            firstName: '',
            lastName: '',
            address: line1 || '',
            city: line2?.includes('İstanbul') ? 'İstanbul' : '',
            district: line2?.includes('Ataşehir') ? 'Ataşehir' : '',
            phone: ''
        });
    };

    const handleDeleteAddress = (id: number) => {
        setAddresses(addresses.filter(addr => addr.id !== id));
    };

    const handleAddressSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newAddress: Address = {
            id: editingAddressId || Date.now(),
            title: addressFormData.title,
            fullAddress: `${addressFormData.address}\n${addressFormData.district}, ${addressFormData.city}, Türkiye`
        };

        if (editingAddressId) {
            setAddresses(addresses.map(addr =>
                addr.id === editingAddressId ? newAddress : addr
            ));
        } else {
            setAddresses([...addresses, newAddress]);
        }

        setShowAddressForm(false);
        setEditingAddressId(null);
        setAddressFormData({
            title: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            district: '',
            phone: ''
        });
    };

    const EmptyAddressComponent = () => (
        <div className="px-4 md:px-8 py-4">
            <h2 className="text-xl font-bold mb-6">Adres Oluştur</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700">
                    Kayıtlı bir adresiniz yok. Lütfen aşağıdaki kısımdan adres oluşturunuz.
                </p>
            </div>

            <form onSubmit={handleAddressSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        *Adres Başlığı
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={addressFormData.title}
                        onChange={handleAddressInputChange}
                        className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                        placeholder="ör, Ev, İş..."
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            *Ad
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={addressFormData.firstName}
                            onChange={handleAddressInputChange}
                            placeholder="Ad"
                            className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            *Soyad
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={addressFormData.lastName}
                            onChange={handleAddressInputChange}
                            placeholder="Soyad"
                            className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        *Adres
                    </label>
                    <textarea
                        name="address"
                        value={addressFormData.address}
                        onChange={handleAddressInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Şehir
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={addressFormData.city}
                            onChange={handleAddressInputChange}
                            className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            *İlçe
                        </label>
                        <input
                            type="text"
                            name="district"
                            value={addressFormData.district}
                            onChange={handleAddressInputChange}
                            className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                    </label>
                    <div className="flex gap-2">
                        <div className="relative">
                            <select
                                className="appearance-none w-36 flex items-center gap-2 pl-12 pr-8 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-pointer focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                            >
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.code}
                                    </option>
                                ))}
                            </select>
                            <img
                                src="https://flagcdn.com/w40/tr.png"
                                alt="Türkiye"
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-4 object-cover rounded pointer-events-none"
                            />
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            value={addressFormData.phone}
                            onChange={handleAddressInputChange}
                            className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Kaydet
                    </button>
                </div>
            </form>
        </div>
    );

    const FilledAddressComponent = () => (
        <div className="px-4 md:px-8 py-4">
            {!showAddressForm ? (
                <>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Adreslerim ({addresses.length})</h2>
                        <button
                            onClick={handleAddNewAddress}
                            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
                        >
                            <span className="text-xl">+</span>
                            Yeni adres ekle
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {addresses.map((address) => (
                            <div key={address.id} className="border border-gray-300 rounded-lg p-6 flex flex-col min-h-[180px]">
                                <h3 className="font-bold text-gray-900 mb-3">{address.title}</h3>
                                <p className="text-sm text-gray-700 mb-4 leading-relaxed whitespace-pre-line flex-1">
                                    {address.fullAddress}
                                </p>
                                <div className="flex justify-between items-center gap-4 pt-4 border-t border-gray-200">
                                    <button
                                        onClick={() => handleEditAddress(address)}
                                        className="text-sm text-gray-600 hover:text-black transition-colors"
                                    >
                                        Adresi Düzenle
                                    </button>
                                    <button
                                        onClick={() => handleDeleteAddress(address.id)}
                                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
                                    >
                                        <MdDeleteOutline className="w-5 h-5" />
                                        Sil
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">
                            {editingAddressId ? 'Adresi Düzenle' : 'Yeni Adres Ekle'}
                        </h2>
                    </div>

                    <form onSubmit={handleAddressSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                *Adres Başlığı
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={addressFormData.title}
                                onChange={handleAddressInputChange}
                                className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                placeholder="ör, Ev, İş..."
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    *Ad
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={addressFormData.firstName}
                                    onChange={handleAddressInputChange}
                                    placeholder="Ad"
                                    className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    *Soyad
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={addressFormData.lastName}
                                    onChange={handleAddressInputChange}
                                    placeholder="Soyad"
                                    className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                *Adres
                            </label>
                            <textarea
                                name="address"
                                value={addressFormData.address}
                                onChange={handleAddressInputChange}
                                rows={4}
                                className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Şehir
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={addressFormData.city}
                                    onChange={handleAddressInputChange}
                                    className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    *İlçe
                                </label>
                                <input
                                    type="text"
                                    name="district"
                                    value={addressFormData.district}
                                    onChange={handleAddressInputChange}
                                    className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Telefon
                            </label>
                            <div className="flex gap-2">
                                <div className="relative">
                                    <select
                                        className="appearance-none w-36 flex items-center gap-2 pl-12 pr-8 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-pointer focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                    >
                                        {countries.map((country) => (
                                            <option key={country.code} value={country.code}>
                                                {country.code}
                                            </option>
                                        ))}
                                    </select>
                                    <img
                                        src="https://flagcdn.com/w40/tr.png"
                                        alt="Türkiye"
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-4 object-cover rounded pointer-events-none"
                                    />
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={addressFormData.phone}
                                    onChange={handleAddressInputChange}
                                    className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setShowAddressForm(false)}
                                className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                İptal
                            </button>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Kaydet
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row gap-8">
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
                            <button
                                onClick={() => setActiveTab('account')}
                                className={`flex-shrink-0 md:w-full flex items-center gap-2 px-2 md:px-4 py-2 md:py-3 rounded-lg transition-colors border whitespace-nowrap text-sm ${activeTab === 'account'
                                    ? 'bg-black text-white border-black'
                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200'
                                    }`}
                            >
                                <VscSettings className="w-5 h-5" />
                                <span className="font-medium">Hesap Bilgilerim</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('orders')}
                                className={`flex-shrink-0 md:w-full flex items-center gap-2 px-2 md:px-4 py-2 md:py-3 rounded-lg transition-colors border whitespace-nowrap text-sm ${activeTab === 'orders'
                                    ? 'bg-black text-white border-black'
                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200'
                                    }`}
                            >
                                <TfiPackage className="w-5 h-5" />
                                <span className="font-medium">Siparişlerim</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('addresses')}
                                className={`flex-shrink-0 md:w-full flex items-center gap-2 px-2 md:px-4 py-2 md:py-3 rounded-lg transition-colors border whitespace-nowrap text-sm ${activeTab === 'addresses'
                                    ? 'bg-black text-white border-black'
                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200'
                                    }`}
                            >
                                <CiLocationOn className="w-5 h-5" />
                                <span className="font-medium">Adreslerim</span>
                            </button>
                        </nav>
                    </div>

                    <div className="flex-1">
                        {activeTab === 'account' && (
                            <div className="px-4 md:px-8 py-4">
                                <h2 className="text-xl font-bold mb-6">Hesap Bilgilerim</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                *Ad
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                placeholder="Adınız"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                *Soyad
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                placeholder="Soyadınız"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Telefon
                                        </label>
                                        <div className="flex gap-2">
                                            <div className="relative">
                                                <select
                                                    value={selectedCountry.code}
                                                    onChange={(e) => {
                                                        const country = countries.find(c => c.code === e.target.value);
                                                        if (country) setSelectedCountry(country);
                                                    }}
                                                    className="appearance-none w-36 flex items-center gap-2 pl-12 pr-8 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-pointer focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                                >
                                                    {countries.map((country) => (
                                                        <option key={country.code} value={country.code}>
                                                            {country.code}
                                                        </option>
                                                    ))}
                                                </select>
                                                <img
                                                    src={`https://flagcdn.com/w40/${selectedCountry.flag}.png`}
                                                    alt={selectedCountry.name}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-4 object-cover rounded pointer-events-none"
                                                />
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            *Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                            placeholder="iletisim@onlyjs.com"
                                        />
                                    </div>

                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                                        >
                                            Kaydet
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {activeTab === 'orders' && (
                            <div className="px-4 md:px-8 py-4">
                                <h2 className="text-xl font-bold mb-2">Siparişlerim ({sampleOrders.length})</h2>
                                <div className="space-y-4">
                                    {sampleOrders.map((order) => (
                                        <div key={order.id} className="border-b border-gray-200 py-4 last:border-0">
                                            <div className="flex items-center gap-4">
                                                <Link
                                                    to={`/urun/${order.productSlug}`}
                                                    className="w-20 h-20 flex-shrink-0 rounded-lg p-2 hover:bg-gray-100 transition-colors"
                                                >
                                                    <img
                                                        src={order.image}
                                                        alt={order.productName}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </Link>
                                                <div className="flex-1">
                                                    <p className="text-sm text-green-600 font-medium mb-1">{order.status}</p>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">{order.productName}</h3>
                                                    <p className="text-xs text-gray-500">{order.date} Tarihinde Sipariş Verildi</p>
                                                    <p className="text-xs text-gray-500">{order.id} numaralı sipariş</p>
                                                </div>
                                                <button
                                                    onClick={() => navigate(`/siparis/${order.id}`)}
                                                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                                                >
                                                    Detayı Görüntüle
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'addresses' && (
                            <div className="px-4 md:px-8 py-4">
                                {addresses.length === 0 && !showAddressForm ? (
                                    <>
                                        <h2 className="text-xl font-bold mb-6">Adres Oluştur</h2>

                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                            <p className="text-sm text-gray-700">
                                                Kayıtlı bir adresiniz yok. Lütfen aşağıdaki kısımdan adres oluşturunuz.
                                            </p>
                                        </div>

                                        <form onSubmit={handleAddressSubmit} className="space-y-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    *Adres Başlığı
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={addressFormData.title}
                                                    onChange={handleAddressInputChange}
                                                    className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                    placeholder="ör, Ev, İş..."
                                                    required
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        *Ad
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        value={addressFormData.firstName}
                                                        onChange={handleAddressInputChange}
                                                        placeholder="Ad"
                                                        className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        *Soyad
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        value={addressFormData.lastName}
                                                        onChange={handleAddressInputChange}
                                                        placeholder="Soyad"
                                                        className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    *Adres
                                                </label>
                                                <textarea
                                                    name="address"
                                                    value={addressFormData.address}
                                                    onChange={handleAddressInputChange}
                                                    rows={4}
                                                    className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                                                    required
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Şehir
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        value={addressFormData.city}
                                                        onChange={handleAddressInputChange}
                                                        className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        *İlçe
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="district"
                                                        value={addressFormData.district}
                                                        onChange={handleAddressInputChange}
                                                        className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Telefon
                                                </label>
                                                <div className="flex gap-2">
                                                    <div className="relative">
                                                        <select
                                                            className="appearance-none w-36 flex items-center gap-2 pl-12 pr-8 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-pointer focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                                        >
                                                            {countries.map((country) => (
                                                                <option key={country.code} value={country.code}>
                                                                    {country.code}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <img
                                                            src="https://flagcdn.com/w40/tr.png"
                                                            alt="Türkiye"
                                                            className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-4 object-cover rounded pointer-events-none"
                                                        />
                                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={addressFormData.phone}
                                                        onChange={handleAddressInputChange}
                                                        className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex justify-end">
                                                <button
                                                    type="submit"
                                                    className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                                                >
                                                    Kaydet
                                                </button>
                                            </div>
                                        </form>
                                    </>
                                ) : (
                                    <>
                                        {!showAddressForm ? (
                                            <>
                                                <div className="flex items-center justify-between mb-6">
                                                    <h2 className="text-xl font-bold">Adreslerim ({addresses.length})</h2>
                                                    <button
                                                        onClick={handleAddNewAddress}
                                                        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
                                                    >
                                                        <span className="text-xl">+</span>
                                                        Yeni adres ekle
                                                    </button>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {addresses.map((address) => (
                                                        <div key={address.id} className="border border-gray-300 rounded-lg p-6 flex flex-col min-h-[180px]">
                                                            <h3 className="font-bold text-gray-900 mb-3">{address.title}</h3>
                                                            <p className="text-sm text-gray-700 mb-4 leading-relaxed whitespace-pre-line flex-1">
                                                                {address.fullAddress}
                                                            </p>
                                                            <div className="flex justify-between items-center gap-4 pt-4 border-t border-gray-200">
                                                                <button
                                                                    onClick={() => handleEditAddress(address)}
                                                                    className="text-sm text-gray-600 hover:text-black transition-colors"
                                                                >
                                                                    Adresi Düzenle
                                                                </button>
                                                                <button
                                                                    onClick={() => handleDeleteAddress(address.id)}
                                                                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
                                                                >
                                                                    <MdDeleteOutline className="w-5 h-5" />
                                                                    Sil
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex items-center justify-between mb-6">
                                                    <h2 className="text-xl font-bold">
                                                        {editingAddressId ? 'Adresi Düzenle' : 'Yeni Adres Ekle'}
                                                    </h2>
                                                </div>

                                                <form onSubmit={handleAddressSubmit} className="space-y-6">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            *Adres Başlığı
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="title"
                                                            value={addressFormData.title}
                                                            onChange={handleAddressInputChange}
                                                            className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                            placeholder="ör, Ev, İş..."
                                                            required
                                                        />
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                                *Ad
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="firstName"
                                                                value={addressFormData.firstName}
                                                                onChange={handleAddressInputChange}
                                                                placeholder="Ad"
                                                                className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                                *Soyad
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="lastName"
                                                                value={addressFormData.lastName}
                                                                onChange={handleAddressInputChange}
                                                                placeholder="Soyad"
                                                                className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            *Adres
                                                        </label>
                                                        <textarea
                                                            name="address"
                                                            value={addressFormData.address}
                                                            onChange={handleAddressInputChange}
                                                            rows={4}
                                                            className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                                Şehir
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="city"
                                                                value={addressFormData.city}
                                                                onChange={handleAddressInputChange}
                                                                className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                                *İlçe
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="district"
                                                                value={addressFormData.district}
                                                                onChange={handleAddressInputChange}
                                                                className="w-full px-4 py-3 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            Telefon
                                                        </label>
                                                        <div className="flex gap-2">
                                                            <div className="relative">
                                                                <select
                                                                    className="appearance-none w-36 flex items-center gap-2 pl-12 pr-8 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-pointer focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                                                >
                                                                    {countries.map((country) => (
                                                                        <option key={country.code} value={country.code}>
                                                                            {country.code}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                                <img
                                                                    src="https://flagcdn.com/w40/tr.png"
                                                                    alt="Türkiye"
                                                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-4 object-cover rounded pointer-events-none"
                                                                />
                                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                                            </div>
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                value={addressFormData.phone}
                                                                onChange={handleAddressInputChange}
                                                                className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-end gap-3">
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowAddressForm(false)}
                                                            className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                                        >
                                                            İptal
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                                                        >
                                                            Kaydet
                                                        </button>
                                                    </div>
                                                </form>
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
