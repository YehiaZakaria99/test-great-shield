import React, { useContext, useEffect, useState } from "react";
import { LandscapesContext } from "../Context/LandscapesContext";
import Aos from "aos";
import LandscapesPageCard from "./../Components/LandscapesPageCard/LandscapesPageCard";
import Loading from "../Components/Loading/Loading";

export default function LandscapesPage() {
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
  const { landscapes } = useContext(LandscapesContext);
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: false });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="pt-40 pb-16 bg-[#111] text-white overflow-x-hidden">
          <div className="container mx-auto px-4">
            {/* Overview Header */}
            <section className="mb-24 px-4 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold text-bg mb-4"
                data-aos="fade-right"
              >
                Landscapes
              </h2>
              <p
                className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
                data-aos="fade-left"
              >
                At Great Shield, we design and build stunning landscapes that
                elevate residential, commercial, and public spaces. With a focus
                on creativity, durability, and timely delivery, we transform
                outdoor areas into inspiring environments of lasting beauty.
              </p>
            </section>
            <section className="space-y-28 overflow-hidden">
              {landscapes.map((landscape, index) => (
                <LandscapesPageCard
                  key={index}
                  landscape={landscape}
                  index={index}
                />
              ))}
            </section>
          </div>
        </section>
      )}
    </>
  );
}
