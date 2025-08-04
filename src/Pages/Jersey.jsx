import React from "react";
import {useCart} from "../context/CartContext.jsx"
import { motion } from "framer-motion";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';

const Jersey = () =>{

    const {addToCart} = useCart();

const handleAdd = (product)=>{
   const safeProduct = {
       id:product.id,
       name:product.name,
       price:product.price,
       image:product.image,
   };
   addToCart(safeProduct);
};

   const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

const Products = [
    {
     id:"1",
     name:"Liverpool FC Home Jersey",
     price:8599,
     image:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/491ba500514f4157819c4f8956b0df68_9366/Liverpool_FC_25-26_Home_Authentic_Jersey_Red_JY4237_HM1.jpg",
     link:"https://www.adidas.co.in/liverpool-fc-25-26-home-authentic-jersey/JY4237.html"     
    },
];

return(
      <section className="py-12 px-6 bg-gray-400">
       <h2
       className="font-bold text-4xl text-emerald-600 underline flex items-center justify-center "
       >
       Adidas Jersey 
       </h2>
       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
       {Products.map((product)=>(
        <div key={product.id} className="animate-glow-border">
         <div className="bg-white rounded-lg p-4 shadow-lg hover:scale-105 transition duration-300 ">

           <InnerImageZoom
           src={product.image}
           zoomSrc={product.image}
           zoomScale={1.6}
           zoomType="hover"
           width="100%"
           height="225px"
           /> 

           <h2
           className="text-xl italic text-black font-semibold mt-2 ml-1"
           >
           {product.name}
           </h2>
           <p
           className="text-xl text-black font-semibold ml-1 mt-2"
           >
            {formatINR(product.price)}
            </p>  
           <div className="flex justify-between items-center mt-4 px-1">
           <a 
           href={product.link}
           target="blank"
           rel="noopener noreferrer"
           > 
            
           <motion.button
           whileHover={{scale:1.05}}
           whileTap={{scale:0.85}}
           className="bg-emerald-600 rounded-lg text-black px-3 py-1  hover:bg-emerald-700"
           >
             Shop Now
            </motion.button> 
           </a>

           <motion.button
           whileHover={{scale:1.05}}
           whileTap={{scale:0.85}}
           onClick={()=>handleAdd(product)}
           className="bg-blue-500 rounded  px-3 py-1 text-white"
           >
            Add to Cart
           </motion.button>
           </div>
         </div>
        </div>  
       ))}
       </div>
      </section>
)


}

export default Jersey