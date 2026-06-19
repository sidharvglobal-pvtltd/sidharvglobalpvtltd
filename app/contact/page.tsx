import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Sidharv Global Private Limited',
  description:
    'Get in touch with Sidharv Global Private Limited for quotes, samples and bulk export enquiries on spices and vegetables.',
}

const details = [
  { icon: Mail, label: 'Email', value: 'info@sidharvglobal.com', href: 'mailto:info@sidharvglobal.com' },
  { icon: Phone, label: 'Phone', value: '+91 8826705200', href: 'tel:+918826705200' },
  { icon: MapPin, label: 'Address', value: 'Pillar No. 27/28, NH-9 Hapur Road, Pilakhuwa Dist. Hapur, Uttar Pradesh, 245304.' },
  { icon: Clock, label: 'Hours', value: 'Mon – Sat, 9:00 – 18:00 IST' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={
          <>
            Let&apos;s start an <span className="text-gradient-gold">export partnership</span>
          </>
        }
        description="Tell us what you need — quotes, samples or a full catalogue. Our team responds within one business day."
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <Reveal>
            <div className="space-y-4">
              {details.map((d) => {
                const content = (
                  <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-gold/60">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <d.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-1 font-medium text-foreground">{d.value}</p>
                    </div>
                  </div>
                )
                return d.href ? (
                  <a key={d.label} href={d.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={d.label}>{content}</div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
