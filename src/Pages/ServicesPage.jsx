// Animation
import { useEffect, useState } from "react";
import ServicesPageCard from "../Components/ServicesPageCard/ServicesPageCard.jsx";
import Loading from "./../Components/Loading/Loading.jsx";

// General Construction Services
import residentialBuilding from "/servicesPage/General-Construction-Services/residentialBuilding.webp";
import commercialBuilding from "/servicesPage/General-Construction-Services/commercialBuilding.webp";
import industrialBuilding from "/servicesPage/General-Construction-Services/industrialBuilding.webp";
import finishing from "/servicesPage/General-Construction-Services/finishing.webp";
import infrastructureWorks from "/servicesPage/General-Construction-Services/infrastructureWorks.webp";

// Specialized Services
import electricalInstallations from "/servicesPage/Specialized-Services/electricalInstallations.webp";
import mechanicalInstallations from "/servicesPage/Specialized-Services/mechanicalInstallations.webp";
import decorationWorks from "/servicesPage/Specialized-Services/decorationWorks.webp";
import sitePreparation from "/servicesPage/Specialized-Services/sitePreparation.webp";
import landscapingWorks from "/servicesPage/Specialized-Services/landscapingWorks.webp";

// More Services
import projectManagement from "/servicesPage/More Services/projectManagement.webp";
import engineeringDesign from "/servicesPage/More Services/engineeringDesign.webp";
import procurement from "/servicesPage/More Services/procurement.webp";
import maintenance from "/servicesPage/More Services/maintenance.webp";
import Aos from "aos";

export default function ServicesPage() {
  const [isLoading, setIsLodaing] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 800 });

    return () => {
      Aos.refreshHard();
    };
  }, []);

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

  const services = [
    {
      title: "General Construction Services",
      subSections: [
        {
          subTitle: "Residential Building Construction",
          img: residentialBuilding,
          descriptions: ["Apartments", "Villas", "Multi-family Houses"],
        },
        {
          subTitle: "Commercial Building Construction",
          img: commercialBuilding,
          descriptions: ["Shopping Centers", "Hotels", "Offices"],
        },
        {
          subTitle: "Industrial Building Construction",
          img: industrialBuilding,
          descriptions: [
            "Factories",
            "Processing Plants",
            "Warehouses",
            "Distribution Centers",
          ],
        },
        {
          subTitle: "Interior and Exterior Finishing",
          img: finishing,
          descriptions: [
            "Includes all finishing works, from flooring, walls, and ceilings to painting, gypsum, and tiling",
          ],
        },
        {
          subTitle: "Infrastructure Works",
          img: infrastructureWorks,
          descriptions: [
            "Sewage Networks",
            "Water Supply",
            "Electricity",
            "Roads and Pavements",
          ],
        },
      ],
    },
    {
      title: "Specialized Services",
      subSections: [
        {
          subTitle: "Electrical Installations",
          img: electricalInstallations,
          descriptions: ["Control Panels", "Wiring", "Sockets"],
        },
        {
          subTitle: "Mechanical Installations",
          img: mechanicalInstallations,
          descriptions: [
            "Heating Systems",
            "Ventilation",
            "Air Conditioning",
            "Plumbing",
            "Firefighting Systems",
          ],
        },
        {
          subTitle: "Interior Decoration Works",
          img: decorationWorks,
          descriptions: [
            "Comprehensive interior finishes, including flooring",
            "Walls",
            "Ceilings",
            "Lighting",
          ],
        },
        {
          subTitle: "Landscaping Works",
          img: sitePreparation,
          descriptions: [
            "Garden Design and Construction",
            "Playgrounds",
            "Fountains",
          ],
        },
        {
          subTitle: "Site Preparation and Demolition",
          img: landscapingWorks,
          descriptions: [
            "Site Preparation for Construction",
            "Demolition of Old Buildings",
          ],
        },
      ],
    },
    {
      title: "More Services",
      subSections: [
        {
          subTitle: "Project Management",
          img: projectManagement,
          descriptions: [
            "Planning and executing all construction projects, starting from the feasibility study phase to final delivery",
          ],
        },
        {
          subTitle: "Engineering Design",
          img: engineeringDesign,
          descriptions: [
            "Designing all construction projects and supervising their execution from a technical perspective",
          ],
        },
        {
          subTitle: "Procurement",
          img: procurement,
          descriptions: [
            "Purchasing all necessary materials and equipment required for the execution of construction projects",
          ],
        },
        {
          subTitle: "Maintenance",
          img: maintenance,
          descriptions: [
            "Providing regular maintenance services for the company’s buildings and its clients",
          ],
        },
      ],
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section
          className="pt-40 pb-16 bg-[#111] text-white min-h-screen overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-center text-(--main-color) mb-16"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
            >
              Services
            </h2>

            {services.map((service, index) => (
              <ServicesPageCard service={service} key={index} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
