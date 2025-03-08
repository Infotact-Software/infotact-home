"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Toaster, toast } from 'sonner'
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server or a third-party service
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", company: "", service: "", message: "" })
    toast.success('Your request has been submitted successfully!. We will get back to you soon.')
  }

  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <Toaster richColors  position="top-center"/>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Get Your Free Quote</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Ready to take your digital presence to the next level? Fill out the form below, and we'll get back to you with
          a customized quote.
        </p>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="app-development">App Development</option>
                <option value="ai-ml">AI/ML Solutions</option>
                <option value="digital-marketing">Digital Marketing</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Tell us about your project"
            ></textarea>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-md font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            >
              <Send className="mr-2 h-5 w-5" />
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

