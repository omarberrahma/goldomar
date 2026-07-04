import React, { useState } from 'react';
import { PRODUCT_DB } from '../data/products';
import ProductCard from './ProductCard';

const Catalog = () => {
    const [currentFilter, setCurrentFilter] = useState('all');

    const filteredProducts = currentFilter === 'all'
        ? PRODUCT_DB
        : PRODUCT_DB.filter(p => p.category === currentFilter);

    const filters = [
        { id: 'all', label: 'الكل' },
        { id: 'خواتم', label: 'خواتم الزواج والخطوبة' },
        { id: 'قلادات', label: 'قلادات وسلاسل' },
        { id: 'أساور', label: 'أساور وعقود' }
    ];

    return (
        <section id="catalog" className="relative z-10 max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
            <div className="text-center mb-16">
                <span className="text-xs uppercase tracking-[0.4em] text-gold-500 font-semibold">استعرض التحف الفنية</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2 mb-4">أرقى مجموعات الموسم</h2>
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>

                <div className="flex justify-center flex-wrap gap-3 mt-10">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setCurrentFilter(filter.id)}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                                currentFilter === filter.id
                                ? "bg-gold-500 text-black shadow-[0_4px_15px_rgba(212,175,55,0.2)]"
                                : "bg-onyx-light border border-onyx-border text-zinc-400 hover:text-white hover:border-gold-500/50"
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Catalog;
