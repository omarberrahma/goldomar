import React from 'react';

const About = () => {
    return (
        <section id="why-us" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold-600/20 to-transparent filter blur-2xl rounded-full"></div>
                    <img src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80" alt="صياغة الذهب الفاخر" className="rounded-3xl border border-gold-500/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative z-10 animate-float" />
                    <div className="absolute -bottom-6 -right-6 bg-onyx-card border border-gold-500/20 p-6 rounded-2xl hidden md:block z-20">
                        <span className="text-3xl font-serif font-bold text-gold-400">100%</span>
                        <span className="text-xs text-zinc-400 block mt-1">تعبئة وسلامة شحنات الذهب</span>
                    </div>
                </div>
                <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">بصمة النخبة العائلية</span>
                    <h2 className="text-4xl font-serif font-bold text-white mt-2 mb-6">سر الصياغة الدمشقية العريقة بالجزائر</h2>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                        نحن لا نبيع مجوهرات فحسب، بل نصمم إرثاً ينتقل عبر الأجيال. نجمع في قطعنا بين عراقة الفن القديم وأدق تقنيات الفحص الأمني الحديثة لضمان نقاوة تامة لكل غرام.
                    </p>

                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-gold-600/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white mb-1">تدقيق ونقاء خاضع للفحص المجهري</h4>
                                <p className="text-[12px] text-zinc-500">يتم فحص كل حجر كريم وتوزينه تحت أعلى درجات التكبير البصري.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-gold-600/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white mb-1">تسليم آمن ومواكب قانونياً</h4>
                                <p className="text-[12px] text-zinc-500">نلتزم بتوثيق كافة الفواتير وبطاقات النقاوة الرسمية لضمان حقوقك الاستثمارية.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
