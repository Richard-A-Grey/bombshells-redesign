import { useEffect } from 'react'
import { Tv } from 'lucide-react'
import { animateSection } from '../lib/scroll'

const StarIcon = ({ size = 13, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
)

export default function WatchParties() {
  useEffect(() => {
    animateSection('.watch-animate')
  }, [])

  return (
    <section
      id="watch"
      className="relative overflow-hidden border-y border-[var(--color-border)]"
    >
      {/* Bar interior bg with TV wall */}
      <img
        src="/images/slider-interior.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
        width={1920}
        height={1080}
      />

      {/* Dark + red wash overlays */}
      <div className="absolute inset-0 bg-[oklch(0.09_0.01_22/0.78)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 20% 50%, oklch(0.52 0.22 25 / 0.18) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 py-24 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="watch-animate">
          <div className="flex items-center gap-3 mb-5">
            <Tv size={18} className="text-[var(--color-amber)]" />
            <span className="font-stencil text-xs font-bold tracking-[0.32em] uppercase text-[var(--color-amber)]">
              Game Day Headquarters
            </span>
          </div>
          <h2 className="font-display text-3xl-fluid text-[var(--color-text)] mb-5 leading-[0.95]">
            Watch Every Game.<br />Every Screen.
          </h2>
          <p className="font-body text-lg text-[var(--color-text-soft)] mb-8 max-w-[480px] leading-relaxed">
            NFL Sundays, college Saturdays, Monday Night, UFC, World Cup — if it's
            on, it's on at Bombshells. Sound on the big game, every booth.
          </p>
          <a
            href="#events"
            className="inline-flex items-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-stencil font-bold text-xs tracking-[0.28em] uppercase px-6 py-3.5 transition-colors duration-200"
          >
            See Game Schedule
          </a>
        </div>

        {/* Stat strip */}
        <ul className="watch-animate grid grid-cols-3 gap-px bg-[var(--color-border)]">
          {[
            { num: '60+', label: 'HD Screens' },
            { num: '7', label: 'Days/Week' },
            { num: '15hr', label: 'Open Daily' },
          ].map((stat) => (
            <li
              key={stat.label}
              className="bg-[oklch(0.11_0.01_22/0.88)] backdrop-blur-sm p-8 text-center"
            >
              <p className="font-display text-2xl-fluid text-[var(--color-text)] leading-none mb-2">
                {stat.num}
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(3)].map((_, i) => (
                  <StarIcon key={i} size={9} className="text-[var(--color-amber)]" />
                ))}
              </div>
              <p className="font-stencil text-[10px] font-bold tracking-[0.24em] uppercase text-[var(--color-text-muted)]">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
