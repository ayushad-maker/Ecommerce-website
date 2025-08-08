import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/animation.mp4" type="video/mp4" />
      </video>

      {/* Light dark overlay for contrast */}
      <div className="absolute inset-0 z-10  bg-opacity-25 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-30 text-center p-8 rounded-lg shadow-xl max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to <span1 className="text-amber-800">adidas</span1></h1>
        <p className="text-lg text-gray-200 mb-8">
          Discover premium products, cutting-edge sportswear, and lifestyle gear crafted for performance and style.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        
            {/* Button */}
            <Link
              to="/shoes"
              className="relative px-6 py-3 bg-emerald-400 text-black font-semibold rounded-full hover:bg-emerald-600 transition "
            >
              Shop Now
            </Link>
   
        </motion.div>




        <div className="mt-6 text-white flex flex-col items-center">
          <FaArrowDown className="text-xl animate-bounce mt-4" />
          <p className="text-xs  text-white tracking-widest uppercase">Scroll Down</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
