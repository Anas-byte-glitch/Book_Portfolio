import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const footerLinks = [
    { name: 'Author', href: '#author' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#' },
    { name: 'Style Guide', href: '#' },
    { name: 'Licenses', href: '#' }
  ];

  return (
    <footer className="relative bg-[#0c131d] text-slate-400 pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10 text-left">
        
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-white/5">
          <div className="lg:col-span-6">
            <h3 className="font-heading text-3xl font-extrabold text-white mb-4">
              Get growth tips delivered to you.
            </h3>
            <p className="text-slate-400 text-base max-w-md font-medium">
              Free study schedules, direct summaries, and daily tips delivered straight to your inbox.
            </p>
          </div>
          
          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="relative flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#f3b100] transition-all text-sm font-medium"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="sm:absolute sm:right-2 sm:top-2 px-8 py-3 rounded-full bg-[#f3b100] text-[#0c131d] font-bold text-xs hover:bg-[#e2a400] active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle2 size={14} />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send size={12} />
                  </>
                )}
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-4 text-center sm:text-left">
              Join 5,000+ readers leveling up their daily execution loops.
            </p>
          </div>
        </div>

        {/* Footer Navigation & Brand */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12 gap-8 border-b border-white/5">
          
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img 
              src="https://cdn.prod.website-files.com/67790760a9a005c4637c00aa/677ccf83733a9c528d492ca3_bookland.svg" 
              alt="bookland logo" 
              className="h-6 w-auto brightness-0 invert"
            />
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            {['Instagram', 'Facebook', 'LinkedIn', 'Twitter'].map((social) => (
              <a
                key={social}
                href={`https://${social.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-600 gap-4 font-bold">
          <p>© {new Date().getFullYear()} Bookland. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Powered by Webflow</span>
            <span>Created by WBS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
