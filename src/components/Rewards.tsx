import { useEffect } from 'react'
import { Gift } from 'lucide-react'
import { animateSection } from '../lib/scroll'

const StarIcon = ({ size = 12, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
)

const PERKS = [
  'Earn points on every visit',
  'Free birthday entrée',
  'Early access to events & specials',
  'Members-only food + drink menu',
]

export default function Rewards() {
  useEffect(() => {
    animateSection('.rewards-animate')
  }, [])

  return (
    <section
      id="rewards"
      className="relative overflow-hidden bg-[var(--color-bg-deep)]"
    >
      {/* Red diagonal accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(115deg, transparent 0%, transparent 55%, oklch(0.52 0.22 25 / 0.08) 65%, oklch(0.52 0.22 25 / 0.18) 100%)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 py-20 md:py-24 grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
        {/* Left: copy + perks */}
        <div className="rewards-animate">
          <div className="flex items-center gap-3 mb-5">
            <Gift size={18} className="text-[var(--color-accent)]" />
            <span className="font-stencil text-xs font-bold tracking-[0.32em] uppercase text-[var(--color-accent)]">
              Members Eat Better
            </span>
          </div>
          <h2 className="font-display text-3xl-fluid text-[var(--color-text)] mb-5 leading-[0.95]">
            Join Bombshells<br />Rewards. Free.
          </h2>
          <p className="font-body text-lg text-[var(--color-text-soft)] mb-8 max-w-[520px] leading-relaxed">
            Two minutes to sign up. Points start stacking the next time you swing by.
            Real perks, no spam.
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 max-w-[520px]">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <StarIcon size={12} className="text-[var(--color-accent)] flex-shrink-0 mt-1.5" />
                <span className="font-body text-sm text-[var(--color-text-soft)]">
                  {perk}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: stacked CTA card */}
        <div className="rewards-animate flex flex-col items-stretch gap-3 min-w-[260px]">
          <a
            href="#join-rewards"
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-stencil font-bold text-sm tracking-[0.28em] uppercase px-8 py-4 text-center transition-colors duration-200"
          >
            Join Free
          </a>
          <a
            href="#rewards-info"
            className="border border-[var(--color-border-strong)] hover:border-[var(--color-accent)] text-[var(--color-text)] hover:text-[var(--color-accent)] font-stencil font-bold text-xs tracking-[0.28em] uppercase px-8 py-3.5 text-center transition-colors duration-200"
          >
            Already a Member? Sign In
          </a>
        </div>
      </div>
    </section>
  )
}
