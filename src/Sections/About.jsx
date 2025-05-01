import AboutCard from "../Components/AboutCard/AboutCard.jsx";

// Images
import ourVision from "/aboutSec/Our-Vision.webp";
import ourMessage from "/aboutSec/Our-Message.webp";
import ourMissoin from "/aboutSec/Our-Mission.webp";
import ourStandards from "/aboutSec/Our-Standards.webp";
import { useEffect } from "react";
import Aos from "aos";
import useNavigateToTop from "../Hooks/useNavigateToTop.js";

// Data
const about = [
  { title: "Our Vision", img: ourVision, link: "/about/overview#vision-details" },
  { title: "Our Mission", img: ourMissoin, link: "/about/overview#mission-details" },
  {
    title: "Our Standards",
    img: ourStandards,
    link: "/about/overview#standards-details",
  },
  { title: "Our Message", img: ourMessage },
];

const About = () => {
  const goTo = useNavigateToTop();
  useEffect(() => {
    Aos.init({ duration: 800 });

    return () => {
      Aos.refreshHard();
    };
  }, []);
  return (
    <section id="about" className="py-16 bg-navBg text-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <div className=" mb-12 ">
          <h2
            className="text-3xl md:text-4xl font-bold text-bg"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
          >
            About Us
          </h2>
          <p
            className="text-lg leading-relaxed max-w-3xl text-gray-100 mx-auto"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
          >
            Our construction company specializes in executing engineering
            projects to the highest quality standards. We are distinguished by
            years of experience in designing and building residential,
            commercial, and industrial facilities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5">
          {about.map(({ title, img, link }, index) => (
            <div key={index}>
              <div
                key={index}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-delay={index * 200}
              >
                <AboutCard title={title} img={img} link={link} />
              </div>
            </div>
          ))}
        </div>

        {/* <div
          className="flex justify-center mt-12"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <button
            onClick={() => goTo("/about")}
            className="inline-flex items-center group px-5 py-3 border-2 border-mainColor text-mainColor hover:bg-mainColor hover:text-navBg transition duration-300 rounded-lg"
          >
            More Details
            <svg
              className="w-4 h-4 ms-2 rtl:rotate-180 group-hover:animate-bounceX duration-300"
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
        </div> */}
      </div>
    </section>
  );
};

export default About;
