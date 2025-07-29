import React from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { FaPlus,FaMinus,FaTimes } from 'react-icons/fa';
import axios from "axios"
import { loadRazorpayScript } from "../utils/loadRazorpay.js"; 

const handlePayment = async (amount) =>{
    const isLoaded = await loadRazorpayScript();
    
    if(!isLoaded){
      alert("RazorPay SDK failed to online,Are you online.");
      return;
    }

    try {
       
      const {data} = await axios.post("http://localhost:8000/api/v1/payments/create-order",{amount});

      const options = {
        key :"rzp_test_Ky55abKgccKNKC", //
        amount : data.order.amount,
        currency : "INR",
        name:"Adidas Store",
        description:"Test Transaction",
        image: "https://yourlogo.com/logo.png",


        order_id : data.order.id,

         handler: function (response) {
         alert(`Payment ID: ${response.razorpay_payment_id}`);
         alert(`Order ID: ${response.razorpay_order_id}`);
         alert(`Signature: ${response.razorpay_signature}`);
    // 🔐 Send to backend to verify authenticity (recommended)
  },
    
  prefill:{
    name:"Ayush Adhikari",
    email:"ayushadhikari080@gmail.com",
    contact:"7678320862",
  },
    
  notes:{
      address: "Ayush Mart"
  },

  theme:{
    color:"#3399cc",
  },

};

  const rzp = new window.Razorpay(options);
  rzp.open();  

    } catch (error) {
      console.log("Payment error",error)
      alert("Something went wrong during payment.")
    }

    console.log("handlePayment called with amount:", amount);

    
}





const Cartpage = () => {
  const { cartItems,removeFromCart,increaseItem,decreaseItem } = useCart();

  const totalItems = cartItems.reduce((sum,item)=>sum + item.quantity,0)

  const totalPrice = cartItems.reduce((sum,item)=>sum + item.price*item.quantity,0);

  return (
    <div className='max-w-4xl mx-auto mt-8 p-4'>
      <h2 className='text-2xl text-emerald-400 underline font-bold mb-4'>Shopping Cart :</h2>
      {totalItems === 0 ? (
        <p className='text-xl text-emerald-400 font-semibold italic mb-4'>
          Your Cart is empty
        </p>
      ) : (
        <>
          <ul className='space-y-4'>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className='flex items-center justify-between bg-white p-4 rounded-lg shadow'
              >
                <div className='flex items-center space-x-4'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-16 h-16 object-cover rounded'
                  />
                  <div>
                    <h3 className='text-xl text-black font-semibold italic'>
                      {item.name}
                    </h3>
                    <p className='text-xl text-black font-semibold italic'>
                      ${Number(item.price)*item.quantity || 1}
                    </p>
                  </div>
                </div>
                <div className='flex items-center justify-between space-x-2'>
                 <motion.button 
                 whileHover={{scale:1.25}}
                 whileTap={{scale:0.85}}
                 onClick={()=>removeFromCart(item.id)}
                 className='text-red-600 text-lg'>
                  <FaTimes/>
                 </motion.button>

                 <motion.button
                 whileHover={{scale:1.25}}
                 whileTap={{scale:0.85}}
                 onClick={()=>increaseItem(item.id)}
                 className='bg-gray-400 rounded px-2 text-sm'
                 >
                  <FaPlus/>
                 </motion.button>

                <span className='font-semibold underline text-amber-700'>{item.quantity || 1}</span>

                <motion.button
                whileHover={{scale:1.25}}
                whileTap={{scale:0.85}}
                onClick={()=>decreaseItem(item.id)}
                className='bg-gray-400 px-2 rounded text-sm'
                >
                <FaMinus/>
                </motion.button>
                </div>
              </li>
            ))}
          </ul>

          <div className='mt-6 border-t pt-4 flex items-center justify-between '>
            <p className='text-xl font font-semibold'>
              Total ({totalItems} items): ${totalPrice.toFixed(2)}
            </p>
          
          <motion.button
          onClick={()=>handlePayment(totalPrice)}
          whileHover={{scale:1.25}} 
          whileTap={{scale:0.85}}
          className='relative  text-black bg-emerald-400 rounded-xl px-3 py-1'
          >
            Buy Now
            </motion.button>
        </div>
        </>
      )}
    </div>
  );
};

export default Cartpage;
