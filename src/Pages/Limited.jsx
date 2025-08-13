import React from 'react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { hover, motion } from 'framer-motion';
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';

const Limited = () => {

    const { addToCart } = useCart();


    const handleAdd = (product) => {
        const safeProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            link: product.link
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
            id: "1",
            name: "Pro Model ADV x Always Limited edition Shoes",
            price: 6048,
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a7164900bcaf4cefb0d26024a378c810_9366/Pro_Model_ADV_x_Always_Shoes_Black_JP7637_02_standard.jpg",
            link: "https://www.adidas.com/us/pro-model-adv-x-always-shoes/JP7637.html",
        },
        {
            id: "2",
            name: "adidas by Stella McCartney training shoes",
            price: 15120,
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a2e847c5a51e4abebf78b4fb3e8fd53f_9366/adidas_by_Stella_McCartney_Dropset_strength_training_shoes_Brown_JQ1592_HM1.jpg",
            link: "https://www.adidas.com/us/adidas-by-stella-mccartney-dropset-strength-training-shoes/JQ1592.html",
        },
        {
            id: "3",
            name: "SL 72 RS Shoes Limited Edition training shoes",
            price: 8400,
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7bb5fdc5b55042ed96b3e037b0904f71_9366/SL_72_RS_Shoes_Yellow_JH5101_01_00_standard.jpg",
            link: "https://www.adidas.com/us/sl-72-rs-shoes/JH5101.html",
        },
        {
            id: "4",
            name: "Adidas By Stella McCartney Item Jacket Printed",
            price: 16800,
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ed29860509846e5b1d06d0c0ec37273_9366/Adidas_By_Stella_McCartney_Item_Jacket_Printed_Beige_JX9360_HM1.jpg",
            link: "https://www.adidas.com/us/adidas-by-stella-mccartney-item-jacket-printed/JX9360.html",
        },
        {
            id: "5",
            name: "adidas Originals x Liberty London Backpack With Pencil Case Kids",
            price:3360 ,
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/94ff06a3eb724963b45b936d6f899a81_9366/adidas_Originals_x_Liberty_London_Backpack_With_Pencil_Case_Kids_Multicolor_JW0318_01_00_standard.jpg",
            link: "https://www.adidas.com/us/adidas-originals-x-liberty-london-backpack-with-pencil-case-kids/JW0318.html",
        },
        {
            id: "6",
            name:"adidas by Stella McCartney Limited Edition Gym Sack",
            price: 9240,
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08f3267d6b23496fad86f637253e4132_9366/adidas_by_Stella_McCartney_Gym_Sack_Pink_JY4198_27_model.jpg",
            link: "https://www.adidas.com/us/adidas-by-stella-mccartney-gym-sack/JY4198.html",
        },
    ]


    return (
           <section className='bg-gray-400 py-12 px-3'>
            <h2 className='text-amber-900 italic text-4xl font-bold text-center items-center underline mb-10'> 
              Limited Edition
            </h2>
            <div className='grid grid-cols-3 gap-8 max-w-6xl mx-auto mt-8 space-x-3'>
            {Products.map((products)=>(
             <div key={products.id} className='animate-glow-border1'>
                <div className='bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition duration-300'>
                <InnerImageZoom
                 zoomSrc={products.image}
                 width="100%"
                 height="225px"
                 zoomType="hover"
                 zoomScale={1.6}
                 src={products.image}
                />



                 <h2 className='text-black font-semibold text-xl mt-2 italic'>
                    {products.name}
                    </h2> 

                 <p className='text-black font-semibold text-lg mt-2 italic'>
                    {formatINR(products.price)}
                 </p>

                 <div className='flex justify-between items-center'>
                 <a 
                 href={products.link}
                 target='blank'
                 rel="noopener noreferrer"
                 >
                    

                  <motion.button 
                  whileHover={{scale:1.15}}
                  whileTap={{scale:0.85}}
                  className='bg-emerald-400 py-2 px-3 rounded-lg mt-8'
                  >
                     Shop Now  
                    </motion.button>  
                 </a>

                 <motion.button
                 onClick={()=>handleAdd(products)} 
                 whileHover={{scale:1.15}}
                 whileTap={{scale:0.85}}
                 className='bg-blue-500 py-1 px-2 rounded-sm mt-8'
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

export default Limited