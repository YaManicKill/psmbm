import React from 'react';
import LOGO from '../../images/logo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-1 px-8">
      <div className="flex items-center">
        <img src={LOGO} className="h-12 sm:h-16"></img>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none ml-5">
          PSM Beach Mission
        </h1>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#contact">
          Contact
        </AnchorLink>
        <AnchorLink className="px-4" href="#2020">
          Virtually Beach Mission
        </AnchorLink>
      </div>
      <a href="/register"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Register
      </a>
    </div>
  </header>
);

export default Header;
