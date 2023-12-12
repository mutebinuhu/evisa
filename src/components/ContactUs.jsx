// ContactUs.js

import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-8"
    >
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form>
        <div className="mb-4">
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
        <div className="mb-4">
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
        <div className="mb-4">
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
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default ContactUs;
