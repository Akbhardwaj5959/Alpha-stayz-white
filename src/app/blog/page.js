'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- BLOG DATA (Content ke saath) ---
const blogPosts = [
  {
    id: 1,
    title: "5 Best Places to Visit Near Sector 57, Gurgaon",
    category: "Travel Guide",
    date: "Jan 10, 2026",
    image: "/views/india-gate.jpg",
    excerpt: "Discover the hidden gems, from Hong Kong Bazaar to leopard trails, just a stone's throw away from Alpha Stayz.",
    content: `
      <p class="mb-4">Gurgaon is not just about corporate buildings; it has some amazing hidden spots near Sector 57.</p>
      <h4 class="text-gold font-bold text-lg mb-2">1. Hong Kong Bazaar</h4>
      <p class="mb-4">A vibrant market for electronics, clothes, and street food. Just 10 mins away.</p>
      <h4 class="text-gold font-bold text-lg mb-2">2. Leopard Trail</h4>
      <p class="mb-4">Perfect for morning drives and nature walks. You might spot some wildlife too!</p>
      <h4 class="text-gold font-bold text-lg mb-2">3. Cyber Hub</h4>
      <p>The ultimate party destination with world-class restaurants and cafes.</p>
    `
  },
  {
    id: 2,
    title: "Why Serviced Apartments are Better Than Hotels",
    category: "Corporate Travel",
    date: "Jan 05, 2026",
    image: "/views/hall.jpg",
    excerpt: "More space, private kitchen, and home-like comfort. Find out why corporate travelers are switching to service apartments.",
    content: `
      <p class="mb-4">When traveling for work, a hotel room can feel claustrophobic after a few days. Here is why Alpha Stayz is better:</p>
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li><strong>More Space:</strong> You get a living room and a separate bedroom.</li>
        <li><strong>Kitchen:</strong> Cook your own healthy meals.</li>
        <li><strong>Privacy:</strong> No constant housekeeping knocking on your door unless requested.</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "A Foodie’s Guide to Gurgaon’s Nightlife",
    category: "Lifestyle",
    date: "Dec 28, 2025",
    image: "/views/glass.jpg",
    excerpt: "From Cyber Hub to Sector 29, explore the best cafes and pubs to unwind after a long day of work.",
    content: `
      <p class="mb-4">Gurgaon comes alive at night! Here are the top spots to check out:</p>
      <p class="mb-4"><strong>Sector 29:</strong> The brewery hub of India. Amazing craft beer and live music.</p>
      <p class="mb-4"><strong>Galleria Market:</strong> Best for open-air cafes and street vibe.</p>
      <p><strong>32nd Avenue:</strong> A premium, aesthetic place for a romantic dinner.</p>
    `
  },
  {
    id: 4,
    title: "Top 5 Amenities You Need for a Long Stay",
    category: "Tips",
    date: "Dec 15, 2025",
    image: "/views/india-gate.jpg",
    excerpt: "Planning a month-long stay? Don't compromise on Wi-Fi, Kitchen, and Laundry. Here is your checklist.",
    content: `
      <p class="mb-4">Long stays require more than just a bed. At Alpha Stayz, we provide:</p>
      <ol class="list-decimal pl-5 space-y-2 text-gray-600">
        <li>High-Speed Wi-Fi for seamless Zoom calls.</li>
        <li>Fully automatic Washing Machine.</li>
        <li>Induction Cooktop and Utensils.</li>
        <li>Smart TV with OTT subscriptions.</li>
        <li>Power Backup for uninterrupted work.</li>
      </ol>
    `
  },
  {
    id: 5,
    title: "Couple Friendly Stays: What to Look For?",
    category: "Guide",
    date: "Dec 01, 2025",
    image: "/views/hall.jpg",
    excerpt: "Safety, privacy, and hygiene. How Alpha Stayz ensures a hassle-free experience for couples in Gurgaon.",
    content: `
      <p class="mb-4">We respect your privacy. Here is what makes us the best choice for couples:</p>
      <p class="mb-4"><strong>Zero Judgment Policy:</strong> Our staff is trained to be professional and polite.</p>
      <p class="mb-4"><strong>Safety:</strong> 24/7 CCTV surveillance and secure entry.</p>
      <p><strong>Easy Check-in:</strong> Just show your ID and get your keys. No awkward questions.</p>
    `
  },
  {
    id: 6,
    title: "How to Reach Alpha Stayz from IGI Airport",
    category: "Travel Info",
    date: "Nov 20, 2025",
    image: "/views/glass.jpg",
    excerpt: "The quickest routes, metro lines, and cab fares to reach your luxury destination in Sector 57.",
    content: `
      <p class="mb-4">Reaching us is easy!</p>
      <p class="mb-4"><strong>By Cab:</strong> Takes about 30-40 mins from T3 via NH-48. Fare approx ₹600-800.</p>
      <p class="mb-4"><strong>By Metro:</strong> Take the Airport Express line to New Delhi, change to Yellow Line, and get off at Huda City Centre. From there, it's a 10 min auto ride.</p>
    `
  }
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedPost]);

  return (
    // CHANGE 1: Light Theme Background
    <main className="min-h-screen bg-[#FAF9F6]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[40vh] flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/rooms-images/loby.jpg"
          alt="Alpha Stayz Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 pt-20 mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 drop-shadow-xl">
            OUR <span className="text-gold">BLOG</span>
          </h1>
          <p className="text-gray-100 tracking-widest uppercase text-xs md:text-sm font-medium max-w-lg mx-auto drop-shadow-md">
            Updates, Travel Tips, and Stories from the Heart of Gurgaon
          </p>
        </div>
      </section>

      {/* --- BLOG GRID SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              onClick={() => setSelectedPost(post)} 
              className="group cursor-pointer"
            >
              {/* CHANGE 2: White Card Styling */}
              <div className="bg-white rounded-[2rem] overflow-hidden h-full flex flex-col border border-gray-100 hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-black px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-md border border-gray-100">
                    {post.category}
                  </div>
                </div>

                {/* Content Summary */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-400 text-xs mb-3 space-x-2 font-medium">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gold rounded-full"></span>
                    <span>5 min read</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-6 line-clamp-3 font-medium flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-gold text-sm font-bold uppercase tracking-wider">
                    Read Article 
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- HYBRID POPUP MODAL (LIGHT THEME) --- */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-4 transition-all duration-300"
          onClick={() => setSelectedPost(null)}
        >
          {/* Main Container */}
          <div 
            // CHANGE 3: White Background for Modal
            className="bg-white w-full h-full md:h-auto md:max-h-[85vh] md:max-w-3xl overflow-y-auto rounded-none md:rounded-[2.5rem] relative animate-in slide-in-from-bottom-10 fade-in duration-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Sticky Close Button */}
            <div className="sticky top-0 z-50 flex justify-end p-4 md:absolute md:top-4 md:right-4">
               <button 
                 onClick={() => setSelectedPost(null)}
                 className="w-10 h-10 bg-white hover:bg-gold text-black hover:text-white rounded-full flex items-center justify-center transition-all shadow-md border border-gray-100"
               >
                 ✕
               </button>
            </div>

            {/* Modal Image */}
            <div className="relative h-72 md:h-80 w-full -mt-16 md:mt-0">
              <Image 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-gold text-black px-3 py-1 text-xs font-bold uppercase rounded mb-3 inline-block shadow-lg">
                  {selectedPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight drop-shadow-lg">
                  {selectedPost.title}
                </h2>
                <p className="text-gray-200 text-sm mt-2 font-medium">{selectedPost.date}</p>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="px-6 pb-20 md:p-10 md:pt-8 bg-white">
              <div 
                // CHANGE 4: Dark Text for Readability
                className="prose prose-lg max-w-none text-gray-600 font-normal leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
              />
              
              <div className="mt-12 pt-8 border-t border-gray-100 text-center pb-8 md:pb-0">
                 <p className="text-sm text-gray-400 mb-4 font-medium">Enjoyed reading? Plan your stay with us.</p>
                 <button 
                   onClick={() => setSelectedPost(null)}
                   className="w-full md:w-auto bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all shadow-lg active:scale-95"
                 >
                   Back to Blog
                 </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}