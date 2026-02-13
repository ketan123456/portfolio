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
      <p className=" leading-7">
        I’m a Frontend Developer with 2+ years of experience building scalable
        and high-performance web applications using React and Next.js.
        I specialize in creating reusable UI components, optimizing frontend
        performance, and delivering seamless user experiences. I’ve worked on
        enterprise-grade dashboards, affiliate management platforms, and
        real-world business applications, collaborating closely with
        cross-functional teams to ship production-ready solutions.
      </p>
    </section>
  );
}
