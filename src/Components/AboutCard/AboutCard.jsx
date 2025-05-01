// import { useRef } from "react";
import Aos from "aos";
import { useEffect } from "react";
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
    const yOffset = -300;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <HashLink smooth to={link} scroll={(el) => scrollWithOffset(el)}>
      <div className="group bg-[#222] w-[155px] sm:w-[200px] md:w-[250px] rounded-xl overflow-hidden border-2 border-mainColor shadow-md group transition-transform hover:scale-[1.03] duration-300">
        <div className="overflow-hidden">
          <div className="img-box p-2 pb-0">
            <img
              src={img}
              alt={title}
              className="w-full h-[90px] md:h-[120px] object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
              data-aos="zoom-in"
              data-aos-delay={800}
              data-aos-easing="ease-in-out"
            />
          </div>
        </div>
        <div className="py-1 md:py-4 text-center">
          <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white">
            {title}
          </h3>
          <p className="inline-flex text-sm items-center group px-2 py-1 border-2 border-mainColor text-mainColor group-hover:bg-mainColor group-hover:text-navBg transition duration-300 rounded-lg">
            <svg
              className="w-4 h-4 mx-auto rtl:rotate-180 group-hover:animate-bounceX duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </p>
        </div>
      </div>
    </HashLink>
  );
};

export default AboutCard;
