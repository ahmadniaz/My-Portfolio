import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particle from "../Particle";
// Import project images
import EZclothing from "../../Assets/Projects/EZclothing.PNG";
import GithubFinder from "../../Assets/Projects/GithubFinder.PNG";
import OnlineContacts from "../../Assets/Projects/OnlineContacts.PNG";
import PricePrediction from "../../Assets/Projects/bulldozer-price-detection.PNG";
import BreedDetection from "../../Assets/Projects/dog-breed-detection.PNG";
import DiseaseDetection from "../../Assets/Projects/heart-disease-detection.PNG";
import CommissionTracker from "../../Assets/Projects/commission tracker.png";
import GreenMe from "../../Assets/Projects/greenme.png";
import BankingPlaceholder from "../../Assets/Projects/banking-placeholder.svg";
import { 
  FaSearch, 
  FaFilter, 
  FaCode, 
  FaBrain, 
  FaRocket,
  FaGlobe,
  FaDatabase
} from "react-icons/fa";

function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const projects = [
    {
      id: 1,
      title: "AI Document Processing Platform",
      description: "Full-stack ML application for automated table extraction from PDF/Excel documents using Python backend and Next.js/TypeScript frontend. Achieved 95%+ accuracy with AWS Textract, Google DocAI, Docling, and Tableformer integration.",
      imgPath: CommissionTracker,
      category: "AI/ML",
      icon: FaBrain,
      color: "from-accent-purple to-accent-pink",
      technologies: ["Python", "Next.js", "TypeScript", "AWS Textract", "Google DocAI", "OpenAI API"],
      ghLink: "https://github.com/tahasheikh786/commission-tracker",
      demoLink: "https://commission-tracker-ochre.vercel.app/",
      featured: true,
      year: "2025"
    },
    {
      id: 2,
      title: "GreenMe Platform (UN NGO)",
      description: "International collaboration project for EU NGO platform with enhanced maintainability through architectural improvements. Built with React.js, Redux Toolkit, and REST APIs for sustainable development initiatives.",
      imgPath: GreenMe,
      category: "Full Stack",
      icon: FaGlobe,
      color: "from-accent-green to-accent-blue",
      technologies: ["React.js", "Redux Toolkit", "Node.js", "PostgreSQL", "REST APIs"],
      ghLink: "https://github.com/Ndani-Technologies/greenme-fe",
      demoLink: "https://greenme.fleetforum.org",
      featured: true,
      year: "2023"
    },
    {
      id: 3,
      title: "Digital Banking Suite",
      description: "Component-driven frontend development for secure multilingual banking applications. Built with React.js, Material UI, and Redux Toolkit for international user base with robust error handling and form validation.",
      imgPath: BankingPlaceholder,
      category: "Frontend",
      icon: FaCode,
      color: "from-accent-blue to-accent-green",
      technologies: ["React.js", "Material UI", "Redux Toolkit", "Formik", "Banking APIs"],
      ghLink: "https://github.com/ahmadniaz",
      demoLink: "#",
      featured: true,
      year: "2023"
    },
    {
      id: 4,
      title: "EZclothing E-commerce",
      description: "Complete JAM stack e-commerce application built from scratch. Features include Strapi headless CMS backend, React.js frontend with Material UI, Stripe payment integration, and comprehensive product management.",
      imgPath: EZclothing,
      category: "Full Stack",
      icon: FaRocket,
      color: "from-accent-orange to-accent-red",
      technologies: ["React.js", "Strapi", "Material UI", "Stripe", "JAM Stack"],
      ghLink: "https://github.com/ahmadniaz/organic-frontend-react",
      demoLink: "https://ezclothing.netlify.app/",
      featured: false,
      year: "2022"
    },
    {
      id: 5,
      title: "Bulldozer Price Prediction",
      description: "Machine learning regression model to predict bulldozer prices using Random Forest ensemble technique. Implemented hyperparameter tuning with RandomizedSearchCV and achieved optimal performance with RootMeanSquaredLogError metric.",
      imgPath: PricePrediction,
      category: "AI/ML",
      icon: FaBrain,
      color: "from-accent-purple to-accent-pink",
      technologies: ["Python", "Scikit-learn", "Random Forest", "Pandas", "NumPy"],
      ghLink: "https://github.com/ahmadniaz/bulldozer-price-prediction",
      demoLink: "https://github.com/ahmadniaz/bulldozer-price-prediction",
      featured: false,
      year: "2022"
    },
    {
      id: 6,
      title: "Dog Breed Detection",
      description: "Computer vision model to detect dog breeds from images using transfer learning with MobileNetV2. Trained on tens of thousands of images across 120 breed labels with GPU acceleration on Google Colab.",
      imgPath: BreedDetection,
      category: "AI/ML",
      icon: FaBrain,
      color: "from-accent-purple to-accent-pink",
      technologies: ["Python", "TensorFlow", "MobileNetV2", "Transfer Learning", "Computer Vision"],
      ghLink: "https://github.com/ahmadniaz/dog-breed-detection",
      demoLink: "https://colab.research.google.com/drive/1gfVC7YnLHxVZpUAnIPjoEVqO_GE1DM8R?usp=sharing",
      featured: false,
      year: "2022"
    },
    {
      id: 7,
      title: "Heart Disease Detection",
      description: "Classification model to detect heart disease in patients using Logistic Regression. Comprehensive EDA with correlation analysis, cross-tabulation, and visualization techniques. Optimized with RandomizedSearchCV for hyperparameter tuning.",
      imgPath: DiseaseDetection,
      category: "AI/ML",
      icon: FaBrain,
      color: "from-accent-purple to-accent-pink",
      technologies: ["Python", "Scikit-learn", "Logistic Regression", "EDA", "Data Visualization"],
      ghLink: "https://github.com/ahmadniaz/heart-disease-detection",
      demoLink: "https://github.com/ahmadniaz/heart-disease-detection",
      featured: false,
      year: "2022"
    },
    {
      id: 8,
      title: "Online Contact Keeper",
      description: "MERN stack application for managing contacts with user authentication and CRUD operations. Features JWT authentication, bcrypt password hashing, and Context API for state management.",
      imgPath: OnlineContacts,
      category: "Full Stack",
      icon: FaDatabase,
      color: "from-accent-green to-accent-blue",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Context API"],
      ghLink: "https://github.com/ahmadniaz/Contact-Keeper",
      demoLink: "https://savecontactsonline.herokuapp.com/",
      featured: false,
      year: "2021"
    },
    {
      id: 9,
      title: "GitHub Finder",
      description: "React.js application that integrates with GitHub API to search and display user profiles. Features include user search, profile display, and repository information with responsive design.",
      imgPath: GithubFinder,
      category: "Frontend",
      icon: FaCode,
      color: "from-accent-blue to-accent-green",
      technologies: ["React.js", "GitHub API", "Axios", "CSS3", "Responsive Design"],
      ghLink: "https://github.com/ahmadniaz/GithubFiner",
      demoLink: "https://githubfindereactapp.netlify.app/",
      featured: false,
      year: "2021"
    }
  ];

  const categories = [
    { name: "All", icon: FaFilter, count: projects.length },
    { name: "AI/ML", icon: FaBrain, count: projects.filter(p => p.category === "AI/ML").length },
    { name: "Full Stack", icon: FaRocket, count: projects.filter(p => p.category === "Full Stack").length },
    { name: "Frontend", icon: FaCode, count: projects.filter(p => p.category === "Frontend").length },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === "All" || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="min-h-screen relative overflow-hidden neural-bg py-20" id="projects">
      <Particle />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-black">
              Featured <span className="gradient-text">Projects</span>
        </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A showcase of my recent work including AI-powered applications, full-stack solutions, and machine learning projects.
        </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(category.name)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === category.name
                        ? "bg-accent-blue text-white shadow-lg shadow-accent-blue/25"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span>{category.name}</span>
                    <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter + searchTerm}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="group"
                    >
                      <div className="glass-card p-6 space-y-6 h-full relative overflow-hidden">
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4 z-10">
                            <span className="bg-gradient-to-r from-accent-blue to-accent-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                              Featured
                            </span>
                          </div>
                        )}

                        {/* Project Image */}
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            src={project.imgPath}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Project Info */}
                        <div className="space-y-4">
                          {/* Header */}
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center`}>
                                <Icon className="text-white text-lg" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">
                                  {project.title}
                                </h3>
                                <div className="flex items-center space-x-2 text-sm text-gray-400">
                                  <span>{project.year}</span>
                                  <span>•</span>
                                  <span className="text-accent-purple font-medium">{project.category}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 leading-relaxed text-sm line-clamp-3">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 4).map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full hover:bg-accent-blue/20 hover:text-accent-blue transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                                +{project.technologies.length - 4} more
                              </span>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-3 pt-4">
                            <motion.a
                              href={project.ghLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 bg-gray-800 hover:bg-accent-blue text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium"
                            >
                              View Code
                            </motion.a>
                            <motion.a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-purple hover:to-accent-pink text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                            >
                              Live Demo
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}

          {/* Project Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">{projects.length}</div>
              <div className="text-gray-400">Total Projects</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text-accent">
                {projects.filter(p => p.category === "AI/ML").length}
              </div>
              <div className="text-gray-400">AI/ML Projects</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text-ai">
                {projects.filter(p => p.category === "Full Stack").length}
              </div>
              <div className="text-gray-400">Full Stack</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-400">Featured</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;