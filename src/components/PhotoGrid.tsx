import { useEffect } from 'react'
import { animateSection } from '../lib/scroll'

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', alt: 'Wings & apps',          cls: 'aspect-[4/5]' },
  { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80',   alt: 'Cocktails',             cls: 'aspect-square' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',alt: 'Restaurant atmosphere', cls: 'aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',alt: 'Burger & fries',         cls: 'aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&q=80',   alt: 'Bar scene',             cls: 'aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80',alt: 'Cold beer',             cls: 'aspect-square' },
  { src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=80',   alt: 'Crowd energy',          cls: 'aspect-[4/5]' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',alt: 'Plated food',           cls: 'aspect-square' },
]

export default function PhotoGrid() {
  useEffect(() => {
    animateSection('.grid-animate')
  }, [])

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[oklch(0.11_0.01_22)]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid-animate text-center mb-16">
          <span className="red-rule mx-auto mb-6" />
          <h2 className="font-display text-3xl-fluid text-[oklch(0.94_0.008_22)] mb-4">
            Join the Revolution
          </h2>
          <a
            href="https://www.instagram.com/4bombshells"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-heading text-sm font-semibold tracking-widest uppercase text-[oklch(0.65_0.008_22)] hover:text-[oklch(0.52_0.22_25)] transition-colors"
          >
            <InstagramIcon />
            #4bombshells
          </a>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="grid-animate break-inside-avoid overflow-hidden group cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full ${photo.cls} object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300`}
                loading="lazy"
                width={600}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
