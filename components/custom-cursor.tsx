'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Skip on touch / coarse pointer devices
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      setVisible(true)

      const target = e.target as HTMLElement
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]',
      )
      setHovering(Boolean(interactive))
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 200ms ease' }}
    >
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 rounded-full border transition-[width,height,border-color,background-color] duration-300 ease-out"
        style={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          borderColor: 'oklch(0.74 0.13 80)',
          borderWidth: 1.5,
          backgroundColor: hovering ? 'oklch(0.74 0.13 80 / 0.12)' : 'transparent',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 rounded-full transition-[width,height] duration-200"
        style={{
          width: hovering ? 6 : 8,
          height: hovering ? 6 : 8,
          backgroundColor: 'oklch(0.38 0.09 152)',
        }}
      />
    </div>
  )
}
