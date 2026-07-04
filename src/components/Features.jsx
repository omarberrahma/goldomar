import React from 'react';

const Features = () => {
    return (
        <section className="relative z-10 bg-[#09090c] border-y border-onyx-border/80 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-ribbon text-2xl text-gold-500 mb-3"></i>
                    <h4 className="text-sm font-bold text-white mb-1">ذهب أصلي 100%</h4>
                    <p className="text-[11px] text-zinc-500">مختوم بشهادة الضمان الرسمية لعيارات 18k و 24k</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-truck-ramp-box text-2xl text-gold-500 mb-3"></i>
                    <h4 className="text-sm font-bold text-white mb-1">توصيل مؤمن بالكامل</h4>
                    <p className="text-[11px] text-zinc-500">تغليف فاخر مصفح وتوصيل لكامل الولايات</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-hand-holding-dollar text-2xl text-gold-500 mb-3"></i>
                    <h4 className="text-sm font-bold text-white mb-1">طرق دفع مرنة</h4>
                    <p className="text-[11px] text-zinc-500">تأكيد سريع للطلب عبر تطبيق واتساب المباشر</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-award text-2xl text-gold-500 mb-3"></i>
                    <h4 className="text-sm font-bold text-white mb-1">شهادة دولية معتمدة</h4>
                    <p className="text-[11px] text-zinc-500">كل قطعة ألماس تأتي بشهادة فحص ونقاء GIA</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
