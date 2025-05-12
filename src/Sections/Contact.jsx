import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <section className="bg-navBg py-16 px-4 lg:px-32 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-bg mb-4" data-aos="fade-left">
            Get in Touch
          </h2>
          <p className="text-gray-100 text-lg mb-8" data-aos="fade-right">
            Whether you have a question, a business inquiry, or just want to say
            hello — we're here to listen.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            {/* Map */}
            <div
              className="w-full h-96"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <iframe
                title="company-location"
                className="w-full h-full rounded-2xl shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.8856261222636!2d31.423467300000006!3d30.01783870000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d028cb4e5c9%3A0x30387fde5456377b!2sMakateb!5e1!3m2!1sar!2seg!4v1745670977847!5m2!1sar!2seg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <FaEnvelope />{" "}
              <a href="mailto:Info@greatshieldegypt.com">
                <span>Info@greatshieldegypt.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <FaPhoneAlt />{" "}
              <a href="https://wa.me/+21040391955" target="_blank">
                <span>+201040391955</span>
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <FaLocationArrow />{" "}
              <span>
                Banks Center St, New Cairo 1, Cairo Governorate, Egypt
              </span>
            </div>
          </div>
          <div className="py-10" data-aos="fade-up">
            <Link
              to={"/contact"}
              className="inline-flex items-center group px-5 py-3 border-2 border-mainColor text-mainColor hover:bg-mainColor hover:text-navBg transition duration-300 rounded-lg"
            >
              Contact Us
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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
