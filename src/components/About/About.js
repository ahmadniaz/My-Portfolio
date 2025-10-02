import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { 
  FaCode, 
  FaBrain, 
  FaRocket, 
  FaUsers, 
  FaLightbulb,
  FaHeart
} from "react-icons/fa";

function About() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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

  const values = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: FaBrain,
      title: "AI Innovation",
      description: "Leveraging artificial intelligence to solve complex problems and create intelligent solutions."
    },
    {
      icon: FaRocket,
      title: "Performance",
      description: "Building fast, responsive applications that provide exceptional user experiences."
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "Working effectively in teams and delivering high-quality solutions."
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Continuously learning and adopting new technologies to stay ahead of the curve."
    },
    {
      icon: FaHeart,
      title: "Passion",
      description: "Genuine enthusiasm for technology and creating solutions that make a difference."
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden neural-bg py-20" id="about">
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
              Know Who <span className="gradient-text">I'M</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions that solve real-world problems through 
              cutting-edge technology and creative problem-solving.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-8 space-y-6"
            >
              <Aboutcard />
            </motion.div>

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
                  src={laptopImg}
                  alt="Muhammad Ahmad - About"
                  className="relative z-10 max-w-full h-auto filter drop-shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">
                My <span className="gradient-text-accent">Values</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The principles that guide my work and drive my passion for technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-card p-6 text-center space-y-4 group"
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-white text-2xl" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">
                Professional <span className="gradient-text">Skillset</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Technologies and frameworks I work with to build amazing applications
              </p>
            </div>
            <Techstack />
          </motion.div>

          {/* Tools Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">
                <span className="gradient-text-ai">Tools</span> I Use
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Development tools and platforms that enhance my productivity
              </p>
            </div>
            <Toolstack />
          </motion.div>

          {/* GitHub Section */}
          <motion.div variants={itemVariants}>
            <Github />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
