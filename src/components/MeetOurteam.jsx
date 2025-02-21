import { motion } from "framer-motion";
import adv1 from "/src/assets/Raja babar.jpg";
import adv2 from "/src/assets/Tanveer.jpg";

const teamMembers = [
  {
    name: "Raja Babar Hameed",
    role: "Senior Attorney",
    image:  adv1 ,
  },
  {
    name: "Tanveer",
    role: "Criminal Defense Lawyer",
    image: adv2 ,
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-100 text-center relative overflow-hidden" id="meetourteam">
      {/* Background Gradient */}

      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-gray-800 mb-6 relative"
      >
        Meet Our Team
      </motion.h2>

      {/* Subtitle Animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto relative"
      >
        Our experienced legal professionals are dedicated to providing expert
        guidance and representation.
      </motion.p>

      {/* Team Members Grid */}
      <div className="flex justify-center gap-16 flex-wrap relative z-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 1, ease: "easeOut" }}
          >
            {/* Profile Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 w-44 h-44 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>

            {/* Member Name & Role */}
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
