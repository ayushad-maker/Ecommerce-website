import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaShoppingBag, FaShoePrints, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const floatingIcons = [
  { icon: <FaShoppingBag />, top: "20%", left: "10%" },
  { icon: <FaShoePrints />, top: "40%", left: "80%" },
  { icon: <FaCartPlus />, top: "70%", left: "30%" },
];

const HeroBanner = () => {
  return (
    <div className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Floating icons background */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute text-white text-4xl animate-float-slow"
          style={{ top: item.top, left: item.left }}
        >
          {item.icon}
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-emerald-700 via-black to-emerald-700 opacity-60"></div>

      {/* Optional dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 text-center p-8 rounded-lg shadow-xl max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Adidas
        </h1>
        <p className="text-lg text-gray-200 mb-4">
          Discover premium products, cutting-edge sportswear, and lifestyle gear crafted for performance and style.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/shoes"
            className="inline-block mt-4 px-6 py-3 bg-emerald-400 text-black font-semibold rounded-full shadow-lg transition"
          >
            Shop Now
          </Link>
        </motion.div>

        {/* Scroll down icon */}
        <div className="mt-6 text-white flex flex-col items-center">
          <FaArrowDown className="text-xl animate-bounce" />
          <p className="text-xs mt-1 text-white tracking-widest uppercase">Scroll Down</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
