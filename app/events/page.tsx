"use client"
import EventPoster from "@/utils/events/EventPoster";
import EventInfo from "@/utils/events/EventInfo";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col md:flex-row lg:mt-10 md:mt-12 mt-16">
    <EventPoster />
    <EventInfo />
  </main>
  )
}

