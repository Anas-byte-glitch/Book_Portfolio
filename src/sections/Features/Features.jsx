import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BookOpen, ClipboardList, Target, MessageCircle, Truck } from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      icon: BookOpen,
      title: 'شرح مبسط ومصور',
      desc: 'رسومات تخطيطية تحصيلية ملونة وعالية الدقة لتسهيل الحفظ البصري للبيانات والعلاقات.'
    },
    {
      icon: ClipboardList,
      title: 'منهجية تحليل الوثائق',
      desc: 'دليل عملي مفصل لتعلم كيفية استغلال الوثائق واستخراج الاستنتاجات العلمية الصحيحة.'
    },
    {
      icon: Target,
      title: 'كتابة النصوص العلمية',
      desc: 'قوالب جاهزة وخطوات منظمة لكتابة نصوص علمية دقيقة تضمن لك العلامة الكاملة في الامتحان.'
    },
    {
      icon: Smartphone,
      title: 'تمارين محلولة نموذجياً',
      desc: 'عشرات التمارين المصممة وفق الهيكل الجديد للبكالوريا مع تصحيح وزاري مفصل.'
    },
    {
      icon: MessageCircle,
      title: 'مرافقة ومتابعة مستمرة',
      desc: 'الولوج لقناة تعليمية خاصة لطرح الأسئلة والحصول على إجابات مباشرة من الكاتبة ملاك عباسي (Dr.maleek).'
    },
    {
      icon: Truck,
      title: 'توصيل سريع لـ 58 ولاية',
      desc: 'توصيل آمن لجميع الولايات الجزائرية عبر Yalidine أو ZR Express والدفع عند الاستلام.'
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden text-right">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-4 font-sans">
            مميزات الكتاب / Book Advantages
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0c131d] mb-6">
            كل ما تحتاجه للتميز في مادة العلوم
          </h2>
          <p className="text-[#59616e] text-base leading-relaxed font-bold">
            هذا الكتاب ليس مجرد ملخص عادي، بل دليل شامل تم صياغته بعناية لمساعدة طالب البكالوريا في الفهم وحل المشكلات.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                key={feat.title}
                className="group p-8 rounded-[32px] bg-white border border-slate-100 hover:border-slate-200 hover:bg-[#f5f6f8] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm"
              >
                <div className="flex flex-col items-end text-right">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-[20px] bg-[#f5f6f8] group-hover:bg-[#0c131d] border border-slate-200/50 flex items-center justify-center text-[#151c24] group-hover:text-white transition-all duration-300 mb-6">
                    <IconComponent size={22} className="stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Text info */}
                  <h3 className="font-heading text-lg font-black text-[#0c131d] mb-3 group-hover:text-[#4f46e5] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-[#59616e] text-sm leading-relaxed font-bold">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
