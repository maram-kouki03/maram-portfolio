import { useEffect, useState } from 'react'
import { Download, Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'
import { profile } from '../data/profile.js'

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Achievements', 'achievements'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = links.map(([, id]) => document.getElementById(id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <button className="logo" onClick={() => go('home')} aria-label="Home">
        maram<span className="dot">.</span>k
      </button>

      <div className={`nav-links${open ? ' open' : ''}`}>
        {links.map(([label, id]) => (
          <button
            key={id}
            className={`nav-link${active === id ? ' active' : ''}`}
            onClick={() => go(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="nav-right">
        <a className="resume-btn" href={profile.resume} download>
          Resume <Download size={15} />
        </a>
        <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          className="nav-toggle-mobile"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </nav>
  )
}
