import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { about } from '../data/profile.js'

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
          <p>{about.summary}</p>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                className="about-more"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p>{about.more}</p>
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
