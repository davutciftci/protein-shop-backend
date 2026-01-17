import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useCart } from '../../context/CartContext';
import CartSidepanel from '../cart/CartSidepanel';
import ScrollToTop from '../ScrollToTop';
import ScrollToTopButton from '../ScrollToTopButton';

export default function AuthLayout() {
    const { showAlert } = useCart();

    return (
        <>
            <ScrollToTop />
            <ScrollToTopButton />
            {showAlert && (
                <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
                    ✓ Sepete eklendi
                </div>
            )}
            <div className="min-h-screen flex flex-col bg-white">
                <Navbar />
                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
            <CartSidepanel />
        </>
    );
}
