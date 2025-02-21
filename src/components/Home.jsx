import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="relative w-full h-[80vh] flex items-center bg-cover bg-center px-6 md:px-16 top-15"
      style={{ backgroundImage: "url('/src/assets/hero-img.jpg')" }} // Ensure image is accessible
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content (Text Left) */}
      <div className="relative z-10 text-white max-w-3xl">
        <h3 className="text-lg tracking-widest text-green-500 font-serif">
          Raja Babar Hameed
        </h3>
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mt-2">
          Hameed Law & Associates
        </h1>
        <div className="w-20 h-1 bg-green-500 my-4"></div>
        <p className="text-lg md:text-xl leading-relaxed">
          With decades of experience in high-profile cases, our team of legal
          experts is committed to protecting your rights and ensuring justice.
          Whether facing criminal charges or complex customs disputes, we
          provide tailored legal strategies with the highest level of
          professionalism.
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-green-500 text-black text-lg font-semibold rounded-lg flex items-center hover:bg-green-600 transition">
          CONTACT US <span className="ml-2">➜</span>
        </button>
      </div>

      {/* Social Media Icons (Right Side) */}
    {/* Social Media Icons (Visible on Medium Screens & Above) */}
<div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4 text-white hidden md:flex flex-col">
  <a href="#" className="block hover:text-green-500 transition">
    <FaFacebookF size={24} />
  </a>
  <a href="#" className="block hover:text-green-500 transition">
    <FaTwitter size={24} />
  </a>
  <a href="#" className="block hover:text-green-500 transition">
    <FaLinkedinIn size={24} />
  </a>
</div>

    </div>
  );
};

export default Home;
