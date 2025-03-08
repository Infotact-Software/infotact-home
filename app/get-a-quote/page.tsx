import HeroSection from "@/utils/quote/HeroSection"
import ServicesSection from "@/utils/quote/ServicesSection"
import { TestimonalsDemo } from "@/utils/Testimonials"
import ContactForm from "@/utils/quote/ContactForm"
import { ClientSection } from "@/utils/ClientSection"
import ProcessSection from "@/utils/quote/ProcessSection"

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white roboto-semibold-2">
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <ClientSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonalsDemo/>
        <ContactForm />
      </main>
    </div>
  )
}

