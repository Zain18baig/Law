import { motion } from "framer-motion";
import adv1 from "/src/assets/Tanveer.jpg";
import adv2 from "/src/assets/favicon_io/adv.jpeg";
import adv3 from "/src/assets/favicon_io/adv.jpeg";
import adv4 from "/src/assets/favicon_io/sdv 2.jpeg";
import adv5 from "/src/assets/favicon_io/adv5.jpeg";

const teamMembers = [
  {
    name: "Mr Tanweer Hussain Shar",
    role: "Advocate High Court Karachi",
    image: adv1,
  },
  {
    name: "Raja Zafar Iqbal Junjua",
    role: "Advocate High Court Rawalpindi",
    image: adv2,
  },
  {
    name: "Mian Tahir Mehmood",
    role: "Advocate High Court Lahore",
    image: adv4,
  },
  {
    name: "Tanzeel ur Rehman",
    role: "Advocate",
    image: adv5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const MeetOurTeam = () => {
  return (
    <section id="meetourteam" className="py-16 bg-gray-100 text-center">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Meet Our Team
      </motion.h2>

      <motion.div
        className="container mx-auto flex flex-wrap justify-center gap-8 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            variants={itemVariants}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MeetOurTeam;
