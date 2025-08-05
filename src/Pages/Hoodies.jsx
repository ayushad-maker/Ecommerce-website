import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';


const Hoodies = () =>{  

 const {addToCart} = useCart();
  
 const handleAdd = (product) =>{
     const safeProduct = {
        id:product.id,
        name:product.name,
        price:product.price,
        image:product.image
     }

     addToCart(safeProduct);
     
 }

 
 const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

 const Products = [
    {
        id:"1",
        name:"adidas Stella McCartney Hoodie",
        price:11999,
        image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68a6dec3a54e4269aba6ab3222522f84_9366/adidas_By_Stella_McCartney_Scuba_Hoodie_Grey_JM5792_HM1.jpg",
        link:"https://www.adidas.co.in/adidas-by-stella-mccartney-scuba-hoodie/JM5792.html"
    },
    {
        id:"2",
        name:"Y-3 Graphic FT Hoodie",
        price:24999,
        image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26175640b61848fcb657245c4d4a5a03_9366/Y-3_Graphic_FT_Hoodie_Grey_KB2605_21_model.jpg",
        link:"https://www.adidas.co.in/y-3-graphic-ft-hoodie/KB2605.html"
    },
    {
         id:"3",
        name:"Chavarria Heavyweight Hoodie",
        price:17999,
        image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/190ca1cb594d4c418cf88f04f4b361cd_9366/Chavarria_Heavyweight_Hoodie_White_JW1445_21_model.jpg",
        link:"https://www.adidas.co.in/chavarria-heavyweight-hoodie/JW1445.html"
    },
    {
         id:"4",
        name:"adidas Z.N.E. Full-Zip Hoodie",
        price:5999,
        image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/579cc3220b884bf68f5868244d35e57c_9366/adidas_Z.N.E._Full-Zip_Hoodie_Pink_JC5394_21_model.jpg",
        link:"https://www.adidas.co.in/adidas-z.n.e.-full-zip-hoodie/JC5394.html"
    },
    { 
         id:"5",
        name:"Graphic Hoodie",
        price:6999,
        image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3cc1b68bacdf42bea669777443bcd66b_9366/Graphic_Hoodie_Black_JX3058_21_model.jpg",
        link:"https://www.adidas.co.in/graphic-hoodie/JX3058.html"
    },
    {
        id:"6",
        name:"adidas by Avavav Hoodie",
        price:22999,
        image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b8f03155049744d6a02e4eb6b2daa7ec_9366/adidas_by_Avavav_Shoulderless_Hoodie_Grey_JP4849_25_outfit.jpg",
        link:"https://www.adidas.co.in/adidas-by-avavav-shoulderless-hoodie/JP4849.html"
    }

 ]

return (
   
    <section className="bg-gray-400 py-12 px-3">
        <h2 className="text-3xl font-bold text-emerald-600 underline italic flex justify-center items-center ">
            Adidas Hoodies
        </h2>
      <div className="grid grid-cols-3 max-w-6xl gap-8 mx-auto mt-8"> 
      {Products.map((product)=>(
       <div key={product.id} className="animate-glow-border">
         <div className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300">

          <InnerImageZoom
          src={product.image}
          zoomSrc={product.image}
          zoomType="hover"
          width="100%"
          height="225px"
          />
           
           <h2 
            className="text-xl font-semibold text-black "
           > {product.name}
           </h2>  


           <p className="text-xl font-semibold text-black mt-3 ">
              {formatINR(product.price)}
           </p>
             
           <div className="flex items-center justify-between">
            <a 
            href={product.link}
            target="blank"
            rel="noopener noreferrer"
            >
             <motion.button
             whileHover={{scale:1.05}}
             whileTap={{scale:0.75}}
             className="bg-emerald-400 rounded-lg hover:bg-emerald-600 py-2 px-2 mt-4"
             >
                Shop Now
                </motion.button>    
                </a> 
             
            <motion.button
            whileHover={{scale:1.05}}
            whileTap={{scale:0.85}}
            className="bg-blue-500 rounded-sm text-white hover:bg-blue-600 py-2 px-3 mt-3"
            onClick={()=>{handleAdd(product)}}
            >
             Add To Cart    
            </motion.button> 
           </div>

         </div>
       </div>             
      ))}
      </div>
    </section>

)


}
    
export default Hoodies;
