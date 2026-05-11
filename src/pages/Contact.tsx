import SiteShell from '../components/SiteShell'
import SectionIntro from '../components/SectionIntro'
import { bombshellsSite } from '../content/bombshellsContent'

export default function Contact() {
  return (
    <SiteShell
      title="Contact"
      description="Reach Bombshells Restaurant & Bar. Private events, catering, press, careers."
    >
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
        <SectionIntro
          eyebrow="Reach Us"
          heading={<>Say Hello</>}
          sub="Private events, catering, press, or just want to chat. Pick the right channel and we'll get back to you fast."
        />

        <div className="max-w-[1280px] mx-auto mt-16 grid md:grid-cols-3 gap-px bg-[var(--color-border)]">
          {[
            { label: 'Private Events', value: 'events@4bombshells.com' },
            { label: 'Press', value: 'press@4bombshells.com' },
            { label: 'Careers', value: 'careers@4bombshells.com' },
          ].map((channel) => (
            <div key={channel.label} className="bg-[var(--color-surface)] p-10 text-center">
              <p className="font-stencil text-xs font-bold tracking-[0.32em] uppercase text-[var(--color-accent)] mb-4">
                {channel.label}
              </p>
              <p className="font-body text-[var(--color-text)] break-all">{channel.value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[1280px] mx-auto mt-16 text-center">
          <p className="font-body text-[var(--color-text-muted)] mb-2">
            {bombshellsSite.parentCompany}
          </p>
          <p className="font-body text-[var(--color-text-soft)]">
            {bombshellsSite.addressSingleLine}
          </p>
        </div>
      </section>
    </SiteShell>
  )
}
