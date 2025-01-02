import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
        id="contact"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[95%] 
       w-full h-auto m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-20 px-6 py-10 gap-10`}
      >
 
      <div className="bg-white dark:bg-slate-700 w-[430px] p-10  flex flex-col justify-center item-start gap-4 rounded-xl">
        <h1 className="text-2xl text-black dark:text-white font-semibold dark:font-white">Send Us A Message Today</h1>
        <input type="text" placeholder="Enter Full Name" className="py-2 px-5 border-2 border-gray-300 rounded-xl"/>
        <input type="text" placeholder="Enter Valid Email" className="py-2 px-5 border-2 border-gray-300 rounded-xl"/>
        <input type="number" placeholder="Enter Phone Number" className="py-2 px-5 border-2 border-gray-300 rounded-xl"/>
        <textarea col-40 rows-9 placeholder="Enter text here" className="px-6 py-20 border-2 border-gray-300 rounded-xl"/>
         <button className="w-full bg-red-600 py-2 text-white font-semibold text-1.7xl rounded-xl">SUBMIT DETAILS 

         </button>
      </div>


     <div className="flex flex-col  justify-center items-start gap-8 lg:p-20 p-6"> 
        <h1 className="text-red-500 dark:text-white">REACH US</h1>
        <h1 className="text-black text-[40px] font-semibold leading-10 dark:text-white">Get in touch with us today and our team will assist you</h1>
        <h1 className="text-gray-600 text-[20px] font-semibold leading-7 dark:text-white">Our experts and developers would love to contribute their expertise and insights and help you today. Contact us to help you plan your next transaction, either buying or selling a home.</h1>
        <button className="  bg-red-600 py-2 px-6 text-white font-semibold text-1.5xl rounded-xl">Contact Us </button>

     </div>

      </section>

    </div>
  );
};

export default Contact;
