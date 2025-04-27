import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import chairman from "/aboutPage/Our-Message/chairman.webp";
import generalManager from "/aboutPage/Our-Message/generalManager.webp";
import chairmanSignature from "/aboutPage/Our-Message/chairmanSignature.webp";
import generalManagerSignature from "/aboutPage/Our-Message/generalManagerSignature.webp";

export default function MoreOurMessage() {
  const messages = [
    {
      title: "Chairman’s Message",
      name: "Eng. Mohamed Abdel Raouf",
      text: `It is my pleasure, as Chairman of Great Shield Construction, to welcome you to our esteemed company—an active and reliable partner in shaping Egypt’s future.

Founded on our firm belief in contributing to the nation’s progress, our company provides integrated engineering and construction services that meet the growing demands of the Egyptian market. We take pride in our vital role in executing major national projects that have helped strengthen the country’s infrastructure and regional position.

At Great Shield Construction, we believe that construction is not merely about erecting buildings, but about building a better future. That’s why we commit to the highest standards of quality and sustainability by utilizing eco-friendly materials and innovative technologies that help preserve natural resources.

As part of our strong sense of social responsibility, we continuously support initiatives that promote education, vocational training, job creation for youth, and charitable contributions in the communities we serve.

Our strategy aligns fully with Egypt’s Vision 2030, and we actively contribute to its goals by:
• Supporting urban development through large-scale infrastructure and housing projects
• Creating job opportunities and training Egyptian youth on modern technologies
• Strengthening the national economy through economic participation
• Enhancing quality of life by building new cities and integrated communities
• Protecting the environment through green building practices

We look to the future with great optimism and are committed to maintaining our leadership in the construction sector in Egypt and the region. We will continue to invest in human capital, adopt cutting-edge construction technologies, and uphold international standards of excellence.

With sincere appreciation and gratitude.`,
      img: chairman,
      signature: chairmanSignature,
    },
    {
      title: "General Manager’s Message",
      name: "Mr. Omar Abdel Raouf",
      text: `To all the employees of Great Shield Construction,

I am pleased to share with you my thoughts and vision for the future of our company. We have achieved a lot over the past years, and we now stand at the threshold of a new phase filled with opportunities and challenges.

Our vision is to become a leading construction company in Egypt and the Arab region—driving prosperity through innovative and sustainable projects.

To achieve this, we must work together to fulfill our key goals:
• Lead the construction industry in Egypt and the region
• Deliver high-quality building services that exceed client expectations
• Commit to the highest standards of quality and safety
• Build sustainable and innovative projects that benefit society
• Develop our employees and create an exceptional work environment
• Strengthen relationships with clients and partners
• Uphold our social and environmental responsibility

I believe that through teamwork, dedication, and creativity, we can accomplish these goals.

I want to thank each one of you for your efforts and commitment. I look forward to working with you to build a brighter future for Great Shield Construction and our community.

Together, we will achieve great things!

With sincere appreciation,`,
      img: generalManager,
      signature: generalManagerSignature,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {messages.map((msg, index) => (
          <div key={index} className="px-2 py-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-md p-6 md:p-8">
              <img
                src={msg.img}
                alt={msg.title}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-sky-200 shadow-md"
                loading="lazy"
              />
              <div className="text-center md:text-left w-full">
                <h5 className="text-2xl font-bold text-gray-800 mb-3">
                  {msg.title}
                </h5>
                <p className="text-gray-600 text-sm md:text-base leading-7 whitespace-pre-line max-h-52 overflow-y-auto custom-scrollbar pr-2">
                  {msg.text}
                </p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 italic">{msg.name}</p>
                  {msg.signature && (
                    <img
                      src={msg.signature}
                      alt="Signature"
                      className="mt-2 w-24 md:w-32 mx-auto md:mx-0"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
