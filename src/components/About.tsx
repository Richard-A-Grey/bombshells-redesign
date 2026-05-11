import { useEffect } from 'react'
import { animateSection } from '../lib/scroll'

const StarIcon = ({ className = '' }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
)

const HIGHLIGHTS = [
  'Scratch-made food, zero shortcuts — ever',
  'Open 365 days a year, 11AM to 2AM',
  'Live entertainment & watch parties every week',
  'Loyalty rewards that pay off every visit',
]

export default function About() {
  useEffect(() => {
    animateSection('.about-animate')
  }, [])

  return (
    <section id="about" className="py-24 md:py-32 bg-[oklch(0.11_0.01_22)]">
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
          <p className="about-animate font-body text-[oklch(0.75_0.008_22)] text-lg leading-relaxed mb-8">
            Every dish is handmade from scratch. Every drink is poured right. Our kitchen
            runs 11AM to 2AM because the best bar food doesn't have an early bedtime.
          </p>

          <ul className="about-animate space-y-4 mb-10">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <StarIcon className="text-[oklch(0.52_0.22_25)] flex-shrink-0 mt-0.5" />
                <span className="font-body text-[oklch(0.75_0.008_22)] leading-snug">{h}</span>
              </li>
            ))}
          </ul>

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
          <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[oklch(0.52_0.22_25)] -z-10" />
        </div>
      </div>
    </section>
  )
}
