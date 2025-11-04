"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Stock Alert Automation System",
    description:
      "Production-grade real-time stock monitoring with AI news summarization, WebSocket alerts, and automated earnings/dividend tracking.",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "OpenAI API",
      "NewsAPI",
      "Vercel",
    ],
    liveUrl: "https://stock-alerts-nishantkumar.vercel.app",
    githubUrl: "https://github.com/nishantkumar123/stock-alerts",
    image: "📈",
  },
  {
    title: "AI Content Generator Platform",
    description:
      "Multi-format AI content creation SaaS with analytics, role-based auth, and export (Markdown/PDF).",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "OpenAI API",
      "PostgreSQL",
      "TailwindCSS",
      "Vercel",
    ],
    liveUrl: "https://ai-content-nishantkumar.vercel.app",
    githubUrl: "https://github.com/nishantkumar123/ai-content-generator",
    image: "🧠",
  },
  {
    title: "Task Automation Dashboard",
    description:
      "Real-time task management with AI prioritization, cron-based scheduling, and WebSocket collaboration.",
    technologies: [
      "Next.js",
      "Express",
      "MongoDB",
      "WebSocket",
      "OpenAI API",
      "DaisyUI",
      "Vercel",
    ],
    liveUrl: "https://task-automation-nishantkumar.vercel.app",
    githubUrl: "https://github.com/nishantkumar123/task-automation",
    image: "⚙️",
  },
  {
    title: "Workflow Automation Builder (In Progress)",
    description:
      "Zapier-like visual workflow builder using React Flow + Shadcn UI. Drag-and-drop nodes for AI actions, connectors, and triggers.",
    technologies: [
      "Next.js",
      "React Flow",
      "Shadcn UI",
      "OpenAI API",
    ],
    liveUrl: "https://github.com/nobruf/shadcn-next-workflows",
    githubUrl: "https://github.com/nishantkumar123",
    image: "🧩",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Live projects demonstrating production-ready thinking and rapid development
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <motion.div 
                  className="text-4xl mb-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                >
                  {project.image}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


