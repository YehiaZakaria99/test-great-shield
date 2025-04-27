import { useEffect, useState } from "react";
import AboutPageCard from "../Components/AboutPageCard/AboutPageCard.jsx";
import Loading from "../Components/Loading/Loading.jsx";
import MoreOurMessage from "./../Sections/AboutPageViewMore/MoreOurMessage.jsx";
import AboutOverview from "./../Sections/AboutOverview.jsx";

// imgs
import ourVision from "/aboutSec/Our-Vision.webp";
import ourMessage from "/aboutSec/Our-Message.webp";
import ourMissoin from "/aboutSec/Our-Mission.webp";
import ourStandards from "/aboutSec/Our-Standards.webp";
import Aos from "aos";

export default function AboutPage() {
  const [isLoading, setIsLodaing] = useState(true);

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
            <AboutOverview />

            <AboutPageCard
              title="Our Vision"
              text="To become the leading construction company recognized for quality and innovation."
              id="vision-details"
              img={ourVision}
              moreContent={
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our vision guides every decision we make — focusing on
                  quality, innovation, and sustainability in all our projects.
                </p>
              }
            />

            <AboutPageCard
              title="Our Mission"
              text="Delivering exceptional construction services with a commitment to integrity and excellence."
              id="mission-details"
              img={ourMissoin}
              moreContent={
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our mission is not just about building structures, but about
                  building lasting relationships with our clients.
                </p>
              }
            />

            <AboutPageCard
              title="Our Standards"
              text="We maintain the highest standards in safety, quality, and sustainability."
              id="standards-details"
              img={ourStandards}
              moreContent={
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
                  <li>Strict safety protocols across all job sites.</li>
                  <li>Use of eco-friendly materials and processes.</li>
                  <li>Continuous quality assessment and improvement.</li>
                </ul>
              }
            />

            <AboutPageCard
              title="Our Message"
              text="Building the future with trust, transparency, and teamwork."
              id="message-details"
              img={ourMessage}
              moreContent={<MoreOurMessage />}
            />
          </div>
        </section>
      )}
    </>
  );
}

/* 










*/
