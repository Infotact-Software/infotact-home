import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intern Certificate - Infotact",
  description:
    "Recognize your internship experience at Infotact with an official certificate. Showcase your contribution to innovative SaaS projects.",
  keywords: [
    "Infotact Intern Certificate",
    "Internship Recognition",
    "Digital Products Internship",
    "SaaS Internship Certificate",
    "Internship at Infotact",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Intern Certificate - Infotact",
    description:
      "Celebrate your achievements at Infotact with a verified internship certificate, showcasing your skills and contributions.",
    url: "https://infotact.in/verify",
    type: "website",
    images: [
      {
        url: "/white.png",
        width: 1200,
        height: 630,
        alt: "Infotact Intern Certificate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Infotact",
    title: "Intern Certificate - Infotact",
    description:
      "Get your official internship certificate from Infotact, recognizing your impact in SaaS development.",
    images: "/white.png",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://infotact.in/verify",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
