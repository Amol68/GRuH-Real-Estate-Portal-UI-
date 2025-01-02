import { DarkModeProvider } from "./components/DarkModeContext";
import Header from "./components/Header";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Hero from "./sections/Hero";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
import Contact from "./sections/Contact";
import Services from "./sections/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     <DarkModeProvider>
      <Header/>
      <Hero/>
      <About/>
      <PopularAreas/>
      <Properties/>
      <Services/>
      <Clients/>
      <Contact/>
      <Footer/>
     </DarkModeProvider>
    </>
  );
}

export default App;
