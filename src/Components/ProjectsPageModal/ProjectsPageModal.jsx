import React from "react";
import { FaTimes } from "react-icons/fa";
import Slider from "react-slick";
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ProjectsPageModal({
  isModalOpen,
  showModalClass,
  modalRef,
  closeModal,
  project,
}) {
  return (
    <>
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 ${
            showModalClass ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            ref={modalRef}
            className="bg-[#1a1a1a] text-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-x-hidden overflow-auto p-6 relative custom-scrollbar py-12"
          >
            {/* close modal*/}
            <button
              className="absolute z-50 top-3 right-3 text-gray-400 hover:text-red-500 transition"
              onClick={() => closeModal()}
            >
              <FaTimes size={20} />
            </button>
            <Slider {...settings} className="mb-6 ">
              {project.images.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt=""
                    className="rounded-md w-full max-h-96 object-cover mx-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
            <div className="content my-10">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                {project.title}
              </h3>
              <pre className="text-gray-300 whitespace-pre-wrap text-sm">
                {project.fullDescription}
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
