import React, { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50'>
      <div className="bg-gradient-to-br from-orange-300 to-orange-100 rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-8">
          Sign In
        </h2>
        
        <div className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 placeholder-gray-400"
            />
          </div>
          
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 placeholder-gray-400"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            
            <a href="#" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
              Forgot password?
            </a>
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Sign In
          </button>
        </div>
        
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;