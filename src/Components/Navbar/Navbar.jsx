import logo from "/navbar/logo.svg";
import { useEffect, useState, useCallback } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"; // استدعينا السهام
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // تحكم في فتح Dropdown

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

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 text-lg text-white items-center relative">
          {["/", "/about", "/services", "/projects", "/contact"].map(
            (path, idx) => {
              const labels = [
                "Home",
                "About",
                "Services",
                "Projects",
                "Contact Us",
              ];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className="hover:text-mainColor transition duration-300"
                >
                  {labels[idx]}
                </NavLink>
              );
            }
          )}
          {/* Other Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-mainColor transition duration-300">
              Other {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div
              className={`absolute top-full mt-2 bg-navBg rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <NavLink
                to="/customers"
                className="block px-4 py-2 hover:text-mainColor transition whitespace-nowrap duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Our Clients
              </NavLink>
              <NavLink
                to="/portfolio"
                className="block px-4 py-2 hover:text-mainColor transition whitespace-nowrap duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Manager 
              </NavLink>
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
        {["/", "/about", "/services", "/projects", "/contact"].map(
          (path, idx) => {
            const labels = [
              "Home",
              "About",
              "Services",
              "Projects",
              "Contact Us",
            ];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={closeMenu}
                className="block py-2 hover:text-mainColor transition duration-300"
              >
                {labels[idx]}
              </NavLink>
            );
          }
        )}

        {/* Mobile Dropdown */}
        <div className="py-2">
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex items-center gap-1 w-full hover:text-mainColor transition duration-300"
          >
            Other {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <div
            className={`pl-4 mt-2 overflow-hidden transition-all duration-300 ${
              isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <NavLink
              to="/customers"
              className="block py-1 hover:text-mainColor transition duration-300"
              onClick={closeMenu}
            >
              Our Clients
            </NavLink>
            <NavLink
              to="/portfolio"
              className="block py-1 hover:text-mainColor transition duration-300"
              onClick={closeMenu}
            >
              Manager
            </NavLink>
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
