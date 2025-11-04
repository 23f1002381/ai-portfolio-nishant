"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const technicalSkills = [
  // Frontend
  { name: "Next.js", level: 90 },
  { name: "React.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "TailwindCSS", level: 85 },
  { name: "DaisyUI / Bootstrap", level: 80 },
  // Backend
  { name: "Node.js / Express", level: 85 },
  { name: "Flask / FastAPI", level: 82 },
  // Databases
  { name: "PostgreSQL", level: 80 },
  { name: "MongoDB", level: 78 },
  { name: "MySQL", level: 70 },
  // AI/ML
  { name: "OpenAI API / LangChain", level: 82 },
  { name: "TensorFlow.js", level: 65 },
  { name: "Hugging Face", level: 70 },
  // Automation & Realtime
  { name: "WebSockets", level: 78 },
  { name: "Cron Jobs / Queues", level: 75 },
  { name: "Inngest (learning)", level: 55 },
  { name: "Kafka (learning)", level: 45 },
  // Cloud & DevOps
  { name: "AWS (EC2, S3)", level: 70 },
  { name: "Vercel / Render / Railway", level: 80 },
  { name: "Docker", level: 70 },
  { name: "GitHub Actions", level: 75 },
];

const softSkills = [
  "Ownership",
  "Rapid Prototyping",
  "Independent Execution",
  "Cross-team Collaboration",
  "Communication",
  "Agile Development",
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
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
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                    <span className="text-gray-400 group-hover:text-purple-400 transition-colors">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full shadow-lg shadow-purple-500/50"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 text-center group cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


