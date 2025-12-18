import React from "react";
import { FaAward, FaHeart, FaUsers, FaSeedling } from "react-icons/fa";
import { GiCoffeeBeans, GiCoffeeCup, GiPlantSeed } from "react-icons/gi";

const Aboutus = () => {
  const values = [
    {
      icon: <GiCoffeeBeans className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Single-origin beans from sustainable farms worldwide",
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Crafted with Passion",
      description: "Every cup is brewed with care and attention to detail",
    },
    {
      icon: <FaSeedling className="w-8 h-8" />,
      title: "Sustainable Practices",
      description: "Committed to eco-friendly sourcing and operations",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Community Focus",
      description: "A welcoming space for everyone in our neighborhood",
    },
  ];

  const milestones = [
    { year: "2010", title: "Grand Opening", description: "Started as a small neighborhood café" },
    { year: "2014", title: "First Expansion", description: "Added artisanal bakery and dessert counter" },
    { year: "2018", title: "Sustainability Award", description: "Recognized for eco-friendly practices" },
    { year: "2022", title: "Best Coffee Shop", description: "Voted #1 by local food critics" },
    { year: "Today", title: "Community Hub", description: "Serving 500+ customers daily" },
  ];

  return (
    <section id="about" className="relative py-24 bg-linear-to-b from-stone-950 via-stone-900 to-stone-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4">
          <GiCoffeeCup className="text-amber-200/5 text-9xl" />
        </div>
        <div className="absolute bottom-10 right-1/4">
          <GiCoffeeCup className="text-amber-200/5 text-8xl" />
        </div>
      </div>

      {/* Coffee Bean Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(251, 191, 36, 0.05) 2px, transparent 0)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
            <span className="text-amber-400 font-semibold tracking-widest text-sm uppercase">
              Our Story
            </span>
            <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-amber-100 font-light mb-8">
            More Than <span className="font-serif italic text-amber-300">Just Coffee</span>
            <br />
            It's Our <span className="text-amber-200">Story</span>
          </h2>

          <div className="w-32 h-px bg-linear-to-r from-amber-600 via-amber-400 to-amber-600 mx-auto mb-10"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="relative">
              {/* Decorative Element */}
              <div className="absolute -left-6 top-0 w-2 h-24 bg-linear-to-b from-amber-600 to-amber-400 rounded-full"></div>

              <h3 className="text-3xl font-serif text-amber-100 mb-6">
                Where <span className="text-amber-300">Passion</span> Meets <span className="text-amber-300">Perfection</span>
              </h3>

              <div className="space-y-6 text-lg text-stone-300 font-light leading-relaxed">
                <p>
                  Founded in 2010, <span className="text-amber-200 font-medium">Grand Café</span> began as a humble dream to create a space where coffee lovers could experience truly exceptional brews. What started as a small corner shop has grown into a beloved community institution, but our commitment to quality remains unchanged.
                </p>

                <p>
                  Our journey began with a simple mission: to serve the perfect cup of coffee. We traveled across three continents, visiting coffee farms in Colombia, Ethiopia, and Indonesia, building direct relationships with growers who share our passion for sustainable, ethical farming.
                </p>

                <p>
                  Today, every cup tells a story—of the hands that cultivated the beans, the artisans who roasted them to perfection, and the baristas who craft each beverage with care. We believe that great coffee should be an experience, not just a drink.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-8 border-t border-stone-700/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-700/20 to-amber-800/20 border border-amber-700/30 flex items-center justify-center">
                  <GiPlantSeed className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <div className="text-amber-100 font-serif text-xl">Founder & Head Roaster</div>
                  <div className="text-amber-400 text-sm tracking-wider">James Richardson</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Stats */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-square bg-linear-to-br from-amber-900/20 to-stone-900/30 border border-amber-800/30 rounded-2xl flex items-center justify-center">
                <div className="text-center p-12">
                  <GiCoffeeCup className="w-32 h-32 text-amber-700/20 mx-auto mb-8" />
                  <div className="text-amber-100 text-4xl font-serif italic">Since 2010</div>
                  <div className="text-amber-400 text-lg mt-2">Brewing Memories</div>
                </div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-stone-900/80 backdrop-blur-md border border-stone-700/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-serif text-amber-200">13+</div>
                    <div className="text-xs text-stone-400 uppercase tracking-wider">Years</div>
                  </div>
                  <div className="bg-stone-900/80 backdrop-blur-md border border-stone-700/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-serif text-amber-200">50K+</div>
                    <div className="text-xs text-stone-400 uppercase tracking-wider">Cups/Month</div>
                  </div>
                  <div className="bg-stone-900/80 backdrop-blur-md border border-stone-700/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-serif text-amber-200">4.9★</div>
                    <div className="text-xs text-stone-400 uppercase tracking-wider">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Award Badge */}
            <div className="absolute -top-6 -right-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-amber-600 to-amber-800 border border-amber-500/50 flex items-center justify-center shadow-2xl shadow-amber-500/20">
                  <FaAward className="w-10 h-10 text-amber-100" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center">
                  <div className="text-xs font-bold text-stone-900">#1</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif text-amber-100 text-center mb-12">
            Our <span className="text-amber-300">Core Values</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-stone-900/30 backdrop-blur-sm border border-stone-700/30 rounded-xl p-8 hover:border-amber-600/50 hover:bg-stone-800/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-linear-to-br from-amber-600/0 via-transparent to-amber-700/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-lg bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center group-hover:border-amber-600/50 transition-all duration-300">
                    <div className="text-amber-300 group-hover:text-amber-200">
                      {value.icon}
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-serif text-amber-100 mb-3 group-hover:text-amber-50">
                  {value.title}
                </h4>

                <p className="text-stone-300 font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-serif text-amber-100 text-center mb-12">
            Our <span className="text-amber-300">Journey</span>
          </h3>

          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-amber-600 via-amber-400 to-amber-600 hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Year Circle */}
                <div className="relative z-10 shrink-0 w-24 h-24 rounded-full bg-linear-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/30 flex items-center justify-center mb-6 lg:mb-0">
                  <div className="text-center">
                    <div className="text-2xl font-serif text-amber-200">{milestone.year}</div>
                    <div className="w-6 h-1 bg-linear-to-r from-amber-600 to-amber-400 mx-auto mt-2 rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="bg-stone-900/50 backdrop-blur-sm border border-stone-700/50 rounded-xl p-6 hover:border-amber-600/50 transition-all duration-300">
                    <h4 className="text-xl font-serif text-amber-100 mb-3">{milestone.title}</h4>
                    <p className="text-stone-300">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400 border-4 border-stone-950"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-24 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-amber-600/10 via-transparent to-amber-600/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-stone-900/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-12">
                <GiCoffeeCup className="w-16 h-16 text-amber-400 mx-auto mb-8" />
                <blockquote className="text-2xl md:text-3xl font-serif text-amber-100 italic leading-relaxed mb-8">
                  "Great coffee is more than a beverage—it's a moment of connection, 
                  a pause in the day, and an opportunity to create something beautiful."
                </blockquote>
                <div className="text-amber-400 text-lg font-medium">— Our Philosophy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-linear-to-r from-transparent via-stone-700 to-transparent"></div>
        <div className="h-px bg-linear-to-r from-amber-600/30 via-amber-400 to-amber-600/30"></div>
      </div>
    </section>
  );
};

export default Aboutus;