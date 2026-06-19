import type { Metadata } from 'next'
import { Reveal } from '@/components/reveal'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/sections/cta-section'
import { Search, Sprout, FlaskConical, Package, Ship, Handshake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Global Export | Sidharv Global Private Limited',
  description:
    'How Sidharv Global exports premium Indian spices and vegetables worldwide — sourcing, quality control, packaging, documentation and logistics.',
}

const steps = [
  { icon: Sprout, title: 'Sourcing', text: 'Direct partnerships with farms for traceable, high-quality raw material.' },
  { icon: Search, title: 'Selection', text: 'Manual and machine sorting to remove impurities and grade produce.' },
  { icon: FlaskConical, title: 'Quality control', text: 'Lab testing for moisture, purity, pesticides and microbiological safety.' },
  { icon: Package, title: 'Packaging', text: 'Food-grade bulk, retail and private-label packing built for transit.' },
  { icon: Ship, title: 'Logistics', text: 'Sea and air freight with full export documentation and compliance.' },
  { icon: Handshake, title: 'Delivery', text: 'On-time delivery to ports across 25+ countries, every shipment.' },
]

const regions = [
  'Middle East', 'Europe', 'Southeast Asia', 'North America',
  'Africa', 'Australia', 'East Asia', 'South America',
]

export default function ExportPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Export"
        title={
          <>
            Bridging Indian farms with{' '}
            <span className="text-gradient-gold">global markets</span>
          </>
        }
        description="Exporting is the core of Sidharv Global. We manage the entire journey — from farm sourcing to your port — so partners receive consistent, certified quality."
      />

      {/* Process */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Our export process
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Six considered steps that guarantee quality and reliability.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-colors hover:border-gold/60">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <s.icon className="size-6" />
                    </span>
                    <span className="font-mono text-sm text-gold">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-secondary/40 p-8 sm:p-12">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Where we ship
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Trusted by importers across continents
              </h2>
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              {regions.map((r, i) => (
                <Reveal key={r} delay={i * 0.04}>
                  <span className="inline-flex rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground">
                    {r}
                  </span>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {[
                { k: '25+', v: 'Countries served' },
                { k: '8', v: 'Core export products' },
                { k: '100%', v: 'Quality assured batches' },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-serif text-4xl font-semibold text-primary">
                    {s.k}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
