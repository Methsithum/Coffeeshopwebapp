import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp, FaPhone, FaInstagram, FaShoppingBag } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderData, setOrderData] = useState({
    name: '',
    item: '',
    quantity: '1',
    specialInstructions: ''
  });

  const menuItems = [
    "Artisan Espresso",
    "Velvet Cappuccino", 
    "Hazelnut Latte",
    "Cold Brew Elixir",
    "Butter Croissant",
    "Blueberry Muffin",
    "New York Cheesecake",
    "Tiramisu Classic"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hello Grand Café! I would like to place an order:
    
Customer Name: ${orderData.name}
Order Item: ${orderData.item}
Quantity: ${orderData.quantity}
${orderData.specialInstructions ? `Special Instructions: ${orderData.specialInstructions}` : ''}

Please confirm my order. Thank you!`;

    const phoneNumber = "+94761087745"; //WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOrderModalOpen(false);
    setOrderData({ name: '', item: '', quantity: '1', specialInstructions: '' });
  };

  const handleInputChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-stone-900/95 backdrop-blur-md border-b border-amber-800/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo / Shop Name */}
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-700/20 to-amber-900/20 border border-amber-700/30 flex items-center justify-center backdrop-blur-sm">
                    <GiCoffeeCup className="w-6 h-6 text-amber-300" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-serif text-amber-100 font-bold tracking-wider">
                    Grand Café
                  </h1>
                  <p className="text-xs text-amber-400 tracking-widest font-light">
                    EST. 2010
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `relative px-6 py-2 font-medium transition-colors duration-300 group ${
                      isActive 
                        ? "text-amber-50" 
                        : "text-amber-100/90 hover:text-amber-50"
                    }`
                  }
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-linear-to-r from-amber-500 to-amber-300 group-hover:w-3/4 transition-all duration-300"></span>
                </NavLink>
              ))}
              
              {/* Contact Buttons - Updated with Order Modal */}
              <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-stone-700">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-stone-800/50 border border-stone-700/50 hover:border-amber-600/50 text-amber-100 hover:text-amber-50 transition-all duration-300"
                >
                  <FaPhone className="w-4 h-4" />
                  <span className="text-sm font-medium">Reserve</span>
                </a>
                <button 
                  onClick={() => setIsOrderModalOpen(true)}
                  className="group relative flex items-center space-x-2 px-4 py-2 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-700 border border-emerald-600/50 text-white hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span className="text-sm font-medium">Order Now</span>
                  <div className="absolute inset-0 bg-linear-to-r from-emerald-700 to-emerald-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-lg bg-stone-800/50 border border-stone-700/50 flex items-center justify-center text-amber-100 hover:text-amber-50 hover:border-amber-600/50 transition-all duration-300"
            >
              {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-stone-900/95 backdrop-blur-md border-b border-amber-800/30">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-3 text-amber-100 hover:text-amber-50 hover:bg-stone-800/50 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-stone-700 space-y-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-stone-800/50 border border-stone-700/50 text-amber-100 hover:text-amber-50 transition-all duration-300"
                >
                  <FaPhone className="w-4 h-4" />
                  <span>Call to Reserve</span>
                </a>
                <button
                  onClick={() => {
                    setIsOrderModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-700 text-white hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp Order Modal */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-stone-900/95 backdrop-blur-xl border border-amber-700/30 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl shadow-amber-500/10">
            <button
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-800/50 border border-stone-700/50 flex items-center justify-center text-amber-100 hover:text-amber-50 hover:border-amber-600/50 transition-all duration-300"
            >
              <FaTimes className="w-4 h-4" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-600/20 to-emerald-700/20 border border-emerald-600/30 flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-2xl font-serif text-amber-100 mb-2">Order via WhatsApp</h3>
              <p className="text-stone-300 text-sm">Fill details to open WhatsApp with your order</p>
            </div>
            
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div>
                <label className="block text-amber-200 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={orderData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-stone-800/50 border border-amber-700/20 rounded-xl text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-amber-200 text-sm font-medium mb-2">Order Item</label>
                <select
                  name="item"
                  value={orderData.item}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-stone-800/50 border border-amber-700/20 rounded-xl text-amber-100 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="" className="text-stone-600">Select menu item</option>
                  <option value="" disabled className="text-stone-500">── Coffee ──</option>
                  {menuItems.slice(0, 4).map((item) => (
                    <option key={item} value={item} className="text-stone-800">{item}</option>
                  ))}
                  <option value="" disabled className="text-stone-500">── Pastries ──</option>
                  {menuItems.slice(4).map((item) => (
                    <option key={item} value={item} className="text-stone-800">{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-amber-200 text-sm font-medium mb-2">Quantity</label>
                <select
                  name="quantity"
                  value={orderData.quantity}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-stone-800/50 border border-amber-700/20 rounded-xl text-amber-100 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                    <option key={num} value={num} className="text-stone-800">{num}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-amber-200 text-sm font-medium mb-2">Special Instructions (Optional)</label>
                <textarea
                  name="specialInstructions"
                  value={orderData.specialInstructions}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-4 py-3 bg-stone-800/50 border border-amber-700/20 rounded-xl text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="Any special requests or modifications..."
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOrderModalOpen(false)}
                  className="flex-1 px-4 py-3 border border-amber-700/30 text-amber-300 rounded-xl hover:bg-stone-800/50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="group relative flex-1 px-4 py-3 bg-linear-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Open WhatsApp
                  <div className="absolute inset-0 bg-linear-to-r from-emerald-700 to-emerald-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Social Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-px h-24 bg-linear-to-b from-amber-600/30 via-amber-400/50 to-transparent"></div>
          <a
            href="https://instagram.com"
            className="w-10 h-10 rounded-full bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 flex items-center justify-center text-amber-100 hover:text-amber-50 hover:border-amber-600/50 transition-all duration-300 hover:scale-110"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <div className="text-xs text-amber-400 tracking-widest -rotate-90 whitespace-nowrap mt-8">
            FOLLOW US
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-50">
        <div 
          className="h-full bg-linear-to-r from-amber-600 via-amber-400 to-amber-600 transition-all duration-300"
          style={{ width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}
        ></div>
      </div>
    </>
  );
};

export default Navbar;