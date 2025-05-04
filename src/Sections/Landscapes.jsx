import Slider from "react-slick";
import { useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import { LandscapesContext } from "../Context/LandscapesContext";
import { Link } from "react-router-dom";

export default function Landscapes() {
  const { landscapes } = useContext(LandscapesContext);
  useEffect(() => {
    Aos.init({ duration: 800 });

    return () => {
      Aos.refreshHard();
    };
  }, []);
  const sliderRef = useRef(null);

  useEffect(() => {
    const lastViewed = sessionStorage.getItem("lastViewedLandscape");

    if (lastViewed && sliderRef.current) {
      setTimeout(() => {
        const index = parseInt(lastViewed);
        sliderRef.current.slickGoTo(index);
        sliderRef.current.slickPause();

        setTimeout(() => {
          sliderRef.current?.slickPlay();
        }, 3000);

        sessionStorage.removeItem("lastViewedLandscape");
      }, 300);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
  };

  const navigate = useNavigate();
  return (
    <section className="py-20 bg-navBg overflow-hidden" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bg">
            Our Landscapes
          </h2>
        </div>
        <div className="my-8">
          <Slider {...settings}>
            {landscapes.map((landscape, index) => (
              <div
                key={index}
                className=" px-6 py-3"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
              >
                <div className="bg-[#111] rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6">
                  <img
                    src={landscape.mainImage}
                    alt="landscape.title"
                    className="w-full md:w-1/2 h-64 object-cover rounded-xl"
                    loading="lazy"
                  />
                  <div className="text-center md:text-left md:w-1/2">
                    <h3 className="text-2xl font-semibold text-mainColor mb-2">
                      {landscape.title}
                    </h3>
                    <p className="mb-4 text-gray-100">{landscape.city}</p>

                    {/* <button
                    onClick={() => {
                      sessionStorage.setItem("lastViewedLandscape", index);
                      navigate(`/landscapeDetails/${landscape.id}`);
                    }}
                    className="mt-4 inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md"
                  >
                    View Details
                  </button> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="text-center py-10" data-aos="fade-up">
        <Link
          to={"/landscapes"}
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
        </Link>
      </div>
    </section>
  );
}
