'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 18,
  })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 18,
  })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function handleLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="group relative"
    >
      <Link
        href="/products"
        className="block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `linear-gradient(to top, ${product.accent}33, transparent 60%)`,
            }}
          />
          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow"
            style={{ backgroundColor: product.accent }}
          >
            {product.category}
          </span>
        </div>

        <div className="flex items-start justify-between gap-3 p-5">
          <div style={{ transform: 'translateZ(30px)' }}>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {product.tagline}
            </p>
          </div>
          <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
