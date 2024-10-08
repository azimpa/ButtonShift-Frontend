import React, { useState } from 'react';
import NavBar from './NavBar'; // Import the NavBar component
import { PlusIcon, ChevronDownIcon } from 'lucide-react';

const WorkBoard = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-gray-50 min-h-screen">
            <NavBar /> {/* Include the NavBar component here */}

            <main className="p-6 md:p-8 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* To-Do's Section */}
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">To-Do's</h2>
                        <div className="bg-gray-200 p-4 rounded-lg h-[300px] flex flex-col justify-between">
                            <button className="w-full flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150">
                                <PlusIcon size={20} />
                            </button>
                            <div className="mt-4">
                                {/* Add any additional content or placeholder here */}
                            </div>
                        </div>
                    </div>

                    {/* In Progress Section */}
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">In Progress</h2>
                        <div className="bg-blue-50 p-4 rounded-lg h-[300px] flex flex-col justify-between">
                            <div className="bg-blue-100 p-4 rounded-lg mb-4 shadow-md">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-semibold text-blue-800">Complete ButtonShift Assignment</h3>
                                    <button className="text-blue-500 text-xs hover:text-blue-700 transition duration-150">Edit</button>
                                </div>
                                {expanded && (
                                    <>
                                        <p className="text-sm mt-2 text-gray-700">Must complete this task in 3 days if I have taken it up.</p>
                                        <p className="text-sm text-blue-600 mt-1">amt@lol.com</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-sm text-gray-600">In Progress</span>
                                            <ChevronDownIcon size={16} className="text-gray-500" />
                                        </div>
                                    </>
                                )}
                            </div>
                            <button 
                                onClick={() => setExpanded(!expanded)}
                                className="w-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition duration-150"
                            >
                                <PlusIcon size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Completed Section */}
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">Completed</h2>
                        <div className="bg-green-50 p-4 rounded-lg h-[300px] flex flex-col justify-between">
                            <button className="w-full flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150">
                                <PlusIcon size={20} />
                            </button>
                            <div className="mt-4">
                                {/* Add any additional content or placeholder here */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WorkBoard;
