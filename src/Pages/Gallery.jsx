import React, { useState } from "react";
import { FaInstagram, FaHeart, FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiCoffeeCup, GiCoffeeBeans, GiCupcake, GiCoffeePot } from "react-icons/gi";

// Replace with your actual gallery image imports
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      image: gallery1,
      title: "Morning Brew Art",
      category: "coffee",
      description: "Latte art created by our master barista",
      likes: 142,
      featured: true,
      icon: <GiCoffeeCup className="w-5 h-5" />,
    },
    {
      id: 2,
      image: gallery2,
      title: "Coffee Bean Selection",
      category: "beans",
      description: "Premium single-origin beans from Colombia",
      likes: 89,
      featured: false,
      icon: <GiCoffeeBeans className="w-5 h-5" />,
    },
    {
      id: 3,
      image: gallery3,
      title: "Cozy Corner",
      category: "ambiance",
      description: "Our favorite reading nook with natural light",
      likes: 156,
      featured: true,
      icon: <GiCoffeeCup className="w-5 h-5" />,
    },
    {
      id: 4,
      image: gallery4,
      title: "Fresh Pastries",
      category: "pastries",
      description: "Daily baked goods from our in-house bakery",
      likes: 203,
      featured: false,
      icon: <GiCupcake className="w-5 h-5" />,
    },
    {
      id: 5,
      image: gallery5,
      title: "Brewing Station",
      category: "equipment",
      description: "Professional espresso machines in action",
      likes: 78,
      featured: true,
      icon: <GiCoffeePot className="w-5 h-5" />,
    },
    {
      id: 6,
      image: gallery6,
      title: "Outdoor Patio",
      category: "ambiance",
      description: "Al fresco seating for sunny days",
      likes: 121,
      featured: false,
      icon: <GiCoffeeCup className="w-5 h-5" />,
    },
    {
      id: 7,
      image: gallery7,
      title: "Seasonal Special",
      category: "coffee",
      description: "Pumpkin spice latte with autumn decorations",
      likes: 167,
      featured: true,
      icon: <GiCoffeeBeans className="w-5 h-5" />,
    },
    {
      id: 8,
      image: gallery8,
      title: "Evening Ambiance",
      category: "ambiance",
      description: "Warm lighting creates cozy atmosphere",
      likes: 94,
      featured: false,
      icon: <GiCoffeeCup className="w-5 h-5" />,
    },
  ];

  const categories = [
    { id: "all", name: "All Photos", count: galleryItems.length },
    { id: "coffee", name: "Coffee Art", count: galleryItems.filter(item => item.category === "coffee").length },
    { id: "ambiance", name: "Ambiance", count: galleryItems.filter(item => item.category === "ambiance").length },
    { id: "pastries", name: "Pastries", count: galleryItems.filter(item => item.category === "pastries").length },
    { id: "beans", name: "Coffee Beans", count: galleryItems.filter(item => item.category === "beans").length },
    { id: "equipment", name: "Equipment", count: galleryItems.filter(item => item.category === "equipment").length },
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    
    if (newIndex < 0) newIndex = filteredItems.length - 1;
    if (newIndex >= filteredItems.length) newIndex = 0;
    
    setSelectedImage(filteredItems[newIndex]);
    setLightboxIndex(newIndex);
  };

  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat.id] = cat.count;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-linear-to-b from-stone-950 via-stone-900 to-stone-950 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-amber-900/20 via-stone-900/30 to-amber-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
              <span className="text-amber-400 font-semibold tracking-widest text-sm uppercase">
                Visual Stories
              </span>
              <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif text-amber-100 font-light mb-6">
              Through Our <span className="font-serif italic text-amber-300">Lens</span>
              <br />
              <span className="text-amber-200">Moments Captured</span>
            </h1>

            <p className="text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              Explore the atmosphere, craftsmanship, and special moments that make Grand Café unique.
            </p>

            <div className="w-24 h-px bg-linear-to-r from-amber-600 via-amber-400 to-amber-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-linear-to-r from-amber-700 to-amber-800 text-amber-50 shadow-lg shadow-amber-500/20"
                    : "bg-stone-800/30 backdrop-blur-sm border border-stone-700/50 text-amber-100 hover:border-amber-600/50"
                }`}
              >
                <span className="relative z-10">
                  {category.name}
                </span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id
                    ? "bg-amber-600/30 text-amber-100"
                    : "bg-stone-700/50 text-stone-400"
                }`}>
                  {categoryCounts[category.id]}
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-amber-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Gallery Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-serif text-amber-200 mb-2">8</div>
              <div className="text-stone-300 text-sm uppercase tracking-wider">
                Gallery Sets
              </div>
            </div>
            <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-serif text-amber-200 mb-2">950+</div>
              <div className="text-stone-300 text-sm uppercase tracking-wider">
                Total Likes
              </div>
            </div>
            <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-serif text-amber-200 mb-2">24/7</div>
              <div className="text-stone-300 text-sm uppercase tracking-wider">
                Tag Your Visit
              </div>
            </div>
            <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-serif text-amber-200 mb-2">Daily</div>
              <div className="text-stone-300 text-sm uppercase tracking-wider">
                New Moments
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl ${
                item.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-square md:aspect-auto md:h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  onClick={() => openLightbox(item, index)}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Top Badges */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-900/80 backdrop-blur-sm border border-stone-700/50 rounded-full">
                      <div className="text-amber-300">{item.icon}</div>
                      <span className="text-xs text-amber-200 font-medium">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => openLightbox(item, index)}
                      className="w-10 h-10 rounded-full bg-stone-900/80 backdrop-blur-sm border border-stone-700/50 flex items-center justify-center text-amber-100 hover:text-amber-50 hover:border-amber-500/50 transition-all duration-300"
                    >
                      <FaExpand className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <div className="mb-3">
                      <h3 className="text-xl font-serif text-amber-100 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-stone-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 px-4 py-2 bg-stone-900/80 backdrop-blur-sm border border-stone-700/50 rounded-xl text-amber-100 hover:text-amber-50 hover:border-amber-500/50 transition-all duration-300">
                        <FaHeart className="w-4 h-4" />
                        <span className="text-sm">{item.likes}</span>
                      </button>
                      
                      {item.featured && (
                        <span className="px-3 py-1 bg-linear-to-r from-amber-600 to-amber-700 rounded-full text-xs font-medium text-amber-50">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick View Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1 text-amber-300 text-xs">
                    <FaExpand className="w-3 h-3" />
                    <span>Click to expand</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-linear-to-r from-amber-900/40 via-stone-900/50 to-amber-900/40"></div>
            <div className="relative bg-stone-900/30 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-12">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center mx-auto mb-6">
                  <FaInstagram className="w-8 h-8 text-amber-300" />
                </div>
                <h3 className="text-3xl font-serif text-amber-100 mb-4">
                  Share Your Moments
                </h3>
                <p className="text-xl text-stone-300 mb-8 font-light">
                  Tag <span className="text-amber-300 font-medium">@grandcafe</span> on Instagram 
                  for a chance to be featured in our gallery
                </p>
                <a
                  href="https://instagram.com/grandcafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-pink-600 to-purple-600 rounded-xl font-medium text-white hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105"
                >
                  <FaInstagram className="w-5 h-5" />
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group relative bg-linear-to-r from-amber-600 to-amber-800 px-8 py-4 rounded-xl font-medium text-stone-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <GiCoffeeCup className="w-5 h-5" />
                Visit Our Café
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-amber-700 to-amber-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group relative px-8 py-4 rounded-xl font-medium text-stone-100 border border-stone-600/50 hover:border-amber-600/50 bg-stone-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaHeart className="w-5 h-5" />
                View All Photos
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-100 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-stone-900/80 backdrop-blur-sm border border-stone-700/50 flex items-center justify-center text-amber-100 hover:text-amber-50 hover:border-amber-500/50 transition-all duration-300"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-stone-900/80 backdrop-blur-sm border border-stone-700/50 flex items-center justify-center text-amber-100 hover:text-amber-50 hover:border-amber-500/50 transition-all duration-300"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-stone-900/80 backdrop-blur-sm border border-stone-700/50 flex items-center justify-center text-amber-100 hover:text-amber-50 hover:border-amber-500/50 transition-all duration-300"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          <div className="relative max-w-6xl w-full">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-stone-900 via-stone-900/90 to-transparent p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-serif text-amber-100 mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-stone-300 mb-4">
                      {selectedImage.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-amber-300">
                        {selectedImage.icon}
                        <span className="text-sm">
                          {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-amber-300">
                        <FaHeart className="w-4 h-4" />
                        <span className="text-sm">{selectedImage.likes} likes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-lg font-serif text-amber-300">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Decorative Border */}
      <div className="h-px bg-linear-to-r from-transparent via-stone-700 to-transparent"></div>
      <div className="h-px bg-linear-to-r from-amber-600/30 via-amber-400 to-amber-600/30"></div>
    </div>
  );
};

export default Gallery;