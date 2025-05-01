import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import Teamwork from "./../../Sections/Teamwork";
import chairmanSignature from "/aboutPage/Our-Message/chairmanSignature.webp";
import generalManagerSignature from "/aboutPage/Our-Message/generalManagerSignature.webp";
import chairman from "/leadership/chairman.webp";
import generalManager from "/leadership/generalManager.webp";
import team from "/leadership/team.webp";
import useNavigateToTop from "../../Hooks/useNavigateToTop";

Modal.setAppElement("#root");

export default function Leadership() {

  const goTo = useNavigateToTop();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const leadershipData = [
    {
      id: 1,
      name: "Eng. Mohamed Abdel Raouf",
      title: "Chairman",
      image: chairman,
      message: `It is my pleasure, as Chairman of Great Shield Construction, to welcome you to our esteemed company—an active and reliable partner in shaping Egypt’s future.

Founded on our firm belief in contributing to the nation’s progress, our company provides integrated engineering and construction services that meet the growing demands of the Egyptian market. We take pride in our vital role in executing major national projects that have helped strengthen the country’s infrastructure and regional position.

At Great Shield Construction, we believe that construction is not merely about erecting buildings, but about building a better future. That’s why we commit to the highest standards of quality and sustainability by utilizing eco-friendly materials and innovative technologies that help preserve natural resources.

As part of our strong sense of social responsibility, we continuously support initiatives that promote education, vocational training, job creation for youth, and charitable contributions in the communities we serve.

Our strategy aligns fully with Egypt’s Vision 2030, and we actively contribute to its goals by:
• Supporting urban development through large-scale infrastructure and housing projects
• Creating job opportunities and training Egyptian youth on modern technologies
• Strengthening the national economy through economic participation
• Enhancing quality of life by building new cities and integrated communities
• Protecting the environment through green building practices

We look to the future with great optimism and are committed to maintaining our leadership in the construction sector in Egypt and the region. We will continue to invest in human capital, adopt cutting-edge construction technologies, and uphold international standards of excellence.

With sincere appreciation and gratitude.`,
      signature: chairmanSignature,
    },
    {
      id: 2,
      name: "Mr. Omar Abdel Raouf",
      title: "General Manager",
      image: generalManager,
      message: `To all the employees of Great Shield Construction,

I am pleased to share with you my thoughts and vision for the future of our company. We have achieved a lot over the past years, and we now stand at the threshold of a new phase filled with opportunities and challenges.

Our vision is to become a leading construction company in Egypt and the Arab region—driving prosperity through innovative and sustainable projects.

To achieve this, we must work together to fulfill our key goals:
• Lead the construction industry in Egypt and the region
• Deliver high-quality building services that exceed client expectations
• Commit to the highest standards of quality and safety
• Build sustainable and innovative projects that benefit society
• Develop our employees and create an exceptional work environment
• Strengthen relationships with clients and partners
• Uphold our social and environmental responsibility

I believe that through teamwork, dedication, and creativity, we can accomplish these goals.

I want to thank each one of you for your efforts and commitment. I look forward to working with you to build a brighter future for Great Shield Construction and our community.

Together, we will achieve great things!

With sincere appreciation,`,
      signature: generalManagerSignature,
    },
  ];

  const openModal = (person) => {
    setSelectedPerson(person);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPerson(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".hero-image-container");
      if (!container) return;

      const scrollY = window.scrollY ;
      const scale = Math.min(1 + scrollY / 1500, 1.1); // بين 1 و 1.1
      container.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mb-24 text-center">
      <h2
        className="text-4xl md:text-5xl font-bold text-bg mb-10"
        data-aos="fade-right"
      >
        Leadership
      </h2>

      {/* Hero Image with Scroll Zoom & Width Effect */}
      <div className="relative overflow-hidden mb-10">
        <div
          data-aos="fade-up"
          className="hero-image-wrapper w-full flex justify-center"
        >
          <div className="hero-image-container w-[calc(100vw-200px)] h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl transition-transform duration-1000 ease-in-out will-change-transform relative">
            <img src={team} alt="team" className="w-full h-full object-cover" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-mainColor/50 to-navBg/70 z-10"></div>
          </div>
        </div>
      </div>

      <Teamwork />

      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto my-10">
        {leadershipData.map((person, index) => (
          <div
            onClick={() => openModal(person)}
            key={person.id}
            className="group bg-navBg rounded-2xl shadow-md p-4 cursor-pointer transform transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(56,189,248,0.4)]"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-64 object-cover rounded-xl mb-4 grayscale transition-all duration-300 group-hover:grayscale-0"
            />
            <h3 className="text-lg font-semibold text-gray-300">
              {person.name}
            </h3>
            <p className="text-sm text-gray-100 mb-4">{person.title}</p>
            <div className="flex justify-end">
              <span className="inline-flex items-center justify-center gap-2 border-mainColor group-hover:bg-mainColor group-hover:text-navBg border text-mainColor w-10 h-10 rounded-full transition duration-300">
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div
          className="flex justify-center mt-12"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <button
            onClick={() => goTo("/portfolio")}
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
          </button>
        </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Leadership Message"
        className="md:max-w-2xl w-[calc(100vw-50px)] mx-auto mt-20 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-8 outline-none transition-all duration-300 ease-in-out relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50"
      >
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 md:top-4 md:right-4 text-gray-400 hover:text-red-500 transition z-10"
        >
          <FaTimes size={28} />
        </button>

        {selectedPerson && (
          <div
            data-aos="fade-up"
            className="text-center px-6 h-[400px] overflow-auto"
          >
            <img
              src={selectedPerson.image}
              alt={selectedPerson.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-1">{selectedPerson.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{selectedPerson.title}</p>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {selectedPerson.message}
            </p>
            <p className="text-sm text-gray-500 italic">
              {selectedPerson.name}
            </p>
            <img
              src={selectedPerson.signature}
              alt="Signature"
              className="mt-2 w-24 md:w-32 mx-auto md:mx-0"
            />
          </div>
        )}
      </Modal>
    </div>
  );
}
