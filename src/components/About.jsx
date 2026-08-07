import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function About() {
  const [open, setOpen] = useState(false)

  return (
    <section className="section" id="about">
      <Reveal>
        <p className="eyebrow purple">01 — About</p>
        <h2 className="section-title">About me</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="glass about-text">
          <p>
            ICT Engineering student at SUP'COM (Tunisia), specializing in AI,
            deep learning, and software engineering. AI Engineer at WiseVision
            building real-world ML systems. Strong math foundation, constantly
            pushing my limits — from multi-agent AI to computer-vision
            pipelines to full-stack apps.
          </p>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                className="about-more"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p>
                  I like problems that sit between research and product: taking
                  a model from a notebook to something deployed and useful. Lately
                  that's meant shipping a computer-vision retail pipeline on a
                  Jetson, wiring agentic systems with LangGraph, and building the
                  dashboards and web apps around them. Outside of code I'm Quality
                  Manager at SUP'COM Junior Enterprise and active in the ML and
                  student community.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <button className="read-more" onClick={() => setOpen((o) => !o)}>
            {open ? 'Read Less' : 'Read More'}
            <motion.span animate={{ rotate: open ? 180 : 0 }} style={{ display: 'inline-flex' }}>
              <ChevronDown size={16} />
            </motion.span>
          </button>
        </div>
      </Reveal>
    </section>
  )
}
