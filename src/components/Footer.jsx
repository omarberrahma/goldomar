import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-onyx-solid border-t border-onyx-border mt-24 py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                <div>
                    <Link to="/" className="flex flex-col items-start mb-8">
                        <span className="text-3xl font-serif font-bold tracking-widest gold-metal-text">ELITE OMAR</span>
                        <span className="text-[9px] uppercase tracking-[0.4em] text-gold-400 mt-1 font-bold">Haute Joaillerie</span>
                    </Link>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-8 font-light">
                        نسعى جاهدين لتحويل أندر المعادن والأحجار الكريمة إلى رموز خالدة تعبر عن الهوية والأناقة المطلقة، مع الحفاظ على إرثنا العريق في فن الصياغة اليدوية.
                    </p>
                    <div className="flex gap-5">
                        <a href="#" className="w-10 h-10 rounded-full bg-onyx-light border border-onyx-border text-zinc-400 hover:text-gold-400 flex items-center justify-center transition-all duration-300 hover:border-gold-500/30"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-onyx-light border border-onyx-border text-zinc-400 hover:text-gold-400 flex items-center justify-center transition-all duration-300 hover:border-gold-500/30"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-onyx-light border border-onyx-border text-zinc-400 hover:text-gold-400 flex items-center justify-center transition-all duration-300 hover:border-gold-500/30"><i className="fab fa-tiktok"></i></a>
                    </div>
                </div>
                <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-bold mb-10">استكشاف البوتيك</h4>
                    <ul className="space-y-4 text-xs text-zinc-400 uppercase tracking-widest">
                        <li><Link to="/catalog" className="hover:text-white transition-colors duration-300">المجموعات الحصرية</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors duration-300">قصة إرثنا العريق</Link></li>
                        <li><Link to="/location" className="hover:text-white transition-colors duration-300">صالات العرض الخاصة</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors duration-300">خدمة العملاء الراقية</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-bold mb-10">التواصل والمواعيد</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed mb-6 font-light">
                        <i className="fa-solid fa-map-location-dot text-gold-500 mr-2"></i> حي العقيد لطفي، المجمع الفاخر، وهران، الجزائر
                    </p>
                    <p className="text-zinc-400 text-xs mb-4 font-light">
                        <i className="fa-solid fa-envelope text-gold-500 mr-2"></i> atelier@elite-omar.com
                    </p>
                    <p className="text-white text-sm font-mono tracking-wider">
                        <i className="fa-solid fa-phone text-gold-500 mr-2"></i> +213 555 55 55 55
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-onyx-border/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
                <p>&copy; 2026 إيليت عمر للمجوهرات الفاخرة. جميع الحقوق محفوظة لدار النخبة.</p>
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2">
                        <i className="fa-solid fa-crown text-gold-500/50"></i>
                        خصوصية وسرية تامة ممتدة
                    </span>
                    <span className="text-zinc-700">تصميم وتطوير هندسي متميز</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
