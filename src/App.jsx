import { useState } from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    password:""
  });


  const handelChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handelSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }

    console.log("From Data Submitted:", formData);
    alert("signup successful!");
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form
       
       onSubmit={handelSubmit}
       className='bg-white p-8 rounded-2xl shadow-lg w-96'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
          
        <input
         type='text'
         name='name'
         placeholder='Full Name'
         value={formData.name}
         onChange={handelChange}
         className='w-full p-2 mb-4 border rounded-lg' />
        
        <input 
         type='email'
         name='email'
         placeholder='Email Address'
         value={formData.email}
         onChange={handelChange}
         className='w-full p-2 mb-4 border rounded-lg'
        />
 
         <input 
         type='password'
         name='password'
         placeholder='password'
         value={formData.password}
         onChange={handelChange}
         className='w-full p-2 mb-4 border rounded-lg'
        />

        <button type='submit' className='w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition'>Sign Up</button>

     
      </form> 
       


    </div>
  );
}

export default App