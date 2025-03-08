import React from 'react';
import { ClipboardList, Code, Rocket, ChevronRight } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-12 h-12 text-blue-500" />,
    title: "Consultation",
    description: "We start by understanding your needs and goals through in-depth discussions and strategic planning.",
  },
  {
    icon: <Code className="w-12 h-12 text-green-500" />,
    title: "Development",
    description: "Our expert team transforms your vision into reality using cutting-edge technologies and innovative solutions.",
  },
  {
    icon: <Rocket className="w-12 h-12 text-purple-500" />,
    title: "Launch",
    description: "We ensure a smooth deployment, provide comprehensive support, and help you achieve your digital objectives.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Streamlined Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive approach designed to transform your digital vision into reality with precision and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center">
                {/* Step Card */}
                <div className="bg-white w-full max-w-xs p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-blue-50 rounded-full p-4 inline-block mb-5">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-y-1/2">
                    <div className="w-full h-px bg-blue-200 absolute top-1/2 left-0"></div>
                    <ChevronRight 
                      className="text-blue-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
                      size={24} 
                    />
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}