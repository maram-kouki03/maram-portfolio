import { skillGroups } from '../data/skills.js'
import Reveal from './Reveal.jsx'

function Marquee({ items, dir }) {
  // Duplicate the list so the -50% loop is seamless.
  const doubled = [...items, ...items]
  const dur = Math.max(18, items.length * 4) + 's'
  return (
    <div className="marquee">
      <div className={`marquee-track${dir === 'right' ? ' right' : ''}`} style={{ '--dur': dur }}>
        {doubled.map((it, i) => (
          <span className="pill" key={i}>
            <span className="dot" style={{ background: it.c }} />
            {it.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <Reveal>
        <p className="eyebrow purple">03 — Stack</p>
        <h2 className="section-title">Technologies</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="glass skills-panel">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.label}>
              <div className="skill-label">
                <span className="bullet" />
                {g.label}
              </div>
              <Marquee items={g.items} dir={g.dir} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
