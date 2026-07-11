import React from 'react';
import { motion } from 'framer-motion';

export default function Bestsellers() {
  const clients = [
    'https://cdn.prod.website-files.com/67790760a9a005c4637c00aa/677b8bae4c822858ce0f675f_87385ad7aee26c3edf0663e605e997c9_client-image-01.svg',
    'https://cdn.prod.website-files.com/67790760a9a005c4637c00aa/677b8bae13c52f4a2921bffc_d10e534db4caa391ca178a8ee8b58c9c_client-image-03.svg',
    'https://cdn.prod.website-files.com/67790760a9a005c4637c00aa/677b8bae3feb384490700447_3477a0ef413e6487928df0a6db344ad5_client-image-02.svg',
    'https://cdn.prod.website-files.com/67790760a9a005c4637c00aa/677b8baee6cb2e8d5ae1ecc8_ad052d933006db0b32b5a74c0f5edeca_client-image-04.svg'
  ];

  return (
    <section className="bg-[#0c131d] py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f5f6f8] text-center md:text-left"
          >
            The International Bestseller
          </motion.div>

          {/* Client Logos Grid */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {clients.map((logo, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={idx}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`client logo ${idx + 1}`}
                  className="h-7 w-auto object-contain brightness-0 invert"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
