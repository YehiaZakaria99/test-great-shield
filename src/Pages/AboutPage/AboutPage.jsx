import { useEffect, useState } from "react";
import AboutPageCard from "../../Components/AboutPageCard/AboutPageCard.jsx";
import Loading from "../../Components/Loading/Loading.jsx";
// import MoreOurMessage from "../../Sections/AboutPageViewMore/MoreOurMessage.jsx";
// import AboutOverview from "../../Sections/AboutOverview.jsx";
import { Outlet } from "react-router-dom";

// imgs

import ourMessage from "/aboutSec/Our-Message.webp";
import Aos from "aos";

export default function AboutPage() {
  const [isLoading, setIsLodaing] = useState(false);

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
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 800 });

    return () => {
      Aos.refreshHard();
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="pt-40 pb-16 bg-[#111] text-white overflow-x-hidden">
          <div className="container mx-auto px-4">
            <Outlet />
          </div>
        </section>
      )}
    </>
  );
}

/* 










*/
