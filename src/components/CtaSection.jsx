import Link from 'next/link';

export default function CtaSection() {
  return (
    // STEP 1: Section mein padding di hai taaki screen ke edges se gap bane
    <section className="py-12 md:py-20 px-4 md:px-6 bg-[#FAF9F6]"> 
      
      {/* STEP 2: FLOATING CARD CONTAINER 
         - max-w-[1400px]: Bohot zyada stretch na ho
         - mx-auto: Center mein rahe
         - rounded-[2.5rem]: Corners ko gol (rounded) karne ke liye
         - overflow-hidden: Taaki image corners ke bahar na nikle
         - relative: Taaki iske andar hum image ko absolute rakh sakein
      */}
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[2rem] md:rounded-[3.5rem] overflow-hidden min-h-[500px] flex items-center justify-center shadow-2xl">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070" 
            alt="Luxury Lobby" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay (Taaki text padha jaye) */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-4xl px-6 text-center">
          
          {/* Glass Card Inside */}
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-white/20 shadow-lg">
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready for a <span className="text-gold">Premium Experience?</span>
            </h2>
            
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Book your stay directly through our website and get an exclusive <span className="text-white font-bold">10% Discount</span> on your first booking.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-gold text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg hover:shadow-gold/50 active:scale-95"
              >
                Book Now
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}