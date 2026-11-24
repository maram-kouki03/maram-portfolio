import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Trophy, ScrollText, Users } from 'lucide-react'
import { certificates } from '../data/certificates.js'
import { awards } from '../data/achievements.js'
import { activities } from '../data/profile.js'

const AWARD_ICONS = { trophy: Trophy, patent: ScrollText }
import Reveal from './Reveal.jsx'

export default function Achievements() {
  const [zoom, setZoom] = useState(null)

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

      <Reveal>
        <div className="sub-head">Certifications</div>
      </Reveal>
      <div className="cert-grid">
        {certificates.map((c, i) => (
          <Reveal key={c.title} delay={(i % 4) * 0.06}>
            <div
              className="cert-card"
              role="button"
              tabIndex={0}
              onClick={() => c.image && setZoom(c)}
              onKeyDown={(e) => (e.key === 'Enter' && c.image ? setZoom(c) : null)}
            >
              <div className="cert-thumb">
                {c.image ? <img src={c.image} alt={c.title} /> : '[ certificate.png ]'}
              </div>
              <div className="cert-info">
                <h4>{c.title}</h4>
                <div className="meta">{c.issuer} · {c.year}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="sub-head">Activities</div>
        <div className="activity-row">
          {activities.map((a) => (
            <span key={a.org} className="chip activity-chip">
              <Users size={14} /> {a.org} <b>· {a.role}</b>
            </span>
          ))}
        </div>
      </Reveal>

      <AnimatePresence>
        {zoom && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(null)}
          >
            <motion.div
              className="modal"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-media" style={{ aspectRatio: '4 / 3' }}>
                <button className="modal-close" onClick={() => setZoom(null)} aria-label="Close">
                  <X size={20} />
                </button>
                <img src={zoom.image} alt={zoom.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="modal-body">
                <div className="modal-head"><h3 style={{ fontSize: '1.4rem' }}>{zoom.title}</h3></div>
                <p style={{ margin: '10px 0 0' }}>{zoom.issuer} · {zoom.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
