import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={"/videos/images/image5.jpg"}
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Hero background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-40 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center p-8 rounded-lg shadow-xl max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 autoShow">
          Welcome to <span className="text-amber-400">adidas</span>
        </h1>
        <p className="text-xl font-bold text-white mb-8 autoShow">
          Discover premium products, cutting-edge sportswear, and lifestyle gear crafted for performance and style.
        </p>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/shoes"
            className="relative px-6 py-3 bg-emerald-400 text-black font-semibold rounded-full hover:bg-emerald-600 transition autoShow"
          >
            Shop Now
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-6 text-white flex flex-col items-center">
          <FaArrowDown className="text-xl animate-bounce mt-4" />
          <p className="text-sm font-bold tracking-widest uppercase">
            Scroll Down
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
