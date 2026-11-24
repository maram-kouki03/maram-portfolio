import { Trophy, ScrollText } from 'lucide-react'
import { awards } from '../data/achievements.js'
import Reveal from './Reveal.jsx'

const AWARD_ICONS = { trophy: Trophy, patent: ScrollText }

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <Reveal>
        <p className="eyebrow purple">05 — Proof</p>
        <h2 className="section-title">Achievements</h2>
      </Reveal>

      <div className="award-grid">
        {awards.map((a, i) => {
          const Icon = AWARD_ICONS[a.icon] || Trophy
          return (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className={`award-card ${a.icon}`}>
                <span className="award-ico"><Icon size={22} /></span>
                <div>
                  <h4>{a.title}</h4>
                  <div className="meta">{[a.detail, a.year].filter(Boolean).join(' · ')}</div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
