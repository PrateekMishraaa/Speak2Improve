import React, { useState } from 'react';
import { Eye, EyeClosed } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState(false);
  const [formData, setFormData] = useState({
  
    Email: "",

    Password: ""
  });

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if ( !formData.Email ||  !formData.Password) {
      return toast.error('All Fields Are Required');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.Email)) {
      return toast.error('Please enter a valid email address');
    }
    
    
    
    // Password validation (min 8 characters)
    if (formData.Password.length < 8) {
      return toast.error('Password must be at least 8 characters');
    }
    
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      console.log('Response:', response.data);
      toast.success('Login has been done! Redirecting to HomePage...');
      localStorage.setItem('token',response.data.token)
      
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error('Error:', error);
      
      // Handle specific error responses from backend
      if (error.response) {
        if (error.response.status === 400) {
          toast.error(error.response.data.message || 'Invalid data provided');
        } else if (error.response.status === 409) {
          toast.error(error.response.data.message || 'Email or Mobile already exists');
        } else {
          toast.error(error.response.data.message || 'Registration failed');
        }
      } else if (error.request) {
        toast.error('Unable to connect to server. Please check your connection.');
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Login</h1>
            <p className="text-gray-500">Sign up to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
         

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              />
            </div>

         

          
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={viewPassword ? "text" : "password"}
                  id="password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition pr-10"
                />
                <button
                  type="button"
                  onClick={handleViewPassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {viewPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters</p>
            </div>

          
            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02]"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <img 
                src="https://www.google.com/favicon.ico" 
                alt="Google" 
                className="w-5 h-5"
              />
              <span className="text-gray-700">Sign up with Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <img 
                src="https://github.com/favicon.ico" 
                alt="GitHub" 
                className="w-5 h-5"
              />
              <span className="text-gray-700">Sign up with GitHub</span>
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-600 hover:text-indigo-500 font-semibold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default Login