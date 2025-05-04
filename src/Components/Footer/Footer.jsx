import Aos from "aos";
import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 800 });
    return () => {
      Aos.refreshHard();
    };
  }, []);
  return (
    <footer className="footer-bg text-white py-8 px-4 overflow-hidden ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 text-center" data-aos="fade-up">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-bg">
            Great Shield
          </h2>
          <p className="text-sm text-gray-100">
            Building with vision and precision — from landscapes to large-scale
            projects.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Great Shield. All rights reserved.
      </div>
    </footer>
  );
}
