import React from 'react';
import Faq from '@/components/Faq';
import Image from 'next/image';

export default function AboutPage() {
  return (
    // CHANGE 1: Background Off-White (#FAF9F6)
    <main className="min-h-screen bg-[#FAF9F6]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image   
             src="/views/view-2.jpg" 
             alt="About Alpha Stayz" 
             fill // Next.js Image fill layout
             className="object-cover"
             priority
           />
           {/* Dark Overlay for Text Visibility */}
           <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center pt-20 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4 drop-shadow-lg">
            OUR <span className="text-gold">STORY</span>
          </h1>
          <p className="text-gray-100 tracking-[0.3em] uppercase text-sm md:text-base font-medium drop-shadow-md">
            Redefining Hospitality in Gurgaon
          </p>
        </div>
      </section>

      {/* --- STORY SECTION (Split Layout) --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: 4 IMAGES GRID (2x2 Box Layout) */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Image 1 */}
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/rooms-images/fourth.jpg" 
                alt="Luxury Interior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Image 2 */}
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/rooms-images/fifth.jpg" 
                alt="Comfort Stay"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Image 3 (New) */}
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/rooms-images/second.jpg" // <-- Check path
                alt="Bedroom View"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Image 4 (New) */}
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/rooms-images/first.jpg"  // <-- Check path
                alt="Exterior View"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

          </div>

          {/* RIGHT: TEXT CONTENT (White Card) */}
          {/* CHANGE 2: White Card styling for Light Theme */}
          <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-gray-100 relative">
            
            {/* Gold Border Line on Left */}
            <div className="absolute left-0 top-14 h-20 w-1.5 bg-gold rounded-r-full"></div>

            <h3 className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Who We Are
            </h3>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              A Home Away From Home <br /> At <span className="text-gold">Alpha Stayz</span>
            </h2>
            
            <p className="text-gray-500 mb-6 leading-relaxed font-medium">
              Founded with a vision to bridge the gap between expensive luxury hotels and standard guest houses, Alpha Stayz offers a premium living experience at an affordable price.
            </p>
            
            <p className="text-gray-500 mb-10 leading-relaxed font-medium">
              Located in the heart of Sector 57, Gurgaon, we provide fully furnished 1BHK suites and studios designed for corporates, couples, and families. Our mission is simple: <strong className="text-gray-900">To provide luxury, privacy, and comfort without breaking the bank.</strong>
            </p>
            
            {/* Features List */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Premium Interiors', '24/7 Security & Power', 'High-Speed Wi-Fi', 'Hygiene First'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 text-sm font-semibold bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 shadow-[0_0_10px_#E5B80B]"></span>
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      {/* Background White rakha hai taaki flow bana rahe */}
      <div className="bg-white border-t border-gray-100 py-10">
         <Faq />
      </div>

    </main>
  );
}