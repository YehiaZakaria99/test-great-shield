import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../Components/Loading/Loading";

export default function Media() {
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
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const mediaItems = [
    {
      type: "video",
      title: "م.محمد عبد الرؤوف عضو مجلس الاتحاد المصري لمقاولي التشييد والبناء يوضح أسباب تراجع أسعار الحديد",
      description:
        "Discussion on the future of real estate investment in Egypt.",
      url: "https://www.youtube.com/embed/9InWBVDoecw",
    },
    {
      type: "video",
      title: "م. محمد عبد الرؤوف يوضح أهم المحاور التي تعمل عليها الحكومة المصرية لدعم القطاع الخاص",
      description: "Highlights of our recent construction milestones.",
      url: "https://www.youtube.com/embed/--KoK4roJlE",
    },
    {
      type: "video",
      title: "لقاء المهندس محمد عبد الرؤوف مع  قناه CBC extra بتاريخ 6/6/2015",
      description: "Highlights of our recent construction milestones.",
      url: "https://www.youtube.com/embed/KIFwltbCYe0",
    },
    {
      type: "video",
      title: "تعمير-م/محمد عبد الرؤوف يوضح جهود الحكومة لدعم فرص شركات المقاولات المصرية في مشروعات إعادة الإعمار",
      description: "Highlights of our recent construction milestones.",
      url: "https://www.youtube.com/embed/3FXoRUyJqdg",
    },
    // {
    //   type: "news",
    //   title: "Great Shield Wins Mega Project Contract",
    //   description:
    //     "Awarded the development of a major governmental housing compound.",
    // },
    // {
    //   type: "news",
    //   title: "CEO Attends Arab Contractors Conference",
    //   description:
    //     "A key voice in regional construction industry collaboration.",
    // },
    // Add more items as needed
  ];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="pt-40 pb-16 bg-[#111] px-4 overflow-hidden lg:px-32 text-gray-100">
          <h2
            className="text-4xl md:text-5xl font-bold text-center text-mainColor mb-12"
            data-aos="fade-up"
          >
            Media Center
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {item.type === "video" ? (
                  <iframe
                    className="w-full h-56"
                    src={item.url}
                    title={item.title}
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="h-56 bg-gray-200 flex items-center justify-center text-mainColor text-xl font-bold">
                    News
                  </div>
                )}

                <div className="p-5">
                  <h3 className="font-semibold text-lg text-mainColor mb-2">
                    {item.title}
                  </h3>
                  {/* <p className="text-gray-600 text-sm">{item.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}




/* 
<iframe width="610" height="488" src="https://www.youtube.com/embed/KIFwltbCYe0" title="لقاء المهندس محمد عبد الرؤوف مع  قناه CBC extra بتاريخ 6/6/2015" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="868" height="488" src="https://www.youtube.com/embed/--KoK4roJlE" title="م. محمد عبد الرؤوف يوضح أهم المحاور التي تعمل عليها الحكومة المصرية لدعم القطاع الخاص" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="868" height="488" src="https://www.youtube.com/embed/9InWBVDoecw" title="م.محمد عبد الرؤوف عضو مجلس الاتحاد المصري لمقاولي التشييد والبناء يوضح أسباب تراجع أسعار الحديد" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="868" height="488" src="https://www.youtube.com/embed/3FXoRUyJqdg" title="تعمير-م/محمد عبد الرؤوف يوضح جهود الحكومة لدعم فرص شركات المقاولات المصرية في مشروعات إعادة الإعمار" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
*/