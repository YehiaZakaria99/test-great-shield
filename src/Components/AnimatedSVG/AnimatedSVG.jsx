import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSVG = () => {
  useEffect(() => {
    const svg = document.querySelector(".animatedIcon");
    const paths = svg.querySelectorAll("path");
    const circles = svg.querySelectorAll("circle");

    // جهّز كل المسارات (الخطوط)
    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    // Timeline لظهور كل عنصر بالتتابع مع scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
        // markers: true
      },
    });

    // ظهور الخط الأفقي الأول
    tl.to(paths[2], {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: "power2.out",
    });

    // ظهور الخطوط المتبقية بالتتابع
    tl.to(paths[0], {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: "power2.out",
    }, "+=0.4");

    tl.to(paths[1], {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: "power2.out",
    }, "+=0.4");

    tl.to(paths[3], {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: "power2.out",
    }, "+=0.4");

    // ظهور الدائرة المليانة بشكل سلس
    tl.fromTo(circles[0],
      { scale: 0, opacity: 0, transformOrigin: "center" },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(2.5)",
      }, "+=0.6"
    );

    // ظهور الدائرة المنقطة بشكل سلس
    tl.fromTo(circles[1],
      { scale: 0, opacity: 0, transformOrigin: "center" },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(2.5)",
      }, "+=0.3"
    );

  }, []);

  return (
    <svg
      width="82"
      height="83"
      viewBox="0 0 82 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animatedIcon mx-auto"
    >
      <path d="M7.26086 75.2689L74.7388 7.79004" stroke="#8ED8F8" strokeWidth="2.63571" strokeLinecap="round" />
      <path d="M74.7388 75.2689L7.26086 7.79004" stroke="#8ED8F8" strokeWidth="2.63571" strokeLinecap="round" />
      <path d="M1.45851 41.5304L80.5416 41.531" stroke="#8ED8F8" strokeWidth="2.63571" strokeLinecap="round" />
      <path d="M41.0003 1.9894L40.9998 81.0725" stroke="#8ED8F8" strokeWidth="2.63571" strokeLinecap="round" />
      <circle cx="41.0001" cy="41.5303" r="14.4249" fill="#F58220" />
      <circle cx="41.0001" cy="41.5299" r="30.4381" stroke="#F58220" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  );
};

export default AnimatedSVG;
