import React from 'react'

const ButtonComponent = ({ children, onClick }) => {

  return (
    <button 
    className={`rounded-[22px] bg-gradient-to-r from-gradient-1 to-gradient-2 px-4 py-2 font-raleway text-[12px] hover:text-white`}
    onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;