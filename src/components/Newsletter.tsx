// src/components/Newsletter.tsx

const Newsletter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="border border-gray-200 rounded-2xl p-10 md:p-16 text-center">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Stay in the Loop
          </h2>
          
          {/* Description */}
          <p className="text-gray-500 text-base max-w-md mx-auto mb-8">
            Subscribe to get special offers, new listings, and travel inspiration straight to your inbox.
          </p>

          {/* Form */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition placeholder-gray-400"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition whitespace-nowrap">
              Subscribe Now
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-gray-400 text-xs mt-4">
            No spam, unsubscribe anytime.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;