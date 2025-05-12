import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Aos from "aos";
import Loading from "../Components/Loading/Loading";
import { Link } from "react-router-dom";

export default function ContactPage() {
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
    Aos.init({ duration: 1000 });

    return () => {
      Aos.refreshHard();
    };
  }, []);
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ztevk08",
        "template_bvdhiro",
        form.current,
        "OOlPmBj-KjzyftCSE"
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setSuccess(false);
        }
      );
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="pt-40 pb-16 bg-[#111] text-white">
          <div className="max-w-7xl mx-auto mb-24 px-4">
            {/* Header */}
            <section className="mb-24 px-4 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold text-bg mb-4"
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
              >
                Contact Us
              </h2>
              <p
                className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-12"
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
              >
                We'd love to hear from you. Fill in the form below and we'll get
                back to you as soon as possible.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

              {/* Form */}
              <form
                data-aos="zoom-out"
                data-aos-easing="ease-in-out"
                data-aos-delay={500}
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6 bg-navBg text-navBg font-bold p-8 rounded-2xl shadow-sm shadow-[#ff8904] "
              >
                <div>
                  <label className="block mb-2 font-semibold text-mainColor">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full p-3 border border-(gray-300) rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-mainColor">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full p-3 border border-(gray-300) rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-mainColor">
                    Phone (optional)
                  </label>
                  <input
                    type="text"
                    name="user_phone"
                    className="w-full p-3 border border-(gray-300) rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-mainColor">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full p-3 border border-(gray-300) rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-mainColor">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full p-3 border border-(gray-300) rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-full"
                >
                  Send Message
                </button>

                {/* Alert */}
                {success === true && (
                  <p className="text-green-600 font-semibold mt-4">
                    Message sent successfully!
                  </p>
                )}
                {success === false && (
                  <p className="text-red-600 font-semibold mt-4">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info (Optional Section) */}
            <div className="mt-16 text-center space-y-4 text-gray-600">
              <div className="flex justify-center items-center gap-2">
                <FaLocationArrow />{" "}
                <span>
                  Banks Center St, New Cairo 1, Cairo Governorate, Egypt
                </span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <FaPhoneAlt />{" "}
                <a href="tel:+201040391955">
                  <span>+201040391955</span>
                </a>
              </div>
              <div className="flex justify-center items-center gap-2">
                <FaEnvelope />{" "}
                <a href="mailto:Info@greatshieldegypt.com">
                  <span>Info@greatshieldegypt.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}