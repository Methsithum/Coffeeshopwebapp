import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaCoffee, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { GiCoffeeBeans, GiCupcake, GiCoffeeMug } from "react-icons/gi";

// Replace these with your actual image imports
import coffeeShop1 from "../assets/coffee1.jpg";
import coffeeShop2 from "../assets/coffee2.jpg";
import coffeeShop3 from "../assets/coffee3.jpg";

const ElegantHomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides = [
    {
      image: coffeeShop1,
      title: "Artisanal Coffee",
      subtitle: "Experience Perfection",
      description:
        "Single-origin beans roasted to perfection, crafted with passion",
      cta: "Explore Our Menu",
      accentColor: "from-amber-600 to-amber-800",
    },
    {
      image: coffeeShop2,
      title: "Morning Ritual",
      subtitle: "Freshly Brewed",
      description:
        "Start your day with our signature blends and homemade pastries",
      cta: "Explore Our Menu",
      accentColor: "from-amber-600 to-amber-800",
    },
    {
      image: coffeeShop3,
      title: "Cozy Atmosphere",
      subtitle: "Perfect Moments",
      description: "The ideal setting for work, meetings, or quiet reflection",
      cta: "Explore Our Menu",
      accentColor: "from-amber-600 to-amber-800",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-linear-to-br from-stone-900 via-stone-800 to-stone-900">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px) scale(1.1)`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-stone-900/90 via-stone-900/70 to-stone-900/90"></div>
          <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/30 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-b from-stone-900/20 via-transparent to-stone-900/80"></div>
        </div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Floating Coffee Elements */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <GiCoffeeBeans className="text-amber-200/10 text-6xl" />
        </div>
        <div
          className="absolute top-1/3 right-1/4 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <GiCoffeeMug className="text-amber-200/10 text-5xl" />
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <GiCupcake className="text-amber-200/10 text-4xl" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-100 leading-tight">
                  Where Every{" "}
                  <span className="font-serif italic text-amber-200">Cup</span>
                  <br />
                  Tells a{" "}
                  <span className="relative">
                    <span className="text-amber-100">Story</span>
                    <span className="absolute -bottom-2 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-400 to-transparent"></span>
                  </span>
                </h1>

                <div className="w-32 h-px bg-linear-to-r from-amber-600/50 via-amber-400 to-amber-600/50"></div>

                <p className="text-xl text-stone-300 font-light max-w-xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>
              

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-serif text-amber-200">15+</div>
                  <div className="text-sm text-stone-400 uppercase tracking-wider">
                    Coffee Varieties
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-amber-200">24</div>
                  <div className="text-sm text-stone-400 uppercase tracking-wider">
                    Seating Hours
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-amber-200">4.9</div>
                  <div className="text-sm text-stone-400 uppercase tracking-wider">
                    Customer Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-amber-200">2010</div>
                  <div className="text-sm text-stone-400 uppercase tracking-wider">
                    Established
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button
                  className={`group relative bg-linear-to-r ${slides[currentSlide].accentColor} px-8 py-4 rounded-lg font-medium text-stone-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaCoffee className="w-5 h-5" />
                    {slides[currentSlide].cta}
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-amber-700 to-amber-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group relative px-8 py-4 rounded-lg font-medium bg-emerald-600 text-stone-300 border border-stone-600/50 hover:border-amber-600/50 transition-all duration-300 hover:scale-[1.02]">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaWhatsapp className="w-5 h-5" />
                    Quick Order
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Featured Image & Info */}
            
            <div className="relative">
              {/* Featured Image Frame */}
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-amber-600/20 to-transparent rounded-2xl blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-96 object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 via-stone-900/10 to-transparent"></div>

                  {/* Slide Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-8 h-1 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-amber-400"
                            : "bg-stone-600 hover:bg-stone-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Info Cards */}
                <div className="absolute -bottom-6 -left-6 bg-stone-900/80 backdrop-blur-md border border-stone-700/50 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center">
                      <FaClock className="text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-stone-400">Hours</div>
                      <div className="text-stone-100 font-medium">
                        8 AM - 8 PM
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-stone-900/80 backdrop-blur-md border border-stone-700/50 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-stone-400">Location</div>
                      <div className="text-stone-100 font-medium">
                        123 Coffee St.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Navigation */}
              <div className="absolute -bottom-12 right-0 flex gap-3">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-stone-900/50 backdrop-blur-sm border border-stone-700/50 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-600/50 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-stone-900/50 backdrop-blur-sm border border-stone-700/50 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-600/50 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-linear-to-r from-transparent via-stone-700 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-linear-to-r from-amber-600 via-amber-400 to-amber-600"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-stone-500 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-linear-to-b from-amber-600 to-transparent"></div>
        </div>
      </div>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ElegantHomeBanner;
