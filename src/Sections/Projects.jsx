import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useRef, useEffect } from "react";
import { ProjectsContext } from "./../Context/ProjectsContext.jsx";
import { useNavigate } from "react-router-dom";
import Aos from "aos";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 800 });

    return () => {
      Aos.refreshHard();
    };
  }, []);
  const sliderRef = useRef(null);

  useEffect(() => {
    const lastViewed = sessionStorage.getItem("lastViewedProject");

    if (lastViewed && sliderRef.current) {
      setTimeout(() => {
        const index = parseInt(lastViewed);
        sliderRef.current.slickGoTo(index);
        sliderRef.current.slickPause();

        setTimeout(() => {
          sliderRef.current?.slickPlay();
        }, 3000);

        sessionStorage.removeItem("lastViewedProject");
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

  const { projects } = useContext(ProjectsContext);
  const navigate = useNavigate();
  return (
    <section className="pb-20 bg-(--nav-bg)" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <h2 className="text-4xl font-bold text-bg">Our Featured Projects</h2>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className=" px-6 py-3"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              <div className="bg-[#111] rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full md:w-1/2 h-64 object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="text-center md:text-left md:w-1/2">
                  <h3 className="text-2xl font-semibold text-(--main-color) mb-2">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-100">{project.location}</p>

                  <button
                    onClick={() => {
                      sessionStorage.setItem("lastViewedProject", idx);
                      navigate(`/projectDetails/${project.id}`);
                    }}
                    className="mt-4 inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
