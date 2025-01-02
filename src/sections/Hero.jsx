import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: "ease-in-quart",
      delay: 500,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode? "dark-mode bg-black" : "light-mode bg-transparent"} relative z-0`}>
        <section
          id="hero"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex flex-col justify-center items-center 
        lg:px-28 px-10 gap-7 dark-mode:bg-black "
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h2
            data-aos="zoom-in"
            className="text-6xl text-white font-serif lg:pr-[500px]  pr-0 lg:leading-[70px] leading-[60 px]"
          >
            Find Your Next Home in Smarter Way
          </h2>

          <p className=" text-0.5xl mt-10 pr-[0px] lg:pr-[600px]  text-white font-serif ">
            Through our proprietary platform, GRuH is changing how agents and
            clients navigate the process of finding or selling a home.
          </p>
        </section>
      </div>

      {/* form container */}

      <div
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } z-100 flex justify-center relative -mt-10`}
      >
        <div
          id="form"
          className={`${
            darkMode ? "dark bg-gray-800" : "light bg-white"
          }   lg:w-[80%] w-full 
        m-auto grid lg:grid-cols-4 grid-cols-1 justify-around items-center gap-6 p-8 rounded-xl  shadow-lg`}
        >
          <div className="w-full ">
            <h1
              className={`${
                darkMode ? "text-white" : "text-black"
              } font-semibold `}
            >
              {" "}
              Location
            </h1>
            <input
              type="text"
              placeholder="Enter town, city, state"
              className="p-2 w-full mt-2 border-b-2 border-gray-400 placeholder-slate-700"
            />
          </div>

          <div className="w-full ">
            <h1
              className={`${
                darkMode ? "text-white" : "text-black"
              } font-semibold`}
            >
              {" "}
              Property Type
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="p-2 w-full border-b-2 border-gray-400 mt-2 "
            >
              <option value="" disabled selected>
                Select Property
              </option>
              <option value="option1">Rentals</option>
              <option value="option2">Sales</option>
              <option value="option3">Commercial</option>
            </select>
          </div>

          <div className="w-full  ">
            <h1
              className={`${
                darkMode ? "text-white" : "text-black"
              } font-semibold`}
            >
              {" "}
              Property Type
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="p-2 w-full border-b-2 border-gray-400 mt-2 "
            >
             
              <option  className="option" id="option1" disabled selected>Select a category</option>
              <option  className="option" id="option2">Apartments</option>
              <option  className="option" id="option3">Villa</option>
              <option  className="option" id="option4">Farmhouse</option>
              <option  className="option" id="option5">Condos</option>
            </select>
          </div>

          <div className="w-full  flex flex-col gap-2 ">
            <button className="p-1.5  rounded-md bg-red-600 dark:bg-red-700 text-lg 
             text-white font-semibold transform hover:scale-110 transition-transform duration-300"> Submit</button>
            <button className="p-1.5 rounded-md bg-slate-950  dark:bg-white text-lg text-white dark:text-black transform hover:scale-110 transition-transform duration-300 font-semibold"> Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
