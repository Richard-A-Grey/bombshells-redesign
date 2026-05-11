import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)

export default function Hashtag() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current.querySelector('.hashtag-mark')
    if (!el) return
    // Visible by default, translate-only so it can never get stuck hidden
    gsap.fromTo(
      el,
      { x: -50 },
      {
        x: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    )
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[oklch(0.09_0.01_22)] border-y border-[oklch(0.25_0.01_22)]"
    >
      {/* Subtle radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 50%, oklch(0.52 0.22 25 / 0.08) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 py-24 md:py-28">
        {/* Asymmetric two-row layout: oversized hashtag left-aligned, small meta right-aligned */}
        <div className="flex flex-col gap-8 md:gap-10">

          {/* Top meta strip — right aligned, small */}
          <div className="flex justify-end items-center gap-3">
            <span className="block h-px w-12 bg-[oklch(0.52_0.22_25)]" />
            <span className="font-stencil text-xs font-bold tracking-[0.32em] uppercase text-[oklch(0.52_0.22_25)]">
              The Community
            </span>
          </div>

          {/* Mega hashtag — left aligned, breaks the page rhythm */}
          <div className="hashtag-mark">
            <p
              className="font-stencil font-bold leading-[0.88] text-[oklch(0.94_0.008_22)] uppercase"
              style={{ fontSize: 'clamp(3.5rem, 12.5vw, 11rem)', letterSpacing: '-0.005em' }}
            >
              #4Bombshells
            </p>
          </div>

          {/* Bottom meta — split row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <p className="font-body text-base text-[oklch(0.65_0.008_22)] max-w-[420px] leading-relaxed">
              Tag your bar, your crew, your plate.
              Show up in our feed.
            </p>
            <a
              href="https://www.instagram.com/4bombshells"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-stencil text-sm font-bold tracking-[0.28em] uppercase text-[oklch(0.52_0.22_25)] hover:text-[oklch(0.58_0.22_25)] transition-colors group"
            >
              <InstagramIcon />
              <span>@4Bombshells</span>
              <span className="block h-px w-8 bg-current group-hover:w-12 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
