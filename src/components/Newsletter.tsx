// src/components/Newsletter.tsx

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="border border-purple-100 bg-white/80 backdrop-blur-sm rounded-2xl p-10 md:p-16 text-center shadow-lg shadow-purple-100/50">
          
          {/* Icon - নতুন */}
          <div className="flex justify-center mb-4">
            <div className="bg-purple-100 rounded-full p-3">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          {/* Heading - পরিবর্তন করা হয়েছে */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get <span className="text-purple-600">MaidFinder</span> Updates
          </h2>
          
          {/* Description - পরিবর্তন করা হয়েছে */}
          <p className="text-gray-500 text-base max-w-md mx-auto mb-8">
            Subscribe to get new maid listings, exclusive offers, and household care tips delivered to your inbox.
          </p>

          {/* Form - কালার পরিবর্তন করা হয়েছে */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition placeholder-gray-400"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition whitespace-nowrap shadow-md shadow-purple-200">
              Subscribe Now
            </button>
          </div>

          {/* Privacy Note - পরিবর্তন করা হয়েছে */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <p className="text-gray-400 text-xs">
              🔒 No spam, unsubscribe anytime.
            </p>
            <span className="w-px h-4 bg-gray-200"></span>
            <p className="text-gray-400 text-xs">
              ✅ Trusted by 500+ families
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;