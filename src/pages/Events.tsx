import SiteShell from '../components/SiteShell'
import SectionIntro from '../components/SectionIntro'

const EVENTS = [
  { day: 'Monday', title: 'Industry Night', desc: 'Service-industry pros: half-price app menu and drink specials.' },
  { day: 'Tuesday', title: 'Trivia Night', desc: 'Free to play. Win bar tabs. Starts at 8PM.' },
  { day: 'Wednesday', title: 'Ladies Night', desc: 'Special drink menu and live DJ.' },
  { day: 'Thursday', title: 'Karaoke', desc: 'Mic open from 9PM to close.' },
  { day: 'Friday', title: 'Live Music', desc: 'Local bands every Friday night.' },
  { day: 'Saturday', title: 'Watch Parties', desc: 'Every game. Every screen. Cold beer.' },
  { day: 'Sunday', title: 'Brunch + NFL', desc: 'Brunch menu starting 11AM. RedZone on every screen.' },
]

export default function Events() {
  return (
    <SiteShell
      title="Events"
      description="Trivia, live music, watch parties, and themed nights — every week at Bombshells."
    >
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
        <SectionIntro
          eyebrow="Every Week"
          heading={<>Something's Always<br />Going On</>}
          sub="Live music, trivia, watch parties, themed nights. Check the lineup at your closest spot."
        />
        <div className="max-w-[1280px] mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]">
          {EVENTS.map((event) => (
            <article
              key={event.day}
              className="bg-[var(--color-surface)] p-8 hover:bg-[var(--color-surface-raised)] transition-colors duration-300"
            >
              <p className="font-stencil text-xs font-bold tracking-[0.32em] uppercase text-[var(--color-accent)] mb-3">
                {event.day}
              </p>
              <h3 className="font-display text-2xl-fluid text-[var(--color-text)] mb-3">
                {event.title}
              </h3>
              <p className="font-body text-[var(--color-text-soft)] leading-relaxed">
                {event.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
