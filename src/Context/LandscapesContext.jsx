import { createContext } from "react";

import img1 from "/landscape/01.webp";
import img2 from "/landscape/02.webp";
import img3 from "/landscape/03.webp";
import img4 from "/landscape/04.webp";
import img5 from "/landscape/05.webp";

export let LandscapesContext = createContext();
export default function LandscapesContextProvider({ children }) {
  const landscapes = [
    // {
    //   id: 0,
    //   image: img1,
    // },
    {
      id: 1,
      image: img2,
      title: "lorem lorem",
      city: "New Cairo",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 2,
      image: img3,
      title: "lorem lorem",
      city: "New Cairo",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 3,
      image: img4,
      title: "lorem lorem",
      city: "New Cairo",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 4,
      image: img5,
      title: "lorem lorem",
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
