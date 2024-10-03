import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      {/* Website Name */}
      <span className="font-bold text-lg">GuideME</span>

      {/* Conditional rendering based on authentication status */}
      <div>
        {isAuthenticated ? (
          <div className="flex items-center">
            {/* Display user info */}
            <span className="mr-4">Hi, {user?.username}</span>

            {/* Logout button */}
            <button 
              onClick={logout} 
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* Login and Signup buttons for unauthenticated users */}
            <Link 
              to="/login" 
              className="bg-green-500 px-4 py-2 rounded-lg mr-4 hover:bg-green-600"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
