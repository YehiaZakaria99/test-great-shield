import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import manager from "/chairman/manager.webp";
import Loading from "../Components/Loading/Loading";

export default function Portfolio() {
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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="pt-40 pb-16 bg-[#111] px-4 lg:px-32 text-gray-100 overflow-hidden">
          {/* Header */}
          <div
            className="text-center mb-12"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <img
              src={manager}
              alt="Manager"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h2 className="text-3xl font-bold text-mainColor">
              Eng. Mohamed Abdel Raouf
            </h2>
            <p className="text-sky-400">
              General Manager, Great Shield Contracting
            </p>
          </div>

          {/* Bio + Highlights */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3
                className="text-2xl font-semibold text-mainColor mb-4"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                Biography
              </h3>
              <p
                className="leading-loose"
                data-aos="fade-right"
                data-aos-delay="1600"
              >
                Eng. Mohamed Abdel Raouf is a distinguished leader in Egypt’s
                construction and real estate development sector. With a
                Bachelor's degree in Engineering, he has held several key
                executive positions across leading companies. He served as
                Chairman and Managing Director of Atlas General Contracting &
                Real Estate Investments, as well as the Egyptian Joint Stock
                Company for Contracting "Al-Abd" between 2002 and 2014.
                <br />
                <br />
                Between 2014 and 2015, he was the Chairman of Al-Nasr Housing &
                Development Company, and previously held the role of Executive
                Technical Director at Al-Nasr for Civil Works from 1996 to 1997.
                From March 30, 2017, to May 31, 2021, he served as a Board
                Member at Al-Nasr for Civil Works.
                <br />
                <br />
                He is also a former Board Member of the Egyptian Federation for
                Construction and Building Contractors.
              </p>
            </div>

            <div>
              <h3
                className="text-2xl font-semibold text-mainColor mb-4"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="2400"
              >
                Career Highlights
              </h3>
              <ul
                className="list-disc pl-6 leading-loose"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="3000"
              >
                <li>
                  Chairman & Managing Director, Atlas General Contracting & Real
                  Estate Investments
                </li>
                <li>
                  Chairman & Managing Director,{" "}
                  <a
                    className="text-sky-200 underline"
                    href="https://www.alabdegypt.net/"
                    target="_blank"
                  >
                    "Al-Abd"
                  </a>{" "}
                  (2002–2014)
                </li>
                <li>
                  Chairman,{" "}
                  <a
                    className="text-sky-200 underline"
                    href="https://www.el-nasrhousing.com/index.aspx"
                    target="_blank"
                  >
                    "Al-Nasr Housing & Development"
                  </a>{" "}
                  (2014–2015)
                </li>
                <li>
                  Board Member,{" "}
                  <a
                    className="text-sky-200 underline"
                    href="https://www.facebook.com/nccweg"
                    target="_blank"
                  >
                    "Al-Nasr for Civil Works"
                  </a>{" "}
                  (2017–2021)
                </li>
                <li>
                  Executive Technical Director,{" "}
                  <a
                    className="text-sky-200 underline"
                    href="https://www.facebook.com/nccweg"
                    target="_blank"
                  >
                    "Al-Nasr for Civil Works"
                  </a>{" "}
                  (1996–1997)
                </li>
                <li>
                  Member of the Board,{" "}
                  <a
                    className="text-sky-200 underline"
                    href="https://www.tasheed.org/"
                    target="_blank"
                  >
                    Egyptian Federation for Construction and Building
                    Contractors
                  </a>
                </li>
                <li>Holds a Bachelor's degree in Engineering</li>
              </ul>
            </div>
          </div>

          {/* TIMELINE */}
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
          </div>
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
