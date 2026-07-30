import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import CTA from "./components/sections/CTA";

function App() {
  return (
    <main className="bg-neutral-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;