import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <div
      className="h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://4kwallpapers.com/images/wallpapers/adidas-golden-logo-2880x1800-17549.jpg')",
      }}
    >
      <motion.div className="text-center bg-black/80 p-8 rounded-lg shadow-xl max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="italic text-5xl md:text-4xl font-bold text-white mb-4"
        >
          Step Into the Future with{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="text-emerald-400"
          >
            Adidas
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="italic text-xl text-gray-200 mb-6"
        >
          Performance meets style —{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="font-semibold"
          >
            be unstoppable.
          </motion.span>
        </motion.p>

        <a href="#products" className="block mt-8 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-8 h-8 mx-auto"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <p className="text-sm mt-1 text-white">Scroll Down</p>
        </a>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
