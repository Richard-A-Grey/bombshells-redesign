import SiteShell from '../components/SiteShell'
import SectionIntro from '../components/SectionIntro'

const ROLES = [
  { title: 'Server', type: 'Full-time / Part-time', pay: 'Tips + base' },
  { title: 'Bartender', type: 'Full-time / Part-time', pay: 'Tips + base' },
  { title: 'Line Cook', type: 'Full-time', pay: 'Competitive hourly' },
  { title: 'Host', type: 'Part-time', pay: 'Hourly' },
  { title: 'Manager', type: 'Full-time', pay: 'Salary + bonus' },
  { title: 'Security', type: 'Part-time / Evening', pay: 'Hourly' },
]

export default function Careers() {
  return (
    <SiteShell
      title="Careers"
      description="Join the Bombshells team. Server, bartender, kitchen, and management roles across Texas."
    >
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
        <SectionIntro
          eyebrow="Now Hiring"
          heading={<>Work Where the<br />Good Times Are</>}
          sub="Eight locations across Texas. Flexible shifts, real money, a team you actually want to see."
        />
        <ul className="max-w-[1280px] mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]">
          {ROLES.map((role) => (
            <li
              key={role.title}
              className="bg-[var(--color-surface)] p-8 group hover:bg-[var(--color-surface-raised)] transition-colors duration-300"
            >
              <h3 className="font-display text-2xl-fluid text-[var(--color-text)] mb-2">
                {role.title}
              </h3>
              <p className="font-body text-sm text-[var(--color-text-muted)] mb-1">{role.type}</p>
              <p className="font-body text-sm text-[var(--color-text-soft)] mb-6">{role.pay}</p>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 font-stencil text-xs font-bold tracking-[0.28em] uppercase text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
              >
                Apply
                <span className="block h-px w-6 bg-current group-hover:w-10 transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  )
}
