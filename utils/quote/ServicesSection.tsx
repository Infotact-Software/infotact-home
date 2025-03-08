import { Code, Smartphone, Brain, BarChart } from "lucide-react"

const services = [
  {
    icon: <Code className="w-12 h-12 text-blue-600" />,
    title: "Web Development",
    description: "Custom websites and web applications tailored to your needs.",
    color: "bg-blue-50",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-green-600" />,
    title: "App Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    color: "bg-green-50",
  },
  {
    icon: <Brain className="w-12 h-12 text-purple-600" />,
    title: "AI/ML Solutions",
    description: "Intelligent systems and machine learning models for your business.",
    color: "bg-purple-50",
  },
  {
    icon: <BarChart className="w-12 h-12 text-red-600" />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence.",
    color: "bg-red-50",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        We offer a comprehensive suite of digital solutions to help your business thrive in the digital landscape.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.color} p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2`}
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-center mb-4">{service.title}</h3>
            <p className="text-gray-700 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

