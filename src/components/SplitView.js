import React from 'react';

const SplitView = ({ left, right }) => {
  return (
    <div className="container mx-auto px-8 lg:flex mt-5">
      <div className="text-center lg:text-left lg:w-1/2">{left}</div>
      <div className="text-center lg:text-left lg:w-1/2 lg:ml-5 pt-12">{right}</div>
    </div>
  );
};

export default SplitView;
