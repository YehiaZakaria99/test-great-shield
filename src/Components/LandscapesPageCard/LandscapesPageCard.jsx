import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import Slider from "react-slick";

export default function LandscapesPageCard({
  landscape: { id, mainImage, title, city, description, allImages },
  index,
}) {
  const sliderRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
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

  const openModal = (img) => {
    setCurrentImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage("");
  };

  return (
    <>
      <div
        id={id}
        className={`w-full flex flex-col-reverse ${
          index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-center gap-0 md:gap-10 px-4 max-w-7xl mx-auto`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="my-8">
            <Slider
              beforeChange={() => {
                if (document.activeElement instanceof HTMLElement) {
                  document.activeElement.blur();
                }
              }}
              {...settings}
            >
              {allImages.map((img, index) => (
                <div
                  className="cursor-pointer flex"
                  onClick={(e) => openModal(allImages[0])}
                >
                  <img
                    data-aos={index % 2 !== 0 ? "flip-right" : "flip-left"}
                    src={img}
                    alt={title}
                    className="py-3 rounded-3xl shadow-2xl w-full h-[200px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Content */}
        <div
          data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"}
          className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4"
        >
          <h3 className="text-3xl md:text-3xl font-bold text-mainColor">
            {title}
          </h3>
          <h4 className="text-xl md:text-xl font-bold text-sky-400">{city}</h4>
          {/* <p className="text-gray-300 text-lg leading-relaxed">{description}</p> */}
        </div>
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
              beforeChange={() => {
                if (document.activeElement instanceof HTMLElement) {
                  document.activeElement.blur();
                }
              }}
              ref={sliderRef}
              {...settings}
              initialSlide={allImages.findIndex((img) => img === currentImage)}
              className="rounded-lg overflow-hidden"
            >
              {allImages.map((img, index) => (
                <div key={index} className="w-full h-96">
                  <img
                    src={img}
                    alt={`Modal Slide ${index}`}
                    className="rounded-lg w-full h-full max-h-[80vh] object-cover object-center border border-white"
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
