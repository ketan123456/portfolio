"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="md:py-24 py-16 px-5 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group relative overflow-hidden
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                rounded-3xl
                p-6
                transition-all duration-500
                hover:bg-white/10
                hover:border-white/20
                hover:-translate-y-3
                hover:shadow-2xl">
        <div className="flex gap-4 justify-between">
          <h3 className="font-semibold">Systema Procesa Pago Corp</h3>
          <p className="font-normal">Nov 2024-Jan 2026</p>
        </div>
        <p className="text-gray-400">Frontend Developer (Contract)</p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group relative mt-5 overflow-hidden
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                rounded-3xl
                p-6
                transition-all duration-500
                hover:bg-white/10
                hover:border-white/20
                hover:-translate-y-3
                hover:shadow-2xl">
        <div className="flex gap-4 justify-between">
          <h3 className="font-semibold">Evince Development Pvt. Ltd</h3>
          <p className="font-normal">Feb 2023-Oct 2024</p>
        </div>
        <p className="text-gray-400">Junior Software Engineer</p>
      </motion.div>
    </section>
  );
}
