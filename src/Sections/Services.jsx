import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ServiceCard from "../Components/ServiceCard/ServiceCard.jsx";
import useNavigateToTop from "../Hooks/useNavigateToTop.js";

import buildingConstruction from "/servicesSec/Building-Construction.webp";
import engineeringDesign from "/servicesSec/Engineering-Design.webp";
import maintenanceWorks from "/servicesSec/Maintenance-Works.webp";
import projectManagement from "/servicesSec/Project-Management.webp";

// Data
const services = [
  {
    title: "Building Construction",
    description:
      "We construct residential, commercial, and industrial facilities according to the highest quality standards",
    img: buildingConstruction,
  },
  {
    title: "Engineering Design",
    description:
      "Designing all construction projects and supervising their technical execution",
    img: engineeringDesign,
  },
  {
    title: "Maintenance Works",
    description:
      "Providing regular maintenance services for the company’s and clients’ buildings",
    img: maintenanceWorks,
  },
  {
    title: "Project Management",
    description:
      "Planning and executing all construction projects, from feasibility studies to final delivery",
    img: projectManagement,
  },
];

const Services = () => {
  const goTo = useNavigateToTop();

  useEffect(() => {
    AOS.init({ duration: 800 });

    return () => {
      AOS.refreshHard(); // أو AOS.refresh() حسب الحاجة
    };
  }, []);

  return (
    <section id="services" className="py-16 bg-(--nav-bg) text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <h2 className="text-4xl font-bold text-bg">Our Services</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5">
          {services.map(({ title, img }, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay={index * 200}
            >
              <ServiceCard key={index} title={title} img={img} />
            </div>
          ))}
        </div>

        <div
          className="flex justify-center mt-12"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <button
            onClick={() => goTo("/services")}
            className="inline-flex items-center group px-5 py-3 border-2 border-(--main-color) text-(--main-color) hover:bg-(--main-color) hover:text-(--nav-bg) transition duration-300 rounded-lg"
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
        </div>
      </div>
    </section>
  );
};

export default Services;
