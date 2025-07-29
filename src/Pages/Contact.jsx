import React, { useState } from 'react';
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thanks ${formData.name}, We Have Received Your Message`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 "
      style={{
        backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/05/88/67/35/1000_F_588673541_4JxCJ2zLH8m6OQzDLS2yZsFMkXxb1asO.jpg')`,
      }}
    >
      
      <motion.section 
      className="bg-white bg-opacity-90 p-10 rounded-xl shadow-amber-200 max-w-xl w-full"
      initial={{opacity:10, y:50}}
      animate={{opacity:1,y:-10}}
      transition={{duration:1, ease:'easeOut'}}
      >
        <motion.h2 
        className="text-4xl text-center text-emerald-600 font-bold mb-6"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.3}}
        >Contact Us</motion.h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="p-2 border rounded"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="p-2 border rounded h-32"
            required
          />
          <motion.button 
          type="submit"
          whileHover={{scale:1.05}}
          whileTap={{scale:0.85}} 
          className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600">
            Send Message
          </motion.button>
        </form>

        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.20}} 
        className="text-center mt-8">
          <h2 className="font-semibold text-amber-900 mb-4">Follow Adidas on Social Media</h2>
          <div className="flex justify-center gap-6 text-2xl text-gray-800">
            <a href="https://www.instagram.com/adidas/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="https://x.com/adidas?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/adidas" target="_blank" rel="noopener noreferrer" className="hover:text-red-700">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/adidas/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
              <FaFacebook />
            </a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Contact;
