"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="Education" className="md:py-24 py-16 px-5 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className=" p-8 rounded-2xl
        text-sm text-white/90
        bg-white/5
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_0_20px_rgba(255,255,255,0.05)]
        transition-all duration-300
        hover:bg-white/10
        hover:border-white/20
        hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
        hover:-translate-y-1
        cursor-pointer
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-r before:from-white/20 before:to-transparent
        before:opacity-0 hover:before:opacity-100
        before:transition mb-8">
        <h3 className="font-semibold">B.C.A</h3>
        <p className="text-gray-400">G.D Goenka University</p>
        <p className="text-gray-400">2018-2021</p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className=" p-8 rounded-2xl
        text-sm text-white/90
        bg-white/5
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_0_20px_rgba(255,255,255,0.05)]
        transition-all duration-300
        hover:bg-white/10
        hover:border-white/20
        hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
        hover:-translate-y-1
        cursor-pointer
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-r before:from-white/20 before:to-transparent
        before:opacity-0 hover:before:opacity-100
        before:transition mb-8">
        <h3 className="font-semibold">M.C.A</h3>
        <p className="text-gray-400">G.D Goenka University</p>
        <p className="text-gray-400">2021-2023</p>
      </motion.div>
    </section>
  );
}
