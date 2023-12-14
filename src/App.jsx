import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Nav'
import Banner from './components/Banner'
import MyComponent from './components/MyComponent'
import ImageOverlayComponent from './components/ImageOverlayComponent'


import React from 'react';
import WhatsAppButton from './components/WhatsAppButton'
import { motion } from 'framer-motion';
import ContactUs from './components/ContactUs'
import TopMostVisas from './components/TopMostVisas'
import Slider from './components/Slider'


const YourCard = ({title, content, image, clickHandler, showButtons=true, showImage=true}) => {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
     className="max-w-md  mx-auto bg-white rounded-md overflow-hidden shadow-md m-4">
      {/* Image Placeholder */}
      {showImage &&
      <div className="w-full h-40 bg-gray-300  bg-cover bg-center" style={{backgroundImage:`url(${image})`}}>

      </div>
      }

      {/* Text Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">
          {content}
        </p>

        {/* Submit Button */}
        {showButtons &&
        <>
        <button
          type="submit"
          onClick={clickHandler}
          className="bg-green-500  border-green-500 border-2  hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Make Inquiry
        </button>
        <button
          type="submit"
          className="rounded-lg border-2 mx-2 border-green-500 hover:text-white hover:bg-green-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Request Callback
        </button>
        </>
        }
      </div>
    </motion.div>
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
   
    country:'',
    nationality:'',
    location:''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log("data", formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, for example, sending the data to a server or processing it in some way.
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className='mx-4 '>
    <form onSubmit={handleSubmit} className="w-full">
      <div className='flex justify-center space-x-8'>
      <div className="mb-4 w-28 sm:w-52">
        <label htmlFor="nationality" className="block text-white text-sm font-bold mb-2">
          Citizen Of
        </label>
        <select
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {countries.map((country)=>{
            return(
              <option value={country.code}>{country.name}</option>

            )
          })}
      
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-4 w-28 sm:w-52">
        <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
          Travelling To
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {countries.map((country)=>{
            return(
              <option value={country.code}>{country.name}</option>

            )
          })}
          {/* Add more options as needed */}
        </select>
      </div>

      
     {/* <div className="mb-4  w-28 sm:w-52">
        <label htmlFor="location" className="block text-white text-sm font-bold mb-2">
          Location
        </label>
        <select
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {countries.map((country)=>{
            return(
              <option value={country.code}>{country.name}</option>

            )
          })}
      
        </select>
      </div>
    */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-green-500 text-xs hover:bg-green-700 text-white font-bold py-2 sm:py-4 mt-3 px-4 rounded focus:outline-none focus:shadow-outline"
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
  const [showContactPage, setShowContactPage] = useState(false)

  return (
    <div className='relative'>
      <div className='fixed right-0 z-30  screen '>
      <ContactUs showPage={showContactPage}/>
      </div>
   <Navbar/>
   <div className='relative'>
   <Banner/>
   <div className='absolute bottom-0 '>
   <VisaForm/>
   </div>

   </div>
   <div>
    <h2 className='text-center py-4 text-2xl text-bold py-8'>UAE Most Popular Visas</h2>
   </div>

   <div className='sm:flex px-4  md:space-x-4  md:px-4'>
    <div className='flex-1'>
      <YourCard clickHandler={()=>setShowContactPage(true)} title="Vist Visa" image="https://img.freepik.com/free-photo/side-view-man-holding-passports_23-2150433348.jpg?w=826&t=st=1702294200~exp=1702294800~hmac=8ace8958c753a334b26a66a6d63b93ff1329d4c43f4674a3ac9fc743166f6749" content="Embark on a Journey of a Lifetime: Unleash the adventure waiting for you with our seamless visit visa services. Picture yourself exploring vibrant cultures, savoring exotic cuisines, and creating memories that last a lifetime. Let us be your gateway to new horizons."/>

    </div>
    <div className='flex-1'>
   <YourCard title="Multiple Entry" clickHandler={()=>setShowContactPage(true)} image="https://img.freepik.com/free-photo/top-view-green-card-application_23-2149601368.jpg?w=826&t=st=1702366795~exp=1702367395~hmac=a856a1a6308dccf7e45bc5601d910e097d433a4a2f46cafc9aa793bbff5dc1d6" content="Unleash the Freedom to Roam: Introducing our multiple entry visa, your ticket to boundless exploration. Embrace the convenience of unrestricted travel, where each entry becomes a gateway to a new adventure. Say goodbye to limitations and hello to a world of possibilities. " />

    </div>
    <div className='flex-1'>
   <YourCard clickHandler={()=>setShowContactPage(true)} title="A2A Visa Change" image="https://img.freepik.com/free-photo/woman-with-luggage-during-pandemic-airport_23-2148789910.jpg?w=740&t=st=1702367222~exp=1702367822~hmac=52f4bfa81025380ba515167b38cde8882b169dc76ce0700d7ed8cef6a2620e61" content="Unlock the Avenues of Aspiration: Step into a world of endless opportunities with our A2A (Airport to Airport) visa. Seamlessly traverse international skies, effortlessly connecting global hubs and transforming layovers into adventures. Your express ticket to explore the world in transit"/>

    </div>
   </div> 

<div className='fixed  bottom-0'>
<WhatsAppButton phoneNumber={+971524800683} message={""}/>

</div>
    </div>
  )
}

export default App
