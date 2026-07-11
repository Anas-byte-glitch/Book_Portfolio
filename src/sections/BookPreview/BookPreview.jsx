import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookText, Compass, Heart, BookOpen } from 'lucide-react';

export default function BookPreview() {
  const [isOpened, setIsOpened] = useState(false);

  const previewHighlights = [
    {
      icon: BookText,
      title: 'ملخصات ورسومات تخطيطية',
      desc: 'ملخصات بصرية شاملة تجمع القوانين والمصطلحات العلمية لكل وحدة للتذكر السريع.'
    },
    {
      icon: Compass,
      title: 'منهجية الإجابة الرسمية',
      desc: 'تدريب تطبيقي على كتابة النصوص العلمية وتحليل الوثائق البيولوجية بطرق نموذجية.'
    },
    {
      icon: Heart,
      title: 'تمارين بكالوريا مصححة',
      desc: 'أكثر من 50 تمريناً مأخوذاً ومعدلاً من امتحانات بكالوريا رسمية مع حلول مفصلة.'
    }
  ];

  return (
    <section id="preview" className="relative py-24 bg-[#f5f6f8] overflow-hidden text-right border-y border-slate-200/50">
      
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-4 font-sans"
          >
            تصفح محتوى الكتاب / Book preview
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0c131d] mb-6"
          >
            نظرة خاطفة داخل كتاب خطة الإنقاذ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#59616e] text-base leading-relaxed font-bold"
          >
            قم بتمرير الفأرة فوق غلاف الكتاب لفتحه ومعاينة فهرس الوحدات والصفحة الأولى.
          </motion.p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Features / Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            {previewHighlights.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  key={feat.title}
                  className="flex gap-5 p-6 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex-row-reverse text-right"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#4f46e5]/10 flex items-center justify-center text-[#4f46e5] flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-[#0c131d] font-bold text-base mb-2">{feat.title}</h3>
                    <p className="text-[#59616e] text-sm leading-relaxed font-bold">{feat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: The Interactive Hinge Book Mockup */}
          <div className="lg:col-span-7 flex justify-center items-center py-10 order-1 lg:order-2">
            <div 
              className="relative w-80 sm:w-96 aspect-[3/4] cursor-pointer"
              onMouseEnter={() => setIsOpened(true)}
              onMouseLeave={() => setIsOpened(false)}
              onClick={() => setIsOpened(!isOpened)}
              style={{ perspective: '1200px' }}
            >
              
              {/* Shadow behind book */}
              <div className="absolute inset-y-4 right-4 left-12 bg-black/20 rounded-r-xl blur-xl transition-all duration-300" 
                   style={{ transform: isOpened ? 'skewY(4deg) scale(0.95)' : 'none' }} />

              {/* Inside Page (Right Page) - Stays static in background (Shows the Annual Curriculum image!) */}
              <div className="absolute inset-0 bg-stone-50 border border-stone-200/50 rounded-r-xl shadow-inner overflow-hidden flex flex-col justify-between transition-all select-none">
                <img 
                  src="/book_inside.jpg" 
                  alt="البرنامج السنوي" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Inside Left Page - Visible when cover rotates */}
              <div 
                className="absolute inset-0 bg-stone-100 border border-stone-200 rounded-l-xl p-6 sm:p-8 flex flex-col justify-between text-slate-700 shadow-2xl origin-left transition-all duration-700 ease-in-out pointer-events-none text-right"
                style={{ 
                  transform: isOpened ? 'rotateY(-140deg)' : 'rotateY(0deg)',
                  backfaceVisibility: 'hidden',
                  zIndex: isOpened ? 30 : 10
                }}
              >
                <div className="border-b border-stone-200 pb-3 text-[9px] font-bold text-[#4f46e5] uppercase tracking-widest font-sans">
                  خطة الإنقاذ في العلوم الطبيعية
                </div>

                <div className="my-auto space-y-3 font-sans">
                  <div className="w-10 h-10 rounded-full bg-[#4f46e5]/10 flex items-center justify-center text-[#4f46e5] mr-auto">
                    <BookOpen size={18} />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-stone-900 uppercase tracking-wider text-right">
                    الوحدات المشمولة في الكتاب
                  </h4>
                  <ul className="space-y-1.5 text-[11px] text-stone-600 font-extrabold leading-relaxed text-right">
                    <li>1. تركيب البروتين</li>
                    <li>2. بنية ووظيفة البروتين</li>
                    <li>3. النشاط الإنزيمي للبروتينات</li>
                    <li>4. المناعة والدفاع عن الذات</li>
                    <li>5. الاتصال العصبي</li>
                    <li>6. التكتونية العامة الجيولوجيا</li>
                    <li>7. آليات تحويل الطاقة</li>
                  </ul>
                </div>

                <div className="text-[9px] text-stone-400 font-sans">
                  © 2026 ملاك عباسي (Dr.maleek).
                </div>
              </div>

              {/* Book Cover Page - Animates like a hinge */}
              <motion.div
                className="absolute inset-0 rounded-r-xl overflow-hidden shadow-2xl origin-left border border-slate-200"
                style={{ 
                  zIndex: isOpened ? 20 : 40,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY: isOpened ? -145 : 0,
                  x: isOpened ? -10 : 0
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* Book cover image */}
                <div className="w-full h-full relative bg-white">
                  <img
                    src="/book_cover.png"
                    alt="Book Cover Preview"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gloss highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
                  {/* Hinge spine shadow shadow effect */}
                  <div className="absolute top-0 bottom-0 left-0 w-2 bg-black/25 shadow-md" />
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
