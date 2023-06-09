import React from "react";
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/*  Logo that needs to change */}
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          {/* Button */}
          <button className="btn btn-sm">
            Work with Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
