// CancelIcon.js

import React from 'react';

const CancelIcon = ({ width = 24, height = 24, color = '#000000', ...props }) => {
  return (
    <svg
        onClick={props.handleClick}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="cancel-icon" stroke="none" strokeWidth="1" fill="none" strokeLinecap="round">
        <path
          d="M6.34315 5.65685C6.73367 5.26633 7.36683 5.26633 7.75736 5.65685L12 9.8995L16.2426 5.65685C16.6332 5.26633 17.2663 5.26633 17.6569 5.65685C18.0474 6.04738 18.0474 6.68054 17.6569 7.07107L13.4142 11.3137L17.6569 15.5563C18.0474 15.9468 18.0474 16.5799 17.6569 16.9704C17.2663 17.361 16.6332 17.361 16.2426 16.9704L12 12.7278L7.75736 16.9704C7.36683 17.361 6.73367 17.361 6.34315 16.9704C5.95262 16.5799 5.95262 15.9468 6.34315 15.5563L10.5858 11.3137L6.34315 7.07107C5.95262 6.68054 5.95262 6.04738 6.34315 5.65685Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default CancelIcon;
