import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Lenis from 'lenis';

export default function MainLayout({ children }) {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // RAF loop
    let requestFrameId;
    function raf(time) {
      lenis.raf(time);
      requestFrameId = requestAnimationFrame(raf);
    }
    requestFrameId = requestAnimationFrame(raf);

    // Sync scroll event with window
    const handleScrollEvent = () => {
      // Trigger scroll checks/events if needed
    };
    lenis.on('scroll', handleScrollEvent);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(requestFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#f3b100]/30 selection:text-[#151c24]">
      <Navbar />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
