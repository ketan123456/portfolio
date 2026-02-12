"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="md:py-24 py-16 px-5 max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold mb-6">
        About Me
      </motion.h2>
      <p className="text-gray-400 leading-7">
        Frontend Developer with 2+ years of experience building scalable,
        high-performance applications using React, Next.js, and Angular.
        Experienced in enterprise dashboards, affiliate platforms, and
        e-commerce systems.
      </p>
    </section>
  );
}
