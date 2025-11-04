"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  "Built 3+ AI SaaS apps integrating OpenAI APIs with Next.js/Flask backends",
  "Implemented real-time systems using WebSockets, Cron Jobs, and automation queues",
  "Runner-Up — SEGUE Hackathon 2.0 for AI-driven analytics dashboard",
  "Contributed to open-source: React UI & API automation libraries",
  "Deployed CI/CD pipelines with automated build/test on GitHub Actions",
];

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item}
              className="flex items-start gap-4 p-5 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


