import React from 'react';

const Hero = () => {
    return (
        <header className="relative min-h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.7), rgba(5, 5, 5, 0.95)), url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1800&q=90')` }}></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full filter blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold-400/5 rounded-full filter blur-[100px] animate-pulse-glow"></div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <span className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-400 font-semibold mb-6">
                    <i className="fa-solid fa-gem text-[10px] animate-bounce"></i> حصرية ومرصعة يدوياً بعناية
                </span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight md:leading-none mb-6 animate-slide-up">
                    صياغة مبهِرة تليقُ <br /> <span className="gold-metal-text font-serif italic">بجمالِكِ الأبدي</span>
                </h1>
                <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    نصنع قطعاً فنية فريدة من أرقى درجات الذهب عيار 18 و 24 قيراط مرصعة بأجود أحجار الألماس والزمرد الموثق بشهادات فحص عالمية.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <a href="#catalog" className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2">
                        <span>تصفح المجموعة الحصرية</span>
                        <i className="fa-solid fa-arrow-left text-[10px]"></i>
                    </a>
                    <a href="#ring-finder" className="px-8 py-4 border border-gold-500/30 hover:border-gold-500 bg-black/40 hover:bg-gold-500/10 text-gold-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2">
                        <i className="fa-solid fa-ruler"></i>
                        <span>مقياس الخاتم التفاعلي</span>
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500">انزل للأسفل</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-gold-500 to-transparent"></div>
            </div>
        </header>
    );
};

export default Hero;
