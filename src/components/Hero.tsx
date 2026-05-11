import { ChevronDown } from 'lucide-react'

export default function Hero() {

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background image */}
      <img
        src="/images/slider-interior.png"
        alt="Bombshells bar and restaurant interior"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        width={598}
        height={601}
      />

      {/* Gradient overlays */}
      {/* Strong base overlay to kill the baked-in text on the image */}
      <div className="absolute inset-0 bg-[#1a1210] opacity-60" />
      {/* Directional gradients for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1210] via-[#1a121070] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1210e0] via-[#1a121060] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-20 md:pb-28 w-full">
        <div className="max-w-2xl">
          <p className="hero-eyebrow font-heading font-semibold text-sm tracking-[0.3em] uppercase text-[oklch(0.52_0.22_25)] mb-4">
            Houston's Favorite Bar &amp; Grill
          </p>

          <h1 className="hero-title font-display text-hero text-[oklch(0.94_0.008_22)] mb-6">
            Great Times<br />Great Food
          </h1>

          <p className="hero-sub font-body text-lg text-[oklch(0.80_0.008_22)] mb-10 max-w-[520px]">
            Scratch-made food, cold drinks, live entertainment, and good people.
            Open every day from 11AM to 2AM.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4">
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
