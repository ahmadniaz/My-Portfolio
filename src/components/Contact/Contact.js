import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import Particle from "../Particle";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaGlobe,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaClock,
  FaUser,
  FaComment
} from "react-icons/fa";

function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "ahmadniazpk123@gmail.com",
      link: "mailto:ahmadniazpk123@gmail.com",
      color: "from-accent-blue to-accent-purple",
      description: "Send me an email anytime"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+358 44 9331127",
      link: "tel:+358449331127",
      color: "from-accent-green to-accent-blue",
      description: "Call or WhatsApp me"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Helsinki, Finland",
      link: "#",
      color: "from-accent-orange to-accent-red",
      description: "Available for remote work"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/muhammad-ahmad-niaz/",
      link: "https://www.linkedin.com/in/muhammad-ahmad-niaz/",
      color: "from-accent-blue to-accent-green",
      description: "Connect with me professionally"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/ahmadniaz",
      link: "https://github.com/ahmadniaz",
      color: "from-accent-purple to-accent-pink",
      description: "Check out my code"
    },
    {
      icon: FaGlobe,
      title: "Work Authorization",
      value: "EU Eligible",
      link: "#",
      color: "from-accent-green to-accent-blue",
      description: "Ready to work in EU"
    }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
    <section className="min-h-screen relative overflow-hidden neural-bg py-20" id="contact">
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </motion.div>

          {/* Contact Form and Info */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-8 space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white">Send a Message</h2>
                <p className="text-gray-300">I'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center space-x-2">
                    <FaUser className="text-accent-blue" />
                    <span>Name</span>
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm flex items-center space-x-1">
                      <FaExclamationCircle />
                      <span>{errors.name.message}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center space-x-2">
                    <FaEnvelope className="text-accent-blue" />
                    <span>Email</span>
                  </label>
                  <input
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm flex items-center space-x-1">
                      <FaExclamationCircle />
                      <span>{errors.email.message}</span>
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center space-x-2">
                    <FaComment className="text-accent-blue" />
                    <span>Subject</span>
                  </label>
                  <input
                    {...register("subject", { required: "Subject is required" })}
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm flex items-center space-x-1">
                      <FaExclamationCircle />
                      <span>{errors.subject.message}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center space-x-2">
                    <FaComment className="text-accent-blue" />
                    <span>Message</span>
                  </label>
                  <textarea
                    {...register("message", { 
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters"
                      }
                    })}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm flex items-center space-x-1">
                      <FaExclamationCircle />
                      <span>{errors.message.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-purple hover:to-accent-pink text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg"
                  >
                    <FaCheckCircle />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg"
                  >
                    <FaExclamationCircle />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Contact Information</h2>
                <p className="text-gray-300">Choose your preferred way to reach out</p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={index}
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="glass-card p-6 space-y-3 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
                            {contact.title}
                          </h3>
                          <p className="text-gray-300 font-medium">{contact.value}</p>
                          <p className="text-gray-400 text-sm">{contact.description}</p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Response Time */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <FaClock className="text-accent-green text-2xl" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Response Time</h3>
                    <p className="text-gray-300">Usually within 24 hours</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  I'm committed to responding to all inquiries promptly. For urgent matters, 
                  feel free to call or send a WhatsApp message.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="glass-card p-8 space-y-4">
              <h2 className="text-3xl font-bold text-white">
                Let's build something amazing together! 🚀
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Whether you have a project in mind or just want to chat about technology, 
                I'm always excited to connect with fellow developers and innovators.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <motion.a
                  href="https://www.linkedin.com/in/muhammad-ahmad-niaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-neural"
                >
                  <FaLinkedin className="mr-2" />
                  Connect on LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/ahmadniaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline-neural"
                >
                  <FaGithub className="mr-2" />
                  View GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
