import { FaArrowRight, FaTimes } from "react-icons/fa";

const AboutPageCard = ({
  dataAos,
  id,
  img,
  title,
  text,
  moreContent,
  openModal,
  closeModal,
  isModalOpen,
  modalRef,
  showModalClass,
}) => {
  return (
    <div
      id={id}
      data-aos={dataAos}
      className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-4 max-w-7xl mx-auto"
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          data-aos="zoom-in"
          src={img}
          alt={title}
          className="rounded-3xl shadow-2xl w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold text-sky-400">{title}</h3>
          <p className="text-gray-300 text-lg leading-relaxed">{text.split(" ", 8).join(" ")}...</p>

           
            <button
              onClick={openModal}
              className="mt-4 inline-flex items-center gap-2 self-center md:self-start px-5 py-2 rounded-xl border-2 border-mainColor text-mainColor hover:bg-mainColor hover:text-navBg transition-all duration-300 group"
            >
              View More
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          
        </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-500 ${
            showModalClass ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            ref={modalRef}
            className={`relative bg-[#1f1f1f] w-full max-w-5xl rounded-3xl p-6 md:p-10 shadow-2xl transition-all duration-500 transform ${
              showModalClass
                ? "scale-100 opacity-100 translate-y-0"
                : "scale-95 opacity-0 translate-y-8"
            } max-h-[95vh] h-full overflow-y-auto custom-scrollbar flex flex-col`}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-2 md:top-4 md:right-4 text-gray-400 hover:text-red-500 transition z-10"
              onClick={closeModal}
            >
              <FaTimes size={28} />
            </button>

            {/* Title */}
            <h4 className="text-3xl font-bold text-orange-400 mb-8 text-center">
              {title}
            </h4>

            {/* Modal Content */}
            <div className="text-gray-200 text-lg leading-relaxed">
              {moreContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPageCard;
