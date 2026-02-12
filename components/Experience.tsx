"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="md:py-24 py-16 px-5 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass p-8 rounded-2xl mb-8">
        <h3 className="font-semibold">Systema Procesa Pago Corp</h3>
        <p className="text-gray-400">Frontend Developer (Contract)</p>
        <p className="mt-3 text-sm text-gray-400">
          Mporeo Ecosystem (Web + MPOS), ConsciousRoot (Next.js + MUI)
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass p-8 rounded-2xl">
        <h3 className="font-semibold">Evince Development Pvt. Ltd</h3>
        <p className="text-gray-400">Junior Software Engineer</p>
        <p className="mt-3 text-sm text-gray-400">
          Worked on ACT (React), HRMS, and Clymb (Angular)
        </p>
      </motion.div>
    </section>
  );
}
