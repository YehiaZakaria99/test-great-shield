import React from "react";
import Slider from "react-slick";

export default function ServicesPageCard({ service }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="mb-24">
      <h3
        className="text-3xl md:text-4xl font-bold text-sky-400 mb-10 text-center"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
      >
        {service.title}
      </h3>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {service.subSections.map((section, i) => (
            <div
              key={i}
              className="px-4"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
            >
              <div className="flex flex-col md:flex-row items-stretch gap-6 bg-(--nav-bg) border border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 min-h-[320px] overflow-hidden">
                {/* BG Image */}
                <div className="w-full md:w-1/3 min-h-[200px] md:min-h-[320px]">
                  <div className="w-full h-full bg-black/40  rounded-l-2xl">
                    <img
                      className="h-full object-cover"
                      src={section.img}
                      alt={section.subTitle}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-2/3 p-6">
                  <h4 className="text-2xl font-semibold text-(--main-color) mb-4">
                    {section.subTitle}
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 leading-relaxed">
                    {section.descriptions.map((desc, j) => (
                      <li key={j}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
