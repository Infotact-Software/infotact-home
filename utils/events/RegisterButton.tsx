"use client"

import { motion } from "framer-motion"
import Link from "next/link"
export default function RegisterButton() {
  return (
    <>
    <motion.button
      className="relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-lg sm:text-xl font-bold overflow-hidden text-indigo-900 w-full md:w-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={()=>{
        window.open("https://forms.gle/A8SHVd89J7nTHokn9")
      }}
    >
      Register Now
      <motion.div
        className="absolute inset-0 flex justify-center"
        initial={{ y: "100%" }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-4 sm:w-6 h-8 sm:h-10 bg-red-500 rounded-full mx-1"
            animate={{
              y: [0, -20, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>
    </motion.button>
    </>
  )
}

