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
      <div className="max-w-[90rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {/* Brand Section with Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-white">
            Hameed Law Associates
          </h2>
          <p className="text-gray-400 mt-2">
            Expert Legal Solutions with Decades of Experience.
          </p>

          {/* Quick Links Below */}
          <h3 className="text-lg font-semibold text-white mt-6 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Home", id: "Home" },
              { name: "About Us", id: "about-and-services" },
              { name: "Our Services", id: "blog-section" },
              { name: "Why Choose Us", id: "why-choose-us" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="cursor-pointer hover:text-red-500 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info & Google Maps - Increased Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="md:col-span-2"
        >
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:rajabhameed@gmail.com"
              className="hover:text-red-500"
            >
              rajabhameed@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+923215331113" className="hover:text-red-500">
              +92 321 5331113
            </a>
          </p>

          {/* Maps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {/* Karachi Office */}
            <div>
              <h4 className="text-white font-semibold">Karachi Office</h4>
              <p className="text-gray-400 text-sm">
                Plot No. 4-C, Office # M-2, Street No. 2, Badar Commercial,
                D.H.A, Phase V, Karachi.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28971.805296395763!2d67.03763073923419!3d24.813401930395344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.%204-C%2C%20Office%20%23%20M-2%2C%20Street%20No.%202%2C%20Badar%20Commercial%2C%20D.H.A%2C%20Phase%20V%2C%20Karachi.!5e0!3m2!1sen!2s!4v1741783013124!5m2!1sen!2s"
                className="w-full h-52 rounded-lg mt-2"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Lahore Office */}
            <div>
              <h4 className="text-white font-semibold">Lahore Office</h4>
              <p className="text-gray-400 text-sm">
                Plot No. R-38/4, RB Heights, Office No. 605, 6th floor, Davis
                Road, Lahore.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3399.826034262089!2d74.33689562390177!3d31.556388595364673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.%20R-38%2F4%2C%20RB%20Heights%2C%20Office%20No.605%2C%206th%20floor%2C%20Davis%20Road%2C%20Lahore!5e0!3m2!1sen!2s!4v1741783221914!5m2!1sen!2s"
                className="w-full h-52 rounded-lg mt-2"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Rawalpindi Office */}
            <div>
              <h4 className="text-white font-semibold">Rawalpindi Office</h4>
              <p className="text-gray-400 text-sm">
                Zumurd Plaza, District Court, Rawalpindi.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.847081354185!2d73.06878747401348!3d33.58331944234823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df930df79717bf%3A0x299816f22902ae0!2sDistrict%20Courts%20Rawalpindi!5e0!3m2!1sen!2s!4v1741783258961!5m2!1sen!2s"
                className="w-full h-52 rounded-lg mt-2"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
