import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {useCart} from  '../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const { isAuthenticated, user } = useAuth();
  const {cartItems} = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);


 
  return (
    <header className='bg-black text-white py-4 px-6 flex items-center justify-between'>

      {/* Logo Section */}
      <div className='flex items-center'>
        <img src="https://imgs.search.brave.com/U_2AnlSXaBNo1QM9_vxaIbcrB70qUxM8AyRU2FrzcIk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTAv/OTk0LzI4NC9zbWFs/bC9hZGlkYXMtc3lt/Ym9sLWxvZ28td2hp/dGUtd2l0aC1uYW1l/LWNsb3RoZXMtZGVz/aWduLWljb24tYWJz/dHJhY3QtZm9vdGJh/bGwtaWxsdXN0cmF0/aW9uLXdpdGgtYmxh/Y2stYmFja2dyb3Vu/ZC1mcmVlLXZlY3Rv/ci5qcGc" alt="Adidas" className='w-20 h-16 mr-2' />
      </div>

      {/* Center Section: Search + Navigation */}
      <div className='flex items-center space-x-6'>
        <input
          type="text"
          className='bg-white text-black px-2 py-1 rounded mb-1 ml-53 '
          placeholder='Search'
        />
        <nav className=' flex items-center space-x-5'>
          <Link to="/home" className='hover:underline'>Home</Link>
          <Link to="/about" className='hover:underline'>About</Link>
            <div className="relative">
    <button
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className="hover:underline focus:outline-none flex items-center gap-1"
    >
      Product
      <svg
        className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    {/* Dropdown Content */}
    <div
       className={`absolute top-ful mt-2 text-black bg-white rounded shadow-lg w-44 z-50 transition-all duration-300 origin-top transform ${
        dropdownOpen? "scale-100 opacity-100": "scale-95 opacity-0 pointer-events-none"
      }`}
    >
      <Link to={"/shoes"} className='block px-4 py-2 hover:bg-gray-200' onClick={()=>setDropdownOpen(false)}>Shoes</Link>
      <Link to={"/jersey"} className='block px-4 py-2 hover:bg-gray-200' onClick={()=>setDropdownOpen(false)}>Jersey</Link>
      <Link to={"/hoodies"} className='block px-4 py-2 hover:bg-gray-200' onClick={()=>setDropdownOpen(false)}>Hoodies</Link>
      <Link to={"/accessories"} className='block px-4 py-2 hover:bg-gray-200' onClick={()=>setDropdownOpen(false)} >Accessories</Link>
      </div>
     </div>

          
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
