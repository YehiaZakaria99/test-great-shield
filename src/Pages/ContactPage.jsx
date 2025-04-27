import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Aos from "aos";

export default function ContactPage() {
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

    /* 
    service-id: service_ztevk08
template-id: template_bvdhiro

public-key: OOlPmBj-KjzyftCSE
    */
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
    <section className="pt-40 pb-16 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto mb-24 px-4">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-(--main-color) mb-6"
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
          We'd love to hear from you. Fill in the form below and we'll get back
          to you as soon as possible.
        </p>

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
            {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>

          {/* Form */}
          <form
            data-aos="zoom-out"
            data-aos-easing="ease-in-out"
            data-aos-delay={500}
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-(--nav-bg) p-8 rounded-2xl shadow-2xs shadow-[#ff8904] "
          >
            <div>
              <label className="block mb-2 font-semibold text-(--main-color)">
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
              <label className="block mb-2 font-semibold text-(--main-color)">
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
              <label className="block mb-2 font-semibold text-(--main-color)">
                Phone (optional)
              </label>
              <input
                type="text"
                name="user_phone"
                className="w-full p-3 border border-(gray-300) rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-(--main-color)">
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
              <label className="block mb-2 font-semibold text-(--main-color)">
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
            <span>Banks Center St, New Cairo 1, Cairo Governorate, Egypt</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaPhoneAlt /> <span>+20 123 456 7890</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaEnvelope /> <span>Info@greatshieldegypt.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 

service-id: service_ztevk08
template-id: template_bvdhiro

public-key: OOlPmBj-KjzyftCSE
*/
