import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='bg-slate-500 text-lg '>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-yellow-300">
          E-commerce Store
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link 
            to="/" 
            className="text-lg hover:text-yellow-300 transition-colors duration-300">
            Products
          </Link>
          <Link 
            to="/cart" 
            className="text-lg hover:text-yellow-300 transition-colors duration-300">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
