import { createContext, useEffect, useState } from "react";
// Construction Project of a Post Office Building in Qalyubia
import img1proj1 from "/projectsPage/proj01/01.webp";
import img2proj1 from "/projectsPage/proj01/02.webp";
// 6th of October Dry Port
import img1proj2 from "/projectsPage/proj02/01.webp";
import img2proj2 from "/projectsPage/proj02/02.webp";
// Al-Nouh Al-Azhari Institute Project
import img1proj3 from "/projectsPage/proj03/01.webp";
import img2proj3 from "/projectsPage/proj03/02.webp";
// Buildings Project for Al-Zohour District within the Military Entity
import img1proj4 from "/projectsPage/proj04/01.webp";
import img2proj4 from "/projectsPage/proj04/02.webp";
// Project for the construction of a health center in Haggar El-Dahsa, Qena
import img1proj5 from "/projectsPage/proj05/01.webp";
import img2proj5 from "/projectsPage/proj05/02.webp";
// Project for the construction of a Mercedes Benz Service Center in Ain Sokhna
import img1proj6 from "/projectsPage/proj06/01.webp";
import img2proj6 from "/projectsPage/proj06/02.webp";
// Project for the construction of a health center in Nagaa Al-Omda, Qena
import img1proj7 from "/projectsPage/proj07/01.webp";
import img2proj7 from "/projectsPage/proj07/02.webp";
// Project for the construction of Al-Azhar Hotel in Ismailia
import img1proj8 from "/projectsPage/proj08/01.webp";
import img2proj8 from "/projectsPage/proj08/02.webp";
// Project for the construction of 12 social housing buildings in the Sixth of October
import img1proj9 from "/projectsPage/proj09/01.webp";
import img2proj9 from "/projectsPage/proj09/02.webp";
// Project for the construction of Damanhour University Hospital
import img1proj10 from "/projectsPage/proj10/01.webp";
import img2proj10 from "/projectsPage/proj10/02.webp";


// Faculty-of-Computers-and-Artificial-Intelligence-Benha-University
import img1 from "/projectsPage/FCI/01.jpg";
import img2 from "/projectsPage/FCI/02.jpg";

export let ProjectsContext = createContext();

export default function ProjectsContextProvider({ children }) {
  const projects = [
    {
      id: 0,
      title: "Construction Project of a Post Office Building in Qalyubia",
      images: [img1proj1, img2proj1],
      owner: "The Military Production Company for Development Projects",
      consultant: "ECG",
      startDate: "",
      endDate: "",
      location: "Qalyubiyya Governorate",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Administrative facility covering a total area of 960 square meters",
      scopeOfWork: [
        "Construction works",
        "Interior and exterior finishing works",
        "Electromechanical works",
      ],
    },
    {
      id: 1,
      title: "6th of October Dry Port",
      images: [img1proj2, img2proj2],
      owner: "The Military Production Company for Development Projects",
      consultant: "New Urban Communities Authority",
      startDate: "",
      endDate: "",
      location: "Dry port - Oasis road - 6th of October",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Paving works covering an area of 130,000 square meters and soil leveling works over an area of 265,000 square meters",
      scopeOfWork: [
        "Asphalt road paving works over an area of 130,000 square meters",
        "Soil leveling works over an area of 265,000 square meters",
        "Installation of curbstones, interlock tiles, and culverts",
        "Infrastructure works",
      ],
    },
    {
      id: 2,
      title: "Al-Nouh Al-Azhari Institute Project",
      images: [img1proj3, img2proj3],
      owner: "Al-Azhar Authority",
      consultant: "Eng. Tarek Abdel-Ghaffar Office",
      startDate: " May 2023",
      endDate: "March 2024",
      location: "Shebin El-Kom Street – Ismailia Governorate",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Construction of a regional administrative building with a ground floor area of 650 square meters and three repeated upper floors, along with general site works.",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
        "General site works (including curbstones, interlock tiling, and infrastructure works)",
      ],
    },
    {
      id: 3,
      title:
        "Buildings Project for Al-Zohour District within the Military Entity",
      images: [img1proj4, img2proj4],
      owner: "The Engineering Authority of the Armed Forces",
      consultant: "RBC Office",
      startDate: " August 2022",
      endDate: "July 2024",
      location: " Al-Zohour District – Military Entity – Ain Sokhna Road",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "construction of 4 buildings with a footprint of 860 square meters each, 2 commercial malls with a footprint of 1,100 square meters each, a mosque with a capacity of 1,000 worshippers, and general site works.",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
        "General site works (including curbstones, interlock tiling, and infrastructure works)",
      ],
    },
    {
      id: 4,
      title:
        "Project for the construction of a health center in Haggar El-Dahsa, Qena",
      images: [img1proj5, img2proj5],
      owner: " Ministry of Health",
      consultant: "Perfect Engineering Consultancy",
      startDate: "  May 2023",
      endDate: "August 2024",
      location: " Haggar El-Dahsa Center, Qena Governorate",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Construction of a healthcare unit with a ground floor area of 450 square meters and two repeated upper floors",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
        "General site works (including curbstones, interlock tiling, and infrastructure works)",
      ],
    },
    {
      id: 5,
      title:
        "Project for the construction of a Mercedes Benz Service Center in Ain Sokhna",
      images: [img1proj6, img2proj6],
      owner: "Mercedes Benz Company",
      consultant: "Cairo Consult",
      startDate: "  May 2022",
      endDate: "July 2023",
      location: "  Industrial Area, Ain Sokhna",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Construction of an administrative building with a ground floor area of 360 square meters, service and security rooms with an area of 80 square meters, and general site works covering 20,000 square meters",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
        "General site works (including curbstones, interlock tiling, and infrastructure works)",
      ],
    },
    {
      id: 6,
      title:
        "Project for the construction of a health center in Nagaa Al-Omda, Qena",
      images: [img1proj7, img2proj7],
      owner: "Ministry of Health",
      consultant: "Perfect Engineering Consultancy",
      startDate: "July 2023",
      endDate: " August 2024",
      location: "Nagaa Al-Omda Center, Qena Governorate",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Construction of a healthcare unit with a ground floor area of 650 square meters, two typical floors, and general site works",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
        "General site works (curbstones, interlock tiles, and infrastructure works)",
      ],
    },
    {
      id: 7,
      title: "Project for the construction of Al-Azhar Hotel in Ismailia",
      images: [img1proj8, img2proj8],
      owner: " Al-Azhar Authority",
      consultant: "ECB Office",
      startDate: " June 27, 2021",
      endDate: " January 29, 2025",
      location: "Shebin El-Kom Street – Ismailia Governorate",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Construction of an administrative and residential building with a built-up area of 3,600 square meters, consisting of a basement, ground floor, and four typical floors, along with general site works covering 12,000 square meters",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
        "General site works (curbstones, interlock tiles, and infrastructure works)",
      ],
    },
    {
      id: 8,
      title:
        "Project for the construction of 12 social housing buildings in the Sixth of October",
      images: [img1proj9, img2proj9],
      owner: "Urban Communities Authority",
      consultant: "Urban Communities Authority",
      startDate: " June 20, 2020",
      endDate: " July 20, 2023",
      location: "Sixth of October City",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Construction of 12 residential buildings, each with a built-up area of 360 square meters, consisting of a basement, ground floor, and four typical floors.",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
        "General site works (curbstones, interlock tiles, and infrastructure works)",
      ],
    },
    {
      id: 9,
      title: "Project for the construction of Damanhour University Hospital",
      images: [img1proj10, img2proj10],
      owner:
        " Military Production Company for Projects, Engineering Consultations, and General Supplies",
      consultant: "Damanhour University",
      startDate: "  January 19, 2021",
      endDate: "  July 20, 2024",
      location: "Damanhour University, Damanhour Governorate",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Construction of a hospital annex building with a built-up area of 1,600 square meters, consisting of a basement, ground floor, and three typical floors",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
        "Specialized hospital systems works",
      ],
    },
    // {
    //   id: 1,
    //   title: "AI & Computer Science Building - Benha University",
    //   images: [img1, img2],
    //   owner: "Benha University",
    //   consultant: "Engineering Department, Benha University",
    //   startDate: "",
    //   endDate: "",
    //   // contractValue: "",
    //   projectDescription: "",
    //   fullDescription: `Construction of AI & CS Faculty (6 floors)`,
    //   scopeOfWork: [
    //     "Structural Works",
    //     "Interior & Exterior Finishes",
    //     "Electromechanical Works",
    //     "Landscaping Works",
    //   ],
    // },
  ];
  return (
    <>
      <ProjectsContext.Provider value={{ projects }}>
        {children}
      </ProjectsContext.Provider>
    </>
  );
}
