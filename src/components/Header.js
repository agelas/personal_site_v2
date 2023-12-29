import React from "react";
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="https://mathiaswi.netlify.app/">
            <img src={Logo} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
