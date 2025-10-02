import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particle from "../Particle";
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaRocket,
  FaBrain,
  FaCode
} from "react-icons/fa";

function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const experiences = [
    {
      company: "Pinecrest Consulting",
      location: "USA (Remote)",
      position: "Full Stack Developer",
      duration: "July 2025 – Present",
      type: "AI/ML",
      icon: FaBrain,
      color: "from-accent-purple to-accent-pink",
      description: [
        "Architect and develop an AI-powered SaaS platform for table extraction from PDF/Excel documents using Python backend and Next.js/TypeScript frontend",
        "Lead comprehensive R&D implementing ML solutions with Docling, Tableformer, OpenAI API, and Google DocAI achieving 95%+ accuracy",
        "Integrate AWS Textract and multiple PDF extraction tools creating robust data pipeline for large-scale document processing",
        "Manage complete solo development lifecycle from research to deployment using Cursor AI for accelerated implementation"
      ],
      technologies: ["Python", "Next.js", "TypeScript", "AWS Textract", "Google DocAI", "OpenAI API", "Docling", "Tableformer"],
      achievements: ["95%+ accuracy", "Solo development", "AI-powered platform"]
    },
    {
      company: "Riyad Bank",
      location: "Saudi Arabia (Remote)",
      position: "Frontend Engineer",
      duration: "December 2023 – Present",
      type: "Banking",
      icon: FaBriefcase,
      color: "from-accent-blue to-accent-green",
      description: [
        "Developed secure multilingual banking interfaces using React.js, Material UI, and Redux Toolkit for international user base",
        "Integrated banking APIs with robust error handling and implemented form validation using Formik",
        "Participated in sprint planning, daily standups, and code reviews using Jira for project management"
      ],
      technologies: ["React.js", "Material UI", "Redux Toolkit", "Formik", "Jira", "Banking APIs"],
      achievements: ["Multilingual support", "Secure interfaces", "International scale"]
    },
    {
      company: "Webevis Technologies",
      location: "Pakistan",
      position: "Full Stack Developer",
      duration: "May 2023 – December 2023",
      type: "NGO Platform",
      icon: FaRocket,
      color: "from-accent-green to-accent-blue",
      description: [
        "Worked as a full-stack developer for EU NGO platform using React.js, Node.js, and PostgreSQL",
        "Migrated Redux-Saga to Redux Toolkit improving application performance by 40% and code maintainability",
        "Implemented interactive dashboards with Highcharts and managed complex form workflows with Formik"
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "Redux Toolkit", "Highcharts", "Formik"],
      achievements: ["40% performance boost", "EU platform", "Interactive dashboards"]
    },
    {
      company: "BlankSlate Technology",
      location: "Pakistan",
      position: "JAM Stack Developer",
      duration: "August 2021 – May 2022",
      type: "E-commerce",
      icon: FaCode,
      color: "from-accent-orange to-accent-red",
      description: [
        "Built responsive e-commerce frontend using React.js and Material UI with Stripe payment integration",
        "Converted Figma designs into pixel-perfect, mobile-first interfaces optimizing for performance and SEO"
      ],
      technologies: ["React.js", "Material UI", "Stripe", "Figma", "SEO", "E-commerce"],
      achievements: ["Payment integration", "Mobile-first", "SEO optimized"]
    }
  ];

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

  return (
    <section className="min-h-screen relative overflow-hidden neural-bg py-20" id="experience">
      <Particle />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-black">
              Professional <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building innovative solutions across international markets with a focus on AI, cloud technologies, and scalable applications.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-pink transform md:-translate-x-0.5"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full transform -translate-x-2 md:-translate-x-2 z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full animate-ping opacity-75"></div>
                    </div>

                    {/* Experience Card */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="glass-card p-8 space-y-6 group"
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center`}>
                              <Icon className="text-white text-xl" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">
                                {exp.company}
                              </h3>
                              <p className="text-accent-purple font-semibold">{exp.position}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="inline-block px-3 py-1 bg-accent-blue/20 text-accent-blue text-sm font-medium rounded-full">
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        {/* Location & Duration */}
                        <div className="flex items-center space-x-6 text-gray-400">
                          <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt className="text-accent-green" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FaCalendarAlt className="text-accent-orange" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-accent-green/20 text-accent-green text-sm font-medium rounded-full"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>

                        {/* Description */}
                        <div className="space-y-3">
                          {exp.description.map((desc, idx) => (
                            <p key={idx} className="text-gray-300 leading-relaxed flex items-start">
                              <span className="text-accent-blue mr-2 mt-1">▶</span>
                              {desc}
                            </p>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="pt-4 border-t border-gray-700">
                          <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-accent-blue/20 hover:text-accent-blue transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Career Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">4+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text-accent">4</div>
              <div className="text-gray-400">Companies</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text-ai">10+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">3</div>
              <div className="text-gray-400">Countries</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
