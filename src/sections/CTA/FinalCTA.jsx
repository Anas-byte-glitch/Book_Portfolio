import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  const handleScrollToPurchase = (e) => {
    e.preventDefault();
    const el = document.querySelector('#purchase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden text-left">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] bg-[#0c131d] overflow-hidden p-8 sm:p-12 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left Column: Info */}
          <div className="lg:w-7/12 flex flex-col items-end text-right z-10 order-2 lg:order-1">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white mb-6 leading-tight tracking-tight">
              ابدأ رحلة التفوق في العلوم الطبيعية اليوم
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed font-bold">
              دليلك المنهجي الشامل لتبسيط مفاهيم العلوم الطبيعية والحياة لشهادة البكالوريا مع ملاك عباسي (Dr.maleek).
            </p>
            <div className="flex flex-col items-center sm:items-end gap-4">
              <a
                href="#purchase"
                onClick={handleScrollToPurchase}
                className="px-10 py-5 rounded-full bg-[#f3b100] hover:bg-[#e2a400] text-[#0c131d] font-black text-base transition-all duration-200 active:scale-98 cursor-pointer shadow-md shadow-[#f3b100]/10"
              >
                اطلب الآن / Buy Now
              </a>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                توصيل سريع لـ 58 ولاية جزائرية والدفع عند الاستلام
              </span>
            </div>
          </div>

          {/* Right Column: Visual stacked covers (Static) */}
          <div className="lg:w-5/12 flex items-center justify-center relative select-none w-full min-h-[300px] order-1 lg:order-2">
            <div className="relative w-48 sm:w-52 aspect-[3/4]">
              {/* Back book cover (Static) */}
              <div 
                className="absolute inset-0 rounded-r-xl overflow-hidden shadow-xl border border-white/5 bg-slate-800"
                style={{ transform: 'rotate(-8deg) translateX(-25px)' }}
              >
                <img
                  src="/book_cover.png"
                  alt="Book cover variant 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front book cover (Static) */}
              <div 
                className="absolute inset-0 rounded-r-xl overflow-hidden shadow-2xl border border-white/5 bg-slate-900"
                style={{ transform: 'rotate(8deg) translateX(25px)' }}
              >
                <img
                  src="/book_cover.png"
                  alt="Book cover variant 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
