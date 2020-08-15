import React from 'react';

const Heading = ({ children, className = '' }) => (
  <h1 className={`text-3xl lg:text-4xl xl:text-5xl font-bold leading-none ${className}`}>
    {children}
  </h1>
);

export default Heading;
