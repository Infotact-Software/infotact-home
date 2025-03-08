import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HelpCircle, 
  ChevronDown, 
  Globe, 
  Layers, 
  Cpu, 
  BarChart 
} from 'lucide-react'

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const faqData = [
    {
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      question: "What digital solutions do you offer?",
      answer: "We provide end-to-end digital transformation services including web and mobile app development, AI & machine learning solutions, cloud engineering, digital marketing, and custom software development tailored to your business needs."
    },
    {
      icon: <Layers className="w-6 h-6 text-green-500" />,
      question: "How do you approach custom software development?",
      answer: "Our agile methodology focuses on collaborative design, iterative development, and continuous innovation. We combine cutting-edge technologies with deep industry insights to create scalable, future-proof solutions that drive business growth."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      question: "What makes your AI solutions unique?",
      answer: "Our AI solutions leverage advanced machine learning algorithms, natural language processing, and predictive analytics. We develop custom AI models that solve specific business challenges, providing intelligent insights and automation."
    },
    {
      icon: <BarChart className="w-6 h-6 text-orange-500" />,
      question: "How do you ensure project success?",
      answer: "We employ a robust project management approach with transparent communication, regular milestones, and adaptive strategies. Our team provides comprehensive support from concept to deployment, ensuring alignment with your business objectives."
    }
  ]

  const toggleAccordion = (index:number|null) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4 xl:max-w-6xl">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-indigo-50 rounded-full px-4 py-2 mb-4" id='faq'>
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-800 text-sm font-medium">
                Got Questions?
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Digital Solutions <br className="hidden md:block" /> 
            <span className="text-indigo-600">Simplified</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering businesses through innovative technology and strategic digital transformation
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                type: "spring",
                stiffness: 100 
              }}
              className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <div className="flex items-center space-x-4">
                  {faq.icon}
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown 
                    className={`h-6 w-6 transform transition-all ${
                      activeAccordion === index 
                        ? 'text-indigo-600 rotate-180' 
                        : 'text-gray-400 group-hover:text-indigo-500'
                    }`} 
                  />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: 'auto', 
                      opacity: 1,
                      transition: { 
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: { 
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    <p className="border-t pt-4 border-gray-100">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-indigo-600 text-white px-8 py-12 rounded-2xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Digital Landscape?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our digital solutions can drive your business forward.
            </p>
            <a  href="https://cal.com/infotact-solutions-b7ehz0/30min?date=2025-01-27&month=2025-01"
              target='_blank' className="text-indigo-600 font-bold hover:underline">
            <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1 shadow-lg">
              Schedule a Consultation
            </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Faq