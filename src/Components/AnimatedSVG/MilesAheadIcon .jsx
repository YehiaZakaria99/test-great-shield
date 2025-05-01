import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MilesAheadIcon() {
  const svgRef = useRef();

  useEffect(() => {
    const rects = svgRef.current.querySelectorAll("rect");

    gsap.set(rects, {
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      x: -50,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1, // الربط بالscroll
        // markers: true, // لفحص النقاط لو حبيت
      },
    });

    rects.forEach((rect) => {
      tl.to(rect, {
        strokeDashoffset: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, "+=0.2");
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      className="animatedIcon mx-auto"
      width="142"
      height="83"
      viewBox="0 0 142 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="56.2861"
        width="25.25"
        height="25.25"
        stroke="#8ED8F8"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <rect
        x="12.25"
        y="42.6611"
        width="38.8749"
        height="38.8749"
        stroke="#8ED8F8"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <rect
        x="37.125"
        y="28.0957"
        width="53.4402"
        height="53.4402"
        stroke="#8ED8F8"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <rect
        x="61.8145"
        y="3.02441"
        width="77.0054"
        height="77.006"
        stroke="#F58220"
        strokeWidth="5"
      />
    </svg>
  );
}
