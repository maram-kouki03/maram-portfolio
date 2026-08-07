import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

// Living background: a twinkling starfield on canvas, a ringed planet that
// parallaxes with scroll + mouse, and a couple of soft drifting orbs.
export default function Background() {
  const canvasRef = useRef(null)
  const planetRef = useRef(null)
  const { theme } = useTheme()

  // Starfield
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let stars = []
    let w, h
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const build = () => {
      w = canvas.width = window.innerWidth * devicePixelRatio
      h = canvas.height = window.innerHeight * devicePixelRatio
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      const count = Math.min(160, Math.floor((window.innerWidth * window.innerHeight) / 9000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 1.3 + 0.3) * devicePixelRatio,
        base: Math.random() * 0.5 + 0.2,
        tw: Math.random() * 0.04 + 0.012,
        phase: Math.random() * Math.PI * 2,
        drift: (Math.random() - 0.5) * 0.22 * devicePixelRatio,
        driftY: (Math.random() * 0.06 + 0.02) * devicePixelRatio,
      }))
    }

    const starColor = () =>
      theme === 'light' ? '150, 120, 210' : '255, 255, 255'

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const rgb = starColor()
      for (const s of stars) {
        s.phase += s.tw
        s.x += s.drift
        if (s.x > w) s.x = 0
        if (s.x < 0) s.x = w
        s.y += s.driftY
        if (s.y > h) s.y = 0
        const alpha = s.base + Math.sin(s.phase) * 0.3
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb}, ${Math.max(0, alpha)})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    build()
    if (reduce) {
      // Draw a single static frame.
      const rgb = starColor()
      for (const s of stars) {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb}, ${s.base})`
        ctx.fill()
      }
    } else {
      draw()
    }

    window.addEventListener('resize', build)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', build)
    }
  }, [theme])

  // Parallax for the planet
  useEffect(() => {
    const planet = planetRef.current
    if (!planet) return
    let scrollY = 0
    let mx = 0
    let my = 0

    const apply = () => {
      // Planet rises and fades as you scroll past the hero/about, leaving the
      // lower sections as pure starfield (matches the design).
      const vh = window.innerHeight || 1
      const fade = Math.max(0, Math.min(1, 1 - scrollY / (vh * 1.35)))
      planet.style.opacity = fade
      planet.style.transform = `translate(${mx}px, ${-scrollY * 0.22 + my}px)`
    }
    const onScroll = () => {
      scrollY = window.scrollY
      apply()
    }
    const onMouse = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 30
      my = (e.clientY / window.innerHeight - 0.5) * 30
      apply()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouse)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-gradient" />
      <canvas ref={canvasRef} className="stars" />
      <div ref={planetRef} className="planet" />
      <div className="orb" style={{ width: 120, height: 120, top: '54%', left: '58%', opacity: 0.5 }} />
      <div className="orb" style={{ width: 80, height: 80, top: '78%', left: '20%', opacity: 0.4 }} />
    </div>
  )
}
