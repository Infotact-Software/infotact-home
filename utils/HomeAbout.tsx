import React from 'react'
import { motion } from 'framer-motion';
import { Rocket, Code, Globe, Star, Link } from 'lucide-react';
import FeatureComponent from './Features';
const HomeAbout = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
          }
        }
      };
    
      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { 
            type: "spring", 
            stiffness: 100 
          }
        }
      };
  return (
    <div>
    <motion.section 
      className="py-6 relative xl:mr-0 lg:mr-5 mr-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto" id="about">
        <motion.div 
          className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1"
          variants={containerVariants}
        >
          <motion.div 
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
            variants={containerVariants}
          >
            <motion.div 
              className="w-full flex-col justify-center items-start gap-8 flex"
              variants={containerVariants}
            >
              <motion.div 
                className="flex-col justify-start lg:items-start items-center gap-4 flex"
                variants={itemVariants}
              >
                <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                  About Our Digital Solutions
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Empowering Digital Transformation
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    We are a cutting-edge SaaS company dedicated to driving digital innovation. Our comprehensive solutions help businesses thrive in the digital ecosystem through transformative technologies and strategic services.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="w-full flex-col justify-center items-start gap-6 flex"
                variants={containerVariants}
              >
                <motion.div 
                  className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1"
                  variants={containerVariants}
                >
                  <motion.div 
                    className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2">
                      <Rocket className="text-indigo-600" />
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        10+ Years
                      </h4>
                    </div>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Digital Innovation Leadership
                    </p>
                  </motion.div>
                  <motion.div 
                    className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2">
                      <Code className="text-indigo-600" />
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        250+ Projects
                      </h4>
                    </div>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Digital Solutions Delivered
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1"
                  variants={containerVariants}
                >
                  <motion.div 
                    className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2">
                      <Globe className="text-indigo-600" />
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        15+ Countries
                      </h4>
                    </div>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Global Digital Reach
                    </p>
                  </motion.div>
                  <motion.div 
                    className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2">
                      <Star className="text-indigo-600" />
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        98% Satisfaction
                      </h4>
                    </div>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Client Success Rate
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.button 
              className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href='/services' className="flex items-center gap-1.5">
              <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Explore Services
              </span>
              </a>
              <svg
                className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </motion.div>
          <motion.div 
            className="w-full lg:justify-start justify-center items-start flex"
            variants={itemVariants}
          >
            <motion.div 
              className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1717742431.png"
                alt="Digital Solutions Team"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
<FeatureComponent />
    </div>
  )
}

export default HomeAbout
