import "aos/dist/aos.css";
import Aos from "aos";
import { useContext, useEffect, useState } from "react";
import { CustomersContext } from "../Context/CustomersContext";
import Loading from "../Components/Loading/Loading";

export default function CustomersPage() {
  const [isLoading, setIsLodaing] = useState(true);
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

  const { logos } = useContext(CustomersContext);
  console.log(logos);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="pt-40 pb-16 bg-[#111] text-white min-h-screen overflow-hidden">
          <div className="container mx-auto text-center">
            {/* Header */}
            <section className="mb-24 px-4 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold text-bg mb-4"
                data-aos="fade-right"
              >
                Our Clients
              </h2>
            </section>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={(index % 5) * 100}
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="h-32 mx-auto  transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
