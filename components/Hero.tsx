"use client"
import { motion } from "framer-motion"
import GlassButton from "./GlassButton"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen neo-bg px-5 flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:text-5xl text-2xl font-bold">
        KETAN KRITESH
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-400">
        Frontend Developer | React • Next.js • UI Development
      </motion.p>

      <Link href="/projects" className="mt-8">
        <GlassButton text="View My Work" />
      </Link>
    </section>
  );
}