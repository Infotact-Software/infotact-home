import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    name: "TechCorp CRM",
    description: "Customized CRM solution for a leading tech company, resulting in 30% increase in sales efficiency.",
    image: "/crm.jpg",
  },
  {
    name: "EduHub LMS",
    description: "Comprehensive LMS for a university, facilitating remote learning for over 50,000 students.",
    image: "/lms.jpg",
  },
  {
    name: "AutoTest Pro",
    description: "Advanced test automation app for a software giant, reducing QA time by 40%.",
    image: "/exam.jpg",
  },
  {
    name: "MegaCorp ERP",
    description:
      "Fully integrated ERP system for a multinational corporation, streamlining operations across 20 countries.",
    image: "/erp.jpg",
  },
]

export default function ClientProjects() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-900">Client Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

