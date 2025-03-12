import { motion } from "framer-motion";
import Image from "/src/assets/Raja babar.jpg"; // Ensure the image path is correct
import kiki from "/src/assets/favicon_io/adv3.jpeg"; // Ensure the image path is correct

export const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-left"
        >
          <h3 className="text-xl md:text-2xl font-serif text-green-600">
            About us
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-3">
            Comprehensive Solutions for Complex Disputes & Transactions
          </h2>
          <div className="w-20 h-1 bg-green-600 my-4"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hameed Law Associates is a distinguished firm of legal
            professionals, with offices strategically located in the commercial
            hub of Karachi and the federal capital, Islamabad. Our practice
            spans a wide spectrum of legal areas, offering premier legal
            services in criminal, civil, and public law, with a strong focus on
            complex commercial disputes.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Recognized as a leader in advocacy, legal consultation, and dispute
            resolution, we are known for our analytical depth, strategic
            thinking, and results-driven approach. Currently, our Chambers is
            home to a team of highly skilled legal professionals, including five
            distinguished Partners, led by Raja Babar Hameed.
          </p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex flex-col items-center text-center"
        >
          {/* Advocate Image */}
          <img
            src={kiki} // Adjust path if needed
            alt="Advocate High Court"
            className="rounded-lg shadow-lg w-[90%] md:w-[80%] lg:w-[65%] xl:w-[70%] 2xl:w-[45%] h-auto"
          />

          {/* Advocate Name & Title (Always Below Image) */}
          <div className="mt-4 md:mt-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Raja Babar Hameed
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-green-700">
              Advocate High Court
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
