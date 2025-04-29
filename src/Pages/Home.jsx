import Hero from "../Sections/Hero.jsx";
import Services from "./../Sections/Services.jsx";
import About from "./../Sections/About.jsx";
import Projects from "../Sections/Projects.jsx";
// AOS Animation
import "aos/dist/aos.css";
import Customers from "./../Sections/Customers";
import CustomersContextProvider from "../Context/CustomersContext.jsx";
import Contact from "../Sections/Contact.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <CustomersContextProvider>
        <Customers />
      </CustomersContextProvider>
      <Contact />
    </>
  );
};

export default Home;
