import React, { useCallback, useEffect, useRef, useState } from "react";
import ProjectsPageModal from "../ProjectsPageModal/ProjectsPageModal";
import ProjectDetails from "../../Pages/ProjectDetails";
import { useNavigate } from "react-router-dom";

export default function ProjectsPageCard({ project, index }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-700/30 transition-shadow group duration-300">
        <img
          src={project.images[0]}
          alt={project.title}
          className="h-48 w-full object-cover scale-110 group-hover:scale-100 duration-300"
          loading="lazy"
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold text-(--main-color) mb-2">
            {project.title.split(" ", 3).join(" ")}...
          </h3>
          <p className="text-gray-300 line-clamp-3">
            {project.fullDescription.split(" ", 3).join(" ")}...
          </p>
          <button
            onClick={() => {
              sessionStorage.setItem("lastViewedProject", index);
              navigate(`/projectDetails/${project.id}`);
            }}
            className="mt-4 inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md"
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
}
