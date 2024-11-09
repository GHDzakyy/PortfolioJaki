import React from 'react';
import ContactIcon from '../icon/contact.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex flex-row items-center justify-between p-4 bg-white/30 backdrop-blur-md shadow-md">
      <div className="absolute left-20 text-2xl font-bold text-[#3581B8]">Dzaky</div>
      <div className="text-[15px] flex flex-row ml-[63vh] space-x-[7vh]">
        <a
          href="#home"
          className="font-regular text-[#2D2D2D] relative group hover:text-[#3581B8]"
        >
          Home
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#3581B8] group-hover:w-full group-hover:right-10 transition-all duration-300 ease-in-out"></span>
        </a>
        <a
          href="#about"
          className="font-regular text-[#2D2D2D] relative group hover:text-[#3581B8]"
        >
          About
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#3581B8] group-hover:w-full group-hover:right-10 transition-all duration-300 ease-in-out"></span>
        </a>
        <a
          href="#projects"
          className="font-regular text-[#2D2D2D] relative group hover:text-[#3581B8]"
        >
          Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#3581B8] group-hover:w-full group-hover:right-10 transition-all duration-300 ease-in-out"></span>
        </a>
      </div>
      <a href="#contact">
        <button className="focus:outline-none flex items-center mr-20 px-4 py-2 text-white bg-[#3581B8] rounded-lg transition-colors duration-300 ease-in-out hover:bg-[#3C93D0]">
          <span className="text-[15px]">Contact me</span>
          <img src={ContactIcon} alt="Contact icon" className="w-4 h-4 ml-2" />
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
