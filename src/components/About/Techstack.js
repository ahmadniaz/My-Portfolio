import React from "react";
import { motion } from "framer-motion";
import { FaStripe, FaAws } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiPostgresql,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiStrapi,
  SiTailwindcss,
  SiExpress,
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiTypescript,
  SiRedux,
  SiOpenai,
  SiGooglecloud,
  SiJira,
  SiMaterialdesign,
  SiFastapi,
} from "react-icons/si";

function Techstack() {
  const techCategories = [
    {
      title: "Programming Languages",
      color: "from-accent-blue to-accent-purple",
      technologies: [
        { icon: SiTypescript, name: "TypeScript" },
        { icon: DiJavascript1, name: "JavaScript" },
        { icon: SiPython, name: "Python" },
      ]
    },
    {
      title: "Frontend Technologies",
      color: "from-accent-purple to-accent-pink",
      technologies: [
        { icon: DiReact, name: "React.js" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiRedux, name: "Redux" },
        { icon: SiMaterialdesign, name: "Material UI" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
      ]
    },
    {
      title: "Backend Technologies",
      color: "from-accent-green to-accent-blue",
      technologies: [
        { icon: DiNodejs, name: "Node.js" },
        { icon: SiExpress, name: "Express.js" },
        { icon: SiPython, name: "Python" },
        { icon: DiJavascript1, name: "JavaScript" },
        { icon: SiStrapi, name: "Strapi" },
        { icon: SiFastapi, name: "FastAPI" },
      ]
    },
    {
      title: "Databases",
      color: "from-accent-orange to-accent-red",
      technologies: [
        { icon: DiPostgresql, name: "PostgreSQL" },
        { icon: DiMongodb, name: "MongoDB" },
        { icon: SiFirebase, name: "Firebase" },
      ]
    },
    {
      title: "Cloud & AI",
      color: "from-accent-blue to-accent-green",
      technologies: [
        { icon: FaAws, name: "AWS" },
        { icon: SiGooglecloud, name: "Google Cloud" },
        { icon: SiOpenai, name: "OpenAI" },
      ]
    },
    {
      title: "ML/AI Libraries",
      color: "from-accent-purple to-accent-pink",
      technologies: [
        { icon: SiNumpy, name: "NumPy" },
        { icon: SiPandas, name: "Pandas" },
        { icon: SiScikitlearn, name: "Scikit-learn" },
        { icon: SiTensorflow, name: "TensorFlow" },
      ]
    },
    {
      title: "Tools & Others",
      color: "from-accent-green to-accent-blue",
      technologies: [
        { icon: DiGit, name: "Git" },
        { icon: SiJira, name: "Jira" },
        { icon: FaStripe, name: "Stripe" },
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {techCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-center">
            <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
              {category.title}
            </span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {category.technologies.map((tech, techIndex) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: categoryIndex * 0.1 + techIndex * 0.05 
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="glass-card p-4 flex flex-col items-center space-y-2 w-32 h-28 group-hover:border-accent-blue/50 transition-all duration-300">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Icon className="text-2xl text-gray-300 group-hover:text-accent-blue transition-colors duration-300" />
                    </div>
                    <span className="text-xs text-gray-400 text-center font-medium group-hover:text-white transition-colors duration-300 leading-tight whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    {tech.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Techstack;
