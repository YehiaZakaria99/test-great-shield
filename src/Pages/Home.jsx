import Hero from "../Sections/Hero.jsx";
import Services from "./../Sections/Services.jsx";
import About from "./../Sections/About.jsx";
import Projects from "../Sections/Projects.jsx";
// AOS Animation
import "aos/dist/aos.css";
import Customers from "./../Sections/Customers";
import CustomersContextProvider from "../Context/CustomersContext.jsx";
import Contact from "../Sections/Contact.jsx";
import LandscapeContextProvider from "../Context/LandscapeContext.jsx";
import Landscape from "./../Sections/Landscape";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading/Loading.jsx";

const Home = () => {
  const [isLoading, setIsLodaing] = useState(false);
  useEffect(() => {
    let x = 1;
    const interval = setInterval(() => {
      if (x < 2) {
        setIsLodaing(true);
        x = x + 1;
      } else {
        setIsLodaing(false);
      }
    }, 100);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="overflow-hidden">
          <Hero />
          <Services />
          <About />
          <Projects />
          <LandscapeContextProvider>
            <Landscape />
          </LandscapeContextProvider>
          <CustomersContextProvider>
            <Customers />
          </CustomersContextProvider>
          <Contact />
        </main>
      )}
    </>
  );
};

export default Home;
