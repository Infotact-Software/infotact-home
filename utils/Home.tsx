import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Rocket } from 'lucide-react'
import {ClientSection }from './ClientSection'
import Link from 'next/link'
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="bg-gray-50">
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-20 lg:pt-32 overflow-hidden relative"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div 
            variants={itemVariants}
            className="border border-indigo-600 p-1 w-72 mx-auto rounded-full flex items-center justify-between mb-6"
          >
            <span className="font-inter text-xs font-medium text-gray-900 ml-3">
              Accelerate Your Digital Transformation
            </span>
            <motion.span 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
            >
              <Rocket className="w-5 h-5 text-white" />
            </motion.span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center font-manrope font-bold text-5xl text-gray-900 mb-6 leading-tight"
          >
            Empower Your Business with 
            <span className="text-indigo-600"> Cutting-Edge Digital Solutions</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="max-w-xl mx-auto text-center text-lg font-normal leading-relaxed text-gray-600 mb-10"
          >
            We transform your digital vision into reality. From stunning websites to powerful apps and strategic marketing, we're your partner in digital success.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/get-a-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center py-4 px-8 text-base font-semibold text-white rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://cal.com/infotact-solutions-b7ehz0/30min?date=2025-01-27&month=2025-01"
              target='_blank'
              className="w-full sm:w-auto inline-flex items-center justify-center py-4 px-8 text-base font-semibold text-indigo-600 rounded-full border border-indigo-600 bg-white hover:bg-indigo-50 transition-all"
            >
              Book a Consultation
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-start"
          >
            <img 
              src="/4.png" 
              alt="Dashboard image" 
              className="rounded-t-3xl h-auto max-w-full object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>
      <ClientSection />
    </div>
  )
}

export default Home