import React from 'react';
import { useCart } from '../context/CartContext';

const ProductDetailModal = () => {
    const { selectedProduct, closeProductModal, addToCart } = useCart();

    if (!selectedProduct) return null;

    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300">
            <div className="bg-onyx-card max-w-3xl w-full rounded-3xl border border-gold-500/10 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)] relative">
                <button
                    onClick={closeProductModal}
                    className="absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 hover:bg-black text-zinc-400 hover:text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                    &times;
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative bg-zinc-950 aspect-square overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-l border-onyx-border">
                        <img
                            src={selectedProduct.img}
                            alt={selectedProduct.name}
                            className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    <div className="p-8 flex flex-col justify-between">
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-1">{selectedProduct.category}</span>
                            <h3 className="text-2xl font-serif font-bold text-white mb-3">{selectedProduct.name}</h3>
                            <span className="text-xl font-mono text-[#FCF6BA] font-extrabold block mb-6">{selectedProduct.price.toLocaleString()} د.ج</span>

                            <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                                {selectedProduct.desc}
                            </p>

                            <div className="bg-onyx-solid/60 p-4 rounded-xl border border-onyx-border space-y-2 mb-6">
                                <div className="flex justify-between text-xs">
                                    <span className="text-zinc-500 uppercase tracking-widest text-[9px]">العيار الملكي</span>
                                    <span className="text-zinc-300 font-medium">18 قيراط (خالص)</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-zinc-500 uppercase tracking-widest text-[9px]">حالة التوثيق</span>
                                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                        <i className="fa-solid fa-circle-check text-[10px]"></i> بختم الجودة المعتمد
                                    </span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-zinc-500 uppercase tracking-widest text-[9px]">الوزن التقديري</span>
                                    <span className="text-zinc-300 font-mono">~ 4.5 غرام</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                addToCart(selectedProduct.id);
                                closeProductModal();
                            }}
                            className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer"
                        >
                            اقتناء هذه القطعة
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;
