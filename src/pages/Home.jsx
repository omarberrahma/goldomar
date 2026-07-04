import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import RingFinder from '../components/RingFinder';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <section className="py-24 px-6 bg-onyx-solid">
        <div className="max-w-7xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-gold-500 font-semibold mb-4 block">فلسفة النخبة</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">الجمال الذي يتجاوز الزمن</h2>
            <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed text-lg font-light">
                نحن نؤمن أن كل قطعة مجوهرات هي حكاية فريدة، صاغتها أيدٍ ماهرة بشغف يتوارثه الأجيال. نجمع بين عراقة التصميم الدمشقي وحداثة الذوق الجزائري الرفيع.
            </p>
        </div>
      </section>
      <About />
      <RingFinder />
    </main>
  );
};

export default Home;
