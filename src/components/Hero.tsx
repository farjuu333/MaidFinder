"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[70vh] bg-black flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Find Your Perfect Stay
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl mx-auto">
          Discover and book unique rooms across Bangladesh
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/explore"
            className="bg-white text-gray-900 px-8 py-3 rounded-lg text-base font-medium hover:bg-gray-100 transition w-full sm:w-auto shadow-lg"
          >
            Explore Rooms
          </Link>
          <Link
            href="/items/add"
            className="bg-gray-900/80 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition w-full sm:w-auto backdrop-blur-sm"
          >
            List Your Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
