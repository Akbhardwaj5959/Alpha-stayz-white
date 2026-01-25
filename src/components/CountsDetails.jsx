'use client'; // Animation ke liye Client Side logic zaroori hai

import React, { useState, useEffect, useRef } from 'react';

// --- DATA ---
// Maine value ko number aur suffix mein tod diya hai taaki calculation ho sake
const stats = [
  {
    id: 1,
    endValue: 5000, 
    suffix: "+",
    label: "Happy Guests",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
  },
  {
    id: 2,
    endValue: 100,
    suffix: "+",
    label: "Luxury Rooms",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
    ),
  },
  {
    id: 3,
    endValue: 4.9,
    suffix: "",
    isDecimal: true, // Special handling for rating
    label: "Average Rating",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    id: 4,
    endValue: 24,
    suffix: "/7",
    label: "Support Staff",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

// --- COUNTER COMPONENT (Logic for Animation) ---
const AnimatedCounter = ({ end, duration = 2000, suffix = "", isDecimal = false }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // Taaki animation sirf ek baar chale

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTime;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Decimal handling (like 4.9) vs Integer handling (like 5000)
            const currentVal = isDecimal 
               ? (progress * end).toFixed(1) 
               : Math.floor(progress * end);
            
            setCount(currentVal);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 } // Jab 50% section dikhega tab start hoga
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, [end, duration, hasAnimated, isDecimal]);

  return (
    <span ref={countRef}>
      {/* 5000 ko 5,000 dikhane ke liye 'toLocaleString' use kiya */}
      {Number(count).toLocaleString()}{suffix}
    </span>
  );
};

export default function CountsDetails() {
  return (
    // CHANGE 1: 'bg-[#FAF9F6]' for Off-White Background
    <section className="bg-[#FAF9F6] py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <h4 className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">Alpha Stayz</h4>
        {/* CHANGE 2: Text Black kiya taaki light bg par dikhe */}
        <h2 className="text-black text-3xl md:text-5xl font-bold mb-16">Growing With Your Trust</h2>

        {/* Stats Container */}
        {/* CHANGE 3: White Card with Soft Shadow */}
        <div className="bg-white rounded-[2rem] p-8 md:p-14 shadow-xl border border-gray-100">
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0 items-center">
            
            {stats.map((stat, index) => (
              <div 
                key={stat.id} 
                className={`relative flex flex-col items-center group
                  ${index !== stats.length - 1 ? 'md:border-r md:border-gray-200' : ''} 
                `}
              >
                {/* Hover Effect: Icon scales up */}
                <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                  {stat.icon}
                </div>
                
                {/* Animated Count */}
                {/* CHANGE 4: Text color dark gray for visibility */}
                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight mt-2">
                   <AnimatedCounter 
                      end={stat.endValue} 
                      suffix={stat.suffix} 
                      isDecimal={stat.isDecimal}
                   />
                </h3>
                
                <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}