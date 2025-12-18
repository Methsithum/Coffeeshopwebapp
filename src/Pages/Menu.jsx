import React, { useState } from "react";
import { FaLeaf, FaStar, FaFire, FaClock, FaFilter } from "react-icons/fa";
import { GiCoffeeBeans, GiCupcake, GiCroissant, GiCoffeeMug } from "react-icons/gi";

// Replace with your actual image imports
import espresso from "../assets/espresso.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import latte from "../assets/latte.jpg";
import coldBrew from "../assets/cold-brew.jpg";
import croissant from "../assets/croissant.jpg";
import muffin from "../assets/muffin.jpg";
import cheesecake from "../assets/cheesecake.jpg";
import tiramisu from "../assets/tiramisu.jpg";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");

  const menuItems = [
    {
      id: 1,
      name: "Artisan Espresso",
      description: "Single-origin beans with rich crema and balanced acidity",
      price: "Rs. 320",
      category: "coffee",
      filter: "signature",
      image: espresso,
      icon: <GiCoffeeBeans className="w-5 h-5" />,
      featured: true,
      badges: ["Signature"],
    },
    {
      id: 2,
      name: "Velvet Cappuccino",
      description: "Perfectly steamed milk with delicate microfoam art",
      price: "Rs. 420",
      category: "coffee",
      filter: "classic",
      image: cappuccino,
      icon: <GiCoffeeMug className="w-5 h-5" />,
      featured: false,
      badges: ["Best Seller"],
    },
    {
      id: 3,
      name: "Hazelnut Latte",
      description: "Smooth espresso with hazelnut syrup and velvety milk",
      price: "Rs. 450",
      category: "coffee",
      filter: "flavored",
      image: latte,
      icon: <FaLeaf className="w-5 h-5" />,
      featured: true,
      badges: ["New"],
    },
    {
      id: 4,
      name: "Cold Brew Elixir",
      description: "24-hour steeped coffee with smooth chocolate notes",
      price: "Rs. 380",
      category: "coffee",
      filter: "cold",
      image: coldBrew,
      icon: <FaFire className="w-5 h-5" />,
      featured: false,
      badges: ["Seasonal"],
    },
    {
      id: 5,
      name: "Butter Croissant",
      description: "Flaky, buttery layers baked fresh daily",
      price: "Rs. 280",
      category: "pastry",
      filter: "breakfast",
      image: croissant,
      icon: <GiCroissant className="w-5 h-5" />,
      featured: false,
      badges: ["Fresh"],
    },
    {
      id: 6,
      name: "Blueberry Muffin",
      description: "Moist muffin bursting with fresh blueberries",
      price: "Rs. 240",
      category: "pastry",
      filter: "breakfast",
      image: muffin,
      icon: <GiCupcake className="w-5 h-5" />,
      featured: true,
      badges: ["Vegan Option"],
    },
    {
      id: 7,
      name: "New York Cheesecake",
      description: "Creamy classic with berry compote and graham crust",
      price: "Rs. 520",
      category: "pastry",
      filter: "dessert",
      image: cheesecake,
      icon: <GiCupcake className="w-5 h-5" />,
      featured: false,
      badges: ["Rich"],
    },
    {
      id: 8,
      name: "Tiramisu Classic",
      description: "Coffee-soaked ladyfingers with mascarpone cream",
      price: "Rs. 480",
      category: "pastry",
      filter: "dessert",
      image: tiramisu,
      icon: <FaStar className="w-5 h-5" />,
      featured: true,
      badges: ["Italian"],
    },
  ];

  const categories = [
    { id: "all", name: "All Items", icon: <FaFilter className="w-4 h-4" /> },
    { id: "coffee", name: "Coffee", icon: <GiCoffeeMug className="w-4 h-4" /> },
    { id: "pastry", name: "Pastries", icon: <GiCupcake className="w-4 h-4" /> },
  ];

  const filters = [
    { id: "all", name: "All" },
    { id: "signature", name: "Signature" },
    { id: "classic", name: "Classic" },
    { id: "flavored", name: "Flavored" },
    { id: "breakfast", name: "Breakfast" },
    { id: "dessert", name: "Desserts" },
  ];

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    const filterMatch = activeFilter === "all" || item.filter === activeFilter;
    return categoryMatch && filterMatch;
  });

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
                Our Selection
              </span>
              <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif text-amber-100 font-light mb-6">
              Curated <span className="font-serif italic text-amber-300">Flavors</span>
              <br />
              <span className="text-amber-200">Crafted with Care</span>
            </h1>

            <p className="text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              Each item is carefully prepared using premium ingredients, 
              from single-origin coffee beans to house-made pastries.
            </p>

            <div className="w-24 h-px bg-linear-to-r from-amber-600 via-amber-400 to-amber-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-linear-to-r from-amber-700 to-amber-800 text-amber-50 shadow-lg shadow-amber-500/20"
                    : "bg-stone-800/30 backdrop-blur-sm border border-stone-700/50 text-amber-100 hover:border-amber-600/50"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-amber-900/40 border border-amber-700/50 text-amber-200"
                    : "bg-stone-800/20 border border-stone-700/30 text-stone-400 hover:border-amber-700/40 hover:text-amber-100"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Menu Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-serif text-amber-200 mb-2">8+</div>
              <div className="text-stone-300 text-sm uppercase tracking-wider">
                Signature Items
              </div>
            </div>
            <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-serif text-amber-200 mb-2">Daily</div>
              <div className="text-stone-300 text-sm uppercase tracking-wider">
                Freshly Baked
              </div>
            </div>
            <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-serif text-amber-200 mb-2">24/7</div>
              <div className="text-stone-300 text-sm uppercase tracking-wider">
                Online Orders
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-stone-900/40 backdrop-blur-sm border ${
                item.featured
                  ? "border-amber-600/50"
                  : "border-stone-700/50 hover:border-amber-700/50"
              } rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/20`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 bg-linear-to-r from-amber-600 to-amber-700 rounded-full text-xs font-medium text-amber-50 shadow-lg">
                    Featured
                  </div>
                </div>
              )}

              {/* Item Badges */}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                {item.badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="px-2 py-1 bg-stone-900/80 backdrop-blur-sm border border-stone-700/50 rounded text-xs text-amber-300"
                  >
                    {badge}
                  </div>
                ))}
              </div>

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/50 to-transparent z-10"></div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-900/50 backdrop-blur-sm border border-amber-700/50 flex items-center justify-center">
                    <div className="text-amber-300">{item.icon}</div>
                  </div>
                  <span className="text-xs text-amber-200 font-medium">
                    {item.category === "coffee" ? "Coffee" : "Pastry"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif text-amber-100 group-hover:text-amber-50 transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-2xl font-serif text-amber-300 font-bold">
                    {item.price}
                  </div>
                </div>

                <p className="text-stone-300 text-sm mb-6 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Action Button */}
                <button className="w-full py-3 bg-stone-800/50 border border-stone-700/50 rounded-xl text-amber-100 font-medium hover:bg-amber-900/30 hover:border-amber-600/50 transition-all duration-300 group-hover:scale-105">
                  Add to Order
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-amber-600/0 via-transparent to-amber-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Pricing Info */}
        <div className="bg-stone-900/30 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center mx-auto mb-4">
                <FaClock className="w-5 h-5 text-amber-300" />
              </div>
              <h4 className="text-lg font-serif text-amber-100 mb-2">
                Brew Time
              </h4>
              <p className="text-stone-300 text-sm">
                Most coffees prepared in 3-5 minutes
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="w-5 h-5 text-amber-300" />
              </div>
              <h4 className="text-lg font-serif text-amber-100 mb-2">
                Vegan Options
              </h4>
              <p className="text-stone-300 text-sm">
                Plant-based milk and pastry options available
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center mx-auto mb-4">
                <FaStar className="w-5 h-5 text-amber-300" />
              </div>
              <h4 className="text-lg font-serif text-amber-100 mb-2">
                Customization
              </h4>
              <p className="text-stone-300 text-sm">
                Modify any item to your preference
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group relative bg-linear-to-r from-amber-600 to-amber-800 px-8 py-4 rounded-xl font-medium text-stone-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <GiCoffeeMug className="w-5 h-5" />
                Download Full Menu
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-amber-700 to-amber-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group relative px-8 py-4 rounded-xl font-medium text-stone-100 border border-stone-600/50 hover:border-emerald-600/50 bg-linear-to-r from-emerald-700/20 to-emerald-800/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaLeaf className="w-5 h-5" />
                Order via WhatsApp
              </span>
            </button>
          </div>

          <p className="text-stone-400 text-sm mt-6">
            Prices include GST. Seasonal items may vary.
          </p>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="h-px bg-linear-to-r from-transparent via-stone-700 to-transparent"></div>
      <div className="h-px bg-linear-to-r from-amber-600/30 via-amber-400 to-amber-600/30"></div>
    </div>
  );
};

export default MenuPage;