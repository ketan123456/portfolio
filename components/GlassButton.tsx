"use client"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function GlassButton({ text }: { text: string }) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current!.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    ref.current!.style.setProperty("--x", `${x}px`)
    ref.current!.style.setProperty("--y", `${y}px`)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative px-8 py-3 rounded-full glass overflow-hidden"
    >
      <span
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.4), transparent 60%)"
        }}
      />
      <span className="relative z-10">{text}</span>
    </motion.button>
  )
}