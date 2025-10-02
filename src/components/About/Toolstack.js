import React from "react";
import { motion } from "framer-motion";
import {
  SiNetlify,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiJupyter,
  SiGooglecolab,
  SiGit,
  SiDocker,
  SiFigma,
  SiSlack,
  SiNotion,
  SiOpenai
} from "react-icons/si";

function Toolstack() {
  const tools = [
    {
      name: "VS Code",
      icon: SiVisualstudiocode,
      category: "IDE",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Git",
      icon: SiGit,
      category: "Version Control",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Docker",
      icon: SiDocker,
      category: "Containerization",
      color: "from-blue-400 to-blue-500"
    },
    {
      name: "Postman",
      icon: SiPostman,
      category: "API Testing",
      color: "from-orange-400 to-orange-500"
    },
    {
      name: "Figma",
      icon: SiFigma,
      category: "Design",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Jupyter",
      icon: SiJupyter,
      category: "Data Science",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Google Colab",
      icon: SiGooglecolab,
      category: "ML Platform",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Vercel",
      icon: SiVercel,
      category: "Deployment",
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Netlify",
      icon: SiNetlify,
      category: "Hosting",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Heroku",
      icon: SiHeroku,
      category: "Cloud Platform",
      color: "from-purple-400 to-purple-500"
    },
    {
      name: "Slack",
      icon: SiSlack,
      category: "Communication",
      color: "from-green-400 to-green-500"
    },
    {
      name: "Notion",
      icon: SiNotion,
      category: "Documentation",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Cursor AI",
      icon: SiOpenai,
      category: "AI Development",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Perplexity AI",
      icon: SiOpenai,
      category: "AI Research",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const categories = ["All", "IDE", "Version Control", "Containerization", "API Testing", "Design", "Data Science", "ML Platform", "Deployment", "Hosting", "Cloud Platform", "Communication", "Documentation", "AI Development", "AI Research"];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
            Development Tools
          </span>
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Tools and platforms that enhance my productivity and streamline the development workflow
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05 
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="glass-card p-6 flex flex-col items-center space-y-3 h-32 group-hover:border-accent-blue/50 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-2xl" />
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-bold text-white group-hover:text-accent-blue transition-colors duration-300">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {tool.category}
                  </p>
                </div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                {tool.name} - {tool.category}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tool Categories */}
      <div className="space-y-6">
        <h4 className="text-lg font-bold text-center text-white">Tool Categories</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <motion.span
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="px-4 py-2 bg-gray-800/50 text-gray-300 text-sm rounded-full hover:bg-accent-blue/20 hover:text-accent-blue transition-colors duration-300 cursor-pointer"
            >
              {category}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Toolstack;