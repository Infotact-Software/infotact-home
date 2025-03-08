"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { Marquee } from "@/components/eldoraui/marquee";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-[#f0abfc] p-1 py-0.5 font-bold text-[#d946ef] dark:bg-[#f0abfc] dark:text-[#d946ef]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        // light styles
        " border border-neutral-200 bg-white",
        // dark styles
        "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className,
      )}
      {...props}
    >
      <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
        </div>
      </div>

      <div className="flex w-full select-none items-center justify-start gap-5">
        <Image
          width={40}
          height={40}
          src={img || ""}
          alt={name}
          className="size-10 rounded-full ring-1 ring-border ring-offset-4"
        />

        <div>
          <p className="font-medium text-neutral-500">{name}</p>
          <p className="text-xs font-normal text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
const testimonials = [
  {
    name: "Rajeev Sharma",
    role: "CEO at TechnoFuture Innovations (India)",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    description: (
      <p>
        Infotact has been a game-changer for our business growth.
        <Highlight>
          Their expert solutions in web development and digital marketing have accelerated our online presence.
        </Highlight>{" "}
        We highly recommend their services to any company looking to scale.
      </p>
    ),
  },
  {
    name: "Olivia Brown",
    role: "Product Manager at InnovateX (USA)",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    description: (
      <p>
        Infotact's AI/ML solutions helped us unlock new potential in our product.
        <Highlight>
          Their team is extremely responsive and results-driven.
        </Highlight>{" "}
        A true partner for growth.
      </p>
    ),
  },
  {
    name: "Ankit Verma",
    role: "Founder at Digital Pathways (India)",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description: (
      <p>
        Infotact's UI/UX designs transformed our app into something our users love.
        <Highlight>
          Their creativity and attention to detail helped us increase user engagement.
        </Highlight>
      </p>
    ),
  },
  {
    name: "Isabelle Dubois",
    role: "Creative Director at MarketSphere (France)",
    img: "https://randomuser.me/api/portraits/women/83.jpg",
    description: (
      <p>
        The digital marketing solutions provided by Infotact are unparalleled.
        <Highlight>
          Our conversion rates have doubled since working with them.
        </Highlight>{" "}
        They're true experts in their field.
      </p>
    ),
  },
  {
    name: "Karthik Iyer",
    role: "CTO at FinCore Solutions (India)",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    description: (
      <p>
        Infotact has helped us integrate AI/ML into our fintech platform with ease.
        <Highlight>
          Their team is always ahead of the curve, delivering innovative solutions.
        </Highlight>{" "}
        A partner we can trust for the long run.
      </p>
    ),
  },
  {
    name: "Lina Zhang",
    role: "Web Developer at ZenTech (China)",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    description: (
      <p>
        Infotact’s web development solutions are top-notch.
        <Highlight>
          Our project was completed faster and more efficiently than expected.
        </Highlight>{" "}
        Their team understands the latest trends and technologies.
      </p>
    ),
  },
  {
    name: "Carlos Gomez",
    role: "Marketing Head at Eco Innovations (Mexico)",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    description: (
      <p>
        Infotact's digital marketing strategies have reshaped how we connect with customers.
        <Highlight>
          Their expertise in SEO and content marketing helped us reach new audiences.
        </Highlight>{" "}
        A must-have partner for anyone looking to grow their digital presence.
      </p>
    ),
  },
  {
    name: "Neha Gupta",
    role: "E-commerce Manager at StyleCart (India)",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    description: (
      <p>
        The e-commerce solutions provided by Infotact have transformed our online store.
        <Highlight>
          Their custom development and UX improvements increased our sales significantly.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Tom Chen",
    role: "Healthcare App Designer at HealthTech Solutions (Singapore)",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
    description: (
      <p>
        Infotact made it simple to create accessible and user-friendly interfaces for our healthcare apps.
        <Highlight>
          Their expertise in UI/UX design is unmatched.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Sofia Patel",
    role: "Founder at EduSafe Innovations (India)",
    img: "https://randomuser.me/api/portraits/women/73.jpg",
    description: (
      <p>
        Infotact's education-focused templates have helped us increase user satisfaction.
        <Highlight>
          Their attention to educational needs helped us build a platform that both students and teachers love.
        </Highlight>{" "}
      </p>
    ),
  },
];


export function Testimonials() {
  return (
    <section id="testimonials" className="container py-10">
      <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        What People Are Saying
      </h2>
      <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Don&apos;t just take our word for it. Here&apos;s what{" "}
        <span className="bg-gradient bg-clip-text text-transparent">
          real people
        </span>{" "}
        are saying about{" "}
        <span className="from-fg-onAccent text-purple-600"> Infotact Solutions</span>
      </h3>
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </section>
  );
}
