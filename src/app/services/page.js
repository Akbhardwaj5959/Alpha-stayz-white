'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- DATA: SECTOR 57 ROOMS ---
const sector57Rooms = [
  {
    id: 1,
    title: "Luxury 1BHK Suite",
    price: "₹2,399",
    description: "Spacious living area with sofa, fully equipped kitchen, and private balcony. Perfect for long stays.",
    features: ["450 sq.ft", "Kitchenette", "Balcony", "Smart TV"],
    images: ["/rooms-images/fifth.jpg", "/rooms-images/gallery-3.jpg", "/rooms-images/washroom.jpg"]
  },
  {
    id: 2,
    title: "Executive Studio",
    price: "₹1,899",
    description: "Compact yet luxurious. Designed for business travelers with a dedicated workstation and high-speed Wi-Fi.",
    features: ["300 sq.ft", "Work Desk", "Coffee Maker", "City View"],
    images: ["/rooms-images/second.jpg", "/rooms-images/gallery-2.jpg", "/rooms-images/kichen.jpg"]
  },
  {
    id: 3,
    title: "Premium 2BHK Apartment",
    price: "₹4,500",
    description: "Ideal for families. Two large bedrooms, a massive hall, and premium bath fittings with a bathtub.",
    features: ["900 sq.ft", "2 Bedrooms", "Bathtub", "Full Kitchen"],
    images: ["/rooms-images/third.jpg", "/rooms-images/gallery-3.jpg", "/rooms-images/kichen-2.jpg"]
  }
];

// --- DATA: GOLF COURSE EXT ROOMS ---
const golfCourseRooms = [
  {
    id: 4,
    title: "Cozy Couple Room",
    price: "₹1,599",
    description: "A budget-friendly yet premium option for couples. Soundproof walls and cozy lighting.",
    features: ["250 sq.ft", "Queen Bed", "Mini Fridge", "Couple Friendly"],
    images: ["/rooms-images/fourth.jpg", "/rooms-images/frigh.jpg", "/rooms-images/washroom.jpg"]
  },
  {
    id: 5,
    title: "Penthouse Suite",
    price: "₹5,999",
    description: "Experience the top-floor view with a private terrace garden and ultra-luxury amenities.",
    features: ["1200 sq.ft", "Private Terrace", "Jacuzzi", "Butler Service"],
    images: ["/rooms-images/first.jpg", "/rooms-images/gallery-1.jpg", "/rooms-images/kichen-2.jpg"]
  },
  {
    id: 6,
    title: "Standard Deluxe",
    price: "₹1,299",
    description: "Best for solo travelers or short stays. All basic amenities included with premium comfort.",
    features: ["200 sq.ft", "Single Bed", "AC", "Clean Hygiene"],
    images: ["/rooms-images/room-6.jpg", "/rooms-images/gallery-2.jpg", "/rooms-images/hall.jpg"]
  }
];

// --- COMPONENT: ROOM CARD (LIGHT THEME) ---
const RoomCard = ({ room }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImage((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImage((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    // CHANGE: White Card with Soft Shadow
    <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
      
      {/* --- IMAGE SLIDER SECTION --- */}
      <div className="relative h-64 w-full bg-gray-100">
        <Image
          src={room.images[currentImage]}
          alt={room.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient only at bottom for text visibility if needed */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Slider Buttons */}
        <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full hover:bg-gold hover:text-white transition-all opacity-0 group-hover:opacity-100 shadow-md">
          ❮
        </button>
        <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full hover:bg-gold hover:text-white transition-all opacity-0 group-hover:opacity-100 shadow-md">
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {room.images.map((_, idx) => (
            <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all ${currentImage === idx ? 'bg-gold w-3' : 'bg-white/70'}`}></div>
          ))}
        </div>

        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-black px-3 py-1.5 text-xs font-bold rounded-full shadow-md border border-gray-100">
           {room.price} <span className="text-gray-500 font-normal">/ night</span>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title Dark Gray */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors">{room.title}</h3>
        
        {/* Features Icons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {room.features.map((feature, i) => (
            <span key={i} className="text-[10px] font-semibold text-gray-600 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
              {feature}
            </span>
          ))}
        </div>

        <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow font-medium leading-relaxed">
          {room.description}
        </p>

        {/* --- BOOKING BUTTON --- */}
        <Link 
          href="/contact" 
          className="w-full block text-center bg-black text-white py-3.5 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-gold hover:text-black transition-all shadow-lg active:scale-95"
        >
          Book This Room
        </Link>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function ServicesPage() {
  return (
    // CHANGE: Off-White Background
    <main className="min-h-screen bg-[#FAF9F6]">
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image
            src="/views/view-2.jpg" 
            alt="Our Rooms"
            fill
            className="object-cover"
            priority
          />
           <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 drop-shadow-xl">
            OUR <span className="text-gold">SUITES</span>
          </h1>
          <p className="text-gray-100 tracking-widest uppercase text-xs md:text-sm font-medium">
            Find Your Perfect Stay
          </p>
        </div>
      </section>

      {/* --- LOCATION 1: SECTOR 57 (MAIN) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        
        {/* Location Heading */}
        <div className="flex items-center gap-4 mb-10">
           <div className="h-10 w-1.5 bg-gold rounded-full"></div>
           <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Sector 57 (Main)</h2>
              <p className="text-gray-500 text-sm">Prime location near Huda City Centre</p>
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sector57Rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      {/* --- LOCATION 2: GOLF COURSE EXTENSION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* Location Heading */}
        <div className="flex items-center gap-4 mb-10">
           <div className="h-10 w-1.5 bg-gold rounded-full"></div>
           <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Golf Course Ext. (New)</h2>
              <p className="text-gray-500 text-sm">Premium stays near Cyber Hub</p>
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {golfCourseRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

    </main>
  );
}