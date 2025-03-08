import { ArrowRight, BarChart2, BookOpen, ClipboardList, Database } from "lucide-react"
import { motion } from "framer-motion"

const products = [
  {
    name: "CRM Solution",
    description: "Streamline customer relationships and boost sales efficiency.",
    icon: BarChart2,
    color: "bg-blue-500",
  },
  {
    name: "Learning Management System",
    description: "Empower your team with a robust e-learning platform.",
    icon: BookOpen,
    color: "bg-green-500",
  },
  {
    name: "Test Automation App",
    description: "Accelerate software testing with our intelligent automation tools.",
    icon: ClipboardList,
    color: "bg-purple-500",
  },
  {
    name: "ERP System",
    description: "Integrate and manage all aspects of your business operations.",
    icon: Database,
    color: "bg-red-500",
  },
]

export default function ProductGrid() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-900">Our Digital Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className={`${product.color} p-6`}>
              <product.icon className="w-12 h-12 text-white" />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

