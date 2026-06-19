import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center shadow-xl sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 size-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 size-80 rounded-full bg-gold/10 blur-3xl" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Let&apos;s trade together
            </p>
            <h2 className="relative mx-auto mt-4 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-5xl">
              Ready to import premium spices &amp; vegetables?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Request a quote, samples or our full export catalogue. Our team
              responds within one business day.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
              >
                Request a quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Browse products
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
