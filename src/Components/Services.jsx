import React from "react";
import {
  FaWifi,
  FaCoffee,
  FaLaptop,
  FaMusic,
  FaShoppingBag,
  FaUtensils,
} from "react-icons/fa";
import { GiCoffeeCup, GiOpenBook } from "react-icons/gi";

const Services = () => {
  const services = [
    {
      icon: <FaUtensils className="w-8 h-8" />,
      title: "Dine-In Experience",
      description: "Enjoy our carefully crafted beverages in a cozy, welcoming atmosphere",
      highlight: "Comfortable Seating",
    },
    {
      icon: <FaShoppingBag className="w-8 h-8" />,
      title: "Takeaway Service",
      description: "Quick and convenient service for coffee on the go",
      highlight: "Fast Service",
    },
    {
      icon: <FaWifi className="w-8 h-8" />,
      title: "Free High-Speed Wi-Fi",
      description: "Stay connected with our complimentary high-speed internet",
      highlight: "Unlimited Access",
    },
    {
      icon: <FaLaptop className="w-8 h-8" />,
      title: "Work & Study Space",
      description: "Quiet zones with power outlets perfect for productivity",
      highlight: "Dedicated Areas",
    },
    {
      icon: <GiOpenBook className="w-8 h-8" />,
      title: "Reading Corner",
      description: "Curated collection of books and magazines to enjoy",
      highlight: "Cozy Ambiance",
    },
    {
      icon: <FaMusic className="w-8 h-8" />,
      title: "Live Music Nights",
      description: "Weekly performances by local artists (Fridays & Saturdays)",
      highlight: "Entertainment",
    },
    {
      icon: <GiCoffeeCup className="w-8 h-8" />,
      title: "Specialty Brews",
      description: "Unique coffee creations and seasonal specials",
      highlight: "Artisanal Coffee",
    },
    {
      icon: <FaCoffee className="w-8 h-8" />,
      title: "Coffee Workshops",
      description: "Learn brewing techniques from our expert baristas",
      highlight: "Educational",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-linear-to-b from-stone-900 via-stone-950 to-stone-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(251, 191, 36, 0.1) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 animate-float">
        <GiCoffeeCup className="text-amber-500/10 text-8xl" />
      </div>
      <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: "1s" }}>
        <GiCoffeeCup className="text-amber-500/10 text-6xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
            <span className="text-amber-400 font-semibold tracking-widest text-sm uppercase">
              Our Amenities
            </span>
            <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-amber-100 font-light mb-6">
            Experience <span className="font-serif italic text-amber-300">More</span> Than
            <br />
            Just Coffee
          </h2>

          <p className="text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed">
            Discover a space designed for comfort, productivity, and connection. 
            We provide more than just exceptional coffee - we create experiences.
          </p>

          <div className="w-24 h-px bg-linear-to-r from-amber-600 via-amber-400 to-amber-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-stone-900/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-8 transition-all duration-500 hover:border-amber-600/50 hover:bg-stone-800/40 hover:transform hover:-translate-y-2">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-amber-600/0 via-transparent to-amber-700/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-xl bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center group-hover:border-amber-600/50 transition-all duration-300">
                    <div className="text-amber-300 group-hover:text-amber-200 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-200 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif text-amber-100 mb-3 group-hover:text-amber-50 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-stone-300 mb-4 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Highlight Badge */}
                <div className="inline-block">
                  <span className="px-3 py-1.5 bg-amber-900/30 backdrop-blur-sm border border-amber-700/30 rounded-full text-amber-300 text-xs font-medium tracking-wide">
                    {service.highlight}
                  </span>
                </div>

                {/* Bottom Decorative Line */}
                <div className="absolute bottom-4 left-8 right-8 h-px bg-linear-to-r from-transparent via-stone-700 to-transparent group-hover:via-amber-600 transition-all duration-300"></div>
              </div>

              {/* Connection Lines (for visual flow) */}
              {index < services.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-linear-to-r from-stone-700/50 to-transparent group-hover:from-amber-600/50 transition-colors duration-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-20">
          <div className="bg-linear-to-r from-amber-900/20 via-stone-900/30 to-amber-900/20 backdrop-blur-md border border-amber-800/30 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-serif text-amber-200 font-bold mb-2">24/7</div>
                <div className="text-stone-300 text-sm uppercase tracking-wider">Wi-Fi Access</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif text-amber-200 font-bold mb-2">50+</div>
                <div className="text-stone-300 text-sm uppercase tracking-wider">Seating Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif text-amber-200 font-bold mb-2">98%</div>
                <div className="text-stone-300 text-sm uppercase tracking-wider">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif text-amber-200 font-bold mb-2">∞</div>
                <div className="text-stone-300 text-sm uppercase tracking-wider">Good Vibes</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group relative bg-linear-to-r from-amber-600 to-amber-800 px-8 py-4 rounded-xl font-medium text-stone-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaCoffee className="w-5 h-5" />
                View Full Services
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-amber-700 to-amber-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group relative px-8 py-4 rounded-xl font-medium text-stone-100 border border-stone-600/50 hover:border-amber-600/50 bg-stone-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaLaptop className="w-5 h-5" />
                Book Work Space
              </span>
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <div className="w-32 h-px bg-linear-to-r from-transparent via-stone-700 to-transparent"></div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            </div>
            <div className="w-32 h-px bg-linear-to-r from-transparent via-stone-700 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-linear-to-r from-transparent via-stone-700 to-transparent"></div>
        <div className="h-px bg-linear-to-r from-amber-600/50 via-amber-400 to-amber-600/50"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;