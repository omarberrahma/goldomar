import React from 'react';

const ContactPage = () => {
  return (
    <main className="pt-32 pb-24 px-6 bg-onyx-solid min-h-screen">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-gold-500 font-semibold mb-4 block">تواصل خاص</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">دعوة إلى عالمنا الخاص</h1>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light">
            نسعد باستقبال استفساراتكم وترتيب مواعيد خاصة لاستعراض مجموعاتنا الحصرية. فريقنا متواجد دائماً لخدمتكم بأرقى المعايير.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-gold-600/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">اتصال هاتفي</span>
                <span className="text-white font-mono">+213 555 55 55 55</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-gold-600/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">البريد الإلكتروني</span>
                <span className="text-white">atelier@elite-omar.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-10 rounded-3xl border border-gold-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-3xl rounded-full"></div>
          <form className="relative z-10">
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div>
                <label className="text-[11px] uppercase tracking-widest text-gold-400 block mb-2 font-bold">الاسم الكريم</label>
                <input type="text" className="w-full bg-onyx-solid/50 border border-onyx-border rounded-lg px-4 py-3 text-white focus:border-gold-500/50 focus:outline-none transition-colors" placeholder="الاسم الكامل" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-gold-400 block mb-2 font-bold">البريد الإلكتروني</label>
                <input type="email" className="w-full bg-onyx-solid/50 border border-onyx-border rounded-lg px-4 py-3 text-white focus:border-gold-500/50 focus:outline-none transition-colors" placeholder="name@example.com" />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-gold-400 block mb-2 font-bold">الموضوع</label>
                <select className="w-full bg-onyx-solid/50 border border-onyx-border rounded-lg px-4 py-3 text-white focus:border-gold-500/50 focus:outline-none transition-colors appearance-none">
                    <option>ترتيب موعد خاص</option>
                    <option>استفسار عن طلب</option>
                    <option>تصميم قطعة خاصة</option>
                    <option>أخرى</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-gold-400 block mb-2 font-bold">رسالتكم</label>
                <textarea rows="4" className="w-full bg-onyx-solid/50 border border-onyx-border rounded-lg px-4 py-3 text-white focus:border-gold-500/50 focus:outline-none transition-colors" placeholder="كيف يمكننا خدمتكم؟"></textarea>
              </div>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl">
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
