import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute'; // For protecting routes
import AuthProvider from './context/AuthContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
