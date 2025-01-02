import React, { useEffect } from "react";
import { service } from "../components/export";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
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
        darkMode ? "dark bg-black" : "light bg-transparent"
      } `}
    >
      <section
        id="services"
        className={`${
          darkMode ? "dark bg-black" : "light bg-red-100"
        } lg:w-[95%] 
       w-full h-git m-auto rounded-xl flex-col justify-center items-center lg:px-20 px-6 py-20 gap-10`}
      >
        <div
          id="top"
          className="flex flex-col justify-center items-start gap-4 mb-8"
        >
          <h1 className="text-red-500 dark:text-white">OUR SERVICES</h1>
          <h1 className="text-black text-[37px] font-semibold leading-10 dark:text-white">
            Our Best Services
          </h1>
        </div>

        <div id="bottom" className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
           {
            service.map((item,index)=>(
              <div className="bg-white dark:bg-gray-800 h-[350px] px-8 py-16 flex flex-col justify-center 
              items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300">
                
                <div className="p-6 rounded-full bg-red-200 text-4xl text-red-600 transition transform duration-300">
                <item.icon className="transition transform duration-300"/>
                </div>
 
                 <h1 className="text-black text-[22px] font-semibold dark:text-white">
                   {item.title} 
                   </h1>

                   <p className="text-lg text-slate-700 dark:text-white">{item.desc}</p>
                 
                    <button className="border-b-2 border-red-600 font-bold text-red-600 dark:text-white">READ MORE</button>
              </div>
            )
            )
           }
        </div>

      </section>
    </div>
  );
}

export default Services;
