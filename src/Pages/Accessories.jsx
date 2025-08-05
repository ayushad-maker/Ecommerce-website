import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';


const Accessories = () =>{

 const {addToCart} = useCart();
 
 
 const handleAdd = (product) =>{
    const safeProduct = {
        id:product.id,
        name:product.name,
        price:product.price,
        image:product.image,
    }
    
    addToCart(safeProduct)
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
        name:"adidas Pixar Coco Backpack Kids",
        price:2999,
        image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/18bebd9238fd4c0aaaec52e44c68cfb2_9366/adidas_Pixar_Coco_Backpack_Kids_Black_JM4469_01_00_standard.jpg",
        link:"https://www.adidas.co.in/adidas-pixar-coco-backpack-kids/JM4469.html" 
    },
    {
       id:"2",
       name:"Adicolor Classic Mini Airliner",
       price:2999,
       image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0840b24a87224bd0b6c5eddcd66e9e13_9366/Adicolor_Classic_Mini_Airliner_Blue_JX0232_01_00_standard.jpg",
       link:"https://www.adidas.co.in/adicolor-classic-mini-airliner/JX0232.html"
    },
    {
       id:"3",
       name:"adidas Fortnite Beanie",
       price:2799,
       image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1618401cef0042fc803aaea57225c8af_9366/adidas_Fortnite_Beanie_Black_JN2689_01_00_standard.jpg",
       link:"https://www.adidas.co.in/adidas-fortnite-beanie/JN2689.html"
    },
    {
        id:"4",
       name:"Clot Cord Hat by Edison Chen",
       price:7599,
       image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d84a84f8ce04a71bf6a76e7462f140d_9366/Clot_Cord_Hat_by_Edison_Chen_Brown_JL7886_01_00_standard.jpg",
       link:"https://www.adidas.co.in/clot-cord-hat-by-edison-chen/JL7886.html"
    },
    {
       id:"5",
       name:"Y-3 Classic Logo Cap",
       price:7999,
       image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6ee690ebbd7d456586821d20fd417298_9366/Y-3_Classic_Logo_Cap_Grey_JP1144_01_00_standard.jpg",
       link:"https://www.adidas.co.in/y-3-classic-logo-cap/JP1144.html"
    },
    {
       id:"6",
       name:"MERCEDES AMG FORMULA CAP",
       price:3299,
       image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b577255827a46b1aa75808e011c5e30_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DRIVER_CAP_Black_JW6267_HM1.jpg",
       link:"https://www.adidas.co.in/mercedes---amg-petronas-formula-one-team-driver-cap/JW6267.html"
    }
    
 ]

 return(
       
    <section className="bg-gray-400 py-12 px-6">
        <h2 className="text-3xl text-emerald-600 font-bold underline italic flex items-center justify-center">
        Adidas Accessories
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
                
                <h2 className="text-xl text-black font-semibold mt-3">
                  {product.name}
                </h2>

                <p className="text-xl text-black font-semibold mt-2">
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
                        whileTap={{scale:0.85}}
                        className="bg-emerald-400 rounded-lg hover:bg-emerald-600 py-2 px-2 mt-6"
                        >
                        Shop Now 
                        </motion.button>
                    </a>

                    <motion.button
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.85}}
                    className="bg-blue-500 rounded-sm hover:bg-blue-600 py-1 px-2 mt-5 text-white"
                    onClick={()=>handleAdd(product)}
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

export default Accessories;