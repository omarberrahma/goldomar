import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { totalQty, toggleCart } = useCart();
    const [prices, setPrices] = useState({ g24: 11240, g22: 10310, g18: 8430 });

    useEffect(() => {
        const interval = setInterval(() => {
            const fluctuate = (val) => val + (Math.random() * 40 - 20);
            setPrices(prev => ({
                g24: Math.round(fluctuate(prev.g24)),
                g22: Math.round(fluctuate(prev.g22)),
                g18: Math.round(fluctuate(prev.g18)),
            }));
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Ticker */}
            <div className="relative z-50 bg-[#0a0a0c] border-b border-gold-900/20 py-2.5 text-[11px] text-zinc-400 font-medium tracking-wider overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 text-gold-400">
                        <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span>أسعار الذهب اللحظية المحدثة (مباشر)</span>
                    </div>
                    <div className="flex gap-6 overflow-hidden max-w-full">
                        <div className="animate-marquee whitespace-nowrap flex gap-6">
                            <span>عيار 24: <strong className="text-[#FCF6BA]">{prices.g24.toLocaleString()} د.ج</strong></span>
                            <span>عيار 22: <strong className="text-[#FCF6BA]">{prices.g22.toLocaleString()} د.ج</strong></span>
                            <span>عيار 18: <strong className="text-[#FCF6BA]">{prices.g18.toLocaleString()} د.ج</strong></span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <span>توصيل مجاني ومؤمن للمجوهرات الفاخرة</span>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="sticky top-0 z-40 bg-onyx-solid/80 backdrop-blur-xl border-b border-onyx-border/80 px-6 py-4 transition-all duration-300">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="#" className="flex flex-col items-center group">
                        <span className="text-2xl md:text-3xl font-serif font-bold tracking-widest gold-metal-text transition-all duration-500 group-hover:tracking-[0.2em]">ELITE OMAR</span>
                        <span className="text-[8px] uppercase tracking-[0.3em] text-gold-400 mt-0.5">Haute Joaillerie</span>
                    </a>

                    <div className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
                        <a href="#" className="text-gold-400 hover:text-white transition-colors duration-300">الرئيسية</a>
                        <a href="#catalog" className="text-zinc-400 hover:text-gold-400 transition-colors duration-300">كتالوج المجوهرات</a>
                        <a href="#ring-finder" className="text-zinc-400 hover:text-gold-400 transition-colors duration-300">محدد المقاس التفاعلي</a>
                        <a href="#why-us" className="text-zinc-400 hover:text-gold-400 transition-colors duration-300">لماذا النخبة؟</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://wa.me/213555555555" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/15 text-emerald-400 px-4 py-2 text-[11px] font-bold tracking-wider rounded-full transition-all duration-300">
                            <i className="fab fa-whatsapp text-sm"></i>
                            <span>اتصال فوري</span>
                        </a>

                        <button onClick={toggleCart} className="relative p-2.5 rounded-full bg-onyx-light border border-onyx-border hover:border-gold-500/40 transition-all duration-300 cursor-pointer group">
                            <i className="fa-solid fa-bag-shopping text-zinc-400 group-hover:text-gold-400 transition-colors duration-300"></i>
                            {totalQty > 0 && (
                                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-gold-500 to-gold-700 text-black text-[9px] font-extrabold rounded-full h-5.5 w-5.5 flex items-center justify-center border border-black animate-pulse">
                                    {totalQty}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
