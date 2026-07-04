import React from 'react';

const Features = () => {
    return (
        <section className="relative z-10 bg-[#09090c] border-y border-onyx-border/80 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full border border-gold-500/10 flex items-center justify-center mb-6 group-hover:border-gold-500/40 transition-colors duration-500">
                        <i className="fa-solid fa-ribbon text-2xl text-gold-500"></i>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 tracking-widest uppercase">ذهب خالص منتقى</h4>
                    <p className="text-[10px] text-zinc-500 leading-relaxed max-w-[150px]">مختوم بختم الجودة الملكي لعيارات 18 و 24 قيراط</p>
                </div>
                <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full border border-gold-500/10 flex items-center justify-center mb-6 group-hover:border-gold-500/40 transition-colors duration-500">
                        <i className="fa-solid fa-truck-ramp-box text-2xl text-gold-500"></i>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 tracking-widest uppercase">توصيل ملكي مضمون</h4>
                    <p className="text-[10px] text-zinc-500 leading-relaxed max-w-[150px]">تغليف مخملي فاخر وتسليم شخصي لجميع الولايات</p>
                </div>
                <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full border border-gold-500/10 flex items-center justify-center mb-6 group-hover:border-gold-500/40 transition-colors duration-500">
                        <i className="fa-solid fa-crown text-2xl text-gold-500"></i>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 tracking-widest uppercase">اقتناء حصري</h4>
                    <p className="text-[10px] text-zinc-500 leading-relaxed max-w-[150px]">تجربة اقتناء فريدة مع استشارة فنية مخصصة</p>
                </div>
                <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-full border border-gold-500/10 flex items-center justify-center mb-6 group-hover:border-gold-500/40 transition-colors duration-500">
                        <i className="fa-solid fa-award text-2xl text-gold-500"></i>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 tracking-widest uppercase">شهادات توثيق عالمية</h4>
                    <p className="text-[10px] text-zinc-500 leading-relaxed max-w-[150px]">كل قطعة مرصعة تأتي مع شهادة فحص ونقاء GIA الدولية</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
