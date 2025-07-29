import React from 'react'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Profile = () => {

  const {user,logout} = useAuth();
  const navigate = useNavigate();
  const{clearCart} = useCart();

  const handleLogout = ()=>{
     clearCart();
     logout();
     navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center px-4">
        <div className='animate-glow-border p-1 rounded-xl w-full max-w-md'>
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center">
        <h2 className="text-2xl text-green-500 font-semibold mb-4">Your Profile</h2>
        <img
          src={user?.avatar || "/default-avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-blue-400 animate-glow-border animate-glow-border--circle"
        />
        <div className="text-left">
          <p className="font-bold">Name:</p>
          <p>{user?.fullname}</p>
          <p className="font-bold mt-2">Email:</p>
          <p>{user?.email}</p>
          <motion.button 
           onClick={handleLogout}
           whileHover={{scale:1.05}}
           whileTap={{scale:0.85}}
          className='w-20 bg-emerald-500 hover:bg-emerald-700 mt-4 ml-38 rounded-sm '>
            Logout
          </motion.button>
        </div>
      </div>    
      </div>
    </div>
  );
};

export default Profile