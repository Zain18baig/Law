import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "../index.css";
import logo from "/src/assets/logo.jpg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-opacity-30 backdrop-blur-lg shadow-md rounded-bl-3xl rounded-br-3xl">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between w-full">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Hameed Law Logo" className="w-20 h-20 md:w-20 md:h-20 sm:w-12 sm:h-12" />
          <h1 className="text-black text-xl font-bold">Hameed Law Associates</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-black text-sm font-medium">
          {[
            { to: "about-and-services", label: "About and Services" },
            { to: "blog-section", label: "Blogs" },
            { to: "why-choose-us", label: "Why Choose us ?" },
            { to: "meetourteam", label: "Meet our Team" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active-link"
                onClick={closeMenu}
                className="cursor-pointer px-3 py-1 rounded-lg hover:text-gray-700 transition"
                title={label}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="ml-auto md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white bg-opacity-80 text-black p-4 absolute w-full shadow-lg"
        >
          <ul className="flex flex-col space-y-4 text-center text-sm font-medium">
            {[
              { to: "about-and-services", label: "About and Services" },
              { to: "blog-section", label: "Blogs" },
              { to: "why-choose-us", label: "Why Choose us ?" }
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active-link"
                  onClick={closeMenu}
                  className="cursor-pointer px-3 py-1 rounded-lg hover:text-gray-700 transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
