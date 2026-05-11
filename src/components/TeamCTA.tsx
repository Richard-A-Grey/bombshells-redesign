import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { animateSection } from '../lib/scroll'

const BombIcon = ({ size = 14, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <circle cx="11" cy="15" r="8" />
    <path d="M11 7C11 5.5 13 4.5 14.5 3.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <circle cx="15.5" cy="2.5" r="1.5" />
  </svg>
)

export default function TeamCTA() {
  useEffect(() => {
    animateSection('.team-animate')
  }, [])

  return (
    <section className="relative bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="max-w-[1280px] mx-auto px-6 py-14 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="team-animate flex items-start gap-5">
          <BombIcon size={22} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
          <div>
            <p className="font-stencil text-xs font-bold tracking-[0.32em] uppercase text-[var(--color-accent)] mb-2">
              Now Hiring
            </p>
            <h2 className="font-display text-2xl-fluid text-[var(--color-text)] leading-[0.95]">
              Join the Bombshells Team
            </h2>
            <p className="font-body text-sm text-[var(--color-text-soft)] mt-2 max-w-[520px]">
              Flexible shifts, real money, a crew you'll actually want to see. Eight Texas locations.
            </p>
          </div>
        </div>

        <Link
          to="/careers"
          className="team-animate flex-shrink-0 inline-flex items-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-stencil font-bold text-xs tracking-[0.28em] uppercase px-6 py-3.5 transition-colors duration-200"
        >
          See Open Roles
        </Link>
      </div>
    </section>
  )
}
