// ImageOverlayComponent.jsx
import React from 'react';

const ImageOverlayComponent = () => {
  return (
    <div className="">
      <img
        src="https://img.freepik.com/free-vector/passport-with-flight-tickets-white-background_1308-90416.jpg?w=740&t=st=1702022233~exp=1702022833~hmac=a5e59ba1bd10b7aa795bc4f0d54b6e3e862d5ca42597ca316a316dfbc8cbbe73"
        alt="Your Image"
        className="w-full"
      />
      <div className="overlay absolute inset-0 bg-gradient-to-b to bg-gradient-to-r from-green-500 to to-green-800 opacity-75"></div>
      <div className="text-overlay absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Your Overlay Content</h1>
      </div>
    </div>
  );
};

export default ImageOverlayComponent;
