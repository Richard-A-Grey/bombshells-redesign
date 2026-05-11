import SiteShell from '../components/SiteShell'
import SectionIntro from '../components/SectionIntro'

const LOCATIONS = [
  { name: 'Sam Houston Tollway', city: 'Houston, TX', address: '12810 Northwest Fwy' },
  { name: 'Webster', city: 'Webster, TX', address: '101 W NASA Pkwy' },
  { name: 'Katy', city: 'Katy, TX', address: '25254 Katy Mills Pkwy' },
  { name: 'Stafford', city: 'Stafford, TX', address: '12810 SW Fwy' },
  { name: 'Spring', city: 'Spring, TX', address: '19102 I-45' },
  { name: 'Fort Worth', city: 'Fort Worth, TX', address: '4901 East Loop 820' },
  { name: 'Austin', city: 'Austin, TX', address: '13435 N I-35' },
  { name: 'San Antonio', city: 'San Antonio, TX', address: '12656 IH-10' },
]

export default function Locations() {
  return (
    <SiteShell
      title="Locations"
      description="Find a Bombshells near you. Houston, Austin, San Antonio, Fort Worth, and more."
    >
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
        <SectionIntro
          eyebrow="Texas-Wide"
          heading={<>Find Your<br />Nearest Bombshells</>}
          sub="Eight locations and counting. Open 11AM to 2AM every day."
        />
        <ul className="max-w-[1280px] mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)]">
          {LOCATIONS.map((loc) => (
            <li
              key={loc.name}
              className="bg-[var(--color-surface)] p-8 hover:bg-[var(--color-surface-raised)] transition-colors duration-300"
            >
              <p className="font-stencil text-xs font-bold tracking-[0.28em] uppercase text-[var(--color-accent)] mb-3">
                {loc.city}
              </p>
              <h3 className="font-display text-xl-fluid text-[var(--color-text)] mb-2">
                {loc.name}
              </h3>
              <p className="font-body text-sm text-[var(--color-text-soft)]">
                {loc.address}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  )
}
