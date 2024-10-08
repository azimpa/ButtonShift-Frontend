import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import NavBar from './NavBar';

const Home = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <NavBar title="My Workboards" subtitle="Assigned to me"/> {/* Pass props */}
      <div className="p-6">
        <div className="flex space-x-4">
          <Link to="/creatework" className="w-48 h-32 border border-gray-300 rounded-lg flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400 cursor-pointer" // Add cursor-pointer class for visual feedback
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 4v16m8-8H4"></path>
            </svg>
          </Link>
          <div className="w-48 h-32 bg-yellow-200 rounded-lg p-4 relative">
            <h2 className="text-lg font-semibold mb-2">My First WorkBoard</h2>
            <p className="text-sm text-gray-600">2 Task</p>
            <div className="absolute bottom-2 right-2 flex items-center space-x-1">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs">
                Y
              </div>
              <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-xs">
                A
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
