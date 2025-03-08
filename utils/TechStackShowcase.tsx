"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Smartphone, Brain, Cpu, Search } from "lucide-react"

type Technology = {
  name: string
  category: "web" | "app" | "ml" | "ai"
}

const technologies: Technology[] = [
  // Web Development
  { name: "React", category: "web" },
  { name: "Next.js", category: "web" },
  { name: "Vue.js", category: "web" },
  { name: "Angular", category: "web" },
  { name: "Node.js", category: "web" },
  { name: "Express", category: "web" },
  { name: "GraphQL", category: "web" },
  { name: "TypeScript", category: "web" },
  { name: "JavaScript", category: "web" },
  { name: "HTML5", category: "web" },
  { name: "CSS3", category: "web" },
  { name: "Sass", category: "web" },
  { name: "Tailwind CSS", category: "web" },

  // App Development
  { name: "React Native", category: "app" },
  { name: "Flutter", category: "app" },
  { name: "Swift", category: "app" },
  { name: "Kotlin", category: "app" },
  { name: "Java", category: "app" },
  { name: "Xamarin", category: "app" },
  { name: "Ionic", category: "app" },

  // Machine Learning
  { name: "Python", category: "ml" },
  { name: "TensorFlow", category: "ml" },
  { name: "PyTorch", category: "ml" },
  { name: "Scikit-learn", category: "ml" },
  { name: "Pandas", category: "ml" },
  { name: "NumPy", category: "ml" },
  { name: "Keras", category: "ml" },

  // AI
  { name: "OpenAI", category: "ai" },
  { name: "Hugging Face", category: "ai" },
  { name: "NLTK", category: "ai" },
  { name: "Dialogflow", category: "ai" },
  { name: "IBM Watson", category: "ai" },
  { name: "Azure Cognitive Services", category: "ai" },
]

export default function TechStackShowcase() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTechnologies = technologies.filter((tech) => tech.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const categoryIcons = {
    web: <Globe className="w-6 h-6" />,
    app: <Smartphone className="w-6 h-6" />,
    ml: <Brain className="w-6 h-6" />,
    ai: <Cpu className="w-6 h-6" />,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Technology Stack</h1>

      <div className="max-w-4xl mx-auto">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search technologies..."
            className="w-full p-3 pl-10 rounded-lg bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web Dev</TabsTrigger>
            <TabsTrigger value="app">App Dev</TabsTrigger>
            <TabsTrigger value="ml">ML</TabsTrigger>
            <TabsTrigger value="ai">AI</TabsTrigger>
          </TabsList>

          {(["all", "web", "app", "ml", "ai"] as const).map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredTechnologies
                  .filter((tech) => category === "all" || tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center hover:bg-blue-50 transition-colors duration-300"
                    >
                      {categoryIcons[tech.category]}
                      <h3 className="mt-2 font-semibold">{tech.name}</h3>
                      <Badge variant="outline" className="mt-2">
                        {tech.category}
                      </Badge>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

