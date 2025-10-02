import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particle from "../Particle";
import pdf from "../../Assets/Muhammad_Ahmad_Fullstack_Developer.pdf";
import { 
  AiOutlineDownload, 
  AiOutlineMail, 
  AiOutlinePhone, 
  AiOutlineFileText,
  AiOutlineCalendar,
  AiOutlineUser
} from "react-icons/ai";
import { 
  FaLinkedin, 
  FaGithub, 
  FaGlobe,
  FaGraduationCap,
  FaCertificate,
  FaLanguage,
  FaAward,
  FaMapMarkerAlt
} from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "https://drive.google.com/file/d/1bJ2aW_C-5kZVvcVw1VJwKVcKTcb3K3Nu/view?usp=share_link";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [showPDF, setShowPDF] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const resumeData = {
    personalInfo: {
      name: "Muhammad Ahmad",
      title: "Full Stack Developer & AI Engineer",
      email: "ahmadniazpk123@gmail.com",
      phone: "+358 44 9331127",
      location: "Helsinki, Finland",
      linkedin: "linkedin.com/in/muhammad-ahmad-niaz/",
      github: "github.com/ahmadniaz",
      workAuth: "EU Eligible"
    },
    summary: "Full Stack Developer with 4+ years of experience owning the full product lifecycle — from research and architecture to deployment and optimization. Skilled in building scalable SaaS applications with TypeScript, React.js, Next.js, Node.js, Python, and AWS. Specialized in AI-powered document processing and machine learning integration.",
    education: {
      degree: "Master of Science in Information Technology",
      university: "Åbo Akademi University, Finland",
      period: "2024 – 2026"
    },
    certifications: [
      "IELTS Academic 7.5 (C1 Proficiency)",
      "ML & Data Science Bootcamp (Udemy)"
    ],
    languages: [
      { name: "English", level: "C1 Proficient", percentage: 90 },
      { name: "Urdu", level: "Native", percentage: 100 },
      { name: "Finnish", level: "Beginner", percentage: 30 }
    ]
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

  return (
    <section className="min-h-screen relative overflow-hidden neural-bg py-20" id="resume">
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
              My <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Download my resume or explore the interactive version below to learn more about my professional journey.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
            <motion.a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neural flex items-center space-x-3"
            >
              <AiOutlineDownload className="text-xl" />
              <span>Download PDF</span>
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPDF(!showPDF)}
              className="btn-outline-neural flex items-center space-x-3"
            >
              <AiOutlineFileText className="text-xl" />
              <span>{showPDF ? "Hide" : "Show"} PDF Preview</span>
            </motion.button>
          </motion.div>

          {/* PDF Preview */}
          {showPDF && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8"
            >
              <div className="flex justify-center">
                <Document file={pdf} className="flex justify-center">
                  <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
                </Document>
              </div>
            </motion.div>
          )}

          {/* Interactive Resume Content */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-3 gap-8">
            {/* Personal Information Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-8 space-y-6"
            >
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
                  <AiOutlineUser className="text-white text-3xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{resumeData.personalInfo.name}</h2>
                  <p className="text-accent-blue font-semibold">{resumeData.personalInfo.title}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <AiOutlineMail className="text-accent-blue flex-shrink-0" />
                  <span className="text-sm">{resumeData.personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <AiOutlinePhone className="text-accent-green flex-shrink-0" />
                  <span className="text-sm">{resumeData.personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaMapMarkerAlt className="text-accent-orange flex-shrink-0" />
                  <span className="text-sm">{resumeData.personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaLinkedin className="text-accent-blue flex-shrink-0" />
                  <span className="text-sm">{resumeData.personalInfo.linkedin}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaGithub className="text-accent-purple flex-shrink-0" />
                  <span className="text-sm">{resumeData.personalInfo.github}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaGlobe className="text-accent-green flex-shrink-0" />
                  <span className="text-sm">{resumeData.personalInfo.workAuth}</span>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Professional Summary */}
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card p-8 space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
                    <AiOutlineFileText className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Professional Summary</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{resumeData.summary}</p>
              </motion.div>

              {/* Education */}
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card p-8 space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-green to-accent-blue rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent-blue pl-6">
                    <h4 className="text-xl font-semibold text-white">{resumeData.education.degree}</h4>
                    <p className="text-accent-blue font-medium">{resumeData.education.university}</p>
                    <div className="flex items-center space-x-2 text-gray-400 mt-2">
                      <AiOutlineCalendar className="text-accent-orange" />
                      <span>{resumeData.education.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card p-8 space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-orange to-accent-red rounded-full flex items-center justify-center">
                    <FaCertificate className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {resumeData.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <FaAward className="text-accent-orange flex-shrink-0" />
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card p-8 space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full flex items-center justify-center">
                    <FaLanguage className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Languages</h3>
                </div>
                <div className="space-y-4">
                  {resumeData.languages.map((lang, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{lang.name}</span>
                        <span className="text-gray-400 text-sm">{lang.level}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="bg-gradient-to-r from-accent-blue to-accent-purple h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Overview */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">
                <span className="gradient-text">Skills</span> Overview
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Technical expertise across multiple domains with focus on modern web technologies and AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">4+</span>
                </div>
                <h3 className="text-lg font-bold text-white">Years Experience</h3>
                <p className="text-gray-400 text-sm">Full Stack Development</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent-green to-accent-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">10+</span>
                </div>
                <h3 className="text-lg font-bold text-white">Technologies</h3>
                <p className="text-gray-400 text-sm">Modern Stack</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent-orange to-accent-red rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">50+</span>
                </div>
                <h3 className="text-lg font-bold text-white">Projects</h3>
                <p className="text-gray-400 text-sm">Completed</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent-purple to-accent-pink rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-white">Countries</h3>
                <p className="text-gray-400 text-sm">Worked In</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ResumeNew;