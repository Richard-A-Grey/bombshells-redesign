import { bombshellsSite } from '../content/bombshellsContent'

const StarIcon = ({ size = 14, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
)

// 3-second branded loading screen. Triggered on initial app mount and on logo click.
// Pure CSS animations so it works in any environment (Playwright headless, SSR).
export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[oklch(0.09_0.01_22)] loading-fade-out"
      aria-hidden="true"
      role="status"
    >
      {/* Subtle red radial glow behind the logo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, oklch(0.52 0.22 25 / 0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative flex flex-col items-center gap-6 px-6">
        {/* Eyebrow */}
        <div className="loading-eyebrow flex items-center gap-3">
          <span className="h-px w-12 bg-[oklch(0.52_0.22_25)]" />
          <span className="font-stencil text-[10px] font-bold tracking-[0.34em] uppercase text-[oklch(0.52_0.22_25)] whitespace-nowrap">
            {bombshellsSite.tagline}
          </span>
          <span className="h-px w-12 bg-[oklch(0.52_0.22_25)]" />
        </div>

        {/* Logo */}
        <img
          src={bombshellsSite.assets.logo}
          alt=""
          className="loading-logo h-32 md:h-40 w-auto drop-shadow-2xl"
          width={400}
          height={186}
        />

        {/* Star pulse row */}
        <div className="loading-stars flex items-center gap-2.5">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} size={12} className="text-[oklch(0.72_0.14_65)]" />
          ))}
        </div>

        {/* Progress bar */}
        <div className="relative mt-2 h-px w-40 overflow-hidden bg-[oklch(0.25_0.01_22)]">
          <div className="loading-progress absolute inset-y-0 left-0 w-full bg-[oklch(0.52_0.22_25)]" />
        </div>
      </div>
    </div>
  )
}
