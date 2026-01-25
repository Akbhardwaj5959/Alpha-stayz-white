import Link from 'next/link';

export default function Footer() {
  return (
    // CHANGE 1: 'bg-primary-black' -> 'bg-black' aur padding/margin kam kiye
    <footer className="bg-black border-t border-gold/20 pt-10 pb-5 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN CONTENT WRAPPER --- */}
        {/* CHANGE 2: 'mb-16' -> 'mb-8' aur 'gap-12' -> 'gap-8' (Compact spacing) */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">

          {/* 1. LEFT SECTION: EXPLORE LOCAL ATTRACTIONS (Visual Card) */}
          <div className="lg:w-1/3">
            <h3 className="text-white text-sm font-bold mb-4 tracking-widest uppercase">
              Explore Local Attractions
            </h3>
            
            {/* Glassmorphism Card for Explore Section */}
            {/* CHANGE 3: 'h-64' -> 'h-40' (Image height choti ki) */}
            <div className="relative group overflow-hidden rounded-xl border border-gold/30 h-40">
              {/* Background Image of Gurgaon/City */}
              <div className="absolute inset-0">
                 <img 
                   src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070" 
                   alt="Gurgaon City" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              {/* Content Over Image */}
              <div className="absolute bottom-0 left-0 p-4 z-10">
                <h4 className="text-gold text-lg font-bold leading-tight mb-1">
                  EXPLORE GURGAON <br/> LIKE A LOCAL!
                </h4>
                {/* Paragraph hata diya taaki clean dikhe, bas link rakha */}
                <Link href="/blog" className="inline-flex items-center text-[10px] font-bold text-white border-b border-gold pb-0.5 hover:text-gold transition-colors mt-2">
                  READ OUR GUIDE 
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. RIGHT SECTION: LINKS COLUMNS */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 lg:pl-10 pt-2">
            
            {/* Column A: Quick Links */}
            <div>
              <h4 className="text-gold font-bold uppercase tracking-widest mb-4 text-xs">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-xs font-light">
                <li><Link href="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Home</Link></li>
                <li><Link href="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Services</Link></li>
                <li><Link href="/blog" className="hover:text-white hover:translate-x-1 transition-all inline-block">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column B: Contact Info */}
            <div>
              <h4 className="text-gold font-bold uppercase tracking-widest mb-4 text-xs">Contact Info</h4>
              <ul className="space-y-3 text-gray-400 text-xs font-light">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">📍</span>
                  <span>4P, Sector 57, Opposite Orchid Islands,<br/> Gurgaon, Haryana</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold">📞</span>
                  <a href="tel:+918595662400" className="hover:text-white transition-colors">+91 85956 62400</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold">✉️</span>
                  <a href="mailto:alphastayz30@gmail.com" className="hover:text-white transition-colors">alphastayz30@gmail.com</a>
                </li>
              </ul>
            </div>

            {/* Column C: Social & Legal */}
            <div>
              <h4 className="text-gold font-bold uppercase tracking-widest mb-4 text-xs">Follow Us</h4>
              {/* Social Icons Section */}
<div className="flex space-x-3 mb-6">
  
  {/* 1. Facebook Button */}
  <a 
    href="https://facebook.com/YOUR_PAGE_LINK" // <-- Yahan apna FB link dalein
    target="_blank" 
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all cursor-pointer group"
    aria-label="Facebook"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:scale-110 transition-transform">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  </a>

  {/* 2. Instagram Button */}
  <a 
    href="https://instagram.com/YOUR_PAGE_LINK" // <-- Yahan apna Insta link dalein
    target="_blank" 
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all cursor-pointer group"
    aria-label="Instagram"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:scale-110 transition-transform">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  </a>

  {/* 3. Gmail / Email Button */}
  <a 
    href="mailto:alphastayz30@gmail.com" // <-- Ye directly mail app open karega
    className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all cursor-pointer group"
    aria-label="Email"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:scale-110 transition-transform">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  </a>

</div>
              
              <div className="md:hidden text-[10px] text-gray-600 mt-2">
                 © 2026 Alpha Stayz
              </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        {/* Padding reduced */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-medium tracking-wide">
           <p className="hidden md:block">&copy; {new Date().getFullYear()} Alpha Stayz. All Rights Reserved.</p>
           <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-gold transition-colors">Sitemap</Link>
           </div>
        </div>

      </div>
    </footer>
  );
}