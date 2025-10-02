import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { 
  FaGithub, 
  FaLinkedin, 
  FaArrowDown, 
  FaMapMarkerAlt,
  FaCode,
  FaBrain,
  FaRocket
} from "react-icons/fa";

function Home() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

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

  const floatingCodeSnippets = [
    { text: "const developer = new FullStackDev();", delay: 0 },
    { text: "await developer.buildAI();", delay: 1 },
    { text: "return scalableSaaS;", delay: 2 },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden neural-bg" id="home">
      <Particle />
      
      {/* Neural Network Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Code Snippets */}
        {floatingCodeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            className="absolute text-accent-blue font-mono text-sm opacity-30"
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: snippet.delay,
            }}
          >
            {snippet.text}
          </motion.div>
        ))}

        {/* Geometric Shapes */}
        <motion.div
          className="absolute w-32 h-32 border border-accent-purple/20 rounded-full"
          style={{
            left: "10%",
            top: "20%",
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute w-24 h-24 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-lg"
          style={{
            right: "15%",
            top: "60%",
          }}
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-3"
            >
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl"
              >
                👋
              </motion.span>
              <span className="text-2xl font-semibold text-gray-300">
                Hello! I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl lg:text-7xl font-black leading-tight"
            >
              <span className="gradient-text">MUHAMMAD</span>
              <br />
              <span className="gradient-text-accent">AHMAD</span>
            </motion.h1>

            {/* Title */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaCode className="text-accent-blue text-xl" />
                <span className="text-2xl font-bold gradient-text-ai">
                  Full Stack Developer
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBrain className="text-accent-purple text-xl" />
                <span className="text-xl font-semibold text-gray-300">
                  & AI Engineer
                </span>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2 text-gray-400"
            >
              <FaMapMarkerAlt className="text-accent-green" />
              <span>Helsinki, Finland</span>
              <span className="text-sm">🇫🇮</span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed max-w-2xl"
            >
              Full Stack Developer with <span className="text-accent-blue font-semibold">4+ years</span> of experience 
              building <span className="text-accent-purple font-semibold">scalable SaaS applications</span>. 
              Specialized in <span className="text-accent-green font-semibold">AI-powered document processing</span>, 
              TypeScript, React.js, and AWS cloud solutions.
            </motion.p>

            {/* Typewriter */}
            <motion.div variants={itemVariants} className="text-xl">
              <Type />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="btn-neural"
              >
                <FaArrowDown className="mr-2" />
                Learn More
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ahmadniaz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-neural"
              >
                <FaGithub className="mr-2" />
                GitHub
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/muhammad-ahmad-niaz/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-neural"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </motion.a>
            </motion.div>

            {/* Social Stats */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-8 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">4+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-accent">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-ai">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-center"
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
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
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Main Image */}
              <motion.img
                src={homeLogo}
                alt="Muhammad Ahmad - Full Stack Developer"
                className="relative z-10 max-w-full h-auto filter drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <FaRocket className="text-white text-xl" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-accent-green to-accent-blue rounded-full flex items-center justify-center"
                animate={{
                  rotate: -360,
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <FaCode className="text-white text-lg" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-accent-blue rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      <Home2 />
    </section>
  );
}

export default Home;
