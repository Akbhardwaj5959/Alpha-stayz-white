'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Base Style for Small Buttons (Shape & Animation only, Colors alag honge)
  const baseButtonStyle = `
    w-12 h-12 md:w-14 md:h-14 
    rounded-full 
    flex items-center justify-center 
    text-white
    shadow-lg shadow-black/20
    transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
    hover:scale-110
  `;

  return (
    <div className="fixed bottom-6 right-4 md:bottom-10 md:right-10 z-[999] flex flex-col items-center gap-3 md:gap-4">
      
      {/* --- ACTION BUTTONS --- */}
      
      {/* 1. Phone Call Button (RED) */}
      <Link
        href="tel:+918595662400" 
        className={`${baseButtonStyle} bg-red-600 hover:bg-red-700 border border-red-500 ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-0'}`}
        style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      </Link>

      {/* 2. WhatsApp Button (OFFICIAL GREEN) */}
      <Link
        href="https://wa.me/918595662400" 
        target="_blank"
        className={`${baseButtonStyle} bg-[#25D366] hover:bg-[#20ba5a] border border-[#25D366] ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-5 opacity-0 scale-0'}`}
        style={{ transitionDelay: isOpen ? '50ms' : '0ms' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16" className="md:w-6 md:h-6">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </Link>

      {/* --- MAIN TOGGLE BUTTON --- */}
      {/* Color Logic: Since background is White/Off-White, 
         BLACK button with WHITE icon gives the best contrast and premium feel.
      */}
      <button
        onClick={toggleMenu}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center 
        bg-black text-white 
        shadow-[0_4px_20px_rgba(0,0,0,0.3)] 
        transition-all duration-300 hover:scale-105 active:scale-95 z-50`}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className={`w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 ${isOpen ? 'rotate-[135deg]' : 'rotate-0'}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

    </div>
  );
}