import About from "../components/About";
import BootSequence from "../components/BootSequence";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import ProjectsShowcase from "../components/ProjectsShowcase";
import Services from "../components/Services";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <BootSequence />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsShowcase />
        <Experience />
        <Services />
        <Education />
        <Contact />
      </main>
    </>
  );
}
