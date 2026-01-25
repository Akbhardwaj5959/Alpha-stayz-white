'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Sector 57 (Main)',
    checkIn: '',
    checkOut: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // Loading/Success Message

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- MAIN FIX IS HERE ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...'); // Loading state start

    try {
      // Asli API Call yahan ho rahi hai
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Agar server bole "OK" (200)
      if (res.status === 200) {
        setStatus('Success');
        alert("Booking request sent successfully! Check your email.");
        // Form Reset
        setFormData({ name: '', phone: '', email: '', location: 'Sector 57 (Main)', checkIn: '', checkOut: '', message: '' }); 
      } else {
        // Agar server bole Error
        setStatus('Error');
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('Error');
      alert("Network Error. Please verify your connection.");
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/views/hall.jpg" 
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 drop-shadow-xl">
            BOOK YOUR <span className="text-gold">STAY</span>
          </h1>
          <p className="text-gray-100 tracking-widest uppercase text-xs md:text-sm font-medium drop-shadow-md">
            We are here to help you plan your getaway
          </p>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: Info */}
          <div className="flex flex-col justify-center pt-8">
            <h3 className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">Reach Out to Us</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Lets Plan Your <br /> Perfect <span className="text-gold">Getaway</span>
            </h2>
            <p className="text-gray-500 mb-12 leading-relaxed font-medium">
              Have questions about booking, amenities, or corporate tie-ups? 
              Fill out the form or reach us directly. Our team is available 24/7.
            </p>

            {/* Icons List */}
            <div className="grid gap-4 md:gap-6">
  
  {/* Call Card */}
  <div className="flex items-center space-x-4 md:space-x-6 p-4 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
    {/* Icon: Mobile pe chhota (w-10), Desktop pe bada (w-14) */}
    <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 rounded-full bg-gold/10 flex items-center justify-center text-gold text-lg md:text-2xl group-hover:bg-gold group-hover:text-white transition-all">
      📞
    </div>
    <div className="min-w-0"> {/* min-w-0 zaroori hai text overflow rokne ke liye */}
        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-0.5 md:mb-1">Call Us</p>
        <p className="text-base md:text-xl text-gray-900 font-bold group-hover:text-gold transition-colors truncate">
          +91 85956 62400
        </p>
    </div>
  </div>

  {/* Email Card */}
  <div className="flex items-center space-x-4 md:space-x-6 p-4 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
    <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 rounded-full bg-gold/10 flex items-center justify-center text-gold text-lg md:text-2xl group-hover:bg-gold group-hover:text-white transition-all">
      ✉️
    </div>
    <div className="min-w-0">
        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-0.5 md:mb-1">Email Us</p>
        {/* break-all: Email ko tutne dega agar screen choti hui to */}
        <p className="text-sm md:text-xl text-gray-900 font-bold group-hover:text-gold transition-colors break-all">
          alphastayz30@gmail.com
        </p>
    </div>
  </div>

</div>
          </div>

          {/* RIGHT: Advanced Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-2xl text-gray-900 font-bold mb-8 relative z-10">Booking Details</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-500 text-[10px] uppercase font-bold ml-2 mb-2 block">Your Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-gold outline-none focus:ring-1 focus:ring-gold/20 transition-all font-medium" required />
                </div>
                <div>
                  <label className="text-gray-500 text-[10px] uppercase font-bold ml-2 mb-2 block">Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91..." className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-gold outline-none focus:ring-1 focus:ring-gold/20 transition-all font-medium" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-500 text-[10px] uppercase font-bold ml-2 mb-2 block">Email Address</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@email.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-gold outline-none focus:ring-1 focus:ring-gold/20 transition-all font-medium" required />
                </div>
                <div>
                  <label className="text-gray-500 text-[10px] uppercase font-bold ml-2 mb-2 block">Select Location</label>
                  <select name="location" value={formData.location} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-gold outline-none appearance-none cursor-pointer font-medium">
                    <option value="Sector 57 (Main)">Sector 57 (Main)</option>
                    <option value="Golf Course Ext (New)">Golf Course Ext (New)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-500 text-[10px] uppercase font-bold ml-2 mb-2 block">Check-in Date</label>
                  <input name="checkIn" value={formData.checkIn} onChange={handleChange} type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-gold outline-none [color-scheme:dark] cursor-pointer font-medium" required />
                </div>
                <div>
                  <label className="text-gray-500 text-[10px] uppercase font-bold ml-2 mb-2 block">Check-out Date</label>
                  <input name="checkOut" value={formData.checkOut} onChange={handleChange} type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-gold outline-none [color-scheme:dark] cursor-pointer font-medium" required />
                </div>
              </div>

              <div>
                <label className="text-gray-500 text-[10px] uppercase font-bold ml-2 mb-2 block">Special Request (Optional)</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Need extra mattress, early check-in etc..." className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-gold outline-none resize-none focus:ring-1 focus:ring-gold/20 transition-all font-medium"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'Sending...'}
                className="w-full bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm md:text-sm disabled:opacity-50"
              >
                {status === 'Sending...' ? 'Processing...' : 'Confirm Booking Request'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- GOOGLE MAP --- */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="w-full h-[300px] md:h-[450px] rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-xl relative group hover:shadow-2xl transition-all">
          <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl border border-gray-100 shadow-lg pointer-events-none">
             <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1">Our Location</p>
             <p className="text-gray-900 font-bold text-sm">Sector 57, Gurgaon</p>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.1933588895296!2d77.0704637039101!3d28.426092507442924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196c9401672f%3A0x5874f8dc9f369e4b!2sAlpha%20Stayz!5e0!3m2!1sen!2sin!4v1768464655658!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe> 
        </div>
      </section>
    </main>
  );
}