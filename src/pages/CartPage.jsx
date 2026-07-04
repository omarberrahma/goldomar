import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateCartQty, checkoutViaWhatsApp } = useCart();

  const finalPriceTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  if (cart.length === 0) {
    return (
      <main className="pt-32 pb-24 px-6 bg-onyx-solid min-h-screen flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full border border-gold-500/10 flex items-center justify-center mb-10">
          <i className="fa-solid fa-bag-shopping text-4xl text-gold-500/20"></i>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">حقيبة المقتنيات فارغة</h1>
        <p className="text-zinc-500 max-w-md mx-auto mb-12 font-light leading-relaxed tracking-wide">
          لم يتم اختيار أي تحف فنية بعد. ندعوكم لاستكشاف مجموعتنا الحصرية المنسوجة من الذهب والماس.
        </p>
        <Link to="/catalog" className="px-12 py-5 bg-gradient-to-r from-gold-600 to-gold-400 text-black text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl">
          استعراض المجموعات الملكية
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 px-6 bg-onyx-solid min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-16 border-b border-onyx-border/50 pb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-gold-400 font-semibold mb-4 block">مختاراتك الحصرية</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">حقيبة المقتنيات</h1>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">إجمالي القطع</span>
            <span className="text-3xl font-serif text-gold-400">{cart.length}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <div key={item.id} className="bg-onyx-card border border-onyx-border p-6 rounded-2xl flex flex-col md:flex-row gap-8 items-center group hover:border-gold-500/20 transition-all">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-xl bg-zinc-950 border border-onyx-border">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex-grow flex flex-col md:flex-row justify-between w-full">
                  <div>
                    <span className="text-[10px] text-gold-400 uppercase tracking-widest font-bold mb-1 block">{item.category}</span>
                    <h3 className="text-xl font-serif font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-zinc-500 text-xs max-w-sm mb-4 line-clamp-2">{item.desc}</p>
                    <div className="flex items-center gap-4">
                        <span className="text-[#FCF6BA] font-mono font-bold">{item.price.toLocaleString()} د.ج</span>
                        <div className="flex items-center bg-onyx-solid rounded-lg border border-onyx-border px-1">
                            <button onClick={() => updateCartQty(item.id, -1)} className="w-8 h-8 text-zinc-400 hover:text-white transition-colors">-</button>
                            <span className="text-xs text-white px-4 font-mono">{item.qty}</span>
                            <button onClick={() => updateCartQty(item.id, 1)} className="w-8 h-8 text-zinc-400 hover:text-white transition-colors">+</button>
                        </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-between items-end mt-6 md:mt-0">
                    <span className="text-xl font-mono text-white font-bold">{(item.price * item.qty).toLocaleString()} د.ج</span>
                    <button onClick={() => removeFromCart(item.id)} className="text-zinc-600 hover:text-red-400 transition-colors text-sm flex items-center gap-2">
                        <i className="fa-regular fa-trash-can"></i>
                        <span>إزالة</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-1">
            <div className="glass-panel p-8 rounded-3xl border border-gold-500/10 sticky top-32">
                <h3 className="text-xl font-serif font-bold text-white mb-8 border-b border-onyx-border pb-4">ملخص الاقتناء</h3>

                <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm">
                        <span className="text-zinc-500">القيمة الإجمالية للقطع</span>
                        <span className="text-zinc-300">{finalPriceTotal.toLocaleString()} د.ج</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-zinc-500">التوصيل الملكي</span>
                        <span className="text-emerald-400 font-bold">مجاني</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-zinc-500">الضريبة</span>
                        <span className="text-zinc-300">0 د.ج</span>
                    </div>
                </div>

                <div className="border-t border-onyx-border pt-6 mb-8">
                    <div className="flex justify-between items-end">
                        <span className="text-zinc-400 text-xs uppercase tracking-widest">المجموع النهائي</span>
                        <span className="text-3xl font-mono font-bold text-gold-300">{finalPriceTotal.toLocaleString()} د.ج</span>
                    </div>
                </div>

                <button
                  onClick={checkoutViaWhatsApp}
                  className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-black font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(5,150,105,0.2)] group"
                >
                    <i className="fab fa-whatsapp text-lg group-hover:scale-110 transition-transform"></i>
                    <span>طلب اقتناء خاص عبر واتساب</span>
                </button>

                <div className="mt-6 flex items-center justify-center gap-4">
                    <div className="flex items-center gap-1 text-[9px] text-zinc-500 uppercase tracking-tighter">
                        <i className="fa-solid fa-crown text-gold-500"></i>
                        <span>جودة ملكية</span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-zinc-500 uppercase tracking-tighter">
                        <i className="fa-solid fa-star text-gold-500"></i>
                        <span>إصدارات حصرية</span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-zinc-500 uppercase tracking-tighter">
                        <i className="fa-solid fa-certificate text-gold-500"></i>
                        <span>توثيق رسمي</span>
                    </div>
                </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
