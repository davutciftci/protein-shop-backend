import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { CartProvider } from './context/CartContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
)

