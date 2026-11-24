import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { profile } from '../data/profile.js'

// Terminal script. Each line is a list of styled tokens so the $ prompt,
// the > arrow and the output can each keep their own colour while typing.
const LINES = [
  [{ c: 't-prompt', t: '$ ' }, { c: 't-cmd', t: 'whoami' }],
  [{ c: 't-arrow', t: '> ' }, { c: 't-name', t: profile.name }],
  [{ c: 't-prompt', t: '$ ' }, { c: 't-cmd', t: 'role --list' }],
  [{ c: 't-arrow', t: '> ' }, { c: 't-out', t: profile.role }],
  [{ c: 't-prompt', t: '$ ' }, { c: 't-cmd', t: 'cat about.txt' }],
  [{ c: 't-arrow', t: '> ' }, { c: 't-out', t: profile.tagline }],
]

const lineLength = (line) => line.reduce((n, tok) => n + tok.t.length, 0)

function TypedLine({ line, chars }) {
  let remaining = chars
  return (
    <div className="t-line">
      {line.map((tok, i) => {
        if (remaining <= 0) return <span key={i} className={tok.c} />
        const slice = tok.t.slice(0, remaining)
        remaining -= tok.t.length
        return (
          <span key={i} className={tok.c}>
            {slice}
          </span>
        )
      })}
    </div>
  )
}

export default function Hero() {
  const [lineIdx, setLineIdx] = useState(0)
  const [chars, setChars] = useState(0)
  const done = lineIdx >= LINES.length

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLineIdx(LINES.length)
      return
    }
    if (done) return
    const len = lineLength(LINES[lineIdx])
    if (chars < len) {
      const id = setTimeout(() => setChars((c) => c + 1), 26)
      return () => clearTimeout(id)
    }
    const id = setTimeout(() => {
      setLineIdx((l) => l + 1)
      setChars(0)
    }, 260)
    return () => clearTimeout(id)
  }, [chars, lineIdx, done])

  return (
    <header className="hero" id="home">
      <div className="hero-inner">
        <motion.div
          className="terminal"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="terminal-head">
            <span className="tdot r" />
            <span className="tdot y" />
            <span className="tdot g" />
            <span className="terminal-title">maram@portfolio — zsh</span>
          </div>
          <div className="terminal-body">
            {LINES.map((line, i) => {
              if (i < lineIdx) return <TypedLine key={i} line={line} chars={lineLength(line)} />
              if (i === lineIdx)
                return (
                  <div key={i} className="t-line">
                    <TypedLineInline line={line} chars={chars} />
                    <span className="cursor-blink" />
                  </div>
                )
              return null
            })}
            {done && (
              <div className="t-line">
                <span className="t-prompt">$ </span>
                <span className="cursor-blink" />
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button
            className="btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work <ArrowRight size={18} />
          </button>
          <a className="btn-ghost" href={profile.resume} download>
            Download Resume <Download size={17} />
          </a>
          <a className="social-icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
          <a className="social-icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          <a className="social-icon" href={`mailto:${profile.email}`} aria-label="Email">@</a>
        </motion.div>

        <motion.div
          className="hero-chips"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <span className="chip"><b>2+</b> Years Learning</span>
          <span className="chip blue"><b>10+</b> Projects Completed</span>
        </motion.div>
      </div>
    </header>
  )
}

// Renders the currently-typing line without a trailing cursor (cursor added by parent).
function TypedLineInline({ line, chars }) {
  let remaining = chars
  return (
    <>
      {line.map((tok, i) => {
        if (remaining <= 0) return <span key={i} className={tok.c} />
        const slice = tok.t.slice(0, remaining)
        remaining -= tok.t.length
        return (
          <span key={i} className={tok.c}>
            {slice}
          </span>
        )
      })}
    </>
  )
}
