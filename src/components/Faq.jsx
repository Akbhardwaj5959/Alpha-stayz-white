'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Is Alpha Stayz couple-friendly?",
    answer: "Yes, absolutely! We welcome married and unmarried couples. You just need to present a valid government ID proof (Aadhar/Voter ID/Passport) for both guests at the time of check-in. We ensure a safe and judgment-free environment."
  },
  {
    question: "Where is the property located exactly?",
    answer: "We are located at 4P, Sector 57, Gurgaon, right opposite Orchid Islands. It is a prime location with easy access to rapid metro, Huda City Centre, and major corporate hubs."
  },
  {
    question: "Do you have a kitchen in the rooms?",
    answer: "Yes, our luxury 1BHK suites and apartments come with fully equipped kitchenette, including an induction cooktop and basic utensils, perfect for long stays."
  },
  {
    question: "Is parking available?",
    answer: "Yes, we offer free and secure parking space for your vehicles within the property premises."
  },
  {
    question: "What are the check-in and check-out timings?",
    answer: "Our standard check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in or late check-out is subject to availability and may incur nominal charges."
  },
  {
    question: "Is food delivery allowed?",
    answer: "Yes, you can order food from apps like Zomato/Swiggy. We also provide in-house room service for delicious home-cooked meals."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // CHANGE 1: Section Background transparent rakha hai (kyunki parent Off-White hai)
    <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
          FREQUENTLY ASKED <span className="text-gold">QUESTIONS</span>
        </h2>
        <div className="h-1 w-20 bg-gold mx-auto rounded-full mb-4"></div>
        <p className="text-gray-500 text-sm font-medium tracking-wider uppercase">
            Everything you need to know about your stay.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            // CHANGE 2: Card Styling (White Card with Shadow)
            // bg-white: Background white
            // border-gray-100: Halka border
            // shadow-sm: Halka shadow normal state mein
            className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
              openIndex === index 
                ? 'bg-white border-gold shadow-[0_10px_30px_-10px_rgba(229,184,11,0.15)] scale-[1.02]' // Active State
                : 'bg-white border-gray-100 shadow-sm hover:border-gold/50 hover:shadow-md' // Inactive State
            }`}
          >
            {/* Question Header */}
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              {/* CHANGE 3: Text Dark Gray */}
              <span className={`font-bold text-base md:text-lg transition-colors duration-300 ${
                  openIndex === index ? 'text-gold' : 'text-gray-800 hover:text-gold'
              }`}>
                {faq.question}
              </span>
              
              {/* Animated Icon */}
              <span className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-500 ${
                  openIndex === index 
                  ? 'rotate-180 bg-gold text-white border-gold' 
                  : 'text-gold border-gold/30 bg-gold/5'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>

            {/* Answer Body */}
            <div 
              className={`grid transition-all duration-500 ease-in-out ${
                openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden px-6">
                {/* CHANGE 4: Answer Text Gray-600 (Readable) */}
                <p className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-gold font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}