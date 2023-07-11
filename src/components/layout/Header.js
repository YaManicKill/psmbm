import React from 'react';
import LOGO from '../../images/logo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-1 px-8">
      <a href="/">
        <div className="flex items-center">
          <img src={LOGO} className="h-12 sm:h-16"></img>
        </div>
      </a>
      <div className="flex mt-4 sm:mt-0 items-center">
        <AnchorLink className="px-4" href="#contact">
          Contact
        </AnchorLink>
        <a className="px-4" href="/virtual">
          Virtually Beach Mission
        </a>
        <a
          href="/register"
          className="bg-primary-default hover:bg-primary-darker text-white hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </a>
      </div>
    </div>
  </header>
);

export default Header;
