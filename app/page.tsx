"use client"
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Navbar"),{loading: ()=><p>loading...</p>})
const Hero = dynamic(() => import("../components/Hero"),{loading: ()=><p>loading...</p>})
const About = dynamic(() => import("../components/About"),{loading: ()=><p>loading...</p>});
const Skills = dynamic(() => import("../components/Skills"),{loading: ()=><p>loading...</p>});
const Experience = dynamic(() => import("../components/Experience"),{loading: ()=><p>loading...</p>});
const Contact = dynamic(() => import("../components/Contact"),{loading: ()=><p>loading...</p>});
const Education = dynamic(() => import("../components/Education"),{loading: ()=><p>loading...</p>});



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