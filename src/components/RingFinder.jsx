import React, { useState, useEffect } from 'react';

const RingFinder = () => {
    const [val, setVal] = useState(16.5);
    const [usSize, setUsSize] = useState("6 - 7");

    useEffect(() => {
        let size = "مجهول";
        if (val >= 14 && val < 14.8) size = "3 - 4";
        else if (val >= 14.8 && val < 15.6) size = "4 - 5";
        else if (val >= 15.6 && val < 16.5) size = "5 - 6";
        else if (val >= 16.5 && val < 17.3) size = "6 - 7";
        else if (val >= 17.3 && val < 18.2) size = "7 - 8";
        else if (val >= 18.2 && val < 19.0) size = "8 - 9";
        else if (val >= 19.0 && val < 19.8) size = "9 - 10";
        else if (val >= 19.8 && val < 20.6) size = "10 - 11";
        else if (val >= 20.6) size = "11+";
        setUsSize(size);
    }, [val]);

    const pixelSize = val * 8;

    return (
        <section id="ring-finder" className="relative z-10 bg-onyx-card border-y border-onyx-border/80 py-24 px-6">
            <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">مساعد القياس الرقمي</span>
                        <h3 className="text-3xl font-serif font-bold text-white mt-2 mb-4">اعثري على مقاس الخاتم المثالي</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            ضعي خاتمك الحالي على الدائرة المعروضة على الشاشة، وقومي بضبط شريط التمرير أدناه حتى يتطابق القطر الداخلي للخاتم بالكامل مع الدائرة المضيئة لمعرفة مقاسك بدقة.
                        </p>

                        <div className="mt-8">
                            <label className="text-xs text-zinc-400 block mb-2 font-semibold">مقياس التوافق والقطر الداخلي:</label>
                            <input
                                type="range"
                                min="14"
                                max="22"
                                step="0.1"
                                value={val}
                                onChange={(e) => setVal(parseFloat(e.target.value))}
                                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-onyx-solid/50 p-4 rounded-xl border border-onyx-border">
                                <span className="text-[10px] text-zinc-500 block uppercase">القطر الفعلي</span>
                                <span className="text-xl font-bold font-mono text-gold-400">{val} مم</span>
                            </div>
                            <div className="bg-onyx-solid/50 p-4 rounded-xl border border-onyx-border">
                                <span className="text-[10px] text-zinc-500 block uppercase">المقاس المقترح (US)</span>
                                <span className="text-xl font-bold font-mono text-white">{usSize}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-56 h-56 bg-zinc-950/80 rounded-full border border-zinc-800 flex items-center justify-center shadow-inner">
                            <div
                                className="rounded-full border-4 border-dashed border-gold-400 animate-pulse-glow flex items-center justify-center transition-all duration-100"
                                style={{ width: `${pixelSize}px`, height: `${pixelSize}px` }}
                            >
                                <span className="text-[10px] text-zinc-500 select-none">ضعي الخاتم هنا</span>
                            </div>
                        </div>
                        <span className="text-[11px] text-zinc-500 mt-4 text-center">
                            <i className="fa-solid fa-circle-info mr-1"></i> يرجى مطابقة القطر الداخلي المعدني مع الإطار الذهبي
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RingFinder;
