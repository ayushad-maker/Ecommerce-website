import React from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';
import axios from "axios";
import { loadRazorpayScript } from "../utils/loadRazorpay.js";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Cartpage = () => {
  const { cartItems, removeFromCart, increaseItem, decreaseItem } = useCart();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Format currency in ₹ with commas
  const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const handlePayment = async (amount) => {
    const isLoaded = await loadRazorpayScript();

    if (!isLoaded) {
      alert("RazorPay SDK failed to load. Are you online?");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:8000/api/v1/payments/create-order", { amount,cartItems });

      const key = import.meta.env.VITE_RAZORPAY_KEY_ID;

      if (!key) {
        toast.error("Razorpay key is missing. Check your .env file and restart the server.");
        return;
      }

      const itemSummary = cartItems.map(
        (item)=>`${item.name} x ${item.quantity}`
      ).join(",")

      const options = {
        key,
        amount: data.order.amount,
        currency: "INR",
        name: "Adidas Store",
        description:itemSummary, 
        image: "https://yourlogo.com/logo.png",
        order_id: data.order.id,

        handler: async function (response) {
          

          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

          try {
            const verifyResponse = await axios.post("http://localhost:8000/api/v1/payment/verify", {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
              name: "Ayush Adhikari",
              email: "ayushadhikari080@gmail.com",
              contact: "7331232121",
              amount,
              cartItems,
            });


            if (verifyResponse.data.success) {
              toast.success("Payment Verified Successfully!");
              navigate("/payment-success",{
               state:{
               paymentData:verifyResponse.data.payment,
               cartItems,
               }, 
              });
            } else {
              toast.error("Payment Verification Failed");
            }
          } catch (error) {
            console.error("Verification Error:", error);
            toast.error("Error Verifying Payment");
          }
        },
       
 

        prefill: {
          name: "Ayush Adhikari",
          email: "ayushadhikari080@gmail.com",
          contact: "7678320862",
        },

        notes: {
          address: "Ayush Mart",
          items:itemSummary,
        },

        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log("Payment error", error);
      toast.error("Something went wrong during payment.");
    }


  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h2 className="text-2xl text-emerald-400 underline font-bold mb-4">Shopping Cart :</h2>
      {totalItems === 0 ? (
        <p className="text-xl text-emerald-400 font-semibold italic mb-4">
          Your Cart is empty
        </p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-xl text-black font-semibold italic">{item.name}</h3>
                    <p className="text-xl text-black font-semibold italic">
                      {formatINR(item.price * item.quantity || 1)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 text-lg"
                  >
                    <FaTimes />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={() => increaseItem(item.id)}
                    className="bg-gray-400 rounded px-2 text-sm"
                  >
                    <FaPlus />
                  </motion.button>

                  <span className="font-semibold underline text-amber-700">{item.quantity || 1}</span>

                  <motion.button
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={() => decreaseItem(item.id)}
                    className="bg-gray-400 px-2 rounded text-sm"
                  >
                    <FaMinus />
                  </motion.button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4 flex items-center justify-between">
            <p className="text-xl font font-semibold">
              Total ({totalItems} items): {formatINR(totalPrice)}
            </p>

            <motion.button
              onClick={() => handlePayment(totalPrice)}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.85 }}
              className="relative text-black bg-emerald-400 rounded-xl px-3 py-1"
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
