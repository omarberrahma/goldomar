import React from 'react';
import { useCart } from '../context/CartContext';

const Toast = () => {
    const { toasts } = useCart();

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm pointer-events-none">
            {toasts.map(toast => (
                <div
                    key={toast.id}
                    className="bg-onyx-card border border-gold-500/30 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] pointer-events-auto flex items-center gap-3 w-80 animate-slide-up"
                >
                    <div className="w-8 h-8 rounded-full bg-gold-600/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                        <i className="fa-solid fa-gem"></i>
                    </div>
                    <div>
                        <h5 className="text-xs font-bold text-white">{toast.title}</h5>
                        <p className="text-[10px] text-zinc-400 mt-0.5">{toast.body}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Toast;
