"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Generative AI with LLMs",
    issuer: "DeepLearning.AI",
    date: "2024",
    credential: "",
    url: "#",
  },
  {
    name: "Google Cloud Fundamentals",
    issuer: "Google Cloud",
    date: "2024",
    credential: "",
    url: "#",
  },
  {
    name: "Full Stack Development with Flask",
    issuer: "Udemy",
    date: "2023",
    credential: "",
    url: "#",
  },
  {
    name: "LangChain for Developers",
    issuer: "YouTube Course",
    date: "2023",
    credential: "",
    url: "#",
  },
  {
    name: "Front-End Libraries + JS Algorithms",
    issuer: "freeCodeCamp",
    date: "2023",
    credential: "",
    url: "#",
  },
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]" style={{ scrollbarWidth: "none" as any }}>
          <div className="flex gap-3 min-w-max pr-2">
            {certifications.map((cert, index) => (
              <motion.span
                key={cert.name}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-full text-sm text-gray-200 hover:border-purple-500 cursor-default"
                title={`${cert.name} — ${cert.issuer}`}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Award className="w-4 h-4 text-purple-400" />
                {cert.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


