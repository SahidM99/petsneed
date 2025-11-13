'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after 400px scroll
      setVisible(window.scrollY > 400);

      // Hide when footer is visible
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setFooterVisible(footerRect.top < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible || footerVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.1)] p-4 transition-transform duration-300"
      style={{
        transform: visible && !footerVisible ? 'translateY(0)' : 'translateY(100%)',
      }}
    >
      <div className="flex gap-3">
        <a
          href="tel:7411576879"
          className="flex-1 bg-primary hover:bg-[#e66949] text-white px-6 py-3.5 rounded-lg font-poppins font-semibold transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href="https://wa.me/917411576879"
          className="w-14 h-14 bg-secondary hover:bg-primary text-white rounded-lg flex items-center justify-center transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
