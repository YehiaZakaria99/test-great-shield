import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ourVision from "/aboutSec/Our-Vision.webp";
import ourMissoin from "/aboutSec/Our-Mission.webp";
import ourStandards from "/aboutSec/Our-Standards.webp";
import AboutPageCard from "../../Components/AboutPageCard/AboutPageCard";

export default function AboutOverview() {
  const modalRef = useRef(null);
  const [openModalId, setOpenModalId] = useState(null);
  const [showModalClass, setShowModalClass] = useState(false);

  const openModal = (id) => {
    setOpenModalId(id);
    setTimeout(() => setShowModalClass(true), 10);
  };

  const closeModal = () => {
    setShowModalClass(false);
    setTimeout(() => setOpenModalId(null), 300);
  };

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    if (openModalId) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModalId]);

  return (
    <>
      {/* Overview Header */}
      <section className="mb-24 px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-bg mb-4"
          data-aos="fade-right"
        >
          Overview
        </h2>
        <p
          className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          data-aos="fade-left"
        >
          We are a construction company with a passion for excellence. Our
          vision, mission, and standards reflect our dedication to quality,
          innovation, and integrity.
        </p>
      </section>

      {/* About Cards */}
      <section className="space-y-28 overflow-hidden">
        <AboutPageCard
          dataAos="fade-up"
          title="Our Vision"
          text={`To be a leading construction and building company in Egypt, the Middle East, and Africa, contributing to a prosperous future through our innovative and sustainable projects.`}
          id="vision-details"
          img={ourVision}
          moreContent={`To be a leading construction and building company in Egypt, the Middle East, and Africa, contributing to a prosperous future through our innovative and sustainable projects.`}
          // moreContent="Our vision guides every decision we make — focusing on quality, innovation, and sustainability in all our projects."
          openModal={() => openModal("vision-details")}
          isModalOpen={openModalId === "vision-details"}
          closeModal={closeModal}
          modalRef={modalRef}
          showModalClass={showModalClass}
        />

        <AboutPageCard
          dataAos="fade-up"
          title="Our Mission"
          text={`At Great Shield, we empower our team with the tools and environment needed to deliver top-tier construction, installation, and project management services. With a focus on quality, safety, and speed, we build long-term client relationships rooted in trust and excellence. Our commitment to transparency and continuous improvement positions us to be a leading force in Egypt’s construction industry.`}
          id="mission-details"
          img={ourMissoin}
          moreContent={`At Great Shield, we empower our team with the tools and environment needed to deliver top-tier construction, installation, and project management services. With a focus on quality, safety, and speed, we build long-term client relationships rooted in trust and excellence. Our commitment to transparency and continuous improvement positions us to be a leading force in Egypt’s construction industry.`}
          openModal={() => openModal("mission-details")}
          isModalOpen={openModalId === "mission-details"}
          closeModal={closeModal}
          modalRef={modalRef}
          showModalClass={showModalClass}
        />

        <AboutPageCard
          dataAos="fade-up"
          title="Our Standards"
          text="We are committed to international construction standards, continuous innovation, strict safety practices, and strong social responsibility — ensuring excellence in every project"
          id="standards-details"
          img={ourStandards}
          moreContent={
            <div className="space-y-4 text-gray-200 text-[17px] leading-relaxed">
              <ul className="list-disc pl-5 ">
                <li>
                  <strong className="text-sky-600">Commitment to International Standards: </strong>
                  We follow the latest global construction standards to ensure
                  long-lasting quality, using modern technologies and focusing
                  on precision in every stage.
                </li>
                <li>
                  <strong className="text-sky-600">Continuous Innovation: </strong>
                  We develop smart, client-centered solutions, invest in R&D,
                  and apply sustainable methods that enhance project performance
                  and environmental impact.
                </li>
                <li>
                  <strong className="text-sky-600">Health & Safety First: </strong>
                  Our team operates in a risk-free environment with proper
                  safety training and full compliance with industry regulations.
                </li>
                <li>
                  <strong className="text-sky-600">Social Responsibility: </strong>
                  We contribute to local development, adopt eco-friendly
                  building practices, and support youth by offering jobs and
                  training opportunities.
                </li>
              </ul>
            </div>
          }
          openModal={() => openModal("standards-details")}
          isModalOpen={openModalId === "standards-details"}
          closeModal={closeModal}
          modalRef={modalRef}
          showModalClass={showModalClass}
        />
      </section>
    </>
  );
}
