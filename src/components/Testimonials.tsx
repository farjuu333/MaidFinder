// src/components/Testimonials.tsx

const testimonials = [
  
  {
    id: 4,
    name: "Rafiq Hasan",
    location: "Dhaka",
    rating: 4,
    review:
      "Great platform for finding reliable maids. The booking system is smooth, and I loved that I could see ratings and reviews before hiring. Will use again!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    service: "Cleaning",
  },
  {
    id: 5,
    name: "Nadia Akter",
    location: "Rajshahi",
    rating: 5,
    review:
      "MaidFinder is a lifesaver! As a working mom, I needed someone to help with childcare. I found a wonderful nanny here who my kids absolutely love.",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    service: "Childcare",
  },
  {
    id: 6,
    name: "Tariq Hossain",
    location: "Khulna",
    rating: 5,
    review:
      "Found an experienced cook through MaidFinder! She makes delicious meals and is very professional. The whole process from search to hire was seamless.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    service: "Cooking",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - পরিবর্তন করা হয়েছে */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <span className="bg-purple-100 text-purple-600 text-sm font-semibold px-4 py-1.5 rounded-full">
              ❤️ Trusted by Families
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            What Our Families Say
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Real reviews from families who found their perfect service providers
          </p>
        </div>

        {/* Testimonials Grid - ৩ থেকে ৩ কলামে সাজানো */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>

              {/* Service Badge - নতুন */}
              <span className="inline-block bg-purple-100 text-purple-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                {testimonial.service}
              </span>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-4">
                "{testimonial.review}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-purple-100"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge - নতুন */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-500">
            ⭐ 4.9/5 Average Rating from{" "}
            <span className="font-semibold text-gray-700">500+</span> families
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;