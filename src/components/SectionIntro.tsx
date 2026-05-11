import type { ReactNode } from 'react'

type SectionIntroProps = {
  eyebrow?: string
  heading: ReactNode
  sub?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

// Reusable section header. Red rule + stencil eyebrow + display headline + sub.
// Used by stub pages (Menu, Locations, Events, Careers, Contact) for consistent chrome.
export default function SectionIntro({
  eyebrow,
  heading,
  sub,
  align = 'center',
  className = '',
}: SectionIntroProps) {
  const isCenter = align === 'center'
  return (
    <div
      className={`${className} ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}
    >
      <span
        className={`red-rule mb-5 ${isCenter ? 'mx-auto' : ''}`}
      />
      {eyebrow ? (
        <p className="font-stencil text-xs font-bold tracking-[0.32em] uppercase text-[var(--color-accent)] mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-3xl-fluid text-[var(--color-text)] mb-5">
        {heading}
      </h1>
      {sub ? (
        <p className="font-body text-base md:text-lg text-[var(--color-text-soft)] leading-relaxed">
          {sub}
        </p>
      ) : null}
    </div>
  )
}
