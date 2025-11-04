"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Code, Cpu, Zap } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-1"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center text-5xl sm:text-6xl font-bold text-white">
                [N]
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20 rounded-full" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              I’m <span className="font-semibold text-white">Nishant Kumar Yadav</span>, a full-stack developer specialized in
              <span className="font-semibold text-white"> AI-integrated web applications</span> that combine real-time automation,
              intelligent dashboards, and scalable backend systems.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              With expertise in <span className="text-white">Next.js, Flask, Node.js, and OpenAI APIs</span>, I build products that merge
              AI-driven insights, live data processing, and clean frontend experiences. I’ve shipped
              multiple production-ready AI SaaS platforms across Vercel, Render, and AWS.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I focus on solving complex problems by blending <span className="text-white">AI, automation, and full-stack engineering</span>
              — creating high-performance systems that are scalable, secure, and intuitive.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            {
              icon: Code,
              title: "Full-Stack Development",
              description: "Building end-to-end applications with modern frameworks and best practices",
            },
            {
              icon: Cpu,
              title: "AI/ML Integration",
              description: "Integrating intelligent systems and APIs to create smart, responsive applications",
            },
            {
              icon: Zap,
              title: "Production Ready",
              description: "Focus on scalability, performance, and maintainability in every project",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


