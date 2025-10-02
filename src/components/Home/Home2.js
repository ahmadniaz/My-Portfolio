import React from "react";
import { motion } from "framer-motion";
import AhmadNiaz from "../../Assets/AhmadNiaz.jpeg";
import { 
  AiFillGithub, 
  AiOutlineTwitter,
  AiOutlineMail
} from "react-icons/ai";
import { 
  FaLinkedinIn,
  FaCode,
  FaRocket,
  FaBrain,
  FaGlobe
} from "react-icons/fa";

function Home2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const interests = [
    {
      icon: FaCode,
      title: "Web Technologies",
      description: "Building modern, scalable web applications"
    },
    {
      icon: FaBrain,
      title: "AI & Machine Learning",
      description: "Creating intelligent solutions and automation"
    },
    {
      icon: FaRocket,
      title: "Innovation",
      description: "Exploring cutting-edge technologies and trends"
    },
    {
      icon: FaGlobe,
      title: "Global Impact",
      description: "Contributing to projects with worldwide reach"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-20"
        >
          {/* Introduction Section */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-black">
                  LET ME <span className="gradient-text">INTRODUCE</span> MYSELF
                </h1>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I am a passionate <span className="text-accent-blue font-semibold">Full Stack Developer</span> and 
                    <span className="text-accent-purple font-semibold"> AI Engineer</span> with 4+ years of experience 
                    building scalable SaaS applications and AI-powered solutions.
                  </p>
                  <p>
                    I specialize in modern web technologies including{" "}
                    <span className="text-accent-green font-semibold">
                      React.js, Node.js, TypeScript, Python, and AWS
                    </span>. 
                    My expertise spans from frontend development to backend architecture and machine learning integration.
                  </p>
                  <p>
                    My field of interest includes building innovative{" "}
                    <span className="text-accent-orange font-semibold">
                      Web Technologies and AI-powered solutions
                    </span>{" "}
                    that solve real-world problems and create meaningful impact.
                  </p>
                </div>
              </div>

              {/* Interests Grid */}
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="glass-card p-4 space-y-3"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
                        <Icon className="text-white text-lg" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">{interest.title}</h3>
                        <p className="text-gray-400 text-xs">{interest.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center items-center"
            >
              <motion.div
                className="relative"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.img
                  src={AhmadNiaz}
                  alt="Muhammad Ahmad - Full Stack Developer"
                  className="relative z-10 w-80 h-80 object-cover rounded-full border-4 border-accent-blue/30 filter drop-shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">
                FIND ME ON
              </h2>
              <p className="text-lg text-gray-300">
                Feel free to <span className="gradient-text font-semibold">connect</span> with me
              </p>
            </div>

            <div className="flex justify-center space-x-8">
              <motion.a
                href="https://github.com/ahmadniaz"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center text-white hover:from-accent-blue hover:to-accent-purple transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                <AiFillGithub className="text-2xl" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/muhammad-ahmad-niaz/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:from-accent-blue hover:to-accent-purple transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                <FaLinkedinIn className="text-2xl" />
              </motion.a>

              <motion.a
                href="https://twitter.com/ahmadniaz786"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white hover:from-accent-blue hover:to-accent-purple transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                <AiOutlineTwitter className="text-2xl" />
              </motion.a>

              <motion.a
                href="mailto:ahmadniazpk123@gmail.com"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white hover:from-accent-blue hover:to-accent-purple transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                <AiOutlineMail className="text-2xl" />
              </motion.a>
            </div>

            {/* Contact CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <motion.a
                href="/contact"
                className="btn-neural inline-flex items-center space-x-2"
              >
                <span>Get In Touch</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home2;