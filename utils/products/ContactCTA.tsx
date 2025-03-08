import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
export default function ContactCTA() {
  return (
    <section className="bg-blue-600 text-white rounded-lg p-8 text-center space-y-6">
      <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
      <p className="text-xl max-w-2xl mx-auto">
        Let's discuss how our digital solutions can help your company grow and succeed in the digital age.
      </p>
      <Link href="/get-a-quote">
      <Button size="lg" variant="secondary" className="font-semibold">
        Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
      </Link>
    </section>
  )
}

