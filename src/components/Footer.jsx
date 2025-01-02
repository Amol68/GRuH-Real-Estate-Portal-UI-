import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaBuilding,
  FaMobile,
  FaFax,
  FaSun,
  FaMoon,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

function Footer() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: "ease-in-quart",
      delay: 500,
    });
  }, []);

  return (
    <>
      <footer
        className={`${darkMode ? "dark bg-black" : "light bg-gray-800"} w-full
      m-auto lg:20px px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg-gap-20 gap-10`}
      >
        <div
          id="first_col"
          className="flex flex-col justify-center items-start gap-5"
        >
          <h1 className="text-white text-2xl font-semibold">About Us</h1>

          <p className="text-slate-200 text-justify">
          Whether you have a $500,000 home or a $5 million dollar property, 
          The GRuH Team is dedicated to providing you with remarkable 5 star service, while having systems that help you reach your real estate goals. 


          </p>

          <div
            id="social_icons"
            className="flex justify-start items-start gap-4 mt-4"
          >
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white hover:scale-110 transition-transform duration-300">
              {" "}
              <FaFacebook className="size-6" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white hover:scale-110 transition-transform duration-300">
              {" "}
              <FaInstagram className="size-6" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white hover:scale-110 transition-transform duration-300">
              {" "}
              <FaTwitter className="size-6" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white hover:scale-110 transition-transform duration-300">
              {" "}
              <FaYoutube className="size-6" />
            </div>
          </div>

          <h1 className="text-white mt-8">
            Copyright Real Estate, All Rights Reserved
          </h1>
        </div>

        <div className="flex flex-col justify-center items-start gap-4 ">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          
          <div className="flex justify-center items-center gap-3  ">
            <FaBuilding className="text-white size-5" />
            <p className="text-slate-200">
            1501 San Elijo Rd South #101
            San Marcos, CA 92078
            </p>
          </div>

          <div className="flex justify-center items-center gap-3  ">
            <FaMobile className="text-white size-5" />
            <p className="text-slate-200">
              9361382688
            </p>
          </div>

          <div className="flex justify-center items-center gap-3  ">
            <IoMdMail className="text-white size-5" />
            <p className="text-slate-200">
             gruh@gmail.com
            </p>
          </div>

          <div className="flex justify-center items-center gap-3  ">
            <FaFax className="text-white size-5" />
            <p className="text-slate-200">
              367 367 389
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
           <h1 className="text-white text-2xl font-semibold">Latest Properties</h1>
          <div className="flex justify-center items-center gap-4  ">
            <img src={prop7} className="w-[100px] rounded-lg transform hover:scale-110 transition-transform duration-300"/>
            <div>
                <h1 className="text-lg text-white ">Villa with missing view</h1>
                <p className="text-slate-400">$ 287.98</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4  ">
            <img src={prop8} className="w-[100px] rounded-lg transform hover:scale-110 transition-transform duration-300"/>
            <div>
                <h1 className="text-lg text-white ">Smart View From Beach</h1>
                <p className="text-slate-400">$ 697.55</p>
            </div>
          </div>
        
        </div>
      </footer>

      {/* slide-to-top icon */}
      <div id="icon-box" className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12
       bottom-6 right-6 lg:right-10">

        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className=" hover:text-white"/>
        </Link>

       </div>
   

   {/* dark mode toggle  button*/}
  <div>
    <button onClick={toggleDarkMode} className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6">
        {darkMode?<FaMoon size={25} className="text-black"/>:<FaSun size={25} className="text-black"/>}
    </button>
  </div>
   
    </>
  );
}

export default Footer;
