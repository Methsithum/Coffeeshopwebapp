import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock, FaInstagram } from "react-icons/fa";
import { GiCoffeeCup, GiCoffeeBeans } from "react-icons/gi";

const Contact = () => {
  const [orderData, setOrderData] = useState({
    name: '',
    item: '',
    quantity: '1',
    specialInstructions: ''
  });

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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

  const openingHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 10:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 8:00 PM" },
  ];

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hello Grand Café! I would like to place an order:
    
Customer Name: ${orderData.name}
Order Item: ${orderData.item}
Quantity: ${orderData.quantity}
${orderData.specialInstructions ? `Special Instructions: ${orderData.specialInstructions}` : ''}

Please confirm my order. Thank you!`;

    const phoneNumber = "+94761087745";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setOrderData({ name: '', item: '', quantity: '1', specialInstructions: '' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission (could connect to email service)
    alert("Thank you for your message! We'll get back to you soon.");
    setContactData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e, formType) => {
    if (formType === 'order') {
      setOrderData({
        ...orderData,
        [e.target.name]: e.target.value
      });
    } else {
      setContactData({
        ...contactData,
        [e.target.name]: e.target.value
      });
    }
  };

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
                Get in Touch
              </span>
              <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif text-amber-100 font-light mb-6">
              Let's <span className="font-serif italic text-amber-300">Connect</span>
              <br />
              Over a <span className="text-amber-200">Perfect Brew</span>
            </h1>

            <p className="text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              Visit us, drop us a message, or order your favorite coffee through WhatsApp.
              We're here to serve you the perfect cup.
            </p>

            <div className="w-24 h-px bg-linear-to-r from-amber-600 via-amber-400 to-amber-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-8 hover:border-amber-600/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-amber-100 mb-2">Our Location</h3>
                    <p className="text-stone-300">
                      123 Coffee Street<br />
                      Colombo 00500<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-8 hover:border-amber-600/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center shrink-0">
                    <FaPhone className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-amber-100 mb-2">Phone Number</h3>
                    <p className="text-stone-300">
                      <a href="tel:+94112345678" className="hover:text-amber-300 transition-colors">
                        +94 11 234 5678
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-8 hover:border-amber-600/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center shrink-0">
                    <FaEnvelope className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-amber-100 mb-2">Email Address</h3>
                    <p className="text-stone-300">
                      <a href="mailto:info@grandcafe.com" className="hover:text-amber-300 transition-colors">
                        info@grandcafe.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-8 hover:border-amber-600/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center shrink-0">
                    <FaClock className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-amber-100 mb-2">Opening Hours</h3>
                    <div className="space-y-2">
                      {openingHours.map((item, index) => (
                        <div key={index} className="flex justify-between text-stone-300">
                          <span>{item.day}</span>
                          <span className="text-amber-300">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-8">
              <h3 className="text-lg font-serif text-amber-100 mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/grandcafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-linear-to-br from-amber-900/20 to-amber-800/10 border border-stone-700/50 flex items-center justify-center text-amber-100 hover:text-amber-50 hover:border-amber-600/50 hover:scale-110 transition-all duration-300"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/94761087745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-600/20 to-emerald-700/10 border border-stone-700/50 flex items-center justify-center text-emerald-100 hover:text-emerald-50 hover:border-emerald-600/50 hover:scale-110 transition-all duration-300"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map and Contact Form */}
          <div className="lg:col-span-2">
            {/* Google Map Embed */}
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="h-80 bg-linear-to-br from-amber-900/30 to-stone-900/30 border border-amber-800/30 flex items-center justify-center">
                  <div className="text-center">
                    <GiCoffeeBeans className="w-16 h-16 text-amber-700/20 mx-auto mb-4" />
                    <div className="text-amber-100 text-2xl font-serif">Google Maps Location</div>
                    <p className="text-amber-300 mt-2">123 Coffee Street, Colombo</p>
                    <a 
                      href="https://maps.google.com/?q=123+Coffee+Street,Colombo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-3 bg-amber-900/30 border border-amber-700/50 rounded-xl text-amber-100 hover:text-amber-50 hover:border-amber-600/50 transition-all duration-300"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-serif text-amber-100 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={contactData.name}
                      onChange={(e) => handleInputChange(e, 'contact')}
                      required
                      className="w-full px-4 py-3 bg-stone-800/50 border border-amber-700/20 rounded-xl text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={contactData.email}
                      onChange={(e) => handleInputChange(e, 'contact')}
                      required
                      className="w-full px-4 py-3 bg-stone-800/50 border border-amber-700/20 rounded-xl text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-amber-200 text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactData.phone}
                    onChange={(e) => handleInputChange(e, 'contact')}
                    className="w-full px-4 py-3 bg-stone-800/50 border border-amber-700/20 rounded-xl text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="+94 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-amber-200 text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={contactData.message}
                    onChange={(e) => handleInputChange(e, 'contact')}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-stone-800/50 border border-amber-700/20 rounded-xl text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="How can we help you today?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-linear-to-r from-amber-600 to-amber-800 rounded-xl text-stone-100 font-medium hover:from-amber-700 hover:to-amber-900 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* WhatsApp Order Section */}
            <div className="bg-linear-to-br from-emerald-900/20 to-emerald-800/10 backdrop-blur-sm border border-emerald-700/30 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-600/30 to-emerald-700/20 border border-emerald-600/50 flex items-center justify-center">
                  <FaWhatsapp className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-emerald-100">Order via WhatsApp</h2>
                  <p className="text-emerald-300 text-sm">Quick and convenient ordering</p>
                </div>
              </div>

              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-emerald-200 text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={orderData.name}
                      onChange={(e) => handleInputChange(e, 'order')}
                      required
                      className="w-full px-4 py-3 bg-emerald-900/30 border border-emerald-700/30 rounded-xl text-emerald-100 placeholder-emerald-400/50 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-emerald-200 text-sm font-medium mb-2">Order Item</label>
                    <select
                      name="item"
                      value={orderData.item}
                      onChange={(e) => handleInputChange(e, 'order')}
                      required
                      className="w-full px-4 py-3 bg-emerald-900/30 border border-emerald-700/30 rounded-xl text-emerald-100 focus:outline-none focus:border-emerald-500 transition-colors"
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
                </div>

                <div>
                  <label className="block text-emerald-200 text-sm font-medium mb-2">Quantity</label>
                  <select
                    name="quantity"
                    value={orderData.quantity}
                    onChange={(e) => handleInputChange(e, 'order')}
                    required
                    className="w-full px-4 py-3 bg-emerald-900/30 border border-emerald-700/30 rounded-xl text-emerald-100 focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                      <option key={num} value={num} className="text-stone-800">{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-emerald-200 text-sm font-medium mb-2">Special Instructions (Optional)</label>
                  <textarea
                    name="specialInstructions"
                    value={orderData.specialInstructions}
                    onChange={(e) => handleInputChange(e, 'order')}
                    rows="2"
                    className="w-full px-4 py-3 bg-emerald-900/30 border border-emerald-700/30 rounded-xl text-emerald-100 placeholder-emerald-400/50 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Any special requests or modifications..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-linear-to-r from-emerald-600 to-emerald-700 rounded-xl text-white font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Open WhatsApp to Order
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center mx-auto mb-4">
              <GiCoffeeCup className="w-6 h-6 text-amber-300" />
            </div>
            <div className="text-2xl font-serif text-amber-100 mb-2">15 Min</div>
            <div className="text-stone-300 text-sm">Average Preparation Time</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp className="w-6 h-6 text-amber-300" />
            </div>
            <div className="text-2xl font-serif text-amber-100 mb-2">24/7</div>
            <div className="text-stone-300 text-sm">WhatsApp Orders</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center mx-auto mb-4">
              <FaClock className="w-6 h-6 text-amber-300" />
            </div>
            <div className="text-2xl font-serif text-amber-100 mb-2">7 AM - 9 PM</div>
            <div className="text-stone-300 text-sm">Open Daily</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://maps.google.com/?q=123+Coffee+Street,Colombo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-linear-to-r from-amber-600 to-amber-800 px-8 py-4 rounded-xl font-medium text-stone-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaMapMarkerAlt className="w-5 h-5" />
                Get Directions
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-amber-700 to-amber-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="tel:+94112345678"
              className="group relative px-8 py-4 rounded-xl font-medium text-stone-100 border border-stone-600/50 hover:border-amber-600/50 bg-stone-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaPhone className="w-5 h-5" />
                Call Now
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="h-px bg-linear-to-r from-transparent via-stone-700 to-transparent"></div>
      <div className="h-px bg-linear-to-r from-amber-600/30 via-amber-400 to-amber-600/30"></div>
    </div>
  );
};

export default Contact;