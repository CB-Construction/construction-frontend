import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData, clearAuthCookies, isAuthenticated } from '../utils/cookies';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/signin');
    } else {
      const data = getUserData();
      setUser(data);
    }
  }, [navigate]);

  const handleLogout = () => {
    clearAuthCookies();
    navigate('/signin');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Profile</h1>
        <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Username:</strong> {user.username}</p>
        {user.email && <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Email:</strong> {user.email}</p>}
        {user.role && <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Role:</strong> {user.role}</p>}
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
