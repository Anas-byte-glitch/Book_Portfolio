import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';

export default function BlogGrid() {
  const blogPosts = [
    {
      title: '5 Habits that will transform your life',
      date: 'January 24, 2026',
      desc: 'Self-help books provide strategies and insights to transform your life.',
      image: 'https://cdn.prod.website-files.com/67790760a9a005c4637c00b2/677e23edac6dd991ac73b2b2_blog-image-01.jpg'
    },
    {
      title: 'A key to stress-free living',
      date: 'February 12, 2026',
      desc: 'Self-help books provide strategies and insights to transform your life.',
      image: 'https://cdn.prod.website-files.com/67790760a9a005c4637c00b2/677e24166604c417f8f67200_blog-image-02.jpg'
    },
    {
      title: '10 strategies to unlock your true potential',
      date: 'March 05, 2026',
      desc: 'Self-help books provide strategies and insights to transform your life.',
      image: 'https://cdn.prod.website-files.com/67790760a9a005c4637c00b2/677e243618d3762b91375b7f_blog-image-03.jpg'
    }
  ];

  return (
    <section id="blog" className="relative py-24 bg-white overflow-hidden border-b border-slate-200/50 text-left">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Heading row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-4">
              Resources & Insights
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0c131d]">
              My blog
            </h2>
          </div>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="px-6 py-3.5 rounded-full border border-[#151c24] text-xs font-bold text-[#151c24] hover:bg-[#0c131d] hover:text-white transition-all duration-300 flex items-center gap-1.5 group cursor-pointer"
          >
            View all
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={post.title}
              className="group cursor-pointer flex flex-col gap-4"
            >
              {/* Image box */}
              <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden border border-slate-100 shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-2 text-[#59616e] text-xs font-bold uppercase tracking-wider">
                <Calendar size={12} className="text-[#4f46e5]" />
                <span>{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-extrabold text-[#0c131d] group-hover:text-[#4f46e5] transition-colors leading-snug">
                {post.title}
              </h3>

              {/* Desc */}
              <p className="text-[#59616e] text-sm leading-relaxed font-medium">
                {post.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
