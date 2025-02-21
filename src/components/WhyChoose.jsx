import { motion } from "framer-motion";
import { FaShieldAlt, FaUsers, FaBalanceScale, FaAward } from "react-icons/fa";
export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800"
        >
          Why Choose Hameed Law Associates?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-4 max-w-3xl mx-auto"
        >
          Our firm is dedicated to providing **strategic, result-driven legal
          solutions** with integrity and professionalism. Here’s why clients
          trust us:
        </motion.p>

        {/* Key Strengths */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* 1. Proven Track Record */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition"
          >
            <FaAward className="text-4xl text-red-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Proven Track Record</h3>
            <p className="text-gray-600 mt-2">
              Decades of successful cases in **criminal, narcotics, and customs
              law**.
            </p>
          </motion.div>

          {/* 2. Experienced Legal Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition"
          >
            <FaUsers className="text-4xl text-red-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">
              Experienced Legal Team
            </h3>
            <p className="text-gray-600 mt-2">
              Lawyers with **over 20+ years of experience** in high-profile
              cases.
            </p>
          </motion.div>

          {/* 3. Strong Legal Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition"
          >
            <FaBalanceScale className="text-4xl text-red-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">
              Strong Legal Strategy
            </h3>
            <p className="text-gray-600 mt-2">
              A **personalized approach** to every case, ensuring the best
              outcome.
            </p>
          </motion.div>

          {/* 4. Client-Centered Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition"
          >
            <FaShieldAlt className="text-4xl text-red-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">
              Client-Centered Approach
            </h3>
            <p className="text-gray-600 mt-2">
              We fight for your **rights, freedom, and justice**, every step of
              the way.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
