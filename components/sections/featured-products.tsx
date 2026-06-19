import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { spices, vegetables } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'

export function FeaturedProducts() {
  return (
    <section id="products" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Our Catalogue
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
            Premium spices, grown and ground with care
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each batch is sourced from trusted farms, processed to international
            standards and packed for freshness in transit.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spices.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Farm Fresh
          </p>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
            Vegetables, packed at peak freshness
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vegetables.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold"
          >
            View full catalogue
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
