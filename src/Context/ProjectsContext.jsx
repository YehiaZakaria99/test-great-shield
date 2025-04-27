import { createContext, useEffect, useState } from "react";
// Construction Project of a Post Office Building in Qalyubia
import img1proj1 from "/projectsPage/proj01/01.webp";
import img2proj1 from "/projectsPage/proj01/02.webp";
// 6th of October Dry Port
import img1proj2 from "/projectsPage/proj02/01.webp";
import img2proj2 from "/projectsPage/proj02/02.webp";
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
      fullDescription: `Administrative facility covering a total area of 960 square meters`,
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
      location: 'Dry port - Oasis road - 6th of October',
      // contractValue: "",
      // projectDescription: "",
      fullDescription: `Administrative facility covering a total area of 960 square meters`,
      scopeOfWork: [
        "Construction works",
        "Interior and exterior finishing works",
        "Electromechanical works",
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
