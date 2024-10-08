import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, User } from 'lucide-react';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom'; // If using react-router for redirection

const NavBar = ({ title, subtitle,}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userName = useSelector((state) => state.auth.user?.username);

    const handleLogout = () => {
        dispatch(logout()).then(() => {
            navigate('/login'); // Redirect to login page after successful logout
        });
    };

    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3 sm:py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="hidden sm:block">
                            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
                            <p className="text-blue-200 text-sm">{subtitle}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleLogout} // Trigger logout on click
                            className="hidden sm:flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 transition duration-300 ease-in-out rounded-full py-2 px-4 text-sm font-medium"
                        >
                            <LogOut size={16} />
                            <span>Logout</span>
                        </button>
                        <div className="relative group">
                            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-semibold cursor-pointer">
                                {userName ? userName[0].toUpperCase() : 'U'}
                            </div>
                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden z-10 hidden group-hover:block">
                                <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-inner">
                                            {userName ? userName[0].toUpperCase() : 'U'}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-900">{userName || 'User'}</span>
                                            <span className="text-xs text-gray-500">Logged in</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
