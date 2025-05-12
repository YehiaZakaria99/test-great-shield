import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import manager from "/leadership/chairman.webp";
import Loading from "../Components/Loading/Loading";
import { MediaContext } from "../Context/MediaContext";
import useNavigateToTop from "../Hooks/useNavigateToTop";

export default function Portfolio() {
  const goTo = useNavigateToTop();
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

  // media
  const { mediaItems } = useContext(MediaContext);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="pt-40 pb-16 bg-[#111] px-4 lg:px-32 text-gray-100 overflow-hidden">
          {/* Header */}
          <div
            className="text-center mb-12"

          >
            <img
              src={manager}
              alt="Manager"
              data-aos="zoom-in"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg object-cover object-left"
            />
            <h2 className="md:text-3xl text-2xl font-bold text-mainColor" data-aos="fade-left">
              Eng. Mohamed Abdel Raouf
            </h2>
            <p className="text-sky-400" data-aos="fade-right">Chairman</p>
          </div>

          {/* Bio + Media */}
          <div className="grid md:grid-cols-1 gap-10">
            {/* Bio */}
            <div className="text-center">
              <h3
                className="text-2xl font-semibold text-bg mb-4"
                data-aos="fade-right"
              >
                Biography
              </h3>
              <p className="leading-loose" data-aos="fade-left">
                Eng. Mohamed Abdel Raouf is a board member of the Egyptian
                Federation for Construction and Building Contractors. He is
                known for his active participation in developing the
                construction and building sector in Egypt. He has spoken on
                several occasions about the state's efforts to eliminate
                informal settlements and unplanned hazardous areas. He also
                highlighted the role of the "Decent Life" initiative in
                improving infrastructure and developing rural areas.
                <br />
              </p>
            </div>
            {/* Media */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
              {mediaItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden"
                  data-aos={index%2 == 0 ? "fade-up" : "fade-down"}
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
          </div>
          {/* More Media */}
          <div
            className="flex justify-center my-12"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
          >
            <button
              onClick={() => goTo("/media")}
              className="inline-flex items-center group px-5 py-3 border-2 border-mainColor text-mainColor hover:bg-mainColor hover:text-navBg transition duration-300 rounded-lg"
            >
              All Media
              <svg
                className="w-4 h-4 ms-2 rtl:rotate-180 group-hover:animate-bounceX duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>

          {/* 
          <div className="mt-20" data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-mainColor mb-10 text-center">
              Career Timeline
            </h3>
            <div className="border-l-2 border-mainColor pl-6 space-y-8">
              <div>
                <p className="text-sky-300 font-medium">1996 – 1997</p>
                <p>Executive Technical Director, Al-Nasr for Civil Works</p>
              </div>
              <div>
                <p className="text-sky-300 font-medium">2002 – 2014</p>
                <p>
                  Chairman & Managing Director, Atlas Contracting & "Al-Abd"
                </p>
              </div>
              <div>
                <p className="text-sky-300 font-medium">2014 – 2015</p>
                <p>Chairman, Al-Nasr Housing & Development</p>
              </div>
              <div>
                <p className="text-sky-300 font-medium">2017 – 2021</p>
                <p>Board Member, Al-Nasr for Civil Works</p>
              </div>
              <div>
                <p className="text-sky-300 font-medium">Ongoing</p>
                <p>Chairman, Great Shield Construction</p>
                <p>
                  Board Member, Egyptian Federation for Construction and
                  Building Contractors
                </p>
              </div>
            </div>
          </div> */}
        </section>
      )}
    </>
  );
}

/* 



<div>عضو مجلس إدارة "<a href="https://manhom.com/شركات/%d8%a7%d8%aa%d8%ad%d8%a7%d8%af-%d8%a7%d9%84%d9%85%d9%82%d8%a7%d9%88%d9%84%d9%8a%d9%86/">الاتحاد المصري لمقاولي التشييد والبناء</a>"، جمهورية مصر العربية.<br>
<br>
كان عضواً في مجلس إدارة "<a href="https://manhom.com/شركات/%d8%a7%d9%84%d9%86%d8%b5%d8%b1-%d9%84%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d8%a7%d9%84%d9%85%d8%af%d9%86%d9%8a%d8%a9//">شركة النصر للأعمال المدنية</a>" بين 30 مارس (آذار) 2017 و31 مايو (أيار) 2021.<br>
<br>
شغل منصب رئيس مجلس الإدارة والعضو المنتدب لكل من "شركة أطلس العامة للمقاولات والاستثمارات العقارية"، و<a href="https://manhom.com/شركات/%d8%a7%d9%84%d8%b4%d8%b1%d9%83%d8%a9-%d8%a7%d9%84%d9%85%d8%b5%d8%b1%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d8%b3%d8%a7%d9%87%d9%85%d8%a9-%d9%84%d9%84%d9%85%d9%82%d8%a7%d9%88%d9%84%d8%a7%d8%aa/">الشركة المساهمة المصرية للمقاولات "العبد"</a> بين 2002 و2014، و"<a href="https://manhom.com/شركات/%d8%b4%d8%b1%d9%83%d8%a9-%d8%a7%d9%84%d9%86%d8%b5%d8%b1-%d9%84%d9%84%d8%a5%d8%b3%d9%83%d8%a7%d9%86-%d9%88%d8%a7%d9%84%d8%aa%d8%b9%d9%85%d9%8a%d8%b1/">شركة النصر للإسكان والتعمير</a>" بين 2014 و2015، والعضو المنتدب للشؤون الفنية والتنفيذ في "<a href="https://manhom.com/شركات/%d8%a7%d9%84%d9%86%d8%b5%d8%b1-%d9%84%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d8%a7%d9%84%d9%85%d8%af%d9%86%d9%8a%d8%a9//">شركة النصر للأعمال المدنية</a>" بين 1996 و1997.<br>
<br>
حاصل على بكالوريوس في الهندسة.</div>


*/
