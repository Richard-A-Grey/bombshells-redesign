import { ChevronDown } from 'lucide-react'

const BombIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <circle cx="11" cy="15" r="8" />
    <path d="M11 7C11 5.5 13 4.5 14.5 3.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <circle cx="15.5" cy="2.5" r="1.5" />
    <circle cx="8" cy="12" r="2" fill="white" fillOpacity="0.18" />
  </svg>
)

const StarIcon = ({ size = 13, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
)

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Food background */}
      <img
        src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1920&q=85"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        width={1920}
        height={1280}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#1a1210] opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1210] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1210]/50 to-transparent" />

      {/* Content — flex column so every child is reliably centered */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-3xl">

        {/* Eyebrow: rule — bomb — tagline — bomb — rule */}
        <div className="hero-eyebrow flex items-center justify-center gap-3 mb-10 w-full">
          <span className="h-px flex-1 max-w-[64px] bg-[oklch(0.52_0.22_25)]" />
          <BombIcon size={17} className="text-[oklch(0.52_0.22_25)]" />
          <span className="font-stencil text-xs font-bold tracking-[0.32em] uppercase text-[oklch(0.52_0.22_25)] whitespace-nowrap">
            Houston's Favorite Bar &amp; Grill
          </span>
          <BombIcon size={17} className="text-[oklch(0.52_0.22_25)]" />
          <span className="h-px flex-1 max-w-[64px] bg-[oklch(0.52_0.22_25)]" />
        </div>

        {/* Logo — centered by flex parent */}
        <img
          src="/images/bs_logo.png"
          alt="Bombshells Restaurant & Bar"
          className="hero-title w-auto drop-shadow-2xl"
          style={{ height: 'clamp(130px, 18vw, 230px)' }}
          width={400}
          height={186}
        />

        {/* Stars + subtitle */}
        <div className="hero-sub mt-10 flex flex-col items-center">
          <div className="flex items-center gap-2.5 mb-5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} size={13} className="text-[oklch(0.72_0.14_65)]" />
            ))}
          </div>
          <p className="font-body text-lg text-[oklch(0.80_0.008_22)] max-w-[480px] leading-relaxed">
            Scratch-made food, cold drinks, live entertainment,<br className="hidden sm:block" />
            and good people. Open every day from 11AM to 2AM.
          </p>
        </div>

        {/* CTAs */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#menu"
            className="inline-flex items-center justify-center bg-[oklch(0.52_0.22_25)] hover:bg-[oklch(0.58_0.22_25)] text-white font-heading font-semibold tracking-widest uppercase px-8 py-4 text-sm transition-all duration-200 hover:scale-[1.02]"
          >
            See the Menu
          </a>
          <a
            href="#locations"
            className="inline-flex items-center justify-center border border-[oklch(0.94_0.008_22/0.4)] hover:border-[oklch(0.94_0.008_22)] text-[oklch(0.94_0.008_22)] font-heading font-semibold tracking-widest uppercase px-8 py-4 text-sm transition-all duration-200 hover:bg-[oklch(0.94_0.008_22/0.08)]"
          >
            Find a Location
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[oklch(0.94_0.008_22/0.5)] hover:text-[oklch(0.52_0.22_25)] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
