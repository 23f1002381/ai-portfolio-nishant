"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "AI Startup",
    location: "Remote",
    period: "Summer 2024",
    description: [
      "Developed real-time features using WebSockets for live collaboration",
      "Integrated OpenAI API for intelligent content generation",
      "Built scalable backend services with Node.js and TypeScript",
      "Implemented automated testing and CI/CD pipelines",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Tech Company",
    location: "Hyderabad, India",
    period: "Winter 2023",
    description: [
      "Created responsive frontend components with React and Next.js",
      "Optimized database queries improving performance by 40%",
      "Collaborated with cross-functional teams in agile environment",
      "Deployed applications to production using Docker and AWS",
    ],
  },
  {
    title: "Open Source Contributor",
    company: "Various Projects",
    location: "Remote",
    period: "2023 - Present",
    description: [
      "Contributed to popular open-source projects on GitHub",
      "Fixed bugs and implemented new features",
      "Reviewed code and provided feedback to maintainers",
      "Maintained personal projects with 100+ stars",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 ml-12">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-start">
                      <span className="mr-2 text-purple-500">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


