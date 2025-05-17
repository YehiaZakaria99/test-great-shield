import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="pt-40 pb-16 bg-[#111] text-white h-screen overflow-hidden">
      <div className="grid min-h-full place-items-center  px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-sky-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-mainColor sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={"/"}
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all duration-300"
            >
              Go back home
            </Link>
            <Link
              to={"/contact"}
              className="inline-flex items-center group px-3.5 py-2.5 border-2 text-sm font-semibold border-mainColor text-mainColor hover:bg-mainColor hover:text-navBg transition duration-300 rounded-lg"
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
      </div>
    </section>
  );
}
