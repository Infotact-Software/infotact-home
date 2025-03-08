import { motion } from "framer-motion"
import RegisterButton from "./RegisterButton"

export default function EventInfo() {
  return (
    <motion.div
      className="w-full md:w-1/2 min-h-[60vh] md:h-screen p-6 md:p-8 lg:p-12 flex flex-col justify-center overflow-y-auto"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
       Infotact Workshop on Data Science and Generative AI
      </motion.h1>
      <motion.div
        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-yellow-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        15th February 2025.
      </motion.div>
      <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-12">
        Join Infotact Solutions' exclusive online Workshop on Data Science and AI on 15th February 2025 to explore advanced concepts, hands-on tools, and real-world applications guided by industry experts. Open to students, professionals, and enthusiasts—register now to secure your spot!
      </p>
      <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-yellow-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-base sm:text-lg md:text-xl">Online</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 text-yellow-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-base sm:text-lg md:text-xl">support@infotact.in</span>
        </div>
      </div>
      <RegisterButton />
    </motion.div>
  )
}

