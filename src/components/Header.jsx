import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaMark, FaBars, FaXmark } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import { useDarkMode } from "./DarkModeContext";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      path: "hero",
    },

    {
      link: "About",
      path: "about",
    },

    {
      link: "Properties",
      path: "properties",
    },

    {
      link: "Services",
      path: "services",
    },

    {
      link: "Testimonials",
      path: "clients_feedback",
    },

    {
      link: "Contact",
      path: "contact",
    },
  ];

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: "ease-in-quart",
      delay: 500,
    });
  }, []);

  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-[#f3f3f3]"} flex
    justify-between items-center gap-4 lg:px-20 py-3 sticky top-0 z-30`}
    >
      <div className="logo">
        <img
          src={logo}
          alt="logo"
          className="lg:w-[150px] w-[120px] dark:invert"
        />
      </div>

      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map((item) => (
          <Link
            key={item.path}
            className="text-black dark:text-white text-15px uppercase 
                font-semibold cursor-pointer px-3 py-2 hover:bg-red-600 hover:text-white"
            to={item.path}
            spy={true}
            offset={-50}
            smooth={true}
          >
            {item.link}
          </Link>
        ))}
      </ul>

      {/* mobile menu */}
      <div
        className="flex justify-center items-center lg:hidden"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-black dark:text-white text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-black dark:text-white text-2xl cursor-pointer"
            />
          )}
        </div>

      </div>

      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full ">
          {navItems.map((item) => (
            <Link
              key={item.path}
              className="text-white uppercase font-semibold 
            cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
            to={item.path}
            spy={true}
            offset={-50}
            smooth={true}>{item.link}</Link>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center lg:gap-8 gap-2" >
         <div className="flex justify-center items-center lg:gap-3 gap-1">
          <FaPhoneAlt className="size-5 text-red-600 " />
          <h1 className="lg:text-xl text-sm text-black dark:text-white font-semibold">938363890</h1>
         </div>
         <FaUserCircle className="size-6 text-red-600"/>

      </div>
    </div>
  );
};

export default Header;
