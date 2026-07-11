import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const handleScrollToPurchase = (e) => {
    e.preventDefault();
    const el = document.querySelector('#purchase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 bg-white overflow-hidden text-right">
      {/* Container matching Webflow max width and centered */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        
        {/* Main Card with Background Pattern */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[40px] bg-[#f5f6f8] overflow-hidden px-8 py-16 md:p-20 shadow-sm border border-slate-100"
          style={{
            backgroundImage: `url('https://cdn.prod.website-files.com/67790760a9a005c4637c00aa/677b85096df87295cb17f6bc_hero-pattern.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left Side: Info */}
            <div className="lg:col-span-7 flex flex-col items-end text-right order-2 lg:order-1">
              
              {/* Pre-title */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#4f46e5] mb-4 font-sans"
              >
                الدليل المنهجي الأول في الجزائر لشعبة العلوم التجريبية
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0c131d] leading-[1.2] mb-6 tracking-tight"
              >
                خطة الإنقاذ في العلوم الطبيعية والحياة
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#59616e] text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-bold"
              >
                كتاب 3 في 1 يجمع بين ملخصات الدروس الشاملة، منهجية الإجابة الرسمية للبكالوريا، والتمارين النموذجية المحلولة بالتفصيل لطالبة الطب وصانعة المحتوى ملاك عباسي (Dr.maleek).
              </motion.p>

              {/* Button & Reviews Wrap */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row-reverse items-center gap-8 w-full sm:w-auto"
              >
                {/* Direct order button */}
                <a
                  href="#purchase"
                  onClick={handleScrollToPurchase}
                  className="px-10 py-5 rounded-full bg-[#f3b100] hover:bg-[#e2a400] text-[#0c131d] font-black text-base transition-all duration-200 active:scale-98 cursor-pointer shadow-md shadow-[#f3b100]/10"
                >
                  اطلب الآن (الشراء مباشر)
                </a>

                {/* Rating Info */}
                <div className="flex flex-col items-center sm:items-end gap-1">
                  <div className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-base font-extrabold text-[#0c131d]">4.9</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4.5 h-4.5 text-[#f3b100] fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] font-black text-[#59616e] uppercase tracking-wider">
                    موصى به من قبل أكثر من 10,000 طالب متفوق!
                  </p>
                </div>

              </motion.div>

            </div>

            {/* Right Side: Mockup (Static) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-1 lg:order-2">
              
              {/* Floating Badge (Top Left of image) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-4 left-0 md:-left-8 z-20 w-[124px] h-[124px] rounded-full bg-[#f6623e] flex items-center justify-center text-center p-3 shadow-lg select-none hover:rotate-6 transition-transform duration-300 pointer-events-none"
              >
                <span className="text-xs font-black text-white leading-tight uppercase tracking-wider">
                  الأكثر مبيعاً<br />في مادة<br />العلوم
                </span>
              </motion.div>

              {/* Book Mockup Container (Static) */}
              <div className="relative w-60 sm:w-72 md:w-80 select-none">
                {/* Book shadow */}
                <div className="absolute inset-x-8 bottom-0 h-4 bg-black/20 rounded-full blur-lg scale-90" />

                <img
                  src="/book_cover.png"
                  alt="خطة الإنقاذ Book Cover"
                  className="w-full h-auto object-contain rounded-r-2xl drop-shadow-[15px_15px_30px_rgba(0,0,0,0.22)]"
                />
              </div>

              {/* Version details subtext */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xs font-bold text-[#59616e] mt-6 text-center select-none"
              >
                النسخة المطبوعة الملونة 3 ثانوي (3 en 1).
              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
