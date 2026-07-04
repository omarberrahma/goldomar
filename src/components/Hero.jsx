import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <header className="relative min-h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.6), rgba(5, 5, 5, 0.9)), url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1800&q=90')` }}></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full filter blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold-400/5 rounded-full filter blur-[100px] animate-pulse-glow"></div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                <span className="inline-flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.5em] text-gold-400 font-bold mb-8">
                    <span className="w-8 h-[1px] bg-gold-500/50"></span>
                    إبداعات حصرية مصاغة يدوياً
                    <span className="w-8 h-[1px] bg-gold-500/50"></span>
                </span>
                <h1 className="text-6xl md:text-9xl font-serif font-bold text-white leading-tight md:leading-none mb-8 animate-slide-up">
                    فخامة ملكية تليقُ <br /> <span className="gold-metal-text font-serif italic">بجمالِكِ السرمدي</span>
                </h1>
                <p className="text-zinc-400 text-sm md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
                    ننسجُ من أرقى عيارات الذهب والماس قطعاً فنية تتجاوز مفهوم الزمن، لتكون شاهداً على أرقى لحظات العمر.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                    <Link to="/catalog" className="px-10 py-5 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 group">
                        <span>تصفح المجموعات الملكية</span>
                        <i className="fa-solid fa-arrow-left text-[10px] group-hover:-translate-x-2 transition-transform"></i>
                    </Link>
                    <Link to="/contact" className="px-10 py-5 border border-gold-500/30 hover:border-gold-500 bg-black/40 hover:bg-gold-500/10 text-gold-400 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-3">
                        <i className="fa-solid fa-calendar-check"></i>
                        <span>حجز موعد خاص</span>
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-10">
                <span className="text-[8px] uppercase tracking-[0.5em] text-zinc-500 font-bold">اكتشف المزيد</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
            </div>
        </header>
    );
};

export default Hero;
