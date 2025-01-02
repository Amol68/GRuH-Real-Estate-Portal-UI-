import React,{useEffect} from 'react'
import aboutImg from "../assets/images/about.jpg";
import { useDarkMode } from '../components/DarkModeContext';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

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
    <section id="about" className={`${darkMode? 'dark bg-black':'white bg-white'} w-full m-auto
    lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>

    <div>
      <img src={aboutImg}  className='rounded-2xl lg:w-[500px] lg:h-[600px]'/>
    </div> 

    <div className='flex flex-col justify-center items-start gap:15'>

     <h1 className='text-red-500 text-[40px] font-semibold  dark:text-white'>Who We Are</h1>
     <p data-aos="zoom-in" data-aos-delay="300" className=' text-black text-[30px] font-serif dark:text-white '> 
      Our dedicated team of realtors combines local knowledge with a passion for finding 
      the perfect property for you </p>

      <button className="p-1.5 rounded-md mt-10 p-4 bg-red-600 dark:bg-red-700 text-lg 
             text-white font-semibold transform hover:scale-110 transition-transform duration-300"> View More</button>
    </div>

   
           

    </section>
  )
}

export default About