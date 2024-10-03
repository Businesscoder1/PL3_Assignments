import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Function to check password strength
  const checkPasswordStrength = (password) => {
    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /\W/.test(password)) {
      setPasswordStrength('Strong');
    } else if (password.length >= 6) {
      setPasswordStrength('Good');
    } else {
      setPasswordStrength('Weak');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    if (passwordStrength === 'Weak') {
      setErrorMessage('Password is too weak');
      return;
    }

    // Add signup logic here (e.g., save user credentials in the backend)
    console.log('User registered:', username, email, password);
    navigate('/login'); // Redirect to login page after signup
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-gray-800 p-8 text-white rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Let's Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Username</label>
            <input
              type="text"
              className="w-full text-black p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              className="w-full text-black p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              className="w-full text-black p-2 border rounded"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                checkPasswordStrength(e.target.value);
              }}
              required
            />
            <p className={`mt-2 text-sm ${passwordStrength === 'Weak' ? 'text-red-500' : passwordStrength === 'Good' ? 'text-yellow-500' : 'text-green-500'}`}>
              Strength: {passwordStrength}
            </p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Confirm Password</label>
            <input
              type="password"
              className="w-full text-black p-2 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
