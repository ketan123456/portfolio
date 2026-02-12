"use client"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Education from "../components/Education"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}