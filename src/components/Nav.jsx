import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-100  flex  items-center p-4">
      <a href="/" className="flex items-center">
        <img src="https://www.kaptraveler.com/uploads/global/logo.png" alt="Logo" className="w-18 h-10 mx-2" />
      </a>
      <ul className="flex space-x-4 mx-12">
        <li>
          <a href="/home" className="hover:text-gray-400 font-bold">Flights</a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-400 font-bold">Hotels</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-400 font-bold">Tours</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-400 font-bold">Cars</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-400 font-bold">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
