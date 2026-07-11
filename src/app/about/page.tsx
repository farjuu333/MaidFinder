// src/app/about/page.tsx
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-rose-500">Dwello</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Connecting travelers with unique stays across Bangladesh
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Dwello, we believe everyone deserves to find their perfect home
              away from home. Whether you&apos;re traveling for business,
              leisure, or adventure, our platform connects you with comfortable,
              verified, and affordable accommodations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We started with a simple idea: make travel more accessible and
              authentic. Today, we&apos;re proud to be Bangladesh&apos;s
              fastest-growing room booking platform, serving thousands of happy
              travelers across 50+ cities.
            </p>
          </div>
          <div className="bg-rose-500 rounded-2xl p-10 text-white text-center">
            <p className="text-5xl font-bold mb-2">500+</p>
            <p className="text-lg">Rooms Available</p>
            <p className="text-5xl font-bold mt-6 mb-2">50+</p>
            <p className="text-lg">Cities</p>
            <p className="text-5xl font-bold mt-6 mb-2">10K+</p>
            <p className="text-lg">Happy Guests</p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Dwello
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🔒
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Secure Booking
              </h3>
              <p className="text-gray-500">
                Your payments and data are always protected
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Best Prices
              </h3>
              <p className="text-gray-500">
                Find a better price? We&apos;ll match it
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✅
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Verified Rooms
              </h3>
              <p className="text-gray-500">
                Every listing is checked for quality
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to find your stay?
        </h2>
        <p className="text-gray-500 mb-8">
          Browse hundreds of verified rooms across Bangladesh
        </p>
        <Link
          href="/explore"
          className="bg-rose-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-rose-600 transition inline-block"
        >
          Explore Rooms
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
