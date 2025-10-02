import React from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { FaGithub, FaCode, FaCalendarAlt, FaStar, FaGitAlt } from "react-icons/fa";

function Github() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
            <FaGithub className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold">
            Days I <span className="gradient-text">Code</span>
          </h2>
        </div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          My coding activity and development contributions
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 space-y-6"
      >
        <div className="flex items-center justify-center space-x-2 mb-6">
          <FaCalendarAlt className="text-accent-blue text-xl" />
          <span className="text-white font-semibold">GitHub Activity Calendar</span>
        </div>
        
        <div className="flex justify-center">
          <GitHubCalendar
            username="ahmadniaz"
            blockSize={15}
            blockMargin={5}
            color="#58A6FF"
            fontSize={16}
            style={{
              color: '#58A6FF',
              background: 'transparent'
            }}
            theme={{
              light: ['#f0f6fc', '#58a6ff', '#1f6feb', '#0d1117'],
              dark: ['#f0f6fc', '#58a6ff', '#1f6feb', '#0d1117']
            }}
          />
        </div>

        <div className="text-center space-y-2">
          <p className="text-gray-400 text-sm">
            Contributions in the last year
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
              <span>Less</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-accent-blue rounded-sm"></div>
              <span>More</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* GitHub Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass-card p-6 text-center space-y-4"
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
            <FaCode className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-white">Active Developer</h3>
          <p className="text-gray-300 text-sm">
            Consistent coding activity with regular commits and contributions
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass-card p-6 text-center space-y-4"
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent-green to-accent-blue rounded-full flex items-center justify-center">
            <FaGitAlt className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-white">Development</h3>
          <p className="text-gray-300 text-sm">
            Building innovative solutions and sharing technical knowledge
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass-card p-6 text-center space-y-4"
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent-orange to-accent-red rounded-full flex items-center justify-center">
            <FaStar className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-white">Quality Code</h3>
          <p className="text-gray-300 text-sm">
            Focus on clean, maintainable, and well-documented code
          </p>
        </motion.div>
      </div>

      {/* GitHub Profile Link */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-center"
      >
        <motion.a
          href="https://github.com/ahmadniaz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-gray-800 hover:bg-accent-blue text-white px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
        >
          <FaGithub className="text-xl" />
          <span>Visit My GitHub Profile</span>
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Github;