import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';



const Products = () => {
  const { addToCart } = useCart();

  const handleAdd = (product) => {
    const safeProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    };
    addToCart(safeProduct);
  };

  // Format price as Indian Rupee (e.g., ₹9,999)
  const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const products = [
    {
      id: 1,
      name: "Adidas Ultraboost",
      price: 9999,
      image: "https://m.media-amazon.com/images/I/61IR1qCY9GL._SY625_.jpg",
      link: "https://www.adidas.com/us/ultraboost-1.0-shoes/JS1254.html",
    },
    {
      id: 2,
      name: "Adidas Superstar",
      price: 12999,
      image: "https://m.media-amazon.com/images/I/51aWOnOmmxL._SY625_.jpg",
      link: "https://www.adidas.com/us/superstar-ii-shoes/IH8659.html",
    },
    {
      id: 3,
      name: "Adidas Stan Smith",
      price: 4999,
      image: "https://m.media-amazon.com/images/I/51EIrefggGL._SY625_.jpg",
      link: "https://www.adidas.com/us/stan-smith-lux-shoes/JH9719.html",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-400">
      <h2
        id="products"
        className="italic text-4xl font-bold mb-10 text-center text-emerald-600 underline"
      >
        Adidas Products
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="animate-glow-border">
            <div className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition duration-300">
              <InnerImageZoom
               src={product.image}
               zoomSrc={product.image}
               zoomType="hover"
               zoomScale={1.6}
               width="100%"
               height="225px"
               className="rounded-md mb-4 object-cover"
               />

              <h3 className="italic text-xl font-semibold text-black">
                {product.name}
              </h3>
              <p className="text-xl font-semibold text-black mt-4">
                {formatINR(product.price)}
              </p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.85 }}
                  className="bg-emerald-700 rounded-xl hover:bg-emerald-800 px-4 py-2 mt-3"
                >
                  Shop Now
                </motion.button>
              </a>
              <motion.button
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.85 }}
                onClick={() => handleAdd(product)}
                className="bg-blue-600 text-white ml-25 px-3 py-1 rounded"
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
