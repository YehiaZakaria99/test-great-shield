import { useContext, useEffect } from "react";
import ProjectsPageCard from "../Components/ProjectsPageCard/ProjectsPageCard.jsx";
import { ProjectsContext } from "../Context/ProjectsContext.jsx";
import Aos from "aos";

export default function ProjectsPage() {
  const { projects } = useContext(ProjectsContext);
  useEffect(() => {
    Aos.init({ duration: 800 });

    return () => {
      Aos.refreshHard();
    };
  }, []);
  return (
    <section
      className="pt-40 pb-16 bg-[#111] text-white min-h-screen overflow-hidden"
      id=""
    >
      <div className="container">
        <div className="">
          <h2
            className="text-4xl md:text-5xl font-bold text-center text-(--main-color) mb-2"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
          >
            Projects
          </h2>
          <p
            className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-12"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
          >
            Featured Construction Projects
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-easing="ease-in-out"
              >
                <ProjectsPageCard index={index} project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 

Construction-Project-of-a-Post-Office-Building-in-Qalyubia
*/
