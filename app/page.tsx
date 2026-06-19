import { Hero } from '@/components/sections/hero'
import { Marquee } from '@/components/sections/marquee'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { ExportHighlight } from '@/components/sections/export-highlight'
import { CtaSection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ExportHighlight />
      <FeaturedProducts />
      <CtaSection />
    </>
  )
}
