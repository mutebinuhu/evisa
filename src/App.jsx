import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Nav'
import Banner from './components/Banner'
import MyComponent from './components/MyComponent'
import ImageOverlayComponent from './components/ImageOverlayComponent'


import React from 'react';

const YourCard = ({title, content}) => {
  return (
    <div className="max-w-md h-96 mx-auto bg-white rounded-md overflow-hidden shadow-md m-4">
      {/* Image Placeholder */}
      <div className="w-full h-40 bg-gray-300  bg-cover bg-center" style={{backgroundImage:`url(https://img.freepik.com/free-photo/side-view-man-holding-passports_23-2150433348.jpg?w=826&t=st=1702294200~exp=1702294800~hmac=8ace8958c753a334b26a66a6d63b93ff1329d4c43f4674a3ac9fc743166f6749)`}}>

      </div>

      {/* Text Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">
          {content}
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};



const VisaForm = () => {
  const countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'Andorra', code: 'AD' },
    // ... (add more countries)
    { name: 'Zimbabwe', code: 'ZW' },
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, for example, sending the data to a server or processing it in some way.
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className='mx-4'>
    <form onSubmit={handleSubmit} className="w-full mx-auto">
      <div className='flex justify-center space-x-8'>

      <div className="mb-4 w-52">
        <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
          Country
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {countries.map((country)=>{
            return(
              <option value="user">{country.name}</option>

            )
          })}
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4 w-52">
        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
          Nationality
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {countries.map((country)=>{
            return(
              <option value="user">{country.name}</option>

            )
          })}
      
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-4 w-52">
        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
          Location
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {countries.map((country)=>{
            return(
              <option value="user">{country.name}</option>

            )
          })}
      
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 mt-3 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Get started
        </button>
      </div>
     </div>
    </form>
    </div>
  );
};





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <div className='relative'>
   <Banner/>
   <div className='absolute bottom-0'>
   <VisaForm/>
   </div>

   </div>
   <div>
    <h2 className='text-center py-4 text-2xl'>UAE Most Popular Visas</h2>
   </div>

   <div className='sm:flex mx-4 space-x-5'>
    <div className='flex-1'>
      <YourCard title="Vist Visa" content="A visit visa is also called an entry permit, and its purposes include tourism, vising a friend or a relative, a mission, exploring business or job opportunities"/>

    </div>
    <div className='flex-1'>
   <YourCard title="Multiple Entry" content="It is a service under which a multi-entry (5-year) tourist visa is granted, allowing its holder to stay in the country for a period of (90) days" />

    </div>
    <div className='flex-1'>
   <YourCard title="A2A Visa Change" content="Fly out of UAE and re-enter to obtain an additional 30 day visit visa for free."/>

    </div>
   </div>

   
      
     
    </>
  )
}

export default App
