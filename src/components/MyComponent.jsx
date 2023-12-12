import React from 'react';

const MyComponent = () => {
  const componentStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-vector/passport-with-flight-tickets-white-background_1308-90416.jpg?w=740&t=st=1702022233~exp=1702022833~hmac=a5e59ba1bd10b7aa795bc4f0d54b6e3e862d5ca42597ca316a316dfbc8cbbe73")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '400px', // Set the desired height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'green',
  };

  return (
    <div style={componentStyle}>
      <h1>Your Content Goes Here</h1>
    </div>
  );
};

export default MyComponent;
