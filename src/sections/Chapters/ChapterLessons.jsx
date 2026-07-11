import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

export default function ChapterLessons() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const chapters = [
    { number: '1', title: 'تركيب البروتين', desc: 'دراسة استنساخ الـ ARNm وترجمته في هيولى الخلية الحية بالتفصيل.' },
    { number: '2', title: 'بنية ووظيفة البروتين', desc: 'تحديد مستويات البنية الفراغية وتأثير الأحماض الأمينية والروابط الكيميائية.' },
    { number: '3', title: 'النشاط الإنزيمي للبروتينات', desc: 'دراسة آلية عمل الإنزيمات وتأثير درجة الحموضة pH والحرارة.' },
    { number: '4', title: 'المناعة والدفاع عن الذات', desc: 'التمييز بين الذات واللاذات ودور الخلايا اللمفاوية LB و LT.' },
    { number: '5', title: 'الاتصال العصبي', desc: 'انتقال السيالة العصبية على مستوى المشابك الكيميائية وتأثير المبلغات العصبية.' }
  ];

  const accordions = [
    {
      title: 'منهجية الإجابة في العلوم الطبيعية (Methodology)',
      points: [
        'طرق تحليل المنحنيات والجداول بأسلوب تفسيري علمي دقيق.',
        'كيفية استغلال الوثائق واستخراج المعلومات لحل المشكلات البيولوجية.',
        'خطوات كتابة نص علمي متناسق (مقدمة، عرض، خاتمة) يضمن العلامة الكاملة.'
      ]
    },
    {
      title: 'ملخصات الوحدات الأساسية (Unit Summaries)',
      points: [
        'ملخصات شاملة ومبسطة لكل وحدة لتسهيل المراجعة السريعة قبل الامتحان.',
        'رسومات تخطيطية تحصيلية تجمع العلاقات بين مختلف آليات عمل البروتينات.',
        'توضيح النقاط الغامضة والأسئلة الأكثر تكراراً في امتحانات البكالوريا.'
      ]
    },
    {
      title: 'تمارين نموذجية محلولة (Solved BAC Exercises)',
      points: [
        'تمارين متدرجة الصعوبة مصممة وفق الهيكل الجديد للبكالوريا (الاستدلال والمسعى العلمي).',
        'حلول نموذجية مفصلة مع شرح سلم التنقيط المعتمد رسمياً.',
        'تنبيهات حول الأخطاء المنهجية الشائعة التي يقع فيها الطلاب أثناء الإجابة.'
      ]
    }
  ];

  return (
    <section id="lessons" className="relative py-24 bg-white overflow-hidden border-b border-slate-200/50 text-right">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Sticky Title, Description & Mockups */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex flex-col items-end text-right">
              
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f5f6f8] text-xs font-bold text-[#4f46e5] uppercase tracking-wider mb-6">
                محتويات الكتاب / Table of Contents
              </div>

              {/* Title */}
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0c131d] mb-6 leading-tight">
                محاور المراجعة الشاملة للعلوم
              </h2>

              {/* Description */}
              <p className="text-[#59616e] text-base leading-relaxed mb-10 font-bold">
                تم تقسيم الكتاب بطريقة ذكية لتجمع بين الدروس والمنهجية والتطبيق المباشر لتغطية كامل البرنامج الوزاري.
              </p>

              {/* Chapter Images Overlay (Static) */}
              <div className="relative flex items-center justify-end w-full max-w-sm mt-4 select-none">
                <div className="w-[180px] sm:w-[200px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-lg border border-slate-100 z-10 bg-slate-50">
                  <img
                    src="/book_cover.png"
                    alt="كتاب خطة الإنقاذ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[160px] sm:w-[180px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl border border-slate-100 -mr-12 sm:-ml-16 mt-16 z-20 bg-slate-50">
                  <img
                    src="/author_portrait.jpg"
                    alt="ملاك عباسي"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Chapters & FAQ Accordion */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Chapters list layout */}
            <div className="space-y-6">
              <h3 className="font-heading text-xs font-bold text-[#59616e] uppercase tracking-wider mb-6">
                الوحدات والمحاور المدروسة
              </h3>
              
              <div className="space-y-4">
                {chapters.map((ch, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    key={ch.number}
                    className="flex gap-5 p-6 rounded-[24px] bg-[#f5f6f8] hover:bg-[#eaecef] border border-transparent transition-all duration-300 group flex-row-reverse"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/50 flex items-center justify-center font-heading font-extrabold text-[#4f46e5] group-hover:bg-[#4f46e5] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {ch.number}
                    </div>
                    <div className="text-right flex-grow">
                      <h4 className="text-[#0c131d] font-bold text-base mb-1.5 transition-colors">
                        {ch.title}
                      </h4>
                      <p className="text-[#59616e] text-sm leading-relaxed font-bold">{ch.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Accordions layout */}
            <div className="space-y-4 pt-4">
              <h3 className="font-heading text-xs font-bold text-[#59616e] uppercase tracking-wider mb-6">
                تفاصيل المنهجية والحلول النموذجية
              </h3>

              {accordions.map((acc, idx) => {
                const isOpen = activeAccordion === idx;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={acc.title}
                    className={`rounded-[24px] border transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#4f46e5]/5 border-[#4f46e5]/20 shadow-sm' 
                        : 'bg-[#f5f6f8] border-transparent hover:border-slate-200'
                    }`}
                  >
                    {/* Header */}
                    <button
                      onClick={() => setActiveAccordion(isOpen ? -1 : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer flex-row-reverse"
                    >
                      <span className="font-heading text-base font-bold text-[#0c131d] flex items-center gap-3 flex-row-reverse">
                        <span className={`w-2 h-2 rounded-full transition-colors ${isOpen ? 'bg-[#4f46e5]' : 'bg-[#59616e]'}`} />
                        {acc.title}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#59616e]"
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </button>

                    {/* Expandable Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 border-t border-slate-200/30 space-y-4 text-right">
                            {acc.points.map((pt, pIdx) => (
                              <div key={pIdx} className="flex gap-3 items-start text-sm text-[#59616e] leading-relaxed justify-end flex-row-reverse">
                                <CheckCircle2 size={18} className="text-[#4f46e5] mt-0.5 flex-shrink-0" />
                                <span className="font-bold text-[#59616e]">{pt}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
