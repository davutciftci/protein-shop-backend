import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import AuthLayout from '../components/layout/AuthLayout';
import AccountLayout from '../components/layout/AccountLayout';
import CheckoutLayout from '../components/layout/CheckoutLayout';

import HomePage from '../pages/home/HomePage';
import ProductDetailPage from '../pages/products/ProductDetailPage';
import AllProductsPage from '../pages/products/AllProductsPage';
import ProteinPage from '../pages/categories/ProteinPage';
import ContactPage from '../pages/contact/ContactPage';
import ReviewsPage from '../pages/reviews/ReviewsPage';
import FAQPage from '../pages/faq/FAQPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import AccountPage from '../pages/account/AccountPage';
import OrderDetailPage from '../pages/orders/OrderDetailPage';
import AboutPage from '../pages/about/AboutPage';
import SalesAgreementPage from '../pages/policies/SalesAgreementPage';
import RefundPolicyPage from '../pages/policies/RefundPolicyPage';
import WorkPrinciplesPage from '../pages/policies/WorkPrinciplesPage';
import KVKKPage from '../pages/policies/KVKKPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'urun/:slug',
                element: <ProductDetailPage />,
            },
            {
                path: 'protein',
                element: <ProteinPage />,
            },
            {
                path: 'urunler',
                element: <AllProductsPage />,
            },
            {
                path: 'iletisim',
                element: <ContactPage />,
            },
            {
                path: 'yorumlar',
                element: <ReviewsPage />,
            },
            {
                path: 'S.S.S',
                element: <FAQPage />,
            },
            {
                path: 'hakkimizda',
                element: <AboutPage />,
            },
            {
                path: 'sozlesme',
                element: <SalesAgreementPage />,
            },
            {
                path: 'iade',
                element: <RefundPolicyPage />,
            },
            {
                path: 'ilkelerimiz',
                element: <WorkPrinciplesPage />,
            },
            {
                path: 'kvkk',
                element: <KVKKPage />,
            }
        ]
    },
    {
        path: '/giris',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            }
        ]
    },
    {
        path: '/kayit',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <RegisterPage />,
            }
        ]
    },
    {
        path: '/hesabim',
        element: <AccountLayout />,
        children: [
            {
                index: true,
                element: <AccountPage />,
            }
        ]
    },
    {
        path: '/siparis/:orderId',
        element: <AccountLayout />,
        children: [
            {
                index: true,
                element: <OrderDetailPage />,
            }
        ]
    },
    {
        path: '/odeme',
        element: <CheckoutLayout />,
    }
]);

