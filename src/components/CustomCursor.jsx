import { useEffect, useRef, useState } from 'react'

// A two-part cursor: a solid dot that tracks 1:1, and a ring that trails
// slightly and swells over interactive elements. Disabled on touch devices.
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    // Skip entirely on coarse pointers (phones/tablets).
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    const overInteractive = (e) => {
      const t = e.target
      setHovering(!!t.closest('a, button, input, textarea, [role="button"], .project-card, .cert-card'))
    }
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', overInteractive)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', overInteractive)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={ringRef}
        className={`cursor-ring${hovering ? ' hovering' : ''}${clicking ? ' clicking' : ''}`}
      />
    </>
  )
}
