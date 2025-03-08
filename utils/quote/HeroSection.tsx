import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-20">
      <div className="lg:w-1/2 mb-12 lg:mb-0">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Transform Your <span className="text-blue-600">Digital Presence</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Get a tailored quote for cutting-edge web development, app creation, AI/ML solutions, and strategic digital
          marketing services.
        </p>
        <a
          href="#contact-form"
          className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Get Your Free Quote
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="relative">
          <Image
            src="/d2.jpg"
            alt="Digital Solutions"
            width={600}
            height={600}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

