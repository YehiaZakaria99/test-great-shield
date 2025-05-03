import { createContext } from "react";

import img1 from "/landscape/01.webp";
import img2 from "/landscape/02.webp";
import img3 from "/landscape/03.webp";
import img4 from "/landscape/04.webp";
import img5 from "/landscape/05.webp";

export let LandscapeContext = createContext();
export default function LandscapeContextProvider({ children }) {
  const landscapes = [
    // {
    //   id: 0,
    //   image: img1,
    // },
    {
      id: 1,
      image: img2,
    },
    {
      id: 2,
      image: img3,
    },
    {
      id: 3,
      image: img4,
    },
    {
      id: 4,
      image: img5,
    },
  ];
  return (
    <>
      <LandscapeContext.Provider value={{ landscapes }}>
        {children}
      </LandscapeContext.Provider>
    </>
  );
}
