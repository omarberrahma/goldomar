import React from 'react';

const AboutPage = () => {
  return (
    <main className="pt-32 pb-24 px-6 bg-onyx-solid min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gold-500 font-semibold mb-4 block">إرث يمتد عبر الأجيال</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">حكايتنا الأزلية</h1>
          <div className="w-24 h-[1px] bg-gold-500 mx-auto"></div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gold-400 mb-6">من دمشق العريقة إلى قلب الجزائر</h2>
            <p className="text-zinc-400 leading-relaxed text-lg mb-6 font-light">
              بدأت رحلتنا في أزقة دمشق القديمة، حيث كانت المطارق تعزف ألحانها على الذهب الخالص. حملنا معنا أسرار الصياغة اليدوية العريقة لنستقر في الجزائر، مانحين كل قطعة روحاً شرقية أصيلة ولمسة جزائرية ساحرة.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg font-light">
              في "إيليت عمر"، نحن لا نصنع المجوهرات فحسب، بل نسكُب التاريخ والجمال في قوالب من الذهب والأحجار الكريمة، لتكون إرثاً تتناقله الأجيال بكل فخر.
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gold-500/10 blur-3xl rounded-full"></div>
             <img src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80" alt="Artisan Craftsmanship" className="rounded-2xl border border-gold-500/20 relative z-10 shadow-2xl" />
          </div>
        </section>

        <section className="bg-onyx-card border border-gold-500/10 p-12 rounded-3xl mb-24 text-center">
            <h3 className="text-2xl font-serif font-bold text-white mb-6 italic">"المجوهرات هي الفن الوحيد الذي يمكن للمرء أن يرتديه."</h3>
            <p className="text-gold-400 font-semibold uppercase tracking-widest text-sm">— عائلة عمر</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
                <i className="fa-solid fa-gem text-3xl text-gold-500 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-2">أحجار منتقاة</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">نختار كل حجر كريم بعناية فائقة، لضمان نقاء اللون وبريق لا يخبو.</p>
            </div>
            <div>
                <i className="fa-solid fa-fire-burner text-3xl text-gold-500 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-2">صياغة يدوية</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">كل قطعة تمر بمراحل صياغة يدوية دقيقة تمنحها خصوصية فريدة.</p>
            </div>
            <div>
                <i className="fa-solid fa-scroll text-3xl text-gold-500 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-2">إرث موثق</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">نمنح كل قطعة شهادة توثق هويتها وقيمتها الفنية والمادية.</p>
            </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
