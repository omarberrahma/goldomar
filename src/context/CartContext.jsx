import React, { createContext, useContext, useState } from 'react';
import { PRODUCT_DB } from '../data/products';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [toasts, setToasts] = useState([]);

    const addToast = (title, body) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts(prev => [...prev, { id, title, body }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3500);
    };

    const addToCart = (id) => {
        const product = PRODUCT_DB.find(p => p.id === id);
        if (!product) return;

        setCart(prev => {
            const existing = prev.find(item => item.id === id);
            if (existing) {
                return prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item);
            }
            return [...prev, { ...product, qty: 1 }];
        });
        addToast("تمت الإضافة للمقتنيات", `${product.name} أصبح الآن بالسلة.`);
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateCartQty = (id, delta) => {
        setCart(prev => {
            const item = prev.find(i => i.id === id);
            if (!item) return prev;
            const newQty = item.qty + delta;
            if (newQty <= 0) {
                return prev.filter(i => i.id !== id);
            }
            return prev.map(i => i.id === id ? { ...i, qty: newQty } : i);
        });
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const openProductModal = (product) => setSelectedProduct(product);
    const closeProductModal = () => setSelectedProduct(null);

    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateCartQty,
            isCartOpen,
            toggleCart,
            totalQty,
            totalPrice,
            selectedProduct,
            openProductModal,
            closeProductModal,
            toasts,
            addToast
        }}>
            {children}
        </CartContext.Provider>
    );
};
