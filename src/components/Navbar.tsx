import { useContext, useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { clsx } from 'clsx'
import { bombshellsSite } from '../content/bombshellsContent'
import loadingContext from './loadingContext'

const SOCIAL_SVG: Record<string, ReactElement> = {
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  x: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { playLoadingScreen } = useContext(loadingContext)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setIsOpen(false)
    playLoadingScreen(() => navigate('/'))
  }

  const closeDrawer = () => setIsOpen(false)

  return (
    <>
      <header
        className={clsx(
          'sticky top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-[oklch(0.11_0.01_22/0.92)] backdrop-blur-md border-b border-[var(--color-border)]'
            : 'bg-gradient-to-b from-[oklch(0_0_0/0.55)] to-transparent',
        )}
        style={{ paddingTop: 'var(--pwa-safe-top)' }}
      >
        <nav className="max-w-[1280px] mx-auto px-6 h-16 flex items-center gap-4">
          {/* Left: hamburger always */}
          <div className="flex-1 flex items-center justify-start">
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--color-border)] bg-[oklch(0.16_0.012_22/0.7)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Center: brand logo */}
          <Link
            to="/"
            onClick={handleBrandClick}
            className="flex-shrink-0 hover:opacity-90 transition-opacity"
          >
            <img
              src={bombshellsSite.assets.logo}
              alt={bombshellsSite.name}
              className="h-12 w-auto block"
              width={200}
              height={93}
            />
          </Link>

          {/* Right: Order CTA */}
          <div className="flex-1 flex items-center justify-end">
            <Link
              to={bombshellsSite.primaryCta.to}
              className="flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-stencil font-bold text-xs tracking-[0.28em] uppercase px-4 sm:px-5 py-2.5 transition-colors duration-200"
            >
              <ShoppingBag size={14} />
              <span className="hidden sm:inline">{bombshellsSite.primaryCta.label}</span>
              <span className="sm:hidden">Order</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <aside
        className={clsx(
          'fixed top-0 left-0 z-50 h-full w-[min(86vw,360px)] transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto bg-[oklch(0.09_0.01_22)] border-r border-[var(--color-border)] px-6 pt-6 pb-10">
          {/* Top: brand + close */}
          <div className="flex items-center justify-between mb-10">
            <img
              src={bombshellsSite.assets.logo}
              alt=""
              className="h-10 w-auto block"
              width={200}
              height={93}
            />
            <button
              type="button"
              onClick={closeDrawer}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Eyebrow */}
          <p className="font-stencil text-[10px] font-bold tracking-[0.34em] uppercase text-[var(--color-accent)] mb-5">
            Navigate
          </p>

          {/* Nav list */}
          <ul className="flex flex-col gap-1.5">
            {bombshellsSite.navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    clsx(
                      'block py-3 font-stencil font-bold text-base tracking-[0.18em] uppercase transition-colors duration-200 border-l-2 pl-4',
                      isActive
                        ? 'border-[var(--color-accent)] text-[var(--color-accent)]'
                        : 'border-transparent text-[var(--color-text)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="mt-auto pt-10">
            <p className="font-stencil text-[10px] font-bold tracking-[0.34em] uppercase text-[var(--color-accent)] mb-4">
              Follow
            </p>
            <div className="flex items-center gap-3">
              {bombshellsSite.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  {SOCIAL_SVG[social.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
