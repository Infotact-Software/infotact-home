"use client"
import ServiceCard from "@/utils/services/service-card"
import ProcessTimeline from "@/utils/services/process-timeline"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, PenTool, Megaphone, Code, Globe } from "lucide-react"
import Image from "next/image"
import { TestimonalsDemo } from "@/utils/Testimonials"
import Link from "next/link";
import Servicefeatures from "@/utils/services/servicefeatures";
import TechStackShowcase from "@/utils/TechStackShowcase"
export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Create stunning, responsive websites that drive results and engage your audience.",
      icon: <Globe className="h-10 w-10 text-primary" />,
      image: "/web.jpg",
    },
    {
      title: "UI/UX Design",
      description: "Craft intuitive, engaging user experiences that delight and convert visitors into customers.",
      icon: <PenTool className="h-10 w-10 text-primary" />,
      image: "/ui.jpg",
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence and reach your target audience with data-driven strategies.",
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      image: "/dm.jpg",
    },
    {
      title: "App Development",
      description: "Build powerful, feature-rich mobile applications that solve real-world problems.",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      image: "/app.jpg",
    },
    {
      title: "Web App Development",
      description: "Develop scalable, robust web applications that streamline your business processes.",
      icon: <Code className="h-10 w-10 text-primary" />,
      image: "/ml.jpg",
    },
    {
      title: "Content Editing",
      description: "Polish your content to perfection and engage your audience with compelling narratives.",
      icon: <Monitor className="h-10 w-10 text-primary" />,
      image: "/content.jpg",
    },
  ]

  const processSteps = [
    { title: "Discovery", description: "We dive deep into your business needs and goals." },
    { title: "Strategy", description: "We craft a tailored plan to achieve your objectives." },
    { title: "Design", description: "We create stunning, user-centric designs." },
    { title: "Development", description: "We build robust, scalable solutions." },
    { title: "Testing", description: "We ensure everything works flawlessly." },
    { title: "Launch", description: "We deploy your solution and provide ongoing support." },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/10">
    
      <main className="flex-grow">
        <section className="relative py-20 px-4 md:px-6 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Elevate Your Digital Presence
              </h1>
              <p className="text-xl mb-12 text-muted-foreground">
                Empowering businesses with cutting-edge solutions to thrive in the digital age.
              </p>
              <div className="space-x-4">
                <Link href="/services/#services">

                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore Services
                </Button>
                </Link>
                <Link  href="https://cal.com/infotact-solutions-b7ehz0/30min?date=2025-01-27&month=2025-01"
              target='_blank'>
                <Button size="lg" variant="outline" className="my-4">
                  Schedule Consultation
                </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <Image
              src="/web.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-10"
            />
          </div>
        </section>

        <section className="py-20 px-4 md:px-6" id="services">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
<Servicefeatures/>
        <section className="py-20 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Process</h2>
            <ProcessTimeline steps={processSteps} />
          </div>
        </section>

    
        
            <TestimonalsDemo/>
         <TechStackShowcase/>

        <section className="py-20 px-4 md:px-6 bg-indigo-600 text-white rounded-2xl shadow-2xl">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground text-white">
              Let's collaborate to create innovative solutions that drive your success in the digital landscape.
            </p>
            <div className="space-x-4">
            <Link href="/get-a-quote">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
              </Link>
              <Link href="/contact">
              <Button size="lg" variant="outline" className="text-black">
                Contact Us
              </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
   
    </div>
  )
}

