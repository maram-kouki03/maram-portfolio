import { useState } from 'react'
import { ArrowRight, Mail, Github, Linkedin, MapPin } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data/profile.js'

const EMAIL = profile.email

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const send = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contact">
      <Reveal>
        <p className="eyebrow blue">06 — Contact</p>
        <h2 className="section-title">Let's build something</h2>
      </Reveal>

      <div className="contact-grid">
        <Reveal delay={0.05}>
          <div className="glass contact-form">
            <div className="field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" placeholder="your name" value={form.name} onChange={set('name')} />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" type="email" placeholder="you@domain.com" value={form.email} onChange={set('email')} />
            </div>
            <div className="field">
              <label htmlFor="c-msg">Message</label>
              <textarea id="c-msg" placeholder="what are you working on?" value={form.message} onChange={set('message')} />
            </div>
            <button className="send-btn" onClick={send} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent ✓' : (
                <>Send message <ArrowRight size={18} /></>
              )}
            </button>
            {status === 'error' && <p className="send-error">Something went wrong — please try again.</p>}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="contact-cards">
            <a className="contact-card" href={`mailto:${EMAIL}`}>
              <span className="contact-ico"><Mail size={17} /></span>
              <span><div className="label">Email</div><div className="value">{EMAIL}</div></span>
            </a>
            <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
              <span className="contact-ico"><Github size={17} /></span>
              <span><div className="label">GitHub</div><div className="value">github.com/maram-kouki03</div></span>
            </a>
            <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-ico"><Linkedin size={17} /></span>
              <span><div className="label">LinkedIn</div><div className="value">maram-kouki-b51861244</div></span>
            </a>
            <div className="contact-card">
              <span className="contact-ico"><MapPin size={17} /></span>
              <span><div className="label">Location</div><div className="value">Tunisia</div></span>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="footer">
        <span className="sign">$ echo "thanks for stopping by <span className="g">👋</span>"</span>
        <span className="copy">© {new Date().getFullYear()} Maram Kouki</span>
      </footer>
    </section>
  )
}
