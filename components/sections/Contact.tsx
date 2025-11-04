"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {`I'm always open to discussing new opportunities and interesting projects.`}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:scale-[1.02] transition-all duration-300 placeholder-gray-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:scale-[1.02] transition-all duration-300 placeholder-gray-500"
                placeholder="nishantkumar.sv123@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:scale-[1.02] transition-all duration-300 resize-none placeholder-gray-500"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">{`Let's Connect`}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {`Whether you have a project in mind, want to collaborate, or just want to say hello,`}
                {` I'd love to hear from you. Feel free to reach out through any of the channels below.`}
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:nishantkumar.sv123@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors group"
              >
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">nishantkumar.sv123@gmail.com</p>
                </div>
              </a>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:+918200878374"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  <span className="text-gray-300">📱</span>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+91 8200878374</p>
                  </div>
                </a>
                <a
                  href="https://nishantkumar.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  <span className="text-gray-300">🌐</span>
                  <div>
                    <p className="text-gray-400 text-sm">Portfolio</p>
                    <p className="text-white">nishantkumar.vercel.app</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Social Links</h4>
              <p className="text-gray-400 mb-4">{`Let's collaborate on intelligent systems or AI startup projects.`}</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/nishantkumar123", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/nishantkumar123", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5 text-gray-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


