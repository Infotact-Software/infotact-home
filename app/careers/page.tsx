import { ArrowRight, CheckCircle, Globe, Users, Zap, Coffee, Book, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Shape the Future of <span className="text-blue-600">SaaS</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-500">
            Join our team of innovators, creators, and problem-solvers. We're on a mission to revolutionize the SaaS
            industry, and we want you to be part of it.
          </p>
          <Link href={"#open-positions"}>
          <Button size="lg" className="rounded-full">
            Explore Opportunities <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </Link>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Our Culture & Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Globe, title: "Global Impact", description: "Make a difference on a global scale" },
              { icon: Users, title: "Collaborative Spirit", description: "Work with diverse, talented individuals" },
              { icon: Zap, title: "Innovation First", description: "Push boundaries and challenge the status quo" },
              { icon: Coffee, title: "Work-Life Balance", description: "Flexible schedules and remote options" },
              { icon: Book, title: "Continuous Learning", description: "Grow your skills with our learning budget" },
              { icon: Heart, title: "Inclusive Environment", description: "Be yourself, we celebrate diversity" },
            ].map((value, index) => (
              <div key={index} className="flex flex-col items-start p-6">
                <value.icon className="mb-4 h-8 w-8 text-blue-500" />
                <h3 className="mb-2 text-lg font-semibold text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Perks & Benefits</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Competitive Salary",
              "Health & Wellness Programs",
              "Stock Options",
              "Flexible Work Hours",
              "Remote Work Options",
              "Professional Development",
              "Paid Time Off",
              "Team Building Events",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24" id="open-positions">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Open Positions</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Senior Frontend Developer", department: "Engineering", location: "Remote", type: "Full-time" },
              { title: "UX Designer", department: "Design", location: "San Francisco, CA", type: "Full-time" },
              { title: "Product Manager", department: "Product", location: "New York, NY", type: "Full-time" },
              { title: "Data Scientist", department: "Analytics", location: "Remote", type: "Full-time" },
              {
                title: "Customer Success Manager",
                department: "Operations",
                location: "London, UK",
                type: "Full-time",
              },
              { title: "Marketing Specialist", department: "Marketing", location: "Remote", type: "Contract" },
            ].map((job, index) => (
              <div key={index} className="border-l-4 border-blue-500 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">{job.title}</h3>
                <p className="mb-2 text-gray-600">
                  {job.department} • {job.location}
                </p>
                <p className="mb-4 text-sm text-gray-500">{job.type}</p>
                <Link href="https://internship-form.infotactlearning.in" target="_blank">
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Team</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Johnson",
                role: "Software Engineer",
                quote: "The collaborative environment here is unparalleled. I've grown so much as a developer.",
              },
              {
                name: "Sarah Lee",
                role: "Product Designer",
                quote: "I love the autonomy and trust given to each team member. It's truly empowering.",
              },
              {
                name: "Michael Chen",
                role: "Data Analyst",
                quote: "The work-life balance and focus on personal growth make this the best place I've ever worked.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="border-t-4 border-blue-500 bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{testimonial.role}</p>
                <p className="italic text-gray-700">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">Ready to Make an Impact?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Join our team of innovators and help us build the future of SaaS. We can't wait to see what you'll bring to
            the table.
          </p>
          <Link href="https://internship-form.infotactlearning.in" target="_blank">
          <Button size="lg" className="rounded-full">
            View All Positions <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

