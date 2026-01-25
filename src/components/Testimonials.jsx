'use client'; 

import React from 'react';

// --- DATA: 8 REVIEWS ---
const reviews = [
  {
    id: 1,
    name: "Rahul Khanna",
    role: "Corporate Traveler",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    rating: 5,
    text: "Alpha Stayz is absolutely a gem in Gurgaon. The 1BHK suite was spacious, clean, and the Wi-Fi speed was perfect for my zoom calls."
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    rating: 5,
    text: "The interior and golden accents give such a luxury vibe. The staff is very polite. Felt safer and better than a regular hotel."
  },
  {
    id: 3,
    name: "Amit & Neha",
    role: "Couple",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1000",
    rating: 4,
    text: "Perfect location near the market yet so peaceful. The kitchen was fully equipped which helped us a lot. Will definitely visit again."
  },
  {
    id: 4,
    name: "David Miller",
    role: "Tourist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    rating: 5,
    text: "Coming from the UK, I was looking for international standards. Alpha Stayz exceeded my expectations. Great hygiene!"
  },
  {
    id: 5,
    name: "Sneha Kapoor",
    role: "Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000",
    rating: 5,
    text: "Stayed here for a month during my internship. It felt just like home. The security is top-notch, highly recommended for girls."
  },
  {
    id: 6,
    name: "Vikram Singh",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
    rating: 4,
    text: "Value for money. The location in Sector 57 is very convenient for meetings. The parking facility is a big plus."
  },
  {
    id: 7,
    name: "Sarah Jenkins",
    role: "Digital Nomad",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000",
    rating: 5,
    text: "Fast internet, coffee machine, and a quiet desk. What else does a nomad need? Loved the vibe of the place."
  },
  {
    id: 8,
    name: "Arjun Mehta",
    role: "Frequent Flyer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000",
    rating: 5,
    text: "Better than most 4-star hotels in Gurgaon. The check-in process was smooth, and the room service is prompt."
  }
];

export default function Testimonials() {
  return (
    // CHANGE 1: Background Off-White (#FAF9F6)
    <section className="bg-[#FAF9F6] py-24 relative overflow-hidden">
      
      {/* --- INLINE STYLES FOR ANIMATION --- */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 60s linear infinite; /* Speed controls here (60s is smooth) */
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Decor (Subtle Gold Blur) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-4">
            {/* CHANGE 2: Text Black */}
            <span className="text-black">GUEST </span>
            <span className="text-gold">LOVE</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base tracking-widest uppercase font-medium">
             Stories from our happy stays
          </p>
          <div className="h-1 w-24 bg-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* --- SCROLLING CONTAINER --- */}
        {/* Mask image creates fade effect on left and right edges */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          
          {/* MOVING TRACK */}
          <div className="animate-scroll gap-8 px-4">
            
            {/* ORIGINAL REVIEWS */}
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}

            {/* DUPLICATE REVIEWS (Infinite Loop ke liye zaroori hai) */}
            {reviews.map((review) => (
              <ReviewCard key={`${review.id}-duplicate`} review={review} />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

// --- SUB-COMPONENT: REVIEW CARD (LIGHT THEME) ---
function ReviewCard({ review }) {
  return (
    <div 
      // CHANGE 3: White Card Styling
      // w-[320px] md:w-[450px]: Responsive Width
      // bg-white: White Background
      // shadow-lg: Soft Shadow
      className="bg-white p-8 rounded-3xl relative w-[320px] md:w-[450px] flex-shrink-0 border border-gray-100 hover:border-gold/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      {/* Gold Quote Icon */}
      <div className="absolute top-6 right-8 text-gold/20 text-6xl font-serif font-bold group-hover:text-gold/40 transition-colors">
        “
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4 mb-6">
        <img 
          src={review.image} 
          alt={review.name} 
          className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 group-hover:border-gold transition-colors"
        />
        <div>
          {/* Text Black/Dark Gray */}
          <h4 className="text-gray-900 font-bold text-lg">{review.name}</h4>
          <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{review.role}</span>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < review.rating ? "#E5B80B" : "#E5E7EB"} className="w-4 h-4">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        ))}
      </div>

      {/* Review Text - Darker Gray for Readability */}
      <p className="text-gray-600 text-sm leading-relaxed italic font-medium">
        {review.text}
      </p>
    </div>
  );
}