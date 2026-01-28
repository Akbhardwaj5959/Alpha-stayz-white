'use client'; // State use karne ke liye zaroori hai

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  "/rooms-images/first.jpg",
  "/rooms-images/second.jpg", // Apni dusri image ka path dalein
  "/rooms-images/third.jpg",  // Apni teesri image ka path dalein
  "/views/hall.jpg"           // Aur bhi add kar sakte hain
];

export default function HeroSection() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- STEP 2: AUTO SLIDE LOGIC (Every 3 Seconds) ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 3000); // 3000ms = 3 Seconds

    return () => clearInterval(interval); // Cleanup (Zaroori hai)
  }, []);


  // --- STATES FOR CUSTOM DROPDOWNS ---
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Sector 57 (Main)');
  
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState('1 Guest');

  // Options Lists
  const locations = ['Sector 57 (Main)', 'Golf Course Ext. (New)'];
  const guestOptions = ['1 Guest', '2 Guests', '3+ Guests'];

  // 1. STATE BANAYEIN (Dates store karne ke liye)
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  // 2. AAJ KI DATE NIKALEIN (YYYY-MM-DD format mein)
  const today = new Date().toISOString().split('T')[0];

  


  return (
    <>
      {/* --- HERO SECTION (Background Image & Text) --- */}
      <section className="relative mt-20 md:mt-24 h-[80vh] md:h-[70vh] flex items-center justify-center pt-10">
        <div className="absolute inset-0 z-0">
          {/* Black Overlay (Text readable rakhne ke liye) */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Images Mapping */}
          {heroImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              fill // Ye automatically width/height handle karega
              priority={index === 0} // Pehli image fast load hogi
              className={`object-cover w-full h-full transition-opacity duration-1000 ease-in-out absolute inset-0 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tighter leading-tight text-white drop-shadow-lg">
            WHERE LUXURY MEETS <br />
            <span className="text-gold uppercase">Affordability</span>
          </h1>
          <p className="text-gray-200 text-sm md:text-xl mb-8 tracking-[0.2em] uppercase font-light max-w-2xl mx-auto drop-shadow-md">
            Your Perfect Getaway Awaits in Gurgaon
          </p>
          <Link href="/services">
          <button className="bg-gold hover:bg-gold-light text-black px-8 md:px-10 py-3 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 text-sm md:text-base shadow-lg">
            Discover Our Suites
          </button>
          </Link>
        </div>
      </section>

      {/* --- RESPONSIVE BOOKING BAR (UPDATED) --- */}
      <div className="max-w-7xl mx-auto -mt-10 md:-mt-8 relative z-30 px-4 pt-0 mb-10">
        <div className="glass bg-black/90 backdrop-blur-xl mt-4 p-6 md:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-end shadow-2xl border border-white/10">

          {/* 1. CUSTOM LOCATION DROPDOWN */}
          <div className="flex flex-col space-y-2 relative">
            <label className="text-gold text-[10px] uppercase tracking-widest font-bold ml-2">Location</label>
            
            {/* Dropdown Trigger Button */}
            <div 
              onClick={() => setLocationOpen(!locationOpen)}
              className="bg-black/60 border border-white/20 rounded-xl p-3 text-white w-full cursor-pointer flex justify-between items-center hover:border-gold transition-colors"
            >
              <span>{selectedLocation}</span>
              <span className="text-gold text-xs">▼</span>
            </div>

            {/* Dropdown Menu (Ab ye black aur gold dikhega) */}
            {locationOpen && (
              <div className="absolute top-full left-0 w-full mt-2 bg-black border border-gold/30 rounded-xl overflow-hidden z-50 shadow-xl">
                {locations.map((loc, index) => (
                  <div 
                    key={index}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setLocationOpen(false);
                    }}
                    className="p-3 text-white hover:bg-gold hover:text-black cursor-pointer transition-colors text-sm font-medium"
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 2. Check-in */}
          <div className="flex flex-col space-y-2">
        <label className="text-gold text-[10px] uppercase tracking-widest font-bold ml-2">Check-in</label>
        <input
          type="date"
          value={checkInDate}
          // Change 1: State update karein
          onChange={(e) => setCheckInDate(e.target.value)}
          // Change 2: Aaj se pehle ki date select nahi hogi
          min={today}
          className="bg-black/60 border border-white/20 rounded-xl p-3 outline-none focus:border-gold text-white w-full uppercase [color-scheme:dark] cursor-pointer"
        />
      </div>

      {/* 3. Check-out */}
      <div className="flex flex-col space-y-2">
        <label className="text-gold text-[10px] uppercase tracking-widest font-bold ml-2">Check-out</label>
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          // Change 3: Check-in date ke baad ki hi date select hogi. 
          // Agar check-in khali hai, to aaj ke baad ki date.
          min={checkInDate || today}
          className="bg-black/60 border border-white/20 rounded-xl p-3 outline-none focus:border-gold text-white w-full uppercase [color-scheme:dark] cursor-pointer"
        />
      </div>

          {/* 4. CUSTOM GUESTS DROPDOWN */}
          <div className="flex flex-col space-y-2 relative">
            <label className="text-gold text-[10px] uppercase tracking-widest font-bold ml-2">Guests</label>
            
            {/* Dropdown Trigger */}
            <div 
              onClick={() => setGuestsOpen(!guestsOpen)}
              className="bg-black/60 border border-white/20 rounded-xl p-3 text-white w-full cursor-pointer flex justify-between items-center hover:border-gold transition-colors"
            >
              <span>{selectedGuest}</span>
              <span className="text-gold text-xs">▼</span>
            </div>

             {/* Dropdown Menu */}
             {guestsOpen && (
              <div className="absolute top-full left-0 w-full mt-2 bg-black border border-gold/30 rounded-xl overflow-hidden z-50 shadow-xl">
                {guestOptions.map((guest, index) => (
                  <div 
                    key={index}
                    onClick={() => {
                      setSelectedGuest(guest);
                      setGuestsOpen(false);
                    }}
                    className="p-3 text-white hover:bg-gold hover:text-black cursor-pointer transition-colors text-sm font-medium"
                  >
                    {guest}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 5. Search Button */}
          <Link
            href="/services"
            className="bg-white text-black h-[50px] md:h-[52px] rounded-xl font-bold uppercase tracking-widest hover:bg-gold transition-all active:scale-95 w-full flex items-center justify-center shadow-lg"
          >
            Search Rooms
          </Link>

        </div>
      </div>
    </>
  );
}