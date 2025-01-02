import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const PopularAreas = () => {
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
    <div
      className={`${
        darkMode ? "dark bg-black" : "white bg-white "
      } lg:w-[100%] w-full h-fit  `}
    >
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "white bg-red-100"
        } lg:w-[90%] w-full h-fit  m-auto rounded-xl 
        flex flex-col items-center bg-cover bg-center lg:px-20 px-6 py-20 gap-20`}
      >
        <div
          id="top"
          className="w-full grid   lg:grid-cols-3 grid-cols-1 items-center gap:8"
        >
          <div >

            <h1 data-aos="zoom-in" className="text-red-500 text-[25px]">
              Popular Areas
            </h1>

            <h2
              data-aos="zoom-in"
              className="text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white"
            >
              Explore Most <br></br>Popular Areas
            </h2>
          </div>

          <div className="  grid lg:grid-cols-3  col-span-2  grid-cols-1 justify-center items-center gap-6">

            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${area1})` }}
              className="h-[400px]  bg-cover bg-center rounded-xl"
            ></div>

            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${area2})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>

            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${area3})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>

          </div>

        </div>

        <div id="bottom" className="w-full grid lg:grid-cols-3 grid-cols-1
         lg:justify-center justify-start gap-6">

          <div data-aos="silde-up" data-aos-delay="200" className="flex  justify-center
          lg:items-center gap-5 w-full">
             <h1 className="text-black text-7xl font-semibold dark:text-white">5K</h1>
             <h2 className="text-gray-600 text-lg dark:text-white">Active <br/>Centers</h2>
          </div>

          <div data-aos="silde-up" data-aos-delay="200" className="flex  justify-center
          lg:items-center  gap-5 w-full">
             <h1 className="text-black text-7xl font-semibold dark:text-white">9K</h1>
             <h2 className="text-gray-600 text-lg dark:text-white" >SOLID<br/>
             LISTINGS</h2>
          </div>

          <div data-aos="silde-up" data-aos-delay="200" className="flex  justify-center
          lg:items-center gap-5 w-full">
             <h1 className="text-black text-7xl font-semibold dark:text-white">6K</h1>
            <h2 className="text-gray-600 text-lg dark:text-white">CLIENTS<br/>
            WE'VE <br/>SERVED</h2>
          </div>

        </div>
        
        
      </section>

    </div>
  );
};

export default PopularAreas;
