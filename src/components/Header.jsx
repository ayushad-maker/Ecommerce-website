import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {useCart} from  '../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const { isAuthenticated, user } = useAuth();
  const {cartItems} = useCart();



 
  return (
    <header className='bg-black text-white py-4 px-6 flex items-center justify-between'>

      {/* Logo Section */}
      <div className='flex items-center'>
        <img src="https://imgs.search.brave.com/U_2AnlSXaBNo1QM9_vxaIbcrB70qUxM8AyRU2FrzcIk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTAv/OTk0LzI4NC9zbWFs/bC9hZGlkYXMtc3lt/Ym9sLWxvZ28td2hp/dGUtd2l0aC1uYW1l/LWNsb3RoZXMtZGVz/aWduLWljb24tYWJz/dHJhY3QtZm9vdGJh/bGwtaWxsdXN0cmF0/aW9uLXdpdGgtYmxh/Y2stYmFja2dyb3Vu/ZC1mcmVlLXZlY3Rv/ci5qcGc" alt="Adidas" className='w-20 h-16 mr-2' />
      </div>

      {/* Center Section: Search + Navigation */}
      <div className='flex flex-col items-center'>
        <input
          type="text"
          className='bg-white text-black px-2 py-1 rounded mb-1 ml-53 '
          placeholder='Search'
        />
        <nav className='ml-50 space-x-4'>
          <Link to="/home" className='hover:underline'>Home</Link>
          <Link to="/about" className='hover:underline'>About</Link>
          <Link to="/product" className='hover:underline'>Product</Link>
          <Link to="/contact" className='hover:underline'>Contact</Link>
        </nav>
      </div>


     {/*between section: cart links + icom */}
     <div className='flex items-center space-x-4'>
      <div className='relative'>
        <Link to={"/cart"}>
        <FaShoppingCart className='text-2xl mt-6'/>
         {cartItems?.length>0 && (
         <span className='absolute bg-red-500 text-sm text-white  rounded-full px-1'>
          {cartItems.length}
         </span>
         )}
         </Link>
        </div> 

     
     
     <Link to={"/orders"} className='hover:underline font-semibold mt-8 mr-20'>My Orders</Link>
      </div>
      {/* Right Section: Auth Links + Avatar */}
      <div className='flex items-center space-x-4'>
        {!isAuthenticated && (
          <>
            <Link to="/" className='hover:underline font-semibold'>Login</Link>
            <Link to="/register" className='hover:underline font-semibold'>Register</Link>
          </>
        )}
        {isAuthenticated && user?.avatar && (
          <Link to="/profile">
            <img
              src={user.avatar}
              alt="Profile"
              className='w-10 h-10 rounded-full border-2 border-white hover:border-blue-400 transition'
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
