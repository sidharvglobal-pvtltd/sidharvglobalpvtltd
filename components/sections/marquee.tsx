export function Marquee() {
  const items = [
    'Red Chilli Powder',
    'Turmeric Powder',
    'Garam Masala',
    'Yellow Chilli Powder',
    'Coriander Powder',
    'Onion',
    'Potato',
    'Green Chilli',
  ]
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-border bg-primary py-4">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-serif text-xl font-medium text-primary-foreground/90">
              {item}
            </span>
            <span className="size-2 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  )
}
