import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-onyx-solid border-t border-onyx-border mt-24 py-16 px-6 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                <div>
                    <a href="#" className="flex flex-col items-start mb-6">
                        <span className="text-2xl font-serif font-bold tracking-widest gold-metal-text">ELITE OMAR</span>
                        <span className="text-[8px] uppercase tracking-[0.3em] text-gold-400 mt-0.5">Haute Joaillerie</span>
                    </a>
                    <p className="text-zinc-500 text-xs leading-relaxed max-w-xs mb-6">
                        رؤيتنا تتلخص في تحويل المعادن النفيسة والأحجار الكريمة النادرة إلى رموز خالدة تعزز الهوية والأناقة الفردية.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-8 h-8 rounded-full bg-onyx-light border border-onyx-border text-zinc-400 hover:text-gold-400 flex items-center justify-center transition-colors"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="w-8 h-8 rounded-full bg-onyx-light border border-onyx-border text-zinc-400 hover:text-gold-400 flex items-center justify-center transition-colors"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="w-8 h-8 rounded-full bg-onyx-light border border-onyx-border text-zinc-400 hover:text-gold-400 flex items-center justify-center transition-colors"><i className="fab fa-tiktok"></i></a>
                    </div>
                </div>
                <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-6">روابط سريعة</h4>
                    <ul className="space-y-3 text-xs text-zinc-400">
                        <li><a href="#catalog" className="hover:text-white transition-colors">مجموعة المجوهرات</a></li>
                        <li><a href="#ring-finder" className="hover:text-white transition-colors">محدد المقاس التفاعلي</a></li>
                        <li><a href="#why-us" className="hover:text-white transition-colors">تفاصيل وعراقة الصياغة</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">الشروط والأحكام الاستثمارية للذهب</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-6">موقع المحل الفعلي والتواصل</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                        <i className="fa-solid fa-map-location-dot text-gold-400 mr-1"></i> وهران، الجزائر (المحل الرئيسي)
                    </p>
                    <p className="text-zinc-400 text-xs mb-2">
                        <i className="fa-solid fa-envelope text-gold-400 mr-1"></i> contact@elite-omar.com
                    </p>
                    <p className="text-zinc-400 text-xs">
                        <i className="fa-solid fa-phone text-gold-400 mr-1"></i> +213 555 55 55 55
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-onyx-border/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-zinc-600">
                <p>&copy; 2026 مجوهرات النخبة الفاخرة (Elite Omar). جميع الحقوق محفوظة قانونياً لجمهورية الجزائر.</p>
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><i className="fa-solid fa-shield-halved text-emerald-500"></i> خوادم مشفرة بالكامل</span>
                    <span>تصميم وتطوير هندسي متميز</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
