import React, { useContext, useEffect } from "react";
import { ProjectsContext } from "../Context/ProjectsContext.jsx";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
// Animation
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
  const { projects } = useContext(ProjectsContext);
  let { id } = useParams();
  id = Number(id);
  //   Animation Settings
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <div className="bg-[#111] min-h-screen flex items-center justify-center py-20 px-4">
        <section className="productDetails w-full max-w-7xl" data-aos="fade-up">
          <div className="box flex items-center gap-6 flex-wrap md:flex-nowrap bg-[#1a1a1a] rounded-2xl p-6 shadow-lg shadow-black/30">
            {/* images */}
            <div className="w-full md:w-1/3 lg:w-1/4" data-aos="fade-right">
              <Slider {...settings} className="mb-6">
                {projects[id].images.map((img, idx) => (
                  <div key={idx}>
                    <img
                      src={img}
                      alt=""
                      className="rounded-xl w-full max-h-96 object-cover border border-gray-700 shadow-md shadow-black/40"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Content */}
            <div
              className="w-full md:w-2/3 lg:w-3/4 space-y-4"
              data-aos="fade-left"
            >
              <div className="my-4">
                <h3 className="text-3xl font-bold text-(--main-color) mb-4">
                  {projects[id].title}
                </h3>
                <div className="details text-white py-4">
                  <p className="mb-2">
                    <span className="font-bold text-sky-400 capitalize">
                      owner :
                    </span>{" "}
                    {projects[id].owner}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold text-sky-400 capitalize">
                      consultant :
                    </span>{" "}
                    {projects[id].consultant}
                  </p>
                  {/* <p className="mb-2">
                    <span className="font-bold text-sky-400 capitalize">
                      start date :
                    </span>{" "}
                    {projects[id].startDate}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold text-sky-400 capitalize">
                      end date :
                    </span>{" "}
                    {projects[id].endDate}
                  </p> */}
                  <p className="mb-2">
                    <span className="font-bold text-sky-400 capitalize">
                      project description :
                    </span>{" "}
                    {projects[id].fullDescription}
                  </p>
                  <div className="mb-2">
                    <span className="font-bold text-sky-400 capitalize">
                      scope of work :
                    </span>
                    <ul className="px-3 list-disc">
                      {projects[id].scopeOfWork.map((scope, i) => (
                        <li key={i}>{scope}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Go Back Btn */}
          <div className="mt-8 text-center">
            <Link
              to="/projects"
              className="inline-block bg-(--main-color) hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 shadow-md"
            >
              Back To Projects
            </Link>
            <HashLink
              smooth to="/#projects"
              className="ms-5 inline-block bg-(--main-color) hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 shadow-md"
            >
              Back To Home
            </HashLink>
          </div>
        </section>
      </div>
    </>
  );
}
