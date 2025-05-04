import React, { useContext, useEffect, useRef, useState } from "react";
import { ProjectsContext } from "../Context/ProjectsContext.jsx";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// Slider settings
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ProjectDetails() {
  const sliderRef = useRef(null);
  const { projects } = useContext(ProjectsContext);
  let { id } = useParams();
  id = Number(id);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const openModal = (img) => {
    setCurrentImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage("");
  };

  const currentProject = projects[id];

  return (
    <>
      <div className="bg-[#111] min-h-screen flex items-center justify-center py-20 px-4">
        <section className="productDetails w-full max-w-7xl" data-aos="fade-up">
          <div className="box flex gap-6 flex-wrap md:flex-nowrap bg-navBg rounded-2xl p-6 shadow-lg shadow-black/30">
            {/* Images */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              {currentProject.images.length > 1 ? (
                <Slider {...settings} className="w-full h-80">
                  {currentProject.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="w-full h-72 cursor-pointer "
                      onClick={() => openModal(img)}
                    >
                      <img
                        src={img}
                        alt={`project-${idx}`}
                        className="w-full h-full object-cover rounded-xl border border-gray-700 shadow-md shadow-black/40"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div
                  className="w-full h-72 cursor-pointer"
                  onClick={() => openModal(currentProject.images[0])}
                >
                  <img
                    src={currentProject.images[0]}
                    alt="project"
                    className="w-full h-full object-cover rounded-xl border border-gray-700 shadow-md shadow-black/40"
                    loading="lazy"
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div
              className="w-full md:w-2/3 lg:w-3/4 space-y-4"
              data-aos="fade-left"
            >
              <div className="my-2">
                {currentProject.title && (
                  <h3 className="text-3xl font-bold text-mainColor mb-4">
                    {currentProject.title}
                  </h3>
                )}
                <div className="details text-white py-4">
                  {currentProject.owner && (
                    <p className="mb-2">
                      <span className="font-bold text-sky-400 capitalize">
                        owner :
                      </span>{" "}
                      {currentProject.owner}
                    </p>
                  )}
                  {currentProject.consultant && (
                    <p className="mb-2">
                      <span className="font-bold text-sky-400 capitalize">
                        consultant :
                      </span>{" "}
                      {currentProject.consultant}
                    </p>
                  )}
                  {currentProject.location && (
                    <p className="mb-2">
                      <span className="font-bold text-sky-400 capitalize">
                        location :
                      </span>{" "}
                      {currentProject.location}
                    </p>
                  )}
                  {currentProject.fullDescription && (
                    <p className="mb-2">
                      <span className="font-bold text-sky-400 capitalize">
                        project description :
                      </span>{" "}
                      {currentProject.fullDescription}
                    </p>
                  )}
                  {currentProject.scopeOfWork && (
                    <div className="mb-2">
                      <span className="font-bold text-sky-400 capitalize">
                        scope of work :
                      </span>
                      <ul className="px-3 list-disc">
                        {currentProject.scopeOfWork?.map((scope, i) => (
                          <li key={i}>{scope}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Go Back Btn */}
          <div className="mt-8 flex justify-center flex-col items-center gap-3  py-2 md:flex-row">
            <Link
              to="/projects"
              className="inline-block text-white bg-mainColor hover:text-mainColor hover:bg-white font-semibold px-6 py-2 rounded-lg transition duration-300 shadow-md"
            >
              Back To Projects
            </Link>
            <HashLink
              smooth
              to="/#projects"
              className="inline-block text-white bg-navBg hover:text-navBg hover:bg-white font-semibold px-6 py-2 rounded-lg transition duration-300 shadow-md"
            >
              Back To Home
            </HashLink>
          </div>
        </section>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full"
          >
            {/* Close Btn */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 flex justify-center items-center text-white text-xl font-bold bg-red-600 w-8 h-8 rounded-full hover:bg-red-700 transition z-50"
            >
              <AiOutlineClose />
            </button>

            {/* Slider Controls */}
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-mainColor text-white p-2 rounded-full z-50 hover:bg-white hover:text-mainColor transition"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-mainColor text-white p-2 rounded-full z-50 hover:bg-white hover:text-mainColor transition"
            >
              <FaAngleRight />
            </button>

            {/* Slider */}
            <Slider
              ref={sliderRef}
              {...settings}
              initialSlide={currentProject.images.findIndex(
                (img) => img === currentImage
              )}
              className="rounded-lg overflow-hidden"
            >
              {currentProject.images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Modal Slide ${index}`}
                    className="rounded-lg w-full max-h-[80vh] object-contain border border-white"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}
