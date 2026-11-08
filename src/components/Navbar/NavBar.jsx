import React, { useEffect, useState,useRef } from "react";

const NavBar = ({ onStartClick, ContactMe }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(()=>{
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    window.addEventListener("scroll", closeMenu);
    window.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", closeMenu);
    };
  },[])
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu=()=>{
    setMenuOpen(false);

  }
  return (
    <nav className="bg-white text-center fixed w-full z-10  top-0 start-0 border-b-2 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a
          href="#about_me"
          onClick={() => onStartClick()}
          className="brand flex items-center gap-3 cursor-pointer select-none"
          aria-label="Rafik Mhadhbi, back to top"
        >
          <span className="brand-mark" aria-hidden="true"></span>
          <span className="brand-name">Rafik Mhadhbi</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center" ref={dropdownRef}   >
          {ContactMe ? (
            <a href="mailto:rafikmhadhbi01@gmail.com">
            <button
              className="font-[600] text-xl text-white border-solid border-2 border-primaryColor p-[8px] rounded-xl bg-black hover:bg-white hover:text-black hover:p-[10px] transition-all duration-300 ease-in-out  sm:p-[6px] sm:hover:p-[8px]"
              onClick={onStartClick}
            >
              Contact Me
            </button>
            </a>
          ) : (
            ""
          )}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-14 h-14 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
          
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-10 h-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
        
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:space-x-7  justify-between p-4 md:p-0 mt-4 font-[500] text-2xl  ">
            <li className="cursor-pointer hover:text-primaryColor">
              <a href="#about_me">About Me</a>
            </li>
            <li className="cursor-pointer hover:text-primaryColor">
              <a href="#experience">Experience</a>
            </li>
            <li className="cursor-pointer hover:text-primaryColor">
              <a href="#skills">Skills</a>
            </li>
            <li className="cursor-pointer hover:text-primaryColor">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;