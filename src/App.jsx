import CustomCursor from './components/CustomCursor.jsx'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Achievements from './components/Achievements.jsx'
import Certifications from './components/Certifications.jsx'
import Activities from './components/Activities.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Certifications />
        <Activities />
        <Contact />
      </main>
    </>
  )
}
