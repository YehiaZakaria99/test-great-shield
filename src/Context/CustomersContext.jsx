import { createContext } from "react";

// imgs
import img1 from "/CustomersSec/01.webp";
import img2 from "/CustomersSec/02.webp";
import img3 from "/CustomersSec/03.webp";
import img4 from "/CustomersSec/04.webp";
import img5 from "/CustomersSec/05.webp";
import img6 from "/CustomersSec/06.webp";
import img7 from "/CustomersSec/07.webp";
import img8 from "/CustomersSec/08.webp";
import img9 from "/CustomersSec/09.webp";
import img10 from "/CustomersSec/10.webp";
import img11 from "/CustomersSec/11.webp";
import img12 from "/CustomersSec/12.webp";
import img13 from "/CustomersSec/13.webp";
import img14 from "/CustomersSec/14.webp";
import img15 from "/CustomersSec/15.webp";
import img16 from "/CustomersSec/16.webp";
import img17 from "/CustomersSec/17.webp";
import img18 from "/CustomersSec/18.webp";
import img19 from "/CustomersSec/19.webp";
import img21 from "/CustomersSec/21.webp";
import img22 from "/CustomersSec/22.webp";
import img23 from "/CustomersSec/23.webp";
import img24 from "/CustomersSec/24.webp";
import img25 from "/CustomersSec/25.webp";

export let CustomersContext = createContext();

export default function CustomersContextProvider({ children }) {
  const logos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img21,
    img22,
    img23,
    img24,
    img25,
  ];

  return (
    <>
      <CustomersContext.Provider value={{ logos }}>
        {children}
      </CustomersContext.Provider>
    </>
  );
}
