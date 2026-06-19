'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import type { Product } from '@/lib/products'

export function ProductShowcase({
  product,
  reverse,
}: {
  product: Product
  reverse?: boolean
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={reverse ? 'lg:order-2' : ''}
      >
        <div className="group relative overflow-hidden rounded-[2rem] border border-border shadow-lg">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            width={800}
            height={600}
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span
            className="absolute left-5 top-5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow"
            style={{ backgroundColor: product.accent }}
          >
            {product.category}
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: product.accent }}
        >
          {product.tagline}
        </p>
        <h3 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {product.name}
        </h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <dl className="mt-7 grid gap-3 sm:grid-cols-3">
          {product.specs.map((spec) => (
            <div
              key={spec.label}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {spec.label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-105"
          >
            Request a quote
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="size-4 text-primary" />
            Export-grade packaging
          </span>
        </div>
      </motion.div>
    </div>
  )
}
