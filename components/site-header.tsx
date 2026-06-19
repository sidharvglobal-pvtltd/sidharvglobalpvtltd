'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Export', href: '/export' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl py-2'
          : 'bg-transparent py-4',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative block size-11 overflow-hidden rounded-full ring-1 ring-gold/40">
            <Image
              src="/images/logo.png"
              alt="Sidharv Global Private Limited logo"
              fill
              className="object-cover"
              sizes="44px"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight text-primary">
              Sidharv Global
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Private Limited
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary',
                )}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-secondary" />
                )}
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-105 md:inline-flex"
        >
          Get a Quote
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-primary md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-2 overflow-hidden rounded-2xl border border-border bg-card/95 p-2 shadow-lg backdrop-blur-xl md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'block rounded-xl px-4 py-3 text-sm font-medium',
                pathname === item.href
                  ? 'bg-secondary text-primary'
                  : 'text-muted-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-1 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  )
}
