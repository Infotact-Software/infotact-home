import { Features } from "@/components/eldoraui/features";
import Section from "@/components/eldoraui/section";
import { Globe, CodeIcon, BrainCircuit, TrendingUp } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Web Development Solutions",
    content: "Transform your digital presence with our cutting-edge web development services. We create responsive, high-performance websites and web applications that drive engagement and conversion.",
    image: "/web.jpg",
    icon: <Globe className="size-6 text-primary" />,
  },
  {
    id: 2,
    title: "AI & Machine Learning Innovation",
    content: "Harness the power of artificial intelligence to unlock new business insights. Our AI and machine learning solutions help you make data-driven decisions, automate processes, and gain a competitive edge.",
    image: "/ml.jpg",
    icon: <BrainCircuit className="size-6 text-primary" />,
  },
  {
    id: 3,
    title: "Digital Marketing Strategies",
    content: "Amplify your brand's digital footprint with our comprehensive marketing solutions. From targeted campaigns to advanced analytics, we help you reach your audience and drive measurable growth.",
    image: "/dm.jpg",
    icon: <TrendingUp className="size-6 text-primary" />,
  },
  {
    id: 4,
    title: "Mobile App Development",
    content: "Build powerful, user-friendly mobile applications that connect you with your customers. Our end-to-end app development services cover iOS, Android, and cross-platform solutions.",
    image: "/app.jpg",
    icon: <CodeIcon className="size-6 text-primary" />,
  }
];

export function FeatureComponent() {
  return (
    <Section
      title="Empower Your Digital Transformation"
      subtitle="Comprehensive Solutions to Accelerate Your Business Growth"
    >
      <Features data={data} />
    </Section>
  );
}

export default FeatureComponent;