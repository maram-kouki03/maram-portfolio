import { Briefcase, GraduationCap } from 'lucide-react'
import { experience, education } from '../data/timeline.js'
import Reveal from './Reveal.jsx'

function Timeline({ items, accent }) {
  const vars =
    accent === 'blue'
      ? { '--line-color': 'var(--accent-blue)', '--node-color': 'var(--accent-blue)', '--period-color': 'var(--accent-blue-bright)' }
      : { '--line-color': 'var(--accent-purple)', '--node-color': 'var(--accent-purple)', '--period-color': 'var(--accent-purple-bright)' }

  return (
    <div className="timeline" style={vars}>
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <div className="tl-item">
            <span className="tl-node" />
            <div className="tl-card">
              <div className="tl-period">{it.period}</div>
              <h4>{it.org}</h4>
              {it.roles.map((r, j) => (
                <div className="tl-role" key={j}>
                  <div className="tl-role-head">
                    <span className="tl-role-title">{r.title}</span>
                    {r.current && <span className="tl-badge">Current</span>}
                  </div>
                  {(r.subtitle || (it.roles.length > 1 && r.period)) && (
                    <div className="tl-org">
                      {[r.subtitle, it.roles.length > 1 ? r.period : null].filter(Boolean).join(' · ')}
                    </div>
                  )}
                  <ul>
                    {r.points.map((p, k) => (
                      <li key={k}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <p className="eyebrow blue">04 — Path</p>
        <h2 className="section-title">Experience &amp; education</h2>
      </Reveal>

      <div className="path-grid">
        <div>
          <div className="path-col-head">
            <span className="path-diamond purple"><Briefcase size={16} /></span>
            Experience
          </div>
          <Timeline items={experience} accent="purple" />
        </div>
        <div>
          <div className="path-col-head">
            <span className="path-diamond blue"><GraduationCap size={16} /></span>
            Education
          </div>
          <Timeline items={education} accent="blue" />
        </div>
      </div>
    </section>
  )
}
