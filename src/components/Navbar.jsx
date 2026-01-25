'use client'; // Ye line zaroori hai interactive components ke liye

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0  w-full bg-black z-50 px-4 md:px-10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center black/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none  md:py-0 rounded-b-2xl md:rounded-none px-4 md:px-0 border-b border-gold/20 md:border-none">
        
        {/* --- LEFT: Logo --- */}
        <Link href="/" className="flex items-center z-50">
          <div className="relative w-28 md:w-32 h-auto"> {/* Responsive Width Control */}
            <Image 
              src="/rooms-images/logo-1.png"  // <-- Check extension (.png, .jpg, .svg)
              alt="Alpha Stayz Logo"
              width={160} // Original width of image (approx)
              height={60} // Original height of image (approx)
              className="object-contain w-full h-auto" // Responsive classes
              priority // Logo turant load hoga
            />
          </div>
        </Link>

        {/* --- CENTER: Desktop Menu (Hidden on Mobile) --- */}
        <div className="hidden lg:flex bg-white rounded-full px-8 py-2 shadow-xl">
          <ul className="flex space-x-8 text-black text-sm font-semibold tracking-wide">
            <li><Link href="/" className="hover:text-gold-dark transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold-dark transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-gold-dark transition-colors">Services</Link></li>
            <li><Link href="/blog" className="hover:text-gold-dark transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-gold-dark transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* --- RIGHT: Book Button (Desktop) & Hamburger (Mobile) --- */}
        <div className="flex items-center z-50">
          {/* Desktop Button */}
          <Link 
            href="/contact" 
            className="hidden lg:block bg-gold hover:bg-gold-light text-black px-6 py-2 rounded-full font-bold text-sm tracking-tight transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            Book Now
          </Link>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-gold text-3xl focus:outline-none ml-4"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* --- MOBILE FULL SCREEN MENU OVERLAY --- */}
      {/* Ye sirf tab dikhega jab isOpen true hoga */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} lg:hidden`}>

        <ul className="text-center space-y-8">
          <li><Link href="/" onClick={() => setIsOpen(false)} className="text-3xl text-white font-bold hover:text-gold transition-colors">Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)} className="text-3xl text-white font-bold hover:text-gold transition-colors">About</Link></li>
          <li><Link href="/services" onClick={() => setIsOpen(false)} className="text-3xl text-white font-bold hover:text-gold transition-colors">Services</Link></li>
          <li><Link href="/blog" onClick={() => setIsOpen(false)} className="text-3xl text-white font-bold hover:text-gold transition-colors">Blog</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)} className="text-3xl text-white font-bold hover:text-gold transition-colors">Contact</Link></li>
          <li className="pt-8">
             <Link href="/booking" onClick={() => setIsOpen(false)} className="bg-gold text-black px-10 py-4 rounded-full font-bold text-xl uppercase tracking-widest shadow-lg">
                Book Now
             </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}