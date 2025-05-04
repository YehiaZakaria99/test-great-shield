import { createContext } from "react";
// *********************************************************************************
import mainImg1 from "/landscape/01MarriotTabaHightes/01.webp";
// ##############
import main1allImgs1 from "/landscape/01MarriotTabaHightes/allImages/01.webp";
import main1allImgs2 from "/landscape/01MarriotTabaHightes/allImages/02.webp";
import main1allImgs3 from "/landscape/01MarriotTabaHightes/allImages/03.webp";
import main1allImgs4 from "/landscape/01MarriotTabaHightes/allImages/04.webp";
// ##############
import mainImg2 from "/landscape/02MovenPike/01.webp";
import main2allImgs1 from "/landscape/02MovenPike/allImages/01.webp";
import main2allImgs2 from "/landscape/02MovenPike/allImages/02.webp";
import main2allImgs3 from "/landscape/02MovenPike/allImages/03.webp";
import main2allImgs4 from "/landscape/02MovenPike/allImages/04.webp";
import mainImg3 from "/landscape/03ShertonMiamar/01.webp";
// ##############
import main3allImgs1 from "/landscape/03ShertonMiamar/allImages/01.webp";
import main3allImgs2 from "/landscape/03ShertonMiamar/allImages/02.webp";
import main3allImgs3 from "/landscape/03ShertonMiamar/allImages/03.webp";
import main3allImgs4 from "/landscape/03ShertonMiamar/allImages/04.webp";
import mainImg4 from "/landscape/04HydeParkMainGate/01.webp";
// ##############
import main4allImgs1 from "/landscape/04HydeParkMainGate/allImages/01.webp";
import main4allImgs2 from "/landscape/04HydeParkMainGate/allImages/02.webp";
import main4allImgs3 from "/landscape/04HydeParkMainGate/allImages/03.webp";
import main4allImgs4 from "/landscape/04HydeParkMainGate/allImages/04.webp";
import mainImg5 from "/landscape/05HydeParkCluster7/01.webp";
// ##############
import main5allImgs1 from "/landscape/05HydeParkCluster7/allImages/01.webp";
import main5allImgs2 from "/landscape/05HydeParkCluster7/allImages/02.webp";
import main5allImgs3 from "/landscape/05HydeParkCluster7/allImages/03.webp";
import main5allImgs4 from "/landscape/05HydeParkCluster7/allImages/04.webp";
// *********************************************************************************
export let LandscapesContext = createContext();
export default function LandscapesContextProvider({ children }) {
  const landscapes = [
    {
      id: 0,
      mainImage: mainImg1,
      allImages: [mainImg1,main1allImgs1, main1allImgs2, main1allImgs3, main1allImgs4],
      title: "Marriot Taba Hightes",
      city: "Taba",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 1,
      mainImage: mainImg2,
      allImages: [mainImg2,main2allImgs1, main2allImgs2, main2allImgs3, main2allImgs4],
      title: "Moven Pike",
      city: "Elgouna",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 2,
      mainImage: mainImg3,
      allImages: [mainImg3, main3allImgs1, main3allImgs2, main3allImgs3, main3allImgs4],
      title: "Sherton Miamar",
      city: "Elgouna",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 3,
      mainImage: mainImg4,
      allImages: [mainImg4,main4allImgs1, main4allImgs2, main4allImgs3, main4allImgs4],
      title: "Hyde Park Main Gate",
      city: "New Cairo",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 4,
      mainImage: mainImg5,
      allImages: [mainImg5, main5allImgs1, main5allImgs2, main5allImgs3, main5allImgs4],
      title: "Hyde Park Cluster",
      city: "New Cairo",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
  ];
  return (
    <>
      <LandscapesContext.Provider value={{ landscapes }}>
        {children}
      </LandscapesContext.Provider>
    </>
  );
}
