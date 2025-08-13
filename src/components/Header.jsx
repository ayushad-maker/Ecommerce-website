import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Header = () => {
  const { isAuthenticated, user } = useAuth();
  const { cartItems } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/v1/products');
        setProducts(res.data.product);
      } catch (error) {
        console.error('Failed to fetch products:', error.message);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [searchTerm, products]);

  const handleSuggestionClick = (product) => {
    navigate(product.link || `/product/${product._id}`);
    setSearchTerm('');
    setSuggestions([]);
    setMenuOpen(false);
  };

  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://imgs.search.brave.com/U_2AnlSXaBNo1QM9_vxaIbcrB70qUxM8AyRU2FrzcIk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTAv/OTk0LzI4NC9zbWFs/bC9hZGlkYXMtc3lt/Ym9sLWxvZ28td2hp/dGUtd2l0aC1uYW1l/LWNsb3RoZXMtZGVz/aWduLWljb24tYWJz/dHJhY3QtZm9vdGJh/bGwtaWxsdXN0cmF0/aW9uLXdpdGgtYmxh/Y2stYmFja2dyb3Vu/ZC1mcmVlLXZlY3Rv/ci5qcGc"
          alt="Adidas"
          className="w-20 h-16 mr-2"
        />
      </div>

      {/* Search - hidden on mobile */}
      <div className="relative hidden md:block">
        <input
          type="text"
          className="bg-white text-black px-3 py-1 rounded"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {suggestions.length > 0 && (
          <div className="absolute top-full left-0 mt-1 w-64 bg-white text-black shadow-lg rounded z-50 max-h-60 overflow-auto">
            {suggestions.map((product) => (
              <div
                key={product.id}
                onClick={() => handleSuggestionClick(product)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {product.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-5 ml-4">
        <Link to="/home" className="hover:underline text-xl hover:scale-105">Home</Link>
        <Link to="/about" className="hover:underline text-xl hover:scale-105">About</Link>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:underline flex items-center gap-1 text-xl hover:scale-105"
          >
            Product
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute top-full mt-2 text-black bg-white rounded shadow-lg w-44 z-50">
              <Link to="/shoes" className="block px-4 py-2 hover:bg-gray-200">Shoes</Link>
              <Link to="/jersey" className="block px-4 py-2 hover:bg-gray-200">Jersey</Link>
              <Link to="/hoodies" className="block px-4 py-2 hover:bg-gray-200">Hoodies</Link>
              <Link to="/accessories" className="block px-4 py-2 hover:bg-gray-200">Accessories</Link>
            </div>
          )}
        </div>
        <Link to="/contact" className="hover:underline text-xl hover:scale-105">Contact</Link>
      </nav>

      {/* Cart & Orders - hidden on mobile */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <Link to="/cart">
            <FaShoppingCart className="text-2xl" />
            {cartItems?.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-xs text-white rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
        <Link to="/orders" className="hover:underline font-semibold">My Orders</Link>
        {!isAuthenticated ? (
          <>
            <Link to="/" className="hover:underline font-semibold">Login</Link>
            <Link to="/register" className="hover:underline font-semibold">Register</Link>
          </>
        ) : (
          user?.avatar && (
            <Link to="/profile">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </Link>
          )
        )}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center space-y-4 py-6 z-50 md:hidden">
          {/* Mobile Search */}
          <input
            type="text"
            className="bg-white text-black px-3 py-1 rounded w-4/5"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {suggestions.length > 0 && (
            <div className="bg-white text-black rounded shadow-lg w-4/5 max-h-60 overflow-auto">
              {suggestions.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSuggestionClick(product)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {product.name}
                </div>
              ))}
            </div>
          )}
          <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Product</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart ({cartItems?.length || 0})</Link>
          <Link to="/orders" onClick={() => setMenuOpen(false)}>My Orders</Link>
          {!isAuthenticated ? (
            <>
              <Link to="/" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          ) : (
            user?.avatar && (
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
