import { Reveal } from '@/components/reveal'
import type { ReactNode } from 'react'

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 size-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-foreground text-balance sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  )
}
