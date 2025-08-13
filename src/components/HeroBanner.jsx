import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const images = [
  "/videos/images/image1.jpg",
  "/videos/images/image5.jpg",
  "/videos/images/image4.jpg"
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIndex === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}

    

      {/* Content */}
      <motion.div
        className="relative z-30 text-center p-8 rounded-lg shadow-xl max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          Welcome to <span className="text-amber-800">adidas</span>
        </h1>
        <p className="text-xl font-bold text-black mb-8">
          Discover premium products, cutting-edge sportswear, and lifestyle gear crafted for performance and style.
        </p>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/shoes"
            className="relative px-6 py-3 bg-emerald-400 text-black font-semibold rounded-full hover:bg-emerald-600 transition"
          >
            Shop Now
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-6 text-black flex flex-col items-center">
          <FaArrowDown className="text-xl animate-bounce mt-4" />
          <p className="text-sm font-bold text-black tracking-widest uppercase ">
            Scroll Down
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
