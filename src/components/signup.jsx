// // sign up page
import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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

        

    <div className="bg-gradient-to-br from-orange-300  to-orange-100 rounded-lg shadow-xl p-8 w-full max-w-md">
      
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-8">
          Sign Up
        </h2>
        
        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400  text-gray-700 placeholder-gray-400"
              />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400  text-gray-700 placeholder-gray-400"
              />
          </div>
          
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400  text-gray-700 placeholder-gray-400"
              />
          </div>
          
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400  text-gray-700 placeholder-gray-400"
              />
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >

            Sign Up
          </button>
        </div>
        
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have account?{' '}
          <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
// import React, { useState } from 'react';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-300 via-orange-200 to-orange-100 flex items-center justify-center p-4">
//       <div className="bg-orange-100 rounded-lg shadow-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-gray-700 text-center mb-8">
//           Sign Up
//         </h2>
        
//         <div className="space-y-4">
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400"
//             />
//           </div>
          
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400"
//             />
//           </div>
          
//           <div>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400"
//             />
//           </div>
          
//           <div>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400"
//             />
//           </div>
          
//           <button
//             onClick={handleSubmit}
//             className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
//           >
//             Sign Up
//           </button>
//         </div>
        
//         <p className="text-center text-sm text-gray-600 mt-6">
//           Already have account?{' '}
//           <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
//             Sign In
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;