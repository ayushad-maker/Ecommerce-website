import React from "react";
import { useLocation,Link } from "react-router-dom"


const PaymentSucess = () =>{
   const location = useLocation();
   const paymentData = location.state?.paymentData;
   const cartItems = location.state?.cartItems;

    const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);


   return(
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-400">
     <h1 className="text-2xl font-semibold text-emerald-600 italic underline mb-4">Payment Successful ✅</h1>
     {paymentData?(
     <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl space-y-2">
    <p><strong>Payment ID:</strong> {paymentData.razorpay_payment_id}</p>
    <p><strong>Order ID:</strong> {paymentData.razorpay_order_id}</p>
    <p><strong>Total Amount:</strong> {formatINR(paymentData.amount)}</p>
    <div>
      <strong>Items Purchase:</strong>
      <ul className="list-disc ml-6 ">
       {cartItems.map((item,index)=>(
          <li key={index}>{item.name} x {item.quantity}</li> 
      ))}
      </ul>
    </div>
    <p><strong>Email:</strong> {paymentData.email}</p>
    <p><strong>Status:</strong> {paymentData.status}</p>
    <p><strong>Contact:</strong> {paymentData.contact}</p>

      <p className="text-lg mt-4 font-semibold underline italic text-emerald-500">
          Thank You For Shopping with us.
      </p>

     </div>
     ):(
     <p className="text-gray-600">No payment information available.</p>
     )}
     <Link to="/" className="mt-6 text-white bg-green-600 px-4 py-2 rounded hover:bg-green-800">
     Go To Home
     </Link>
    </div>
   )

}

export default PaymentSucess;