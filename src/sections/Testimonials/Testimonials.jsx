import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Check, Play, X, User } from 'lucide-react';

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(false);

  const marqueeReviews1 = [
    { name: 'Johan D.', title: 'A life-changing read', text: 'The chapter on resilience helped me bounce back from setbacks and embrace challenges with a new mindset.' },
    { name: 'Sarah K.', title: 'A treasure trove of wisdom', text: 'I’ve read many self-help books, but this one stands out for its clarity and practicality. It offers actionable strategies.' },
    { name: 'David L.', title: 'Practical and powerful', text: 'This book doesn’t just talk about personal growth—it shows you how to achieve it. Extremely easy to follow.' },
    { name: 'Emily R.', title: 'A journey worth taking', text: 'Reading this book felt like embarking on a journey of self-discovery. Highly recommend it to anyone.' },
    { name: 'Sem J.', title: 'Motivation around every corner', text: 'The insights provided are both universally applicable and intimately relatable, offering practical and uplifting advice.' }
  ];

  const marqueeReviews2 = [
    { name: 'Michael T.', title: 'Inspiration at every turn', text: 'The lessons are universal yet deeply personal, and the guidance is practical and inspiring. Worth every second.' },
    { name: 'Sophia M.', title: 'A guide to transform your life', text: 'This book has been a beacon of light in my growth journey. Clean structure and wonderful advice.' },
    { name: 'Sara P.', title: 'A wellspring of knowledge', text: 'This book provides a clear roadmap to achieving personal growth, offering practical steps that are easy to implement.' },
    { name: 'Harry K.', title: 'Empowering and Insightful', text: 'I didn’t expect a book to impact me so deeply, but this one exceeded all my expectations. Buy it now!' },
    { name: 'Martin K.', title: 'A wealth of insightful guidance', text: 'This book is a standout among self-help literature, offering clear and practical advice. Profoundly impactful.' }
  ];

  const gridReviews = [
    {
      type: 'text',
      author: 'Louis Ferguson',
      role: 'Author of five #1 NYT Bestsellers',
      quote: 'This e-book completely changed my perspective on how to structure my morning routines. The frameworks are pure gold.',
    },
    {
      type: 'avatar-text',
      author: 'James K.',
      role: '#1 Bestselling author of Unlock Power',
      quote: 'From the very first chapter, I felt like this book was speaking directly to me. A masterclass in psychology.',
      image: 'https://cdn.prod.website-files.com/67790760a9a005c4637c00aa/677bbfc40caa865ed4f3731a_review-image-01.avif'
    },
    {
      type: 'bg-image',
      author: 'Noah Collins',
      role: 'Life Performance Specialist',
      quote: 'Actionable, clear, and inspiring. Johan Maxwell has written a modern guide that cuts through the noise of self-help.',
      image: 'https://cdn.prod.website-files.com/67790760a9a005c4637c00aa/677bc0b95e86f52a9e01162b_review-image-02.avif'
    },
    {
      type: 'dark-card',
      author: 'Olivia W.',
      role: 'Olympic Gold Medalist',
      quote: 'Reading this e-book was like having a personal performance coach guiding me every single step of the way.'
    }
  ];

  return (
    <section id="reviews" className="relative py-24 bg-white overflow-hidden border-b border-slate-200/50 text-left">
      
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-4">
            Reader Feedback
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0c131d] mb-6">
            Loved by over 5,000+ readers
          </h2>
          <p className="text-[#59616e] text-base leading-relaxed">
            See what high performers, authors, and everyday individuals say about the impact of the book.
          </p>
        </div>

        {/* Marquees Section */}
        <div className="relative w-full flex flex-col gap-6 overflow-hidden py-4 mask-gradient pointer-events-auto mb-12 select-none">
          <style>{`
            .mask-gradient {
              -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
              mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            }
          `}</style>

          {/* Marquee 1 (Slides Left) */}
          <div className="flex overflow-x-hidden no-scrollbar w-full">
            <div className="animate-marquee-left flex gap-6">
              {[...marqueeReviews1, ...marqueeReviews1].map((rev, idx) => (
                <div 
                  key={idx} 
                  className="w-72 sm:w-80 p-6 rounded-[24px] bg-[#f5f6f8] border border-slate-200/20 flex flex-col justify-between hover:bg-[#eaecef] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#f3b100] text-[#f3b100]" />
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <Check size={8} /> Verified Reviewer
                      </div>
                    </div>
                    <h4 className="text-[#0c131d] font-bold text-sm mb-1.5">{rev.title}</h4>
                    <p className="text-[#59616e] text-xs leading-relaxed mb-4 font-medium">{rev.text}</p>
                  </div>
                  <div className="text-xs font-bold text-[#59616e]">— {rev.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee 2 (Slides Right) */}
          <div className="flex overflow-x-hidden no-scrollbar w-full">
            <div className="animate-marquee-right flex gap-6">
              {[...marqueeReviews2, ...marqueeReviews2].map((rev, idx) => (
                <div 
                  key={idx} 
                  className="w-72 sm:w-80 p-6 rounded-[24px] bg-[#f5f6f8] border border-slate-200/20 flex flex-col justify-between hover:bg-[#eaecef] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#f3b100] text-[#f3b100]" />
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <Check size={8} /> Verified Reviewer
                      </div>
                    </div>
                    <h4 className="text-[#0c131d] font-bold text-sm mb-1.5">{rev.title}</h4>
                    <p className="text-[#59616e] text-xs leading-relaxed mb-4 font-medium">{rev.text}</p>
                  </div>
                  <div className="text-xs font-bold text-[#59616e]">— {rev.name}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Marquee aggregate badge */}
        <div className="flex items-center justify-center gap-3 mb-20 text-sm font-bold text-[#0c131d]">
          <div className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-[#f3b100] fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <img 
              src="https://cdn.prod.website-files.com/67790760a9a005c4637c00aa/679b26cf80afbea5a26c3983_half-star-two.svg" 
              alt="half star" 
              className="w-4 h-4"
            />
          </div>
          <span>4.0</span>
          <div className="w-[1px] h-3 bg-slate-300" />
          <span className="text-[#59616e] font-medium">5,426 reviews</span>
        </div>

        {/* Collage Grid Layout (Reviews Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side Reviews (8 cols) */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {gridReviews.map((rev, idx) => {
              if (rev.type === 'text') {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx}
                    className="p-8 rounded-[32px] bg-[#f5f6f8] border border-transparent shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex gap-0.5 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#f3b100] text-[#f3b100]" />
                        ))}
                      </div>
                      <p className="text-[#0c131d] text-base leading-relaxed mb-6 font-medium">
                        "{rev.quote}"
                      </p>
                    </div>
                    <div>
                      <h5 className="text-[#0c131d] font-bold text-sm">{rev.author}</h5>
                      <p className="text-xs text-[#59616e] font-bold uppercase tracking-wider">{rev.role}</p>
                    </div>
                  </motion.div>
                );
              }

              if (rev.type === 'avatar-text') {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx}
                    className="p-8 rounded-[32px] bg-[#f5f6f8] border border-transparent shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex gap-0.5 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#f3b100] text-[#f3b100]" />
                        ))}
                      </div>
                      <p className="text-[#0c131d] text-base leading-relaxed mb-6 font-medium">
                        "{rev.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src={rev.image}
                        alt={rev.author}
                        className="w-12 h-12 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <h5 className="text-[#0c131d] font-bold text-sm">{rev.author}</h5>
                        <p className="text-xs text-[#59616e] font-bold uppercase tracking-wider">{rev.role}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              if (rev.type === 'bg-image') {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx}
                    className="relative rounded-[32px] overflow-hidden min-h-[380px] sm:col-span-2 p-8 flex flex-col justify-end text-white select-none"
                  >
                    {/* Background image */}
                    <img
                      src={rev.image}
                      alt={rev.author}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Overlay text details */}
                    <div className="relative z-10">
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#f3b100] text-[#f3b100]" />
                        ))}
                      </div>
                      <p className="text-white text-lg sm:text-xl font-medium leading-relaxed mb-6 max-w-xl">
                        "{rev.quote}"
                      </p>
                      <div>
                        <h5 className="text-white font-bold text-sm">{rev.author}</h5>
                        <p className="text-xs text-slate-300 font-bold uppercase tracking-wider">{rev.role}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              return null;
            })}

          </div>

          {/* Right Side Cards (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-8 justify-between">
            
            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] bg-[#f5f6f8] border border-transparent shadow-sm flex flex-col items-center text-center justify-center flex-grow"
            >
              <div className="text-5xl sm:text-6xl font-extrabold font-heading text-[#0c131d] mb-4">4.9</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#f3b100] text-[#f3b100]" />
                ))}
              </div>
              <div className="text-xs font-bold text-[#0c131d] uppercase tracking-wider mb-2">Overall Customer Rating</div>
              <div className="text-xs text-[#59616e] font-medium">Calculated from 5,000+ global responses</div>
            </motion.div>

            {/* Olivia W Dark Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] bg-[#0c131d] border border-transparent shadow-lg text-white flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#f3b100] text-[#f3b100]" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm leading-relaxed mb-6 font-medium">
                  "{gridReviews[3].quote}"
                </p>
              </div>
              <div>
                <h5 className="text-white font-bold text-sm">{gridReviews[3].author}</h5>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{gridReviews[3].role}</p>
              </div>
            </motion.div>

            {/* Video preview trigger card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative aspect-video md:aspect-auto md:h-48 rounded-[32px] overflow-hidden border border-transparent cursor-pointer shadow-md flex items-center justify-center"
              onClick={() => setActiveVideo(true)}
            >
              <img
                src="https://cdn.prod.website-files.com/67790760a9a005c4637c00aa/678b84bd576d7a3536d508e9_review-image-03.avif"
                alt="Video thumbnail review"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />

              {/* Play Button */}
              <div className="w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10">
                <Play size={20} className="fill-slate-950 ml-0.5" />
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          >
            {/* Click outer to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveVideo(false)} />
            
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl aspect-video rounded-[32px] overflow-hidden border border-white/10 bg-slate-950 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveVideo(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/90 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Video iframe */}
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/r507nu6MqFk?autoplay=1&rel=0" 
                title="Reader video review" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
