'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Globe2, Sparkles } from 'lucide-react'

const GlobeScene = dynamic(
  () => import('@/components/three/globe-scene').then((m) => m.GlobeScene),
  { ssr: false },
)

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24">
      {/* Soft golden ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 size-[60rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-[40rem] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* 3D globe lives behind/around the copy */}
      <div className="absolute inset-0 z-0 opacity-40 sm:opacity-100 md:left-[35%]">
        <GlobeScene />
      </div>

      {/* Readability scrim — stronger on mobile where the globe sits behind text */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/80 via-background/40 to-background sm:bg-gradient-to-r sm:from-background sm:via-background/70 sm:to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[80svh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground backdrop-blur"
          >
            <Globe2 className="size-3.5 text-gold" />
            Exporting across the globe
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl"
          >
            India&apos;s finest{' '}
            <span className="text-gradient-gold">spices</span> &amp; fresh{' '}
            <span className="text-primary">vegetables</span>, delivered worldwide.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
          >
            Sidharv Global Private Limited sources, processes and exports premium
            spices and farm-fresh produce to distributors and kitchens across
            continents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Explore Products
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/export"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-gold"
            >
              <Sparkles className="size-4 text-gold" />
              Our Export Story
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 flex gap-8"
          >
            {[
              { k: '25+', v: 'Countries served' },
              { k: '8', v: 'Core products' },
              { k: '100%', v: 'Quality assured' },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-serif text-3xl font-semibold text-primary">
                  {s.k}
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-gold/50 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="block size-1.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  )
}
