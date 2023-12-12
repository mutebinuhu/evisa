import React from 'react';

const Banner = ({ title, description, image, buttonText, buttonLink }) => {
  return (
    <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/medium-shot-happy-family-airport_23-2149272153.jpg?w=826&t=st=1702287471~exp=1702288071~hmac=28f39d45b1fc848f55ab74144eecc6f9562fde48904f5d91335fffdc5bceb3cf')` }}>
      <div className="absolute inset-0 bg-gradient-to-l from-green-700 to-green-900 opacity-80"></div>
      <div className="absolute inset-0 flex items-center text-white">
        <div>
        <h2 className="text-5xl font-bold mb-2 mx-4">Apply for Your Visa with Confidence </h2>
        <p className="text-2xl mx-4 my-4">Let our experts help you every step of the way</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
