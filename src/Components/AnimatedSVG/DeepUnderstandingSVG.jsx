import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DeepUnderstandingIcon() {
  const svgRef = useRef();

  useEffect(() => {
    const rects = svgRef.current.querySelectorAll("rect");
    const circle = svgRef.current.querySelector("circle");

    // جهّز المستطيلات والدائرة بنفس الطريقة
    gsap.set(rects, {
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      x: -50,
      opacity: 0,
    });

    gsap.set(circle, {
      scale: 0,
      opacity: 0,
      transformOrigin: "center",
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

    // تتابع ظهور المستطيلات بالتدريج
    rects.forEach((rect, index) => {
      tl.to(rect, {
        strokeDashoffset: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, `+=${0.2 * index}`); // إضافة تأخير تدريجي بين كل مستطيل وآخر
    });

    // إضافة ظهور الدائرة بعد كل المستطيلات
    tl.to(circle, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(2.5)",
    }, "+=0.4"); // التأخير بعد المستطيلات

  }, []);

  return (
    <svg
      ref={svgRef}
      className="deepunderstandingIconSVG mx-auto"
      width="83"
      height="83"
      viewBox="0 0 83 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="1.03027" width="81.0054" height="81.006" stroke="#8ED8F8" />
      <rect x="9.57642" y="19.1836" width="62.8525" height="62.8525" stroke="#8ED8F8" strokeDasharray="2 2" />
      <rect x="17.9641" y="35.959" width="46.0771" height="46.0771" stroke="#8ED8F8" strokeDasharray="2 2" />
      <rect x="25.8103" y="51.6514" width="30.3848" height="30.3848" stroke="#F58220" strokeDasharray="2 2" />
      <circle cx="41.6975" cy="76.2283" r="4.68237" fill="#F58220" />
    </svg>
  );
}
