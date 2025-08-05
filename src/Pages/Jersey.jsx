import React from "react";
import {useCart} from "../context/CartContext.jsx"
import { motion } from "framer-motion";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';
import { image } from "framer-motion/client";

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
     image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/165dc0b6d26448ce905ff96c05526668_9366/Liverpool_FC_25-26_Long_Sleeve_Home_Jersey_Red_JV6456_21_model.jpg",
     link:"https://www.adidas.co.in/liverpool-fc-25-26-long-sleeve-home-jersey/JV6456.html"     
    },
    {
      id:"2",
      name:"Arsenal 25/26 Third Jersey",
      price:5999,
      image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4a02015f9724a4a9391fdbded3d1b3e_9366/Arsenal_25-26_Third_Jersey_White_JI9556_21_model.jpg",
      link:"https://www.adidas.co.in/arsenal-25-26-third-jersey/JI9556.html"

    },
    {
      id:"3",
      name:"Manchester United Home Jersey",
      price:3599,
      image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb34e2d7ef774076b2384c4aecc3c090_9366/Manchester_United_24-25_Home_Jersey_Red_IU1397_HM1.jpg",
      link:"https://www.adidas.co.in/manchester-united-24-25-home-jersey/IU1397.html"
    },
    {
      id:"4",
      name:"Real Madrid 25/26 Home Jersey",
      price:5999,
      image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7463ff6a459249d58e304d7d677ef93c_9366/Real_Madrid_Terrace_Icons_Jersey_Gender_Neutral_White_JF2581_HM1.jpg",
      link:"https://www.adidas.co.in/real-madrid-terrace-icons-jersey-gender-neutral/JF2581.html",
    },
    {
      id:"5",
      name:"FC Bayern Terrace Icons Jersey",
      price:4799,
      image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b006eb1925974618a2df1ce4683c5611_9366/FC_Bayern_Terrace_Icons_Jersey_Burgundy_JF0595_HM1.jpg",
      link:"https://www.adidas.co.in/fc-bayern-terrace-icons-jersey/JF0595.html"
    },
    {
      id:"6",
      name:"Juventus 25/26 Home Jersey",
      price:5999,
      image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe0a2e213d8d4ce2accb8324679b8e5a_9366/Juventus_25-26_Home_Jersey_White_JJ4320_21_model.jpg",
      link:"https://www.adidas.co.in/juventus-25-26-home-jersey/JJ4320.html"
    },
    
];

return(
      <section className="py-12 px-6 bg-gray-400">
       <h2
       className="font-bold text-4xl text-emerald-600 underline flex items-center justify-center "
       >
       Adidas Jersey 
       </h2>
       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-6 ">
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
           className="object-contain"
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