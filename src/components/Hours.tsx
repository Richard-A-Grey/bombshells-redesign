import { useEffect } from 'react'
import { animateSection } from '../lib/scroll'
import { Clock, Calendar, Star, Gift } from 'lucide-react'

const FEATURES = [
  {
    icon: Calendar,
    label: 'Events',
    desc: 'Live music, watch parties, and themed nights every week.',
    href: '#events',
    cta: 'See Events',
  },
  {
    icon: Star,
    label: 'Rewards',
    desc: 'Earn points on every visit. Redeem for food, drinks, and more.',
    href: '#rewards',
    cta: 'Join Free',
  },
  {
    icon: Gift,
    label: 'Gift Cards',
    desc: 'Give the gift of great times. Available online and in-store.',
    href: '#giftcards',
    cta: 'Get Cards',
  },
]

export default function Hours() {
  useEffect(() => {
    animateSection('.hours-animate')
  }, [])

  return (
    <section className="border-y border-[oklch(0.25_0.01_22)]" style={{ backgroundImage: 'url(/images/splash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Dark overlay over brick texture */}
      <div className="bg-[oklch(0.11_0.01_22/0.88)]">
      {/* Hours banner */}
      <div className="py-16 md:py-20 text-center border-b border-[oklch(0.25_0.01_22)]">
        <div className="hours-animate flex items-center justify-center gap-3 mb-4">
          <Clock size={20} className="text-[oklch(0.72_0.14_65)]" />
          <span className="font-stencil text-sm font-bold tracking-[0.32em] uppercase text-[oklch(0.72_0.14_65)]">
            Open Every Day
          </span>
        </div>
        <p className="hours-animate font-display text-[oklch(0.94_0.008_22)]" style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', lineHeight: 0.95 }}>
          11AM — 2AM
        </p>
        <p className="hours-animate font-body text-[oklch(0.65_0.008_22)] mt-4 text-lg">
          Kitchen open all night. Last call at 1:45AM.
        </p>
      </div>

      {/* Feature tiles */}
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20 grid md:grid-cols-3 gap-px bg-[oklch(0.25_0.01_22)]">
        {FEATURES.map(({ icon: Icon, label, desc, href, cta }) => (
          <div
            key={label}
            className="hours-animate bg-[oklch(0.16_0.012_22)] p-10 group hover:bg-[oklch(0.20_0.014_22)] transition-colors duration-300"
          >
            <Icon size={28} className="text-[oklch(0.52_0.22_25)] mb-6" />
            <h3 className="font-display text-2xl-fluid text-[oklch(0.94_0.008_22)] mb-3">
              {label}
            </h3>
            <p className="font-body text-[oklch(0.65_0.008_22)] leading-relaxed mb-8">
              {desc}
            </p>
            <a
              href={href}
              className="font-heading font-semibold tracking-widest uppercase text-sm text-[oklch(0.52_0.22_25)] group-hover:text-[oklch(0.58_0.22_25)] transition-colors flex items-center gap-2"
            >
              {cta}
              <span className="block h-px w-6 bg-current" />
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
