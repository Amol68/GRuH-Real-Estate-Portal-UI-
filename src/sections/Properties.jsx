import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { property } from "../components/export";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaHeart,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Properties = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>

      <section
        id="properties"
        className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full
       flex flex-col justify-center items-center sm:items-start gap-10 "
      >

        <div className="flex flex-col justify-center items-start gap-8">

          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            PROPERTIES
          </h1>

          <h1 className="text-4xl text-black dark:text-white font-semibold" >
            Explore Latest <br/>
            Properties Available
          </h1>

        </div>


        {/* property grid */}
        <div
          id="propert_grid"
          className=" dark:bg-black  w-full  grid lg:grid-cols-3 grid-cols-1 justify-center gap-8"
        >
          {property.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl w-full  shadow-xl "
            >
              <div
                id="top_image"
                className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between "
                style={{ backgroundImage: `url(${item.images})` }}
              >
                <div id="top" className="flex justify-between items-end w-full">
                  <div>
                    <button
                      className="px-4 py-1 bg-red-600 hover:bg-white hover:text-black text-white 
                       rounded-full text-[13px]"
                    >
                      Featured
                    </button>
                  </div>

                  <div className="flex justify-between items-center gap-3">
                    <div>
                      <button
                        className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white 
                       rounded-full text-[13px]"
                      >
                        Sales
                      </button>
                    </div>

                    <div>
                      <button
                        className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white 
                       rounded-full text-[13px]"
                      >
                        Active
                      </button>
                    </div>

                  </div>

                </div>

                <div
                  id="bottom"
                  className="flex justify-between items-end w-full"
                >
                  <div className="flex justify-start items-center gap-2">
                    <FaMapMarkerAlt className="size-4 text-white" />
                    <h1 className="text-white">{item.address}</h1>
                  </div>

                  <div className="flex justify-start items-center gap-4">
                    <FaVideo className="size-4 text-white" />
                    <FaCamera className="size-4 text-white" />
                  </div>
                </div>
              </div>

              <div id="middle_text" className="p-5 flex flex-col gap-2 mt-1">

                <h1 className="text-2xl font-semibold dark:text-white">
                  {item.name}
                </h1>

                <h1 className="text-2xl font-bold text-red-600 dark:text-white">
                  {item.price}
                </h1>
                <h1 className="dark:text-white">{item.about}</h1>

                <div className="flex text-red-500 gap-5 ">

                  <div className="flex gap-2 items-center">
                    <FaBath />
                    <h2 className="dark:text-white">3</h2>
                  </div>

                  <div className="flex gap-2 items-center">
                    <FaBed />
                    <h2 className="dark:text-white">4</h2>
                  </div>

                  <div className="flex gap-2 items-center">
                    <FaUserCircle />
                    <h2 className="dark:text-white">{item.area}</h2>
                  </div>

                </div>

                <div id="bottom" className="flex flex-col gap-4 mt-8">
                  <hr />

                  <div className="flex justify-between gap-4">

                    <div className="flex items-center gap-2">
                      <FaUserCircle className="dark:text-red-500" />
                      <h2 className="dark:text-white">{item.owner}</h2>
                    </div>

                    <div id="box_container" className=" flex gap-4">
                      <div className="flex border-2 border-gray-400 w-8 h-8 p-1 hover:bg-black justify-center items-center">
                        <FaShareAlt className="text-red-500 text-1.5xl"/>
                      </div>
                      <div className=" flex border-2 border-gray-400 w-8 h-8 hover:bg-black justify-center items-center">
                      <FaHeart className="text-red-500 text-1.5xl"/>
                      </div>
                      <div className=" flex border-2 border-gray-400 w-8 h-8 hover:bg-black justify-center items-center">
                        <FaPlus className="text-red-500  text-1.5xl"/>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          ))} 
        </div> 
         {/*property grid ends here  */}

         <div  className="m-auto bg-red-600 rounded-xl">
          <button className="text-white p-4 px-8">Load More</button>
         </div>
      </section>
    </div>
  );
};

export default Properties;
