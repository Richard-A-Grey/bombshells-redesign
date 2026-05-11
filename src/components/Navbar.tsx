import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { clsx } from 'clsx'

const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Events', href: '#events' },
  { label: 'Locations', href: '#locations' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Careers', href: '#careers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[oklch(0.11_0.01_22/0.97)] backdrop-blur-md border-b border-[oklch(0.25_0.01_22)]'
          : 'bg-gradient-to-b from-[oklch(0_0_0/0.7)] to-transparent',
      )}
    >
      <nav className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Mobile: hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[oklch(0.94_0.008_22)] hover:text-[oklch(0.52_0.22_25)] transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav left */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-heading text-sm font-semibold tracking-widest uppercase text-[oklch(0.94_0.008_22)] hover:text-[oklch(0.52_0.22_25)] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo — center */}
        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2 hover:opacity-90 transition-opacity"
        >
          <img
            src="/images/bs_logo.png"
            alt="Bombshells Restaurant & Bar"
            className="h-12 w-auto"
            width={200}
            height={93}
          />
        </a>

        {/* Desktop nav right */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(3).map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-heading text-sm font-semibold tracking-widest uppercase text-[oklch(0.94_0.008_22)] hover:text-[oklch(0.52_0.22_25)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#order"
            className="flex items-center gap-2 bg-[oklch(0.52_0.22_25)] hover:bg-[oklch(0.58_0.22_25)] text-white font-heading font-semibold text-sm tracking-widest uppercase px-5 py-2.5 transition-colors duration-200"
          >
            <ShoppingBag size={15} />
            <span>Order</span>
          </a>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[oklch(0.11_0.01_22)] border-t border-[oklch(0.25_0.01_22)] px-6 py-8">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-xl font-semibold tracking-widest uppercase text-[oklch(0.94_0.008_22)] hover:text-[oklch(0.52_0.22_25)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
