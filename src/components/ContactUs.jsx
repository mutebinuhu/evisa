// ContactUs.js

import React, {useState} from 'react';
import { motion } from 'framer-motion';
import CancelIcon from './CancelIcon';


const ContactUs = ({showPage}) => {
  console.log("show pae", showPage)
  const hideForm = () => {
    console.log("curr", !showPage)
  }
  if(showPage){
    return(

      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-8 bg-gray-100  px-2 py-4 rounded-lg"
    >
      <div className='flex justify-between'>
      <div>
      <h1 className="text-2xl font-bold mb-4 text-center">We’ll help you get started</h1>

      <h2 className="text-md font-bold mb-4 text-center">Discuss your queries with our Visa expert today</h2>
      </div>
      <CancelIcon handleClick={()=>hideForm()} width={32} height={32} color="#000000" />
      </div>
      
      <form>
      <div className="mb-3">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="email"
            id="name"
            name="name"
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
  }
  
    
};

export default ContactUs;
