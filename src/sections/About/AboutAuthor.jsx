import React from 'react';
import { motion } from 'framer-motion';

export default function AboutAuthor() {
  const stats = [
    { label: 'المجال / Field', value: 'طالبة طب وباحثة في العلوم الطبيعية (Medical Student)' },
    { label: 'التأثير / Impact', value: 'صانعة محتوى تعليمي ومؤثرة بأكثر من 1.1 مليون متابع' },
    { label: 'البودكاست / Podcast', value: 'مقدمة بودكاست خطوة نحو النجاح الملهم للطلبة' }
  ];

  return (
    <section id="author" className="relative py-24 bg-white overflow-hidden text-right">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Author Image Card */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl"
            >
              <img
                src="/author_portrait.jpg"
                alt="ملاك عباسي Dr.maleek"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Bio & Quote */}
          <div className="lg:col-span-7 flex flex-col items-end text-right order-1 lg:order-2">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-4 font-sans"
            >
              مؤلفة الكتاب / Digital Creator & Medical Student
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl font-black text-[#0c131d] mb-10"
            >
              ملاك عباسي (Dr.maleek)
            </motion.h2>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-10 border-b border-slate-100 pb-10">
              {stats.map((stat, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  key={stat.label}
                  className="flex flex-col items-end gap-1 text-right"
                >
                  <div className="text-xs text-[#59616e] uppercase font-bold tracking-wider">{stat.label}:</div>
                  <div className="text-sm text-[#0c131d] font-bold leading-normal">{stat.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Bio description paragraphs */}
            <div className="text-[#59616e] text-base leading-relaxed font-bold mb-8">
              ملاك عباسي (المعروفة بـ **Dr.maleek** عبر منصات التواصل الاجتماعي) هي صانعة محتوى رقمي متفوقة وطالبة طب جزائرية ملهمة. 
              بعد تفوقها المتميز في شهادة البكالوريا بمعدل ممتاز، جمعت تجربتها المنهجية الكاملة في مادة العلوم الطبيعية لتصوغ كتاب **"خطة الإنقاذ"** 
              الذي حصد شهرة واسعة وساعد آلاف الطلاب في عبور بوابة النجاح لدراسة التخصصات الطبية والجامعية الكبرى.
            </div>

            {/* Quote Block */}
            <motion.blockquote
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-r-4 border-slate-200 pr-6 py-2 mb-10 w-full text-right"
            >
              <p className="italic text-[#59616e] text-lg sm:text-xl font-bold leading-relaxed mb-4">
                "النجاح في البكالوريا ليس صدفة، بل هو نتيجة خطة عمل واضحة وجهد مستمر."
              </p>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#59616e]">— ملاك عباسي (Dr.maleek)</span>
            </motion.blockquote>

            {/* Button */}
            <motion.a
              href="#purchase"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-3.5 rounded-full border border-[#151c24] text-xs font-bold text-[#151c24] hover:bg-[#f3b100] hover:border-[#f3b100] hover:text-[#151c24] active:scale-98 transition-all duration-200 cursor-pointer"
            >
              اطلب كتابك الآن
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
