import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';



const Shoes = () => {
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
      name: "Ultraboost 5 Shoes",
      price: 17999,
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb93e01133f24a74a1352acb63438cc2_9366/Ultraboost_5_Shoes_-_Digital_Camo_Black_JI1521_01_00_standard.jpg",
      link: "https://www.adidas.co.in/ultraboost-5-shoes---digital-camo/JI1521.html",
    },
    {
      id: 2,
      name: "Superstar II Shoes",
      price: 9999,
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98e30d2eca1f4cf59e5db8f2fee64a59_9366/Superstar_II_Shoes_White_JQ4728_01_00_standard.jpg",
      link: "https://www.adidas.co.in/superstar-ii-shoes/JQ4728.html",
    },
    {
      id: 3,
      name: "Stan Smith Shoes",
      price: 5999,
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e41fcd121484885ad846dfc70e802cc_9366/Stan_Smith_Shoes_Black_IG1319_01_standard.jpg",
      link: "https://www.adidas.co.in/stan-smith-shoes/IG1319.html",
    },
    {
      id:4,
      name:"Samba OG Shoes",
      price:10999,
      image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/011744ef273d4a66b9cc880b980340a2_9366/Samba_OG_Shoes_White_ID0478_01_standard.jpg",
      link:"https://www.adidas.co.in/samba-og-shoes/ID0478.html",
    },
    {
     id:5,
     name:"Gazelle Shoes",
     price:9999,
     image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/340aeb9ac43847fea000a8da0182b561_9366/Gazelle_Shoes_Burgundy_B41645_01_standard.jpg",
     link:"https://www.adidas.co.in/gazelle-shoes/B41645.html", 
    },
    {
      id:6,
      name:"Forum Low CL Shoes",
      price:10999,
      image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb9abfcff3c448538123d690e5216d26_9366/Forum_Low_CL_Shoes_White_JI3269_01_00_standard.jpg",
      link:"https://www.adidas.co.in/forum-low-cl-shoes/JI3269.html"
    },
    

  ];

  return (
    <section className="py-12 px-6 bg-gray-400">
      <h2
        id="products"
        className="italic text-4xl font-bold mb-10 text-center text-amber-900 underline"
      >
        Adidas Shoes
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
               className="object-contain"
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

export default Shoes;
