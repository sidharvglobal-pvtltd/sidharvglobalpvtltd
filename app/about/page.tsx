import type { Metadata } from 'next'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/sections/cta-section'
import { Target, Eye, Gem } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Sidharv Global Private Limited',
  description:
    'Sidharv Global Private Limited is an Indian exporter of premium spices and farm-fresh vegetables, committed to quality, traceability and global trade.',
}

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To deliver India\u2019s finest spices and vegetables to the world with uncompromising quality and reliability.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be a globally trusted name in agricultural exports, known for integrity and consistency.',
  },
  {
    icon: Gem,
    title: 'Our Values',
    text: 'Quality first, honest partnerships, sustainable sourcing and on-time delivery, every time.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Rooted in India, <span className="text-gradient-gold">trusted globally</span>
          </>
        }
        description="Sidharv Global Private Limited connects India\u2019s agricultural richness with markets around the world through premium spices and fresh produce."
      />

      <section className="py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-lg">
              <Image
                src="/images/hero-spices.png"
                alt="Premium Indian spices arranged for export"
                width={800}
                height={640}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              A passion for purity and global trade
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Sidharv Global Private Limited was founded on a simple belief: the
              world deserves access to the authentic flavours and freshness of
              Indian agriculture. We work directly with growers, invest in modern
              processing and uphold rigorous quality control at every stage.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From vibrant spices like turmeric, red chilli and garam masala to
              farm-fresh onions, potatoes and green chillies, our catalogue is
              built around consistency, traceability and trust — the foundations
              of every long-term export partnership.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border bg-card p-8">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
