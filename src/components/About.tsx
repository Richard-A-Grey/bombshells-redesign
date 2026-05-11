import { useEffect, useRef } from 'react'
import { animateSection } from '../lib/scroll'

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    animateSection('.about-animate')
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-[oklch(0.11_0.01_22)]">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="about-animate red-rule mb-6" />
          <p className="about-animate font-heading text-sm font-semibold tracking-[0.3em] uppercase text-[oklch(0.52_0.22_25)] mb-4">
            Welcome to Bombshells
          </p>
          <h2 className="about-animate font-display text-3xl-fluid text-[oklch(0.94_0.008_22)] mb-8">
            Where Houston<br />Comes to Eat
          </h2>
          <p className="about-animate font-body text-[oklch(0.75_0.008_22)] text-lg leading-relaxed mb-6">
            Every dish is handmade from scratch. Every drink is poured right. Our kitchen
            runs 11AM to 2AM because the best bar food doesn't have an early bedtime.
          </p>
          <p className="about-animate font-body text-[oklch(0.75_0.008_22)] text-lg leading-relaxed mb-10">
            Patio seating, live music, big screens, and a menu that'll give you an excuse
            to come back twice a week. That's Bombshells.
          </p>
          <a
            href="#menu"
            className="about-animate inline-flex items-center gap-3 font-heading font-semibold tracking-widest uppercase text-sm text-[oklch(0.52_0.22_25)] hover:text-[oklch(0.58_0.22_25)] transition-colors group"
          >
            Explore the Menu
            <span className="block h-px w-8 bg-[oklch(0.52_0.22_25)] group-hover:w-12 transition-all duration-300" />
          </a>
        </div>

        {/* Image */}
        <div className="about-animate relative">
          <img
            src="/images/bombshells-babe.png"
            alt="Bombshells server in uniform"
            className="w-full aspect-[4/9] object-cover object-top"
            loading="lazy"
            width={409}
            height={930}
          />
          {/* Accent overlay */}
          <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[oklch(0.52_0.22_25)] -z-10" />
        </div>
      </div>
    </section>
  )
}
