"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = {
  degree: "B.Tech in Computer Science",
  institution: "Indian Institute of Technology (IIT)",
  location: "India",
  year: "2021 - 2025",
  gpa: "8.5/10",
  coursework: [
    "Data Structures and Algorithms",
    "Machine Learning",
    "Deep Learning",
    "Database Systems",
    "Computer Networks",
    "Software Engineering",
    "Distributed Systems",
    "Artificial Intelligence",
  ],
};

const achievements = [
  "Dean's List for Academic Excellence",
  "Winner of Hackathon 2024",
  "Published Research Paper on ML",
  "Gold Medal in Programming Contest",
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="education"
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
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Details */}
          <motion.div
            className="bg-gray-800/50 rounded-lg p-8 border border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">{education.degree}</h3>
                <p className="text-gray-400">{education.institution}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Location:</span>
                <span className="text-gray-300">{education.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Duration:</span>
                <span className="text-gray-300">{education.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">GPA:</span>
                <span className="text-gray-300">{education.gpa}</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Relevant Coursework</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {education.coursework.map((course, index) => (
                  <motion.div
                    key={course}
                    className="p-2 bg-gray-700/50 rounded text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {course}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="bg-gray-800/50 rounded-lg p-8 border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Achievements</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  className="flex items-start gap-3 p-4 bg-gray-700/30 rounded-lg border border-gray-600"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                  <span className="text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


