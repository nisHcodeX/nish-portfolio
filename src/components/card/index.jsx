import React from 'react';

export const MainCard = ({ bgColor = 'bg-white', borderRadius = 'rounded-lg', children }) => {
  return (
    <div className={`${bgColor} ${borderRadius} font-raleway w-[100%] h-[100%]`}>
      {children}
    </div>
  );
};
