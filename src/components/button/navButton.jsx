import React from 'react'

const NavButtonComponent = ({ children, active = true , onClick }) => {

  return (
    <button 
    className={`rounded-[22px] ${active ? "text-white bg-gradient-to-r from-gradient-1 to-gradient-2" : "text-black bg-bgColor-1"}  px-4 py-2 font-raleway text-[12px] hover:bg-gradient-to-r from-gradient-1 to-gradient-2`}
    onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavButtonComponent;