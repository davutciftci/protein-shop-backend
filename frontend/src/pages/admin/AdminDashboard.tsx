export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500">Toplam Ürün</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-2">-</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500">Toplam Kategori</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-2">-</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500">Toplam Sipariş</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-2">-</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-sm font-medium text-gray-500">Toplam Kullanıcı</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-2">-</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Hoş Geldiniz</h2>
                <p className="text-gray-600">
                    Admin paneline hoş geldiniz. Sol menüden ürün, kategori ve sipariş yönetimi yapabilirsiniz.
                </p>
            </div>
        </div>
    );
}
