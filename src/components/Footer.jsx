import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-bold text-white">
            Hameed Law Associates
          </h2>
          <p className="text-gray-400 mt-2">
            Expert Legal Solutions with Decades of Experience
          </p>
        </motion.div>

        {/* Quick Links with Smooth Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="Home"
                smooth={true}
                duration={800}
                offset={-80}
                className="cursor-pointer hover:text-red-500 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-and-services"
                smooth={true}
                duration={800}
                offset={-80}
                className="cursor-pointer hover:text-red-500 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="blog-section"
                smooth={true}
                duration={800}
                offset={-80}
                className="cursor-pointer hover:text-red-500 transition"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="meetourteam"    
                smooth={true}
                duration={800}
                offset={-80}
                className="cursor-pointer hover:text-red-500 transition"
              >
                Meet Our Team
              </Link>
            </li>
            <li>
              <Link
                to="why-choose-us"
                smooth={true}
                duration={800}
                offset={-80}
                className="cursor-pointer hover:text-red-500 transition"
              >
                Why Choose us
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@hameedlaw.com" className="hover:text-red-500">
              rajabhameed@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+923008939069" className="hover:text-red-500">
              +923008939069
            </a>
          </p>
          <p>
            Plot No. 4-C , Office # M-2 , Street No. 2, Badar Commercial, D.H.A,
            Phase V, Karachi.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://wa.me/+923008939069"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Hameed Law Associates. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
