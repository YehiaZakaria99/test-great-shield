import logo from "/navbar/logo.svg";
import { useEffect, useState, useCallback } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // false | "about" | "other"

  const handleScroll = useCallback(() => {
    setScrolling(window.scrollY > 50);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 px-5 py-1 ${
        scrolling ? "bg-navBg shadow-lg" : "shadow-none"
      } duration-300`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-1">
        {/* Logo */}
        <div className="font-bold">
          <Link to={"/"}>
            <img className="w-40" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg text-white items-center relative">
          {/* Home */}
          <NavLink
            to="/"
            className="hover:text-mainColor transition duration-300"
          >
            Home
          </NavLink>

          {/* About with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen("about")}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-mainColor transition duration-300">
              About{" "}
              {isDropdownOpen === "about" ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            <div
              className={`absolute top-full mt-2 bg-navBg rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                isDropdownOpen === "about"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <NavLink
                to="/about/overview"
                className="block px-4 py-2 hover:text-mainColor transition whitespace-nowrap duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Overview
              </NavLink>
              <NavLink
                to="/about/leadership"
                className="block px-4 py-2 hover:text-mainColor transition whitespace-nowrap duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Leadership
              </NavLink>
            </div>
          </div>

          {/* Services */}
          <NavLink
            to="/services"
            className="hover:text-mainColor transition duration-300"
          >
            Services
          </NavLink>

          {/* Projects */}
          <NavLink
            to="/projects"
            className="hover:text-mainColor transition duration-300"
          >
            Projects
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className="hover:text-mainColor transition duration-300"
          >
            Contact Us
          </NavLink>

          {/* Other Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen("other")}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-mainColor transition duration-300">
              Other{" "}
              {isDropdownOpen === "other" ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            <div
              className={`absolute top-full mt-2 bg-navBg rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                isDropdownOpen === "other"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <NavLink
                to="/customers"
                className="block px-4 py-2 hover:text-mainColor transition whitespace-nowrap duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Our Clients
              </NavLink>
              {/* <NavLink
                to="/portfolio"
                className="block px-4 py-2 hover:text-mainColor transition whitespace-nowrap duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Manager
              </NavLink> */}
              <NavLink
                to="/media"
                className="block px-4 py-2 hover:text-mainColor transition whitespace-nowrap duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Media
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-mainColor cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-navBg text-white px-5 rounded-md ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className="block py-2 hover:text-mainColor transition duration-300"
        >
          Home
        </NavLink>

        {/* About Mobile Dropdown */}
        <div className="py-2">
          <button
            onClick={() =>
              setIsDropdownOpen((prev) => (prev === "about" ? false : "about"))
            }
            className="flex items-center gap-1 w-full hover:text-mainColor transition duration-300"
          >
            About{" "}
            {isDropdownOpen === "about" ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
          <div
            className={`pl-4 mt-2 overflow-hidden transition-all duration-300 ${
              isDropdownOpen === "about" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <NavLink
              to="/about/overview"
              className="block py-1 hover:text-mainColor transition duration-300"
              onClick={closeMenu}
            >
              Overview
            </NavLink>
            <NavLink
              to="/about/leadership"
              className="block py-1 hover:text-mainColor transition duration-300"
              onClick={closeMenu}
            >
              Leadership
            </NavLink>
          </div>
        </div>

        {/* Services */}
        <NavLink
          to="/services"
          onClick={closeMenu}
          className="block py-2 hover:text-mainColor transition duration-300"
        >
          Services
        </NavLink>

        {/* Projects */}
        <NavLink
          to="/projects"
          onClick={closeMenu}
          className="block py-2 hover:text-mainColor transition duration-300"
        >
          Projects
        </NavLink>

        {/* Contact */}
        <NavLink
          to="/contact"
          onClick={closeMenu}
          className="block py-2 hover:text-mainColor transition duration-300"
        >
          Contact Us
        </NavLink>

        {/* Other Mobile Dropdown */}
        <div className="py-2">
          <button
            onClick={() =>
              setIsDropdownOpen((prev) => (prev === "other" ? false : "other"))
            }
            className="flex items-center gap-1 w-full hover:text-mainColor transition duration-300"
          >
            Other{" "}
            {isDropdownOpen === "other" ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
          <div
            className={`pl-4 mt-2 overflow-hidden transition-all duration-300 ${
              isDropdownOpen === "other" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <NavLink
              to="/customers"
              className="block py-1 hover:text-mainColor transition duration-300"
              onClick={closeMenu}
            >
              Our Clients
            </NavLink>
            {/* <NavLink
              to="/portfolio"
              className="block py-1 hover:text-mainColor transition duration-300"
              onClick={closeMenu}
            >
              Manager
            </NavLink> */}
            <NavLink
              to="/media"
              className="block py-1 hover:text-mainColor transition duration-300"
              onClick={closeMenu}
            >
              Media
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
