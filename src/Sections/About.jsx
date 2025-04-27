import AboutCard from "../Components/AboutCard/AboutCard.jsx";

// Images
import ourVision from "/aboutSec/Our-Vision.webp";
import ourMessage from "/aboutSec/Our-Message.webp";
import ourMissoin from "/aboutSec/Our-Mission.webp";
import ourStandards from "/aboutSec/Our-Standards.webp";
import { useEffect } from "react";
import Aos from "aos";

// Data
const about = [
  { title: "Our Vision", img: ourVision, link: "/about#vision-details" },
  { title: "Our Mission", img: ourMissoin, link: "/about#mission-details" },
  {
    title: "Our Standards",
    img: ourStandards,
    link: "/about#standards-details",
  },
  { title: "Our Message", img: ourMessage, link: "/about#message-details" },
];

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });

    return () => {
      Aos.refreshHard();
    };
  }, []);
  return (
    <section id="about" className="pb-20 bg-(--nav-bg) overflow-x-hidden">
      <div className="container max-w-7xl  px-4">
        <div className="mb-12" data-aos="fade-up" data-aos-easing="ease-in-out">
          <h2 className="text-4xl font-bold mb-6 text-bg">About Us</h2>
          <p className="text-lg leading-relaxed max-w-3xl text-gray-100">
            Our construction company specializes in executing engineering
            projects to the highest quality standards. We are distinguished by
            years of experience in designing and building residential,
            commercial, and industrial facilities.
          </p>
        </div>

        <div className="flex gap-y-5 my-5 justify-center flex-wrap text-center">
          {about.map(({ title, img, link }, index) => (
            <div key={index} className=" rounded-2xl w-full md:w-1/2 lg:w-1/4">
              <div
                className="px-3 h-full"
                data-aos="zoom-out"
                data-aos-delay={index * 200}
                data-aos-easing="ease-in-out"
              >
                <AboutCard title={title} img={img} link={link} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
