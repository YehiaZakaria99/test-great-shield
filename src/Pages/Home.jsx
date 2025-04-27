import Hero from "../Sections/Hero.jsx";
import Services from "./../Sections/Services.jsx";
import About from "./../Sections/About.jsx";
import Projects from "../Sections/Projects.jsx";
// AOS Animation
import "aos/dist/aos.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
