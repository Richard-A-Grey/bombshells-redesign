const IgIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)
const FbIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Events', href: '#events' },
  { label: 'Locations', href: '#locations' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Careers', href: '#careers' },
  { label: 'Gift Cards', href: '#giftcards' },
  { label: 'Rewards', href: '#rewards' },
]

const SOCIAL = [
  { icon: IgIcon, label: 'Instagram', href: 'https://instagram.com/4bombshells' },
  { icon: FbIcon, label: 'Facebook', href: 'https://facebook.com/bombshells' },
  { icon: XIcon, label: 'X / Twitter', href: 'https://twitter.com/bombshells' },
]

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.08_0.008_22)] border-t border-[oklch(0.25_0.01_22)]">
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <img
              src="/images/bs_logo.png"
              alt="Bombshells Restaurant & Bar"
              className="h-20 w-auto mb-4"
              width={200}
              height={93}
            />
            <p className="font-body text-[oklch(0.65_0.008_22)] leading-relaxed text-sm max-w-[240px]">
              Great times, great food. Open every day from 11AM to 2AM across
              Houston and surrounding areas.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-heading text-xs font-semibold tracking-[0.25em] uppercase text-[oklch(0.65_0.008_22)] mb-6">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[oklch(0.75_0.008_22)] hover:text-[oklch(0.52_0.22_25)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="font-heading text-xs font-semibold tracking-[0.25em] uppercase text-[oklch(0.65_0.008_22)] mb-6">
              Connect
            </p>
            <div className="flex gap-4 mb-8">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-[oklch(0.25_0.01_22)] text-[oklch(0.65_0.008_22)] hover:border-[oklch(0.52_0.22_25)] hover:text-[oklch(0.52_0.22_25)] transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="font-body text-sm text-[oklch(0.65_0.008_22)]">
              RCI Internet Services, Inc.<br />
              Houston, TX
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[oklch(0.25_0.01_22)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-[oklch(0.45_0.008_22)]">
            &copy; {new Date().getFullYear()} Bombshells Restaurant &amp; Bar. All rights reserved.
          </p>
          <p className="font-body text-xs text-[oklch(0.45_0.008_22)]">
            Website created by{' '}
            <a
              href="https://richardgrey.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[oklch(0.94_0.008_22)] transition-colors"
              style={{ fontFamily: 'Verso, sans-serif', textTransform: 'uppercase' }}
            >
              Richard Grey
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
