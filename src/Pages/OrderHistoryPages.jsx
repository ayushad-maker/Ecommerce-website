// src/pages/OrdersHistoryPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const OrdersHistoryPage = () => {
  const [orders, setOrders] = useState([]);

  const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const email = "ayushadhikari080@gmail.com";
        const { data } = await axios.get(
          `http://localhost:8000/api/v1/order/user-payments?email=${email}`
        );

        if (data.success && Array.isArray(data.payments)) {
          setOrders(data.payments);
        } else {
          console.error("Unexpected response structure:", data);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center relative mt-4 space-y-3">
      <h1 className="text-xl font-semibold underline italic text-emerald-500">
        Orders History
      </h1>

      {Array.isArray(orders) ? (
        orders.length === 0 ? (
          <p className="text-lg">No order purchase yet</p>
        ) : (
          <div className="space-y-4 w-full">
            {orders.map((order, index) => (
              <div
                key={index}
                className="border bg-white text-black shadow-lg rounded-lg p-4"
              >
                <p>
                  <strong>Order ID:</strong> {order.razorpay_order_id}
                </p>
                <p>
                  <strong>Payment ID:</strong> {order.razorpay_payment_id}
                </p>
                <p>
                  <strong>Status:</strong> {order.status}
                </p>
                <p>
                  <strong>Total Amount:</strong> {formatINR(order.amount)}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(order.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Items:</strong>
                </p>
                <ul className="list-disc list-inside">
                  {Array.isArray(order?.cartItems) &&
                  order.cartItems.length > 0 ? (
                    order.cartItems.map((item, i) => (
                      <li key={i}>
                        {item.name} x {item.quantity}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400 italic">
                      No cart items available
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        )
      ) : (
        <p className="text-red-600">Something went wrong. Please try again.</p>
      )}
    </div>
  );
};

export default OrdersHistoryPage;
