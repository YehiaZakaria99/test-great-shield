import logo from "/navbar/logo.svg";
import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolling(window.scrollY > 50);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 px-5 py-1 ${
        scrolling ? "bg-(--nav-bg) shadow-lg" : "shadow-none"
      } duration-300`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-1">
        {/* Logo */}
        <div className="font-bold">
          <Link to={'/'}><img className="w-40" src={logo} alt="logo" /></Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 text-lg text-white">
          {["/", "/about", "/services", "/projects", "/contact"].map((path, idx) => {
            const labels = ["Home", "About", "Services", "Projects", "Contact Us"];
            return (
              <NavLink
                key={path}
                to={path}
                className="hover:text-(--main-hover-color) transition"
              >
                {labels[idx]}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-(--main-color) cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-(--nav-bg) text-white px-5 rounded-md ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {["/", "/about", "/services", "/projects", "/contact"].map((path, idx) => {
          const labels = ["Home", "About", "Services", "Projects", "Contact Us"];
          return (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className="block py-2 hover:text-(--main-hover-color) transition"
            >
              {labels[idx]}
            </NavLink>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
