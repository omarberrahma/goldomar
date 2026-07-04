import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { totalQty } = useCart();
    const [prices, setPrices] = useState({ g24: 11240, g22: 10310, g18: 8430 });
    const location = useLocation();

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

    const navLinks = [
        { name: 'الرئيسية', path: '/' },
        { name: 'المجموعات', path: '/catalog' },
        { name: 'حكايتنا', path: '/about' },
        { name: 'صالات العرض', path: '/location' },
        { name: 'تواصل معنا', path: '/contact' },
    ];

    return (
        <>
            {/* Ticker */}
            <div className="relative z-50 bg-[#0a0a0c] border-b border-gold-900/20 py-2.5 text-[11px] text-zinc-400 font-medium tracking-[0.1em] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 text-gold-400">
                        <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span>مؤشرات الذهب اللحظية</span>
                    </div>
                    <div className="flex gap-6 overflow-hidden max-w-full">
                        <div className="animate-marquee whitespace-nowrap flex gap-6">
                            <span>عيار 24: <strong className="text-[#FCF6BA]">{prices.g24.toLocaleString()} د.ج</strong></span>
                            <span>عيار 22: <strong className="text-[#FCF6BA]">{prices.g22.toLocaleString()} د.ج</strong></span>
                            <span>عيار 18: <strong className="text-[#FCF6BA]">{prices.g18.toLocaleString()} د.ج</strong></span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <span className="italic">توصيل ملكي فاخر ومضمون للمجوهرات النادرة</span>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="sticky top-0 z-40 bg-onyx-solid/80 backdrop-blur-xl border-b border-onyx-border/80 px-6 py-4 transition-all duration-500">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex flex-col items-center group">
                        <span className="text-2xl md:text-3xl font-serif font-bold tracking-[0.15em] gold-metal-text transition-all duration-700 group-hover:tracking-[0.25em]">ELITE OMAR</span>
                        <span className="text-[8px] uppercase tracking-[0.4em] text-gold-400 mt-1 font-semibold">Haute Joaillerie</span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`${location.pathname === link.path ? 'text-gold-400' : 'text-zinc-400'} hover:text-gold-300 transition-colors duration-300`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-5">
                        <a href="https://wa.me/213555555555" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 border border-gold-500/20 bg-gold-500/5 hover:bg-gold-500/10 text-gold-400 px-5 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300">
                            <i className="fab fa-whatsapp text-sm"></i>
                            <span>استشارة خاصة</span>
                        </a>

                        <Link to="/cart" className="relative p-2.5 rounded-full bg-onyx-light border border-onyx-border hover:border-gold-500/40 transition-all duration-500 group">
                            <i className="fa-solid fa-bag-shopping text-zinc-400 group-hover:text-gold-400 transition-colors duration-300"></i>
                            {totalQty > 0 && (
                                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-gold-500 to-gold-700 text-black text-[9px] font-extrabold rounded-full h-5.5 w-5.5 flex items-center justify-center border border-black">
                                    {totalQty}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
