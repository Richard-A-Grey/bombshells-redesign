import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initScroll(): Lenis {
  const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  return lenis
}

export function animateHero() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.7 })
    .from('.hero-title',   { y: 60, opacity: 0, duration: 1 },    '-=0.4')
    .from('.hero-sub',     { y: 30, opacity: 0, duration: 0.8 },  '-=0.6')
    .from('.hero-cta',     { y: 20, opacity: 0, duration: 0.6 },  '-=0.5')
}

export function animateSection(selector: string) {
  // Elements are visible by default (CSS sets opacity:1).
  // GSAP only adds a translate lift for browsers that support rAF properly.
  gsap.fromTo(
    selector,
    { y: 32 },
    {
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: selector,
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    }
  )
}
