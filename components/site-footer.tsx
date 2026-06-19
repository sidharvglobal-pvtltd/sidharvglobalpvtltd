import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <span className="relative block size-12 overflow-hidden rounded-full ring-1 ring-gold/50">
                <Image
                  src="/images/logo.png"
                  alt="Sidharv Global logo"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </span>
              <div className="leading-tight">
                <p className="font-serif text-lg font-semibold">Sidharv Global</p>
                <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
                  Private Limited
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              Exporting premium Indian spices and farm-fresh vegetables to kitchens
              and distributors across the globe.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-gold">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/" className="hover:text-gold">Home</Link></li>
              <li><Link href="/products" className="hover:text-gold">Products</Link></li>
              <li><Link href="/export" className="hover:text-gold">Global Export</Link></li>
              <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-gold">Products</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/products#spices" className="hover:text-gold">Spices</Link></li>
              <li><Link href="/products#vegetables" className="hover:text-gold">Vegetables</Link></li>
              <li><Link href="/contact" className="hover:text-gold">Request Samples</Link></li>
              <li><Link href="/contact" className="hover:text-gold">Bulk Orders</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-gold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>Pillar No. 27/8,NH-9, Hapur Road, Pilakhuwa, Dist. Hapur, Uttar Pradesh, 245304</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-gold" />
                <a href="mailto:info@sidharvglobal.com" className="hover:text-gold">
                  info@sidharvglobal.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href="tel:+918826705200" className="hover:text-gold">
                  +91 8826705200
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Sidharv Global Private Limited. All rights reserved.</p>
          <p>Premium Spices & Vegetables · Worldwide Export</p>
        </div>
      </div>
    </footer>
  )
}
