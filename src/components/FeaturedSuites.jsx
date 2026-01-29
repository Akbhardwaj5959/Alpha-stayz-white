import Link from 'next/link';

const suites = [
  {
    id: 1,
    title: "Luxury 1BHK Suite",
    price: "₹2,399",
    period: "/ night",
    image: "/rooms-images/fourth.jpg", 
    description: "Spacious living area with sofa, fully equipped kitchen, and balcony.",
    amenities: ["Free Wi-Fi", "AC", "Kitchen", "Smart TV","High-Speed Net"]
  },
  {
    id: 2,
    title: "Executive Studio",
    price: "₹1,899",
    period: "/ night",
    image: "/rooms-images/second.jpg", 
    description: "Perfect for business travelers. Cozy, modern, and soundproof.",
    amenities: ["Work Desk", "High-Speed Net", "Coffee Maker", "Room Service"]
  },
  {
    id: 3,
    title: "Premium 2BHK Flat",
    price: "₹4,500",
    period: "/ night",
    image: "/rooms-images/fifth.jpg", 
    description: "Ideal for families. Two bedrooms, large hall, and premium bath.",
    amenities: ["2 Bedrooms", "Bathtub", "Parking", "City View","High-Speed Net"]
  }
];

export default function FeaturedSuites() {
  return (
    // CHANGE 1: Background ko Off-White (#FAF9F6) kiya
    <section className="bg-[#FAF9F6] py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-4">
            {/* CHANGE 2: 'OUR' ko Black kiya taaki light bg pe dikhe */}
            <span className="text-black">OUR </span>
            <span className="text-gold">SUITES</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base tracking-widest uppercase font-medium">
            Experience Comfort Like Never Before
          </p>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suites.map((suite) => (
            <div 
              key={suite.id} 
              // CHANGE 3: White Card Styling
              // bg-white: Card white kiya
              // shadow-lg: Utha hua effect
              // hover:shadow-2xl: Mouse le jaane par aur uthega
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
            >
              
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                 <img 
                   src={suite.image} 
                   alt={suite.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 {/* Badge */}
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-black px-4 py-1.5 text-[10px] font-bold uppercase rounded-full shadow-md tracking-wider">
                   Best Seller
                 </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  {/* Title ko Dark Gray kiya */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gold transition-colors">
                    {suite.title}
                  </h3>
                  <div className="text-right">
                    <span className="block text-gold text-xl font-extrabold">{suite.price}</span>
                    <span className="text-gray-400 text-xs font-medium">{suite.period}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-6 line-clamp-2 font-medium">
                  {suite.description}
                </p>

                {/* Amenities Tags - Clean Gray Look */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {suite.amenities.map((item, i) => (
                    <span key={i} className="text-[10px] text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full font-semibold">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Link href="/services" className="block w-full text-center border-2 border-gold text-gold py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-gold hover:text-white transition-all shadow-sm hover:shadow-md">
                  View Details
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}