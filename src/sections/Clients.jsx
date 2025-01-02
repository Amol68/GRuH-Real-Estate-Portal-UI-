import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { client } from "../components/export";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const Clients = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"} `}>
      <section
        id="clients_feedback"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-white"
        } lg:w-[95%] 
          w-full h-git m-auto rounded-xl flex-col justify-center items-center lg:px-20 px-6 py-20 gap-10`}
      >
        <div
          id="top"
          className="flex flex-col justify-center items-start gap-4"
        >
          <h1 className="text-red-500 dark:text-white">OUR CLIENTS</h1>
          <h1 className="text-black text-[37px] font-semibold leading-10 dark:text-white">
            What are our clients<br></br>
            saying about us
          </h1>
        </div>

        <div
          id="bottom"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {client.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 hover:bg-red-200 h-[350px] px-8 py-16 flex flex-col justify-center 
                  items-start gap-4 rounded-xl"
            >
              <div className=" flex justify-start items-center gap-2">
                <img src={item.image} alt="user" className="w-[75px]" />
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-xl text-black dark:text-red-500 font-semibold ">
                    {item.name}
                  </h1>
                  <h1 className="text-slate-600 dark:text-white">
                    {item.text}!
                  </h1>
                </div>
              </div>

              <p className="text-md text-justify text-slate-600 dark:text-white">{item.feedback}</p>
              <div className="flex justify-start items-start gap-2 w-full">
                <FaStar className="size-4 text-yellow-400"/>
                <FaStar className="size-4 text-yellow-400"/>
                <FaStar className="size-4 text-yellow-400"/>
                <FaStar className="size-4 text-yellow-400"/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;
