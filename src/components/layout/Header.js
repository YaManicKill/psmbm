import React from 'react';
import LOGO from '../../static/virtually-logo.jpg';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-1 px-8">
      <div className="flex items-center">
        <img src={LOGO} className="h-16"></img>
        <h1 className="text-3xl font-bold leading-none ml-5">Virtually Beach Mission</h1>
      </div>
    </div>
  </header>
);

export default Header;
