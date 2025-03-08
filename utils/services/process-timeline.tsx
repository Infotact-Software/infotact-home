"use client"

import { motion } from "framer-motion"

interface ProcessStep {
  title: string
  description: string
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative ">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-foreground/20"></div>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="relative mb-8 flex items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex-1 text-right pr-8">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-primary-foreground/80">{step.description}</p>
          </div>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
            <span className="text-primary-foreground font-bold">{index + 1}</span>
          </div>
          <div className="flex-1 pl-8"></div>
        </motion.div>
      ))}
    </div>
  )
}

