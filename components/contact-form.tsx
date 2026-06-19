'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check } from 'lucide-react'

const products = [
  'Red Chilli Powder',
  'Turmeric Powder',
  'Garam Masala',
  'Yellow Chilli Powder',
  'Coriander Powder',
  'Onion',
  'Potato',
  'Green Chilli',
  'Multiple / Other',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-12 text-center"
      >
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-8" />
        </span>
        <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">
          Thank you for reaching out
        </h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Our export team has received your enquiry and will respond within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-gold"
        >
          Send another enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            className="input"
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Company" htmlFor="company">
          <input
            id="company"
            name="company"
            className="input"
            placeholder="Acme Imports Ltd."
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input"
            placeholder="you@company.com"
          />
        </Field>
        <Field label="Country" htmlFor="country">
          <input
            id="country"
            name="country"
            className="input"
            placeholder="United Arab Emirates"
          />
        </Field>
        <Field label="Product of interest" htmlFor="product" full>
          <select id="product" name="product" className="input" defaultValue="">
            <option value="" disabled>
              Select a product
            </option>
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Message" htmlFor="message" full>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="input resize-none"
            placeholder="Tell us about your requirements, quantities and destination port."
          />
        </Field>
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02] sm:w-auto"
      >
        Send enquiry
        <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid var(--border);
          background: var(--background);
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.2s;
        }
        :global(.input:focus) {
          border-color: var(--ring);
        }
      `}</style>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
  full,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
  full?: boolean
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
