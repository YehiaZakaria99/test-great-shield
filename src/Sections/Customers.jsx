import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import Aos from "aos";
import { CustomersContext } from "../Context/CustomersContext";

export default function Customers() {
  const { logos } = useContext(CustomersContext);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-20 bg-navBg overflow-hidden">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold my-8 mb-12 text-bg"
          data-aos="fade-right"
        >
          Our Valuable Clients
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 gap-y-16 items-center justify-center my-8">
          {logos.slice(0, 8).map((logo, index) => (
            <div key={index} data-aos="zoom-in">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-32 mx-auto  transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="py-10" data-aos="fade-up">
          <Link
            to={'/customers'}
            className="inline-flex items-center group px-5 py-3 border-2 border-mainColor text-mainColor hover:bg-mainColor hover:text-navBg transition duration-300 rounded-lg"
          >
            View All Clients
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
          </Link>
        </div>
      </div>
    </section>
  );
}
