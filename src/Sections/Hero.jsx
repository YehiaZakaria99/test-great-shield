import useNavigateToTop from "../Hooks/useNavigateToTop.js";
import Aos from "aos";
import { useEffect } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

// import { useNavigate } from "react-router-dom";

export default function Hero() {
  const goTo = useNavigateToTop();
  useEffect(() => {
    Aos.init({ duration: 800 });
    return () => {
      Aos.refreshHard();
    };
  }, []);

  return (
    <section
      className="h-screen hero-sec  bg-cover  relative overflow-x-hidden"
      // style={{
      //   // backgroundImage: 'url("/hero/bgHeroMobile.webp")',
      // }}
    >
      <div className="absolute inset-0 bg-navBg/75 flex flex-col justify-center items-center text-white text-center p-4">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 text-bg animate-[1s]  translate-all duration-500"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <TypeAnimation
            sequence={[
              "Great Shield",
              1000,
              "Egyptian Joint Stock Company",
              1000,
            ]}
            speed={75}
            repeat={Infinity}
          />
        </h1>
        <p
          className="text-lg md:text-2xl mb-10 animate-[1s_1s]  translate-all duration-500"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay={200}
        >
          Construction Services with the Highest Quality and Professionalism
        </p>
        <div
          className="flex justify-center py-2"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay={400}
        >
          <button
            onClick={() => goTo("/contact")}
            className="inline-flex items-center outline-none px-4 py-2 group text-md font-medium border-2 border-mainColor  bg-navBg  text-mainColor hover:bg-mainColor hover:text-navBg transition-all duration-300 rounded-lg"
          >
            Contact Us
            <svg
              className="w-4 h-4 ms-2 group-hover:animate-bounceX duration-75"
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
          </button>
        </div>
        {/* <div className="flex justify-center items-center bg-red-400">
          <button className="text-white inline-flex justify-center items-center  text-3xl bg-amber-400  w-20 h-20 my-2 transition duration-300 ">
            <span className=" ">
              <FaArrowAltCircleDown />
            </span>
          </button>
        </div> */}
      </div>
    </section>
  );
}
