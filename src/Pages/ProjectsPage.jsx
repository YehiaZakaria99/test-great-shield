import { useContext, useEffect, useState } from "react";
import ProjectsPageCard from "../Components/ProjectsPageCard/ProjectsPageCard.jsx";
import { ProjectsContext } from "../Context/ProjectsContext.jsx";
import Aos from "aos";
import Loading from "../Components/Loading/Loading.jsx";

export default function ProjectsPage() {
  const [isLoading, setIsLodaing] = useState(true);
  const { projects } = useContext(ProjectsContext);
  useEffect(() => {
    Aos.init({ duration: 1000 });

    return () => {
      Aos.refreshHard();
    };
  }, []);
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
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section
          className="pt-40 pb-16 bg-[#111] text-white min-h-screen overflow-hidden"
          id="allProjects"
        >
          <div className="container">
            <div className="">
              {/* Header */}
              <section className="mb-24 px-4 text-center">
                <h2
                  className="text-3xl md:text-4xl font-bold text-bg mb-4"
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
                  At Great Shield, we deliver exceptional projects across
                  residential, commercial, and public sectors. With a commitment
                  to quality, innovation, and on-time completion, we bring
                  visionary concepts to life through expert execution.
                </p>
              </section>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                  <div key={index} data-aos="zoom-out">
                    <ProjectsPageCard index={index} project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* 

Construction-Project-of-a-Post-Office-Building-in-Qalyubia
*/
