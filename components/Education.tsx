"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="Education" className="md:py-24 py-16 px-5 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass p-8 rounded-2xl mb-8">
        <h3 className="font-semibold">B.C.A</h3>
        <p className="text-gray-400">G.D Goenka University</p>
        <p className="text-gray-400">2018-2021</p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass p-8 rounded-2xl mb-8">
        <h3 className="font-semibold">M.C.A</h3>
        <p className="text-gray-400">G.D Goenka University</p>
        <p className="text-gray-400">2021-2023</p>
      </motion.div>
    </section>
  );
}
