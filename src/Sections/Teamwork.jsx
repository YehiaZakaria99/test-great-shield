// src/components/TeamworkSection.jsx
import React from "react";
import { FaTools, FaUserGraduate, FaRocket } from "react-icons/fa";
import AnimatedSVG from "../Components/AnimatedSVG/AnimatedSVG";
import MilesAheadIcon from "../Components/AnimatedSVG/MilesAheadIcon ";
import DeepUnderstandingSVG from "../Components/AnimatedSVG/DeepUnderstandingSVG";

const Teamwork = () => {
  const cards = [
    {
      icon: <AnimatedSVG/>,
      title: "Team of Specialists",
      text: "Great Shield relies on a specialized and diverse team comprising engineers and technicians in structural engineering, project management, equipment operation and maintenance, and manufacturing. This team forms the operational backbone of all the company’s construction and contracting projects.",
    },
    {
      icon: <MilesAheadIcon />,
      title: "Continuous Development",
      text: "Our reputation has been built on years of successful experience in delivering major and distinguished projects. We continuously enhance our workforce by recruiting new talent, leveraging experienced professionals, and conducting specialized training programs.",
    },
    {
      icon: <DeepUnderstandingSVG />,
      title: "Future Ambitions",
      text: "Great Shield aspires to lead in infrastructure and steel structure development, alongside its other activities. Our strategy focuses on innovation, efficiency, and team diversity to secure a leading market position in the coming years, God willing.",
    },
  ];

  return (
    <section className=" text-white py-32 my-10 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-mainColor">A Strong Collaborative Team</h2>
        <p className="text-gray-400 text-lg">An empowered workforce built on diversity, expertise, and ambition.</p>
      </div>
        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
        {cards.map((card, index) => (
          <div key={index} className={`flex flex-col items-center text-center px-3 py-3 ${index == 1 && "border-y-2 md:border-x-2 md:border-y-0 special-border "} `}>
            {card.icon}
            <h3 className="text-xl font-semibold mb-3 mt-4 text-sky-400">{card.title}</h3>
            <p className="text-gray-300">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teamwork;
