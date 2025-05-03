import { createContext, useEffect, useState } from "react";

// Faculty-of-Computers-and-Artificial-Intelligence-Benha-University
import img1proj21 from "/projectsPage/proj21/01.webp";
import img2proj21 from "/projectsPage/proj21/02.webp";
// Faculty of Agricultural and Biosystems Engineering – Benha University.
import img1proj22 from "/projectsPage/proj22/01.webp";
// Hyde Park
import img1proj31 from "/projectsPage/proj31/01.webp";

// Buildings Project for Al-Zohour District within the Military Entity
import img1proj4 from "/projectsPage/proj04/01.webp";
import img2proj4 from "/projectsPage/proj04/02.webp";
// Project for the construction of a health center in Haggar El-Dahsa, Qena
import img1proj5 from "/projectsPage/proj05/01.webp";

// Project for the construction of a Mercedes Benz Service Center in Ain Sokhna
import img1proj6 from "/projectsPage/proj06/01.webp";
// Project for the construction of a health center in Nagaa Al-Omda, Qena
import img1proj7 from "/projectsPage/proj07/01.webp";
// Project for the construction of Al-Azhar Hotel in Ismailia
import img1proj8 from "/projectsPage/proj08/01.webp";
// Project for the construction of 12 social housing buildings in the Sixth of October
import img1proj9 from "/projectsPage/proj09/01.webp";
import img2proj9 from "/projectsPage/proj09/02.webp";
// Project for the construction of Damanhour University Hospital
import img1proj10 from "/projectsPage/proj10/01.webp";
import img2proj10 from "/projectsPage/proj10/02.webp";

// HEK Project for the construction of 10 buildings in the Saudi Company
import img1proj11 from "/projectsPage/proj11/01.webp";
import img2proj11 from "/projectsPage/proj11/02.webp";
// Project for the finishing of 8 buildings in the Riyadh Project
import img1proj12 from "/projectsPage/proj12/01.webp";
import img2proj12 from "/projectsPage/proj12/02.webp";
// Project for the construction of a primary education school in Badr City
import img1proj13 from "/projectsPage/proj13/01.webp";
import img2proj13 from "/projectsPage/proj13/02.webp";
// Project for the construction of networks for Amwaj Tourist Village
import img1proj14 from "/projectsPage/proj14/01.webp";
import img2proj14 from "/projectsPage/proj14/02.webp";
// Project for the construction of the Human Resources Building in Al-Buhouth Al-Azhariyah City
import img1proj15 from "/projectsPage/proj15/01.webp";

// Project for the construction of Delta Logistics Center in Ain Sokhna
import img1proj16 from "/projectsPage/proj16/01.webp";
// Project for the construction of the Freedom Institutes Complex in Port Said
import img1proj17 from "/projectsPage/proj17/01.webp";
// Construction of the Egyptian-Japanese School
import img1proj18 from "/projectsPage/proj18/01.webp";
import img2proj18 from "/projectsPage/proj18/02.webp";
// ProjectVisual Identity Development Works on the Ring Road in Cairo Governorate
import img1proj19 from "/projectsPage/proj19/01.webp";
import img2proj19 from "/projectsPage/proj19/02.webp";
// HAP Town Park View Parcel
import img1proj20 from "/projectsPage/proj20/01.webp";
import img2proj20 from "/projectsPage/proj20/02.webp";

// Construction Project of a Post Office Building in Qalyubia
import img1proj1 from "/projectsPage/proj01/01.webp";
// 6th of October Dry Port
import img1proj2 from "/projectsPage/proj02/01.webp";
import img2proj2 from "/projectsPage/proj02/02.webp";
// Al-Nouh Al-Azhari Institute Project
import img1proj3 from "/projectsPage/proj03/01.webp";
import img2proj3 from "/projectsPage/proj03/02.webp";

// Al-Zahraa Towers (Major Projects Administration)
import img1proj23 from "/projectsPage/proj23/01.webp";
// Bank Misr – Al-Hussein Branch
import img1proj24 from "/projectsPage/proj24/01.webp";
// Concorde Hotel.
import img1proj25 from "/projectsPage/proj25/01.webp";

// Development of the Road Leading to the Golf Club, Obstacles List
import img1proj26 from "/projectsPage/proj26/01.webp";
// Emaar External Road Development Project – Uptown Cairo
import img1proj27 from "/projectsPage/proj27/01.webp";
// Village Development of Marasi
import img1proj28 from "/projectsPage/proj28/01.webp";
// Jardinia Park
import img1proj29 from "/projectsPage/proj29/01.webp";
// Marriott Taba Heights Project
import img1proj30 from "/projectsPage/proj30/01.webp";

// Saudi Egyptian Developers Project (Jade Project) – Phase 1
import img1proj32 from "/projectsPage/proj32/01.webp";
// Swan Lake North Coast by Hassan Allam
// import img1proj33 from "/projectsPage/proj33/01.webp";

export let ProjectsContext = createContext();

export default function ProjectsContextProvider({ children }) {
  const projects = [
    // ################## proj 21
    {
      id: 20,
      title:
        "Faculty of Computers and Artificial Intelligence – Benha University. ",
      images: [img1proj21, img2proj21],
      owner: " Benha University ",
      consultant: "Engineering Department of Benha University",
      startDate: " ",
      endDate: "",
      location: "Benha, Qalyubia Governorate",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Construction of the Faculty of Computers building consisting of a basement, ground floor, and 6 typical upper floors.",
      scopeOfWork: [
        "Structural construction works",
        " Internal and external finishing works",
        " Electromechanical works",
        " Site development works",
      ],
    },
    // ################## proj 22
    {
      id: 21,
      title:
        "Faculty of Agricultural and Biosystems Engineering – Benha University. ",
      images: [img1proj22],
      owner: " Benha University ",
      consultant: "Engineering Department of Benha University",
      startDate: " ",
      endDate: "",
      location: "Moshtohor – Toukh, Egypt",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Faculty of Agricultural Engineering consisting of a ground floor and five repeated upper floors.",
      scopeOfWork: [
        "Structural works",
        " Interior and exterior finishing works",
        " Electromechanical works",
        " Site development works",
      ],
    },
    // ################## proj 3
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
    // ################## proj 1
    {
      id: 0,
      title: "Post Office Building in Qalyubia",
      images: [img1proj1],
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
    // ################## proj 2
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
    // ################## proj 31
    {
      id: 30,
      title: "Hyde Park",
      images: [img1proj31],
      owner: "",
      consultant: "",
      startDate: "",
      endDate: "",
      location: "New Cairo",
      // contractValue: "",
      // projectDescription: "",
      fullDescription: "",
      scopeOfWork: [
        "Hardscaping Works: Construction of pathways, retaining walls, ponds, waterfalls, and outdoor furniture.",
        " Land Preparation: Leveling and preparing the land for planting.",
        "Softscape Works: Plant design, selection, and arrangement of trees, shrubs, and flowers.",
        "Irrigation Systems: Design and implementation of effective irrigation systems.",
        "Electrical Work: Design and implementation of lighting systems to enhance the space and provide night-time illumination.",
        "Water Features: Design and installation of water features such as ponds, waterfalls, and fountains.",
      ],
    },
    // ################## proj 4
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
    // ################## proj 5
    {
      id: 4,
      title: "Health center in Haggar El-Dahsa, Qena",
      images: [img1proj5],
      owner: " Ministry of Health",
      consultant: "Perfect Engineering Consultancy",
      startDate: "May 2023",
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
    // ################## proj 6
    {
      id: 5,
      title: "Mercedes Benz Service Center in Ain Sokhna",
      images: [img1proj6],
      owner: "Mercedes Benz Company",
      consultant: "Cairo Consult",
      startDate: "May 2022",
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
    // ################## proj 7
    {
      id: 6,
      title: "Health center in Nagaa Al-Omda, Qena",
      images: [img1proj7],
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
    // ################## proj 8
    {
      id: 7,
      title: "Al-Azhar Hotel in Ismailia",
      images: [img1proj8],
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
    // ################## proj 9
    {
      id: 8,
      title: "12 social housing buildings in the Sixth of October",
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
    // ################## proj 10
    {
      id: 9,
      title: "Damanhour University",
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
    // ################## proj 11
    {
      id: 10,
      title: "10 buildings in the Saudi Company",
      images: [img1proj11, img2proj11],
      owner: " Saudi Egyptian Construction Company",
      consultant: " EHAF Engineering Consultancy",
      startDate: "April 2, 2019",
      endDate: " June 2, 2020",
      location: " Riyadh Project, First Phase",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Construction of 10 residential buildings, each with a built-up area of 1,100 square meters",
      scopeOfWork: [
        "Structural works (Concrete skeleton) with a built-up area of 1,100 square meters, consisting of a basement, ground floor, and four typical floors",
      ],
    },
    // ################## proj 12
    {
      id: 11,
      title: "The finishing of 8 buildings in the Riyadh Project",
      images: [img1proj12, img2proj12],
      owner: "Saudi Egyptian Construction Company",
      consultant: "EHAF Engineering Consultancy",
      startDate: "April 29, 2018",
      endDate: "June 21, 2022",
      location: "Riyadh Project, First Phase",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "finishing works for 8 residential buildings, each with a built-up area of 800 square meters, consisting of a basement, ground floor, and four typical floors.",
      scopeOfWork: [
        "interior and exterior finishing works for a built-up area of 800 square meters",
        "General site works (curbstones, interlock tiles, and infrastructure works",
      ],
    },
    // ################## proj 13
    {
      id: 12,
      title: "Primary education school in Badr City",
      images: [img1proj13, img2proj13],
      owner: "Educational Buildings Authority",
      consultant: "Educational Buildings Authority",
      startDate: "October 2019",
      endDate: "November 2020",
      location: " Badr City",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "construction of a school with a built-up area of 700 square meters, consisting of a ground floor and three typical floors",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
      ],
    },
    // ################## proj 14
    {
      id: 13,
      title: "Networks for Amwaj Tourist Village",
      images: [img1proj14, img2proj14],
      owner: "Al Ahly Sabbour for Real Estate Development",
      consultant: "ECA Engineering Consultancy",
      startDate: "August 22, 2019",
      endDate: "August 22, 2021",
      location: " Amwaj Village, Kilometer 145, North Coast",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Construction of networks for a tourist village covering an area of 12 acres",
      scopeOfWork: [
        "Drainage and supply network works",
        "Electrical works",
        "Stormwater drainage works",
      ],
    },
    // ################## proj 15
    {
      id: 14,
      title: "The Human Resources Building in Al-Buhouth Al-Azhariyah City",
      images: [img1proj15],
      owner: "  Al-Azhar Authority",
      consultant: "ECB Office",
      startDate: " June 22, 2022",
      endDate: "June 22, 2024",
      location: "Al-Buhouth Al-Azhariyah City",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Administrative building with a total area of 970 square meters, consisting of 2 basements, ground floor, and 4 repeated floors",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
      ],
    },
    // ################## proj 16
    {
      id: 15,
      title: "Delta Logistics Center in Ain Sokhna",
      images: [img1proj16],
      owner: "Delta Logistics Company",
      consultant: "Cairo Consult",
      startDate: " May 30, 2023",
      endDate: " January 30, 2024",
      location: "Sector (5) - Economic Zone - Ain Sokhna - Suez",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Three administrative buildings with a total area of 650 square meters each, along with a general site area of 20,000 square meters.",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
        " site works (curbstones, interlock tiles, and infrastructure works)",
      ],
    },
    // ################## proj 17
    {
      id: 16,
      title: "The Freedom Institutes Complex in Port Said",
      images: [img1proj17],
      owner: "Al-Azhar Authority",
      consultant: "New Asbelt Office",
      startDate: "November 27, 2023",
      endDate: "January 1, 2025",
      location: "Freedom Land – Al-Azhar Area, Port Said",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        " (Phase One), including a Primary School, Preparatory School, Secondary School for Girls, and a Kindergarten, with a built-up area of 2,200 square meters, consisting of a ground floor and three repeated floors.",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
        "General site works (curbstones, interlock tiles, and infrastructure works",
      ],
    },
    // ################## proj 18
    {
      id: 17,
      title: "The Egyptian Japanese School",
      images: [img1proj18, img2proj18],
      owner: "General Authority for Educational Buildings",
      consultant:
        "General Authority for Educational Buildings - Central Design Administration",
      startDate: "August 27, 2024",
      endDate: "November 27, 2025",
      location: "New Cairo, Cairo Governorate",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Construction of the Egyptian-Japanese School (3), consisting of a ground floor and three typical repeated floors.",
      scopeOfWork: [
        "Structural works",
        "Interior and exterior finishing works",
        "Electromechanical works",
        "General site works (curbstones, interlock tiles, and infrastructure works)",
      ],
    },
    // ################## proj 19
    {
      id: 18,
      title:
        "The Visual Identity Development Works on the Ring Road in Cairo Governorate.",
      images: [img1proj19, img2proj19],
      owner: "Cairo Governorate (Sector No. 10)",
      // Contractor: "Egyptian Military Production Company for Projects",
      consultant: "The French Group for Consulting Services (Assaf)",
      startDate: " July 15, 2024",
      endDate: "October 15, 2024",
      location: "Ring Road",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Development of the visual identity for 300 residential buildings.",
      scopeOfWork: [
        "Exterior finishes of the facades for 300 residential buildings.",
      ],
    },
    // ################## proj 20
    {
      id: 19,
      title: "HAP Town Park View Parcel ",
      images: [img1proj20, img2proj20],
      owner: "Hassan Allam Properties ",
      consultant: "Sabtus",
      startDate: " January 6, 2023",
      endDate: "December 30, 2024",
      location: "First Settlement, New Cairo",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "The project involves landscape and hardscape works over an area of 4 feddans.",
      scopeOfWork: [
        "Curbstone and Interlock Works",
        "Landscaping and Green Areas Works",
        "Network and Infrastructure Works",
      ],
    },

    // ################## proj 23
    {
      id: 22,
      title: "Al-Zahraa Towers (Major Projects Administration) ",
      images: [img1proj23],
      owner: " Armed Forces Housing Fund (Investment Division) ",
      consultant: "Major Projects Administration",
      startDate: "",
      endDate: "",
      location: "",
      // contractValue: "",
      // projectDescription: "",
      fullDescription:
        "Construction of residential towers consisting of 2 basement levels, 2 commercial mall floors, 1 administrative floor, 7 typical floors, and rooftop service rooms.",
      scopeOfWork: [
        "Structural works",
        " Interior and exterior finishing works",
        " Electromechanical works",
        " Site development works",
      ],
    },
    // ################## proj 24
    {
      id: 23,
      title: "Bank Misr – Al-Hussein Branch ",
      images: [img1proj24],
      owner: "  Banque Misr ",
      consultant: "Banque Misr Engineering Department",
      startDate: "",
      endDate: "",
      location: "Al-Hussein",
      // contractValue: "",
      // projectDescription: "",
      fullDescription: "",
      scopeOfWork: [
        "Structural works",
        " Interior and exterior finishing works",
        " Electromechanical works",
      ],
    },
    // ################## proj 25
    {
      id: 24,
      title: "Concorde Hotel. ",
      images: [img1proj25],
      owner: "",
      consultant: "",
      startDate: "",
      endDate: "",
      location: "Sharm El Sheikh",
      // contractValue: "",
      // projectDescription: "",
      fullDescription: "",
      scopeOfWork: [
        "Hardscape Works: Construction of walkways, retaining walls, ponds, waterfalls, and outdoor furniture. Preparation and leveling of the land for planting.",
        " Softscape Works: Plant design, selection, and arrangement of plants, trees, shrubs, and flowers.",
        " Irrigation Systems: Design and implementation of efficient irrigation systems.",
        " Electrical Works: Design and installation of lighting systems for space enhancement and providing nighttime illumination.",
        "Water Features: Design and execution of water features such as ponds, waterfalls, and fountains.",
      ],
    },
    // ################## proj 26
    {
      id: 25,
      title:
        "Development of the Road Leading to the Golf Club, Obstacles List.",
      images: [img1proj26],
      owner: "",
      consultant: "",
      startDate: "",
      endDate: "",
      location: "Cairo",
      // contractValue: "",
      // projectDescription: "",
      fullDescription: "",
      scopeOfWork: [
        "Hardscaping: Construction of pathways, retaining walls, ponds, waterfalls, and outdoor furniture.",
        " Site Preparation: Levelling and preparing the land for planting.",
        "Softscaping: Plant design, selection, and arrangement of trees, shrubs, and flowers.",
        "Irrigation Systems: Design and implementation of effective irrigation systems.",
        "Electrical Work: Design and implementation of lighting systems to enhance the space and provide night-time illumination.",
        "Water Elements: Design and construction of water features such as ponds, waterfalls, and fountains.",
      ],
    },
    // ################## proj 27
    {
      id: 26,
      title: "Emaar External Road Development Project – Uptown Cairo",
      images: [img1proj27],
      owner: "",
      consultant: "",
      startDate: "",
      endDate: "",
      location: "Cairo",
      // contractValue: "",
      // projectDescription: "",
      fullDescription: "",
      scopeOfWork: [
        "Hardscape works including the construction of walkways, retaining walls, ponds, waterfalls, and outdoor furniture. Land preparation and leveling for landscaping.",
        "Softscape works involving landscape design, plant selection and arrangement of trees, shrubs, and flowers.",
        "Design and implementation of efficient irrigation systems and electrical works, including lighting systems to enhance aesthetics and provide nighttime illumination.",
        "Design and execution of water features such as ponds, waterfalls, and fountains.",
      ],
    },
    // ################## proj 28
    {
      id: 27,
      title: "Village Development of Marasi",
      images: [img1proj28],
      owner: "",
      consultant: "",
      startDate: "",
      endDate: "",
      location: "Alexandria",
      // contractValue: "",
      // projectDescription: "",
      fullDescription: "",
      scopeOfWork: [
        "Hardscaping: Construction of pathways, retaining walls, ponds, waterfalls, and outdoor furniture.",
        " Land Preparation: Leveling and preparing the land for planting.",
        "Softscaping: Plant design, selection, and arrangement of trees, shrubs, and flowers.",
        "Irrigation Systems: Design and implementation of effective irrigation systems.",
        "Electrical Work: Design and implementation of lighting systems to enhance the space and provide night-time illumination.",
        "Water Features: Design and installation of water features such as ponds, waterfalls, and fountains.",
      ],
    },
    // ################## proj 29
    {
      id: 28,
      title: "Jardinia Park",
      images: [img1proj29],
      owner: "",
      consultant: "",
      startDate: " ",
      endDate: "",
      location: "6th of October",
      // contractValue: "",
      // projectDescription: "",
      fullDescription: "",
      scopeOfWork: [
        "Hardscaping: Construction of pathways, retaining walls, ponds, waterfalls, and outdoor furniture.",
        " Land Preparation: Leveling and preparing the land for planting.",
        "Softscaping: Plant design, selection, and arrangement of trees, shrubs, and flowers.",
        "Irrigation Systems: Design and implementation of effective irrigation systems.",
        "Electrical Work: Design and implementation of lighting systems to enhance the space and provide night-time illumination.",
        "Water Features: Design and installation of water features such as ponds, waterfalls, and fountains.",
      ],
    },
    // ################## proj 30
    {
      id: 29,
      title: "Marriott Taba Heights Project",
      images: [img1proj30],
      owner: "",
      consultant: "",
      startDate: "",
      endDate: "",
      location: "Taba",
      // contractValue: "",
      // projectDescription: "",
      fullDescription: "",
      scopeOfWork: [
        "Hardscape works including the construction of walkways, retaining walls, ponds, waterfalls, and outdoor furniture.",
        "Preparation and leveling of the land for cultivation.",
        "Softscape works covering landscape design, plant selection, and arrangement of trees, shrubs, and flowers.",
        "Design and installation of efficient irrigation systems and electrical works, including lighting systems to beautify the space and provide nighttime illumination.",
        "Design and execution of water features such as ponds, waterfalls, and fountains.",
      ],
    },
    // ################## proj 32
    {
      id: 31,
      title: "Saudi Egyptian Developers Project (Jade Project) – Phase 1",
      images: [img1proj32],
      owner: "",
      consultant: "",
      startDate: " ",
      endDate: "",
      location: "New Cairo",
      // contractValue: "",
      // projectDescription: "",
      fullDescription: "",
      scopeOfWork: [
        "Hardscape works including the construction of walkways, retaining walls, ponds, waterfalls, and outdoor furniture.",
        "Preparation and leveling of the land for cultivation.",
        "Softscape works involving landscape design, plant selection, and arrangement of trees, shrubs, and flowers.",
        "Design and implementation of efficient irrigation systems and electrical works, including lighting systems to beautify the area and provide nighttime illumination.",
        "Design and execution of water features such as ponds, waterfalls, and fountains.",
      ],
    },

    // ################## proj 33
    // {
    //   id: 32,
    //   title: " Swan Lake North Coast by Hassan Allam",
    //   images: [img1proj31, img1proj31],
    //   owner: "",
    //   consultant: "",
    //   startDate: "",
    //   endDate: "",
    //   location: "New Cairo",
    //   // contractValue: "",
    //   // projectDescription: "",
    //   fullDescription: "",
    //   scopeOfWork: [
    //     "Hardscaping: Construction of pathways, retaining walls, ponds, waterfalls, and outdoor furniture.",
    //     " Land Preparation: Leveling and preparing the land for planting.",
    //     "Softscape Works: Plant design, selection, and arrangement of trees, shrubs, and flowers.",
    //     "Irrigation Systems: Design and implementation of effective irrigation systems.",
    //     "Electrical Work: Design and implementation of lighting systems to enhance the space and provide night-time illumination.",
    //     "Water Features: Design and installation of water features such as ponds, waterfalls, and fountains.",
    //   ],
    // },
    // #################
  ];
  return (
    <>
      <ProjectsContext.Provider value={{ projects }}>
        {children}
      </ProjectsContext.Provider>
    </>
  );
}
