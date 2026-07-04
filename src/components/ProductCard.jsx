import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart, openProductModal } = useCart();

    return (
        <div className="bg-onyx-card border border-onyx-border hover:border-gold-500/30 rounded-3xl overflow-hidden group transition-all duration-500 hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)] flex flex-col justify-between">
            <div className="relative overflow-hidden aspect-square bg-zinc-950">
                <img
                    src={product.img}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <button
                        onClick={() => openProductModal(product)}
                        className="px-5 py-2.5 bg-white/15 hover:bg-gold-500/80 hover:text-black text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full backdrop-blur-md transition-all duration-500 w-full cursor-pointer"
                    >
                        اكتشف التفاصيل الملكية
                    </button>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <span className="text-[9px] text-gold-400 tracking-widest uppercase font-extrabold">{product.category}</span>
                    <h3 className="text-lg font-serif font-bold text-white mt-1.5 mb-2 group-hover:text-gold-300 transition-colors duration-300">{product.name}</h3>
                </div>
                <div className="mt-6 pt-4 border-t border-onyx-border/80 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[9px] text-zinc-500 uppercase">السعر التقديري</span>
                        <span className="text-md font-mono text-[#FCF6BA] font-bold">{product.price.toLocaleString()} د.ج</span>
                    </div>
                    <button
                        onClick={() => addToCart(product.id)}
                        className="w-10 h-10 rounded-full bg-onyx-light hover:bg-gold-500 hover:text-black border border-onyx-border hover:border-gold-500 flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:scale-110"
                    >
                        <i className="fa-solid fa-plus text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
