import type { Metadata } from 'next'
import { spices, vegetables } from '@/lib/products'
import { PageHero } from '@/components/page-hero'
import { ProductShowcase } from '@/components/product-showcase'
import { CtaSection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Products | Sidharv Global Private Limited',
  description:
    'Explore our export range of premium spices — Red Chilli, Turmeric, Garam Masala, Yellow Chilli, Coriander — and farm-fresh vegetables: Onion, Potato, Green Chilli.',
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Catalogue"
        title={
          <>
            Spices &amp; vegetables, <span className="text-gradient-gold">export ready</span>
          </>
        }
        description="A carefully curated range of premium ground spices and farm-fresh vegetables, processed and packed to meet international standards."
      />

      <section id="spices" className="scroll-mt-24 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between border-b border-border pb-6">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Spices
            </h2>
            <span className="text-sm text-muted-foreground">
              {spices.length} products
            </span>
          </div>
          <div className="space-y-24">
            {spices.map((p, i) => (
              <ProductShowcase key={p.slug} product={p} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section id="vegetables" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between border-b border-border pb-6">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Vegetables
            </h2>
            <span className="text-sm text-muted-foreground">
              {vegetables.length} products
            </span>
          </div>
          <div className="space-y-24">
            {vegetables.map((p, i) => (
              <ProductShowcase key={p.slug} product={p} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
