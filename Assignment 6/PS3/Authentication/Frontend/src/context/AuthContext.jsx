import React, { createContext, useState } from 'react';

// Create an AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [isAuthenticated,setIsAunthenticated]=useState(false);
  
  const login = (email, password) => {
    // Hardcoded credentials for now
    const hardcodedUser = { email: 'Trishul@gmail.com', password: '1234' };

    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      setIsAunthenticated(true);
      setUser({email});
      setError('');
      return true;
    } else {
      setError('Invalid credentials');
      return false;
    }
  };

  const logout = () => {
    setIsAunthenticated(false);
    setUser(null);
  };
  const changePassword=(newpassword)=>{
    console.log(`Password changed to:${newPassword}`);
    
  }
  const deleteAccount = () => {
    // Handle account deletion logic (mock implementation here)
    console.log('Account deleted');
    // alert('Account deleted successfully!');
    logout(); // Log out the user after deletion
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
