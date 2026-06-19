import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Ship, ShieldCheck, Leaf, Boxes } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Ship,
    title: 'Global logistics',
    text: 'Reliable cold-chain and dry shipping to ports across 25+ countries.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality certified',
    text: 'Lab-tested batches that meet international food safety standards.',
  },
  {
    icon: Leaf,
    title: 'Farm-direct sourcing',
    text: 'Direct partnerships with growers for traceable, fresh produce.',
  },
  {
    icon: Boxes,
    title: 'Flexible packaging',
    text: 'Bulk, retail and private-label packaging tailored to your market.',
  },
]

export function ExportHighlight() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -left-32 top-1/3 size-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-border shadow-xl">
                <Image
                  src="/images/hero-spices.png"
                  alt="Assortment of premium Indian spices ready for export"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-lg sm:block">
                <p className="font-serif text-3xl font-semibold text-primary">25+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Countries reached
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                The Export Business
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
                From Indian farms to the world&apos;s kitchens
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Exporting is at the heart of what we do. We bridge the gap between
                India&apos;s rich agricultural heritage and global markets —
                handling sourcing, processing, compliance and logistics so our
                partners receive consistent quality, every shipment.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/60">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                      <f.icon className="size-5" />
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <Link
                href="/export"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                Discover our export process
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
