import { useContext, useState } from 'react';
import {AuthContext} from '../context/AuthContext'; // Ensure proper import

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = () => {
    // Implement password change functionality (add this to AuthContext if needed)
    alert('Password successfully changed!');
    setIsEditingPassword(false);
  };

  const handleDeleteAccount = () => {
    // Implement delete account functionality (add this to AuthContext if needed)
    alert('Account successfully deleted!');
    // After deleting account, you may log the user out or redirect them.
    logout();
  };

  return (
    <div className="min-h-screen text-black flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 p-8">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome, {user?.username}</h1>

      {/* Update Password Section */}
      {isEditingPassword ? (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h2 className="text-2xl font-semibold mb-2">Change Password</h2>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
          />
          <button
            onClick={handlePasswordChange}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-blue-600"
          >
            Save Password
          </button>
          <button
            onClick={() => setIsEditingPassword(false)}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsEditingPassword(true)}
          className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4 hover:bg-green-600"
        >
          Change Password
        </button>
      )}

      {/* Logout Button */}
      <button
        onClick={logout}
        className="bg-red-500 text-white py-2 px-4 rounded-lg mb-4 hover:bg-red-600"
      >
        Logout
      </button>

      {/* Delete Account Section */}
      {isDeletingAccount ? (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Are you sure you want to delete your account?
          </h2>
          <button
            onClick={handleDeleteAccount}
            className="bg-red-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-red-600"
          >
            Yes, Delete Account
          </button>
          <button
            onClick={() => setIsDeletingAccount(false)}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsDeletingAccount(true)}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Delete Account
        </button>
      )}
    </div>
  );
};

export default Dashboard;
