// import { useRef } from "react";
import Aos from "aos";
import { useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const AboutCard = ({ title, img, link }) => {
    useEffect(() => {
      Aos.init({ duration: 800 });
  
      return () => {
        Aos.refreshHard();
      };
    }, []);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -400;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <HashLink smooth to={link} scroll={(el) => scrollWithOffset(el)}>
      <div className="bg-[#222] overflow-hidden group border border-(--main-color) rounded-lg shadow-md h-full flex flex-col px-4 py-4 transition-transform hover:scale-[1.03] duration-300">
        <div className="img-box">
          <img
            className="about-card-img rounded-lg w-full h-52 object-cover"
            src={img}
            alt={title}
            loading="lazy"
            data-aos="zoom-in"
            data-aos-delay={800}
            data-aos-easing="ease-in-out"
          />
        </div>
        <div className="py-2 flex flex-col justify-between flex-1">
          <h5 className="mb-0 text-2xl font-semibold tracking-tight text-white">
            {title}
          </h5>
          <div className="text-white text-3xl flex justify-center z-50 my-2 transition duration-300  group-hover:animate-bounceX group-hover:opacity-100">
            <FaArrowAltCircleRight />
          </div>
        </div>
      </div>
    </HashLink>
  );
};

export default AboutCard;
