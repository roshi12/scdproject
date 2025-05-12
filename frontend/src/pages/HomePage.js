import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 flex flex-col justify-center items-center overflow-hidden relative">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl w-full px-6 py-12">
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 gap-8 items-center">
          {/* Illustration Side */}
          <div className="hidden md:flex flex-col justify-center items-center p-12 bg-gradient-to-br from-blue-100 to-indigo-200 transform transition-all duration-300 hover:scale-105">
            <div className="w-full aspect-square bg-white/50 rounded-3xl flex justify-center items-center mb-6 shadow-lg">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                className="w-40 h-40 text-blue-600 transform transition-transform duration-300 hover:rotate-6"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Empowering Student Management
            </h2>
            <p className="text-gray-600 text-center mt-4">
              Streamline your academic records with intuitive tools
            </p>
          </div>
          
          {/* Action Side */}
          <div className="p-12 flex flex-col justify-center space-y-6">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 text-center">
              Student Hub
            </h1>
            <p className="text-gray-600 text-center text-lg mb-8">
              Revolutionize your student record management with seamless, intelligent solutions
            </p>
            
            {/* Action Buttons with Icons */}
            <div className="space-y-4">
              <Link 
                to="/add-student" 
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="w-6 h-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                Add New Student
              </Link>
              <Link 
                to="/students" 
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="w-6 h-6"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                View Student List
              </Link>
            </div>
            
            {/* Footer Note */}
            <div className="text-center text-gray-500 mt-6 text-sm">
              © 2024 Student Management System
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;