import SiteShell from '../components/SiteShell'
import SectionIntro from '../components/SectionIntro'

export default function Menu() {
  return (
    <SiteShell
      title="Menu"
      description="Scratch-made burgers, wings, salads, and shareables. Full menu at every Bombshells location."
    >
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
        <SectionIntro
          eyebrow="What's Cooking"
          heading={<>Burgers, Wings,<br />and Everything Else</>}
          sub="Every dish is handmade. Every plate goes out hot. Pull up a stool and we'll feed you right."
        />
        <div className="max-w-[1280px] mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]">
          {[
            { name: 'Burgers', desc: 'Hand-pressed, never frozen. Stacked the way you like.' },
            { name: 'Wings', desc: 'Smoked then fried. Six sauces, one rule: napkins required.' },
            { name: 'Salads', desc: 'Real produce, real protein. Not an afterthought.' },
            { name: 'Shareables', desc: 'For the table. Or just you, we won\'t judge.' },
            { name: 'Drinks', desc: 'Cold beer, full bar, slushie margaritas.' },
            { name: 'Desserts', desc: 'End the night sweet.' },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-[var(--color-surface)] p-10 hover:bg-[var(--color-surface-raised)] transition-colors duration-300"
            >
              <h3 className="font-display text-2xl-fluid text-[var(--color-text)] mb-3">
                {item.name}
              </h3>
              <p className="font-body text-[var(--color-text-soft)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
