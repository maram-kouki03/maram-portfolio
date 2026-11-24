import { Users } from 'lucide-react'
import { activities } from '../data/profile.js'
import Reveal from './Reveal.jsx'

export default function Activities() {
  return (
    <section className="section" id="activities">
      <Reveal>
        <p className="eyebrow purple">07 — Community</p>
        <h2 className="section-title">Activities</h2>
      </Reveal>

      <div className="award-grid activity-grid">
        {activities.map((a, i) => (
          <Reveal key={a.org} delay={i * 0.08}>
            <div className="award-card activity">
              <span className="award-ico"><Users size={22} /></span>
              <div>
                <h4>{a.org}</h4>
                <div className="meta">{a.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
