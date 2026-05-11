// Centralized site data. Single source of truth for nav, socials, brand strings.
// Everything that's used in more than one place lives here.

export type NavLink = {
  label: string
  to: string
  external?: boolean
}

export type SocialLink = {
  label: string
  href: string
  icon: 'instagram' | 'facebook' | 'x'
}

export const bombshellsSite = {
  name: 'Bombshells Restaurant & Bar',
  shortName: 'Bombshells',
  tagline: "Houston's Favorite Bar & Grill",
  slogan: 'Great Times. Great Food.',
  hashtag: '#4Bombshells',
  hours: '11AM to 2AM, every day',
  phoneDisplay: '',
  phoneHref: '',
  email: '',
  emailHref: '',
  addressSingleLine: 'Houston, TX',
  parentCompany: 'RCI Internet Services, Inc.',

  navLinks: [
    { label: 'Home', to: '/' },
    { label: 'Menu', to: '/menu' },
    { label: 'Locations', to: '/locations' },
    { label: 'Events', to: '/events' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact', to: '/contact' },
  ] as NavLink[],

  // Primary CTA in the navbar — links to menu for now; swap to an external
  // ordering URL when the real ordering integration is wired.
  primaryCta: { label: 'Order Online', to: '/menu' },

  socialLinks: [
    { label: 'Instagram', href: 'https://instagram.com/4bombshells', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com/bombshells', icon: 'facebook' },
    { label: 'X / Twitter', href: 'https://twitter.com/bombshells', icon: 'x' },
  ] as SocialLink[],

  assets: {
    logo: '/images/bs_logo.png',
    heroBackground:
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1920&q=85',
    interior: '/images/slider-interior.png',
    bombshellsBabe: '/images/bombshells-babe.png',
    splash: '/images/splash.jpg',
    burger: '/images/slider-burger.jpg',
  },

  // Used for the homepage's "Open Every Day" callout and hours pages
  hoursLines: [
    { label: 'Kitchen', value: '11AM — 2AM' },
    { label: 'Last call', value: '1:45AM' },
  ],

  // SEO defaults — override per page via PageHead
  seo: {
    title: 'Bombshells — Great Times & Great Food',
    description:
      "Houston's favorite bar & grill. Scratch-made food, cold drinks, and live entertainment. Open every day from 11AM to 2AM.",
    image: '/images/bs_logo.png',
  },
}

export type BombshellsSite = typeof bombshellsSite
