import React from "react";
import { motion } from "framer-motion";
import { ImPointRight } from "react-icons/im";
import { FaQuoteLeft, FaQuoteRight, FaGraduationCap, FaMapMarkerAlt, FaCode, FaBrain } from "react-icons/fa";

function AboutCard() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
            <FaCode className="text-white text-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Hello! I'm Muhammad Ahmad</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaMapMarkerAlt className="text-accent-green" />
              <span>Full Stack Developer based in Helsinki, Finland</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-gray-300 leading-relaxed">
            I'm currently pursuing my <span className="text-accent-blue font-semibold">Master of Science in Information Technology</span> at 
            Åbo Akademi University (2024-2026) and have <span className="text-accent-purple font-semibold">4+ years of experience</span> building 
            scalable SaaS applications.
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            I specialize in <span className="text-accent-green font-semibold">AI-powered document processing</span>, 
            TypeScript, React.js, and AWS cloud solutions. My passion lies in creating innovative solutions 
            that solve real-world problems through cutting-edge technology.
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            With experience spanning international markets, from banking applications to AI-powered platforms, 
            I bring a unique perspective to every project I work on.
          </p>
        </motion.div>
      </div>

      {/* Education & Experience Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <FaGraduationCap className="text-accent-blue text-2xl" />
            <h4 className="text-lg font-bold text-white">Education</h4>
          </div>
          <div className="space-y-2">
            <p className="text-accent-blue font-semibold">MS Information Technology</p>
            <p className="text-gray-300 text-sm">Åbo Akademi University</p>
            <p className="text-gray-400 text-sm">2024 - 2026</p>
          </div>
        </div>

        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <FaBrain className="text-accent-purple text-2xl" />
            <h4 className="text-lg font-bold text-white">Specialization</h4>
          </div>
          <div className="space-y-2">
            <p className="text-accent-purple font-semibold">AI & Machine Learning</p>
            <p className="text-gray-300 text-sm">Document Processing</p>
            <p className="text-gray-400 text-sm">Cloud Solutions</p>
          </div>
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass-card p-6 space-y-4"
      >
        <h4 className="text-lg font-bold text-white">When I'm not coding, I enjoy:</h4>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3 text-gray-300">
            <ImPointRight className="text-accent-green flex-shrink-0" />
            <span>Playing Sports (Professional Cricketer)</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-300">
            <ImPointRight className="text-accent-green flex-shrink-0" />
            <span>Watching Movies and Anime</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-300">
            <ImPointRight className="text-accent-green flex-shrink-0" />
            <span>Traveling and Exploring New Cultures</span>
          </li>
                 <li className="flex items-center space-x-3 text-gray-300">
                   <ImPointRight className="text-accent-green flex-shrink-0" />
                   <span>Learning new technologies and frameworks</span>
                 </li>
        </ul>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glass-card p-8 text-center space-y-4"
      >
        <div className="flex justify-center space-x-2">
          <FaQuoteLeft className="text-accent-blue text-2xl" />
          <FaQuoteRight className="text-accent-purple text-2xl" />
        </div>
        <p className="text-xl font-semibold text-white italic leading-relaxed">
          "Building the future, one line of code at a time!"
        </p>
        <footer className="text-gray-400 font-medium">— Muhammad Ahmad</footer>
      </motion.div>
    </div>
  );
}

export default AboutCard;
