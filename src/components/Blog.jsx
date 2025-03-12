import { motion } from "framer-motion";

export const BlogSection = () => {
  return (
    <section id="blog-section" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 text-center"
        >
          Legal Insights & Blogs
        </motion.h2>
        <p className="text-gray-600 text-center mt-4">
          Stay informed about the latest legal updates in various fields.
        </p>

        {/* Blog Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {/* Blog 1: Anti-Narcotics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-6 shadow-md rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Anti-Narcotics Laws: What You Need to Know
            </h3>
            <p className="text-gray-600 mt-2">
              Anti-narcotics laws are strict regulations aimed at combating drug
              trafficking and usage. These laws vary across regions but
              generally impose severe penalties on possession, distribution, and
              production of illegal substances.
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-600">
              <li>Types of drug-related offenses</li>
              <li>Legal consequences and penalties</li>
              <li>Defending against drug-related charges</li>
              <li>Narcotics offenses</li>
            </ul>
            <p className="text-gray-600 mt-4">
              If you're facing a narcotics-related charge, legal representation
              is crucial. A strong defense can help reduce or dismiss charges
              based on lack of evidence, unlawful search, or improper arrest
              procedures.
            </p>
          </motion.div>

          {/* Blog 2: Customs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-6 shadow-md rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Customs & Trade Laws: How to Avoid Legal Pitfalls
            </h3>
            <p className="text-gray-600 mt-2">
              Customs and trade laws govern the import and export of goods.
              Violations of these laws can lead to hefty fines, confiscation of
              goods, and even criminal charges.
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-600">
              <li>Common customs violations (import and export related offenses)</li>
              <li>How to comply with trade regulations</li>
              <li>Legal options if facing customs disputes</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Businesses and individuals must ensure they follow international
              trade agreements, taxation rules, and customs declarations to
              avoid penalties. Consulting a legal expert can help navigate these
              complexities.
            </p>
          </motion.div>

          {/* Blog 3: Special Laws */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-6 shadow-md rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Special Laws: Navigating Unique Legal Challenges
            </h3>
            <p className="text-gray-600 mt-2">
              Special laws refer to legal provisions that apply to specific
              cases or categories, such as cybercrime, anti-money laundering,
              and corporate fraud.
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-600">
              <li>Understanding cybercrime laws</li>
              <li>Money laundering regulations</li>
              <li>Corporate and financial fraud cases</li>
            </ul>
            <p className="text-gray-600 mt-4">
              These laws are constantly evolving, making it essential to stay
              updated. Professional legal assistance ensures compliance and
              effective defense in case of allegations.
            </p>
          </motion.div>

          {/* Blog 4: Criminal Defense */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-6 shadow-md rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Criminal Defense: Strategies for Complex Cases
            </h3>
            <p className="text-gray-600 mt-2">
              Facing criminal charges can be overwhelming, but an effective
              defense strategy can make a difference. Legal experts analyze
              evidence, witnesses, and procedural errors to build strong cases.
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-600">
              <li>Types of criminal offenses</li>
              <li>How a criminal defense lawyer can help</li>
              <li>Common defenses in criminal law</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Whether it's fraud, assault, or theft, legal professionals work to
              protect your rights and ensure a fair trial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
