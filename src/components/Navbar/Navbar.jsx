import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 flex items-center justify-between flex-row-reverse">
          
          {/* Logo (Left, rebranded to Rescue Plan) */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2">
            <span className="font-heading text-xl font-extrabold tracking-tight text-[#0c131d]">
              خطة<span className="text-[#4f46e5]">الإنقاذ</span>
            </span>
          </a>

          {/* Desktop Links (Centered spacing) */}
          <nav className="hidden md:flex items-center gap-6 flex-row-reverse">
            <a
              href="#author"
              onClick={(e) => handleLinkClick(e, '#author')}
              className="text-sm font-bold text-[#151c24] hover:text-[#4f46e5] transition-colors duration-200"
            >
              الكاتبة / Author
            </a>
            <div className="w-[1px] h-3 bg-slate-300" />
            <a
              href="#preview"
              onClick={(e) => handleLinkClick(e, '#preview')}
              className="text-sm font-bold text-[#151c24] hover:text-[#4f46e5] transition-colors duration-200"
            >
              محتوى الكتاب
            </a>
            <div className="w-[1px] h-3 bg-slate-300" />
            <a
              href="#lessons"
              onClick={(e) => handleLinkClick(e, '#lessons')}
              className="text-sm font-bold text-[#151c24] hover:text-[#4f46e5] transition-colors duration-200"
            >
              الوحدات والمنهجية
            </a>
            <div className="w-[1px] h-3 bg-slate-300" />
            <a
              href="#blog"
              onClick={(e) => handleLinkClick(e, '#blog')}
              className="text-sm font-bold text-[#151c24] hover:text-[#4f46e5] transition-colors duration-200"
            >
              المدونة / Blog
            </a>
          </nav>

          {/* Buy Button */}
          <div className="hidden md:block">
            <a
              href="#purchase"
              onClick={(e) => handleLinkClick(e, '#purchase')}
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-[#151c24] text-xs font-bold text-[#151c24] hover:bg-[#f3b100] hover:border-[#f3b100] hover:text-[#151c24] active:scale-98 transition-all duration-200 cursor-pointer"
            >
              اطلب الآن / Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#151c24] hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-lg md:hidden p-6 flex flex-col gap-5 text-center"
          >
            <a
              href="#author"
              onClick={(e) => handleLinkClick(e, '#author')}
              className="text-base font-bold text-[#151c24] hover:text-[#4f46e5] transition-colors py-2"
            >
              الكاتبة / Author
            </a>
            <div className="w-full h-px bg-slate-100" />
            <a
              href="#preview"
              onClick={(e) => handleLinkClick(e, '#preview')}
              className="text-base font-bold text-[#151c24] hover:text-[#4f46e5] transition-colors py-2"
            >
              محتوى الكتاب
            </a>
            <div className="w-full h-px bg-slate-100" />
            <a
              href="#lessons"
              onClick={(e) => handleLinkClick(e, '#lessons')}
              className="text-base font-bold text-[#151c24] hover:text-[#4f46e5] transition-colors py-2"
            >
              الوحدات والمنهجية
            </a>
            <div className="w-full h-px bg-slate-100" />
            <a
              href="#blog"
              onClick={(e) => handleLinkClick(e, '#blog')}
              className="text-base font-bold text-[#151c24] hover:text-[#4f46e5] transition-colors py-2"
            >
              المدونة / Blog
            </a>
            <div className="w-full h-px bg-slate-100" />
            <a
              href="#purchase"
              onClick={(e) => handleLinkClick(e, '#purchase')}
              className="w-full py-3 rounded-full border border-[#151c24] text-sm font-bold text-[#151c24] hover:bg-[#f3b100] hover:border-[#f3b100] transition-all text-center cursor-pointer"
            >
              اطلب الآن / Order Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
