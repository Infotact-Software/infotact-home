"use client"
import ProductGrid from "@/utils/products/ProductGrid";
import ClientProjects from "@/utils/products/ClientProjects";
import { TestimonalsDemo } from "@/utils/Testimonials";
import ContactCTA from "@/utils/products/ContactCTA";
import TechStackShowcase from "@/utils/TechStackShowcase";
export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white open-sans-semibold">
      <main className="container mx-auto px-4 py-24 space-y-24">
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 open-sans-semibold">
            Empowering Businesses with Cutting-Edge Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto  text-center">
            We craft tailored digital products that drive growth, streamline operations, and enhance user experiences
            for companies across industries.
          </p>
        </section>

        <ProductGrid />
        <ClientProjects />
        <TechStackShowcase />
        <TestimonalsDemo />
        <ContactCTA />
      </main>
    </div>
  )
}

