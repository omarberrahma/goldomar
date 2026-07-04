import React from 'react';

const LocationPage = () => {
  return (
    <main className="pt-32 pb-24 px-6 bg-onyx-solid min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gold-500 font-semibold mb-4 block">فروعنا</span>
          <h1 className="text-5xl font-serif font-bold text-white mb-6">صالات العرض</h1>
          <div className="w-20 h-[1px] bg-gold-500 mx-auto"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-onyx-card border border-gold-500/10 p-10 rounded-3xl relative overflow-hidden group hover:border-gold-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 blur-3xl rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                    <span className="text-gold-400 text-xs font-bold uppercase tracking-widest block mb-4">المركز الرئيسي</span>
                    <h3 className="text-3xl font-serif font-bold text-white mb-6">وهران، الجزائر</h3>
                    <p className="text-zinc-400 mb-8 leading-relaxed">
                        يقع بوتيك النخبة في قلب مدينة وهران التاريخية، حيث نعرض أكثر قطعنا ندرة وفخامة في جو من الخصوصية والراحة.
                    </p>

                    <div className="space-y-4 mb-10">
                        <div className="flex gap-4">
                            <i className="fa-solid fa-map-marker-alt text-gold-500 mt-1"></i>
                            <span className="text-zinc-300 text-sm">حي العقيد لطفي، المجمع التجاري الفاخر، وهران</span>
                        </div>
                        <div className="flex gap-4">
                            <i className="fa-solid fa-clock text-gold-500 mt-1"></i>
                            <div className="text-sm">
                                <p className="text-zinc-300">السبت - الخميس: 10:00 صباحاً - 8:00 مساءً</p>
                                <p className="text-zinc-500 text-[11px] mt-1">الجمعة: مغلق (متاح للمواعيد الخاصة فقط)</p>
                            </div>
                        </div>
                    </div>

                    <button className="px-8 py-3 border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-black text-[11px] font-bold uppercase tracking-widest transition-all duration-300">
                        فتح في خرائط جوجل
                    </button>
                </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-onyx-border h-[500px] relative">
                {/* Simulated Map Placeholder */}
                <div className="absolute inset-0 bg-[#0a0a0c] flex items-center justify-center">
                    <div className="text-center">
                        <i className="fa-solid fa-map-location-dot text-6xl text-gold-500/20 mb-4"></i>
                        <p className="text-zinc-600 text-sm tracking-widest uppercase italic">خريطة تفاعلية قادمة</p>
                    </div>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
            </div>
        </div>

        <section className="max-w-4xl mx-auto text-center">
            <h4 className="text-xl font-serif font-bold text-white mb-6">هل تفضل لقاءً خاصاً؟</h4>
            <p className="text-zinc-400 text-sm mb-8">نقدم خدمة "صالة العرض الخاصة" لعملائنا المميزين، حيث يمكنكم استعراض القطع في بيئة هادئة ومخصصة تماماً.</p>
            <a href="/contact" className="inline-block px-10 py-4 bg-white/5 hover:bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest transition-all">احجز موعدك الخاص الآن</a>
        </section>
      </div>
    </main>
  );
};

export default LocationPage;
