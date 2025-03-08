import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '' 
}) => {
  return (
    <motion.section 
      className={`py-16 md:py-24 px-4 md:px-8 lg:px-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 roboto-bold lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto open-sans-light lg:text-xl">
              {subtitle}
            </p>
          )}
        </motion.div>
        
        <div className="w-full">
          {children}
        </div>
      </div>
    </motion.section>
  );
};

export default Section;