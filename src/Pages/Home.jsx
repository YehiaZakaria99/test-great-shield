import Hero from "../Sections/Hero.jsx";
import Services from "./../Sections/Services.jsx";
import About from "./../Sections/About.jsx";
import Projects from "../Sections/Projects.jsx";
// AOS Animation
import "aos/dist/aos.css";
import Customers from "./../Sections/Customers";
import CustomersContextProvider from "../Context/CustomersContext.jsx";
import Contact from "../Sections/Contact.jsx";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading/Loading.jsx";
import Landscapes from "../Sections/Landscapes.jsx";
import LandscapesContextProvider from "../Context/LandscapesContext.jsx";
import ProjectsContextProvider from "../Context/ProjectsContext.jsx";

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
        <main className="overflow-hidden bg-navBg">
          <Hero />
          <Services />
          <About />
          <ProjectsContextProvider>
            <Projects />
          </ProjectsContextProvider>
          <LandscapesContextProvider>
            <Landscapes />
          </LandscapesContextProvider>
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
