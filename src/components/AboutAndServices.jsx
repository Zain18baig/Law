import { motion } from "framer-motion";
import Image from "/src/assets/Raja babar.jpg"; // If using Next.js, otherwise use <img>
import kiki from "/src/assets/Raja babar.jpg"; // Ensure the image is in the public folder

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
          <h3 className="text-lg font-serif text-green-600">About us</h3>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mt-2">
            We deliver end-to-end solutions, backed by our expertise and
            experience in handling sophisticated disputes and complex commercial
            transactions.
          </h2>
          <div className="w-16 h-1 bg-green-600 my-4"></div>
          <p className="text-gray-600 leading-relaxed">
            Hameed Law Associates is a distinguished firm of legal
            professionals, with offices strategically located in the commercial
            hub of Karachi and the federal capital, Islamabad. Our practice
            spans a wide spectrum of legal areas, offering premier legal
            services in criminal, civil, and public law, with a strong focus on
            complex commercial disputes. Our diverse clientele includes
            individuals, entrepreneurs, corporations, NGOs, regulatory bodies,
            and members of civil society. Our team of expert lawyers
            collaborates across multiple specialized practice areas, allowing us
            to form dynamic, multidisciplinary legal teams. This integrated
            approach enables us to provide comprehensive, innovative solutions
            tailored to the unique challenges our clients face. Recognized as a
            leader in advocacy, legal consultation, and dispute resolution, we
            are known for our analytical depth, strategic thinking, and
            results-driven approach. Currently, our Chambers is home to a team
            of highly skilled legal professionals, including five distinguished
            Partners, led by Raja Babar Hameed. They are supported by an
            exceptional group of clerks and administrative staff, all dedicated
            to delivering unparalleled legal services.
          </p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 relative"
        >
          <img
            src="/src/assets/Raja babar.jpg" // Adjust path if needed
            alt="About Us"
            className="rounded-lg shadow-lg w-[90%] md:w-[80%] lg:w-[65%] xl:w-[70%] 2xl:w-[45%] h-auto"
          />

          {/* Service Badge */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
