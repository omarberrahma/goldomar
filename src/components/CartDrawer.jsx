import React from 'react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_PHONE_NUMBER } from '../data/products';

const CartDrawer = () => {
    const { cart, isCartOpen, toggleCart, updateCartQty, removeFromCart, totalPrice, addToast } = useCart();

    const checkoutViaWhatsApp = () => {
        if (cart.length === 0) {
            addToast("حقيبة المقتنيات فارغة", "يرجى إضافة قطع فنية فريدة لتأكيد طلبك.");
            return;
        }

        let textPayload = `*طلب مجوهرات جديد - بوتيك النخبة الفاخرة*\n`;
        textPayload += `===============================\n`;

        cart.forEach((item, index) => {
            const sanitizedName = item.name.replace(/[^\w\s\u0600-\u06FF]/g, '');
            textPayload += `${index + 1}. *${sanitizedName}*\n`;
            textPayload += `   الكمية المطلوبة: ${parseInt(item.qty)}\n`;
            textPayload += `   التكلفة التقديرية: ${(item.price * item.qty).toLocaleString()} د.ج\n`;
        });

        textPayload += `===============================\n`;
        textPayload += `*إجمالي الفاتورة الإفتراضي:* ${totalPrice.toLocaleString()} د.ج\n\n`;
        textPayload += `يرجى مراجعة وتجهيز الفواتير وبطاقات النقاء وتأكيد التوفر للتوصيل.`;

        const encodedText = encodeURIComponent(textPayload);
        const targetUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=${encodedText}`;

        const isolatedWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');
        if (isolatedWindow) isolatedWindow.opener = null;
    };

    return (
        <div className={`fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex justify-end transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} ${!isCartOpen && 'pointer-events-none'}`}>
            <div className="bg-onyx-card w-full max-w-md h-full p-8 flex flex-col justify-between border-l border-gold-900/10 pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.9)]">
                <div>
                    <div className="flex justify-between items-center border-b border-onyx-border pb-5 mb-8">
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl font-serif font-bold text-white">حقيبة المقتنيات</h3>
                            <span className="text-[10px] uppercase bg-gold-600/10 text-gold-400 px-2 py-0.5 rounded border border-gold-500/20">آمنة 100%</span>
                        </div>
                        <button onClick={toggleCart} className="text-zinc-500 hover:text-white text-3xl transition-colors cursor-pointer">&times;</button>
                    </div>

                    <div className="space-y-6 overflow-y-auto max-h-[55vh] pr-2">
                        {cart.map(item => (
                            <div key={item.id} className="flex items-center justify-between gap-4 border-b border-onyx-border pb-4">
                                <div className="flex items-center gap-3">
                                    <img src={item.img} className="w-12 h-12 object-cover rounded-lg bg-zinc-950 border border-onyx-border" alt={item.name} />
                                    <div>
                                        <h4 className="text-xs font-bold text-white max-w-[150px] truncate">{item.name}</h4>
                                        <span className="text-[10px] text-zinc-500">{item.price.toLocaleString()} د.ج</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center bg-onyx-solid rounded-lg border border-onyx-border px-1">
                                        <button onClick={() => updateCartQty(item.id, -1)} className="w-6 h-6 text-zinc-400 hover:text-white">-</button>
                                        <span className="text-xs text-white px-2 font-mono">{item.qty}</span>
                                        <button onClick={() => updateCartQty(item.id, 1)} className="w-6 h-6 text-zinc-400 hover:text-white">+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-zinc-600 hover:text-red-400 text-xs transition-colors">
                                        <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-onyx-border pt-6">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-zinc-400 text-sm">القيمة الإجمالية المقدرة:</span>
                        <span className="text-2xl font-mono font-bold text-gold-300">{totalPrice.toLocaleString()} د.ج</span>
                    </div>

                    <button onClick={checkoutViaWhatsApp} className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_4px_15px_rgba(16,185,129,0.2)] cursor-pointer">
                        <i className="fab fa-whatsapp text-lg"></i>
                        <span>إرسال الطلب الآمن وتأكيده عبر واتساب</span>
                    </button>
                    <span className="text-[10px] text-zinc-500 block text-center mt-3">
                        <i className="fa-solid fa-lock text-[9px] mr-1"></i> يتم مراجعة الأسعار وتأكيدها بدقة مع العميل فور الإرسال
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
