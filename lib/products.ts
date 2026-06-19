export type Product = {
  slug: string
  name: string
  category: 'spices' | 'vegetables'
  tagline: string
  description: string
  image: string
  accent: string
  specs: { label: string; value: string }[]
}

export const products: Product[] = [
  {
    slug: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    category: 'spices',
    tagline: 'Fiery colour, bold heat',
    description:
      'Sun-dried premium red chillies, finely ground to deliver deep colour and balanced pungency for global cuisines.',
    image: '/images/products/red-chilli-powder.png',
    accent: 'oklch(0.55 0.18 30)',
    specs: [
      { label: 'Grades', value: 'Hot / Mild / Extra Hot' },
      { label: 'Packaging', value: '25kg / 50kg bags' },
      { label: 'Moisture', value: '< 10%' },
    ],
  },
  {
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    category: 'spices',
    tagline: 'Golden purity, high curcumin',
    description:
      'Vibrant golden turmeric with high curcumin content, prized for colour, aroma and wellness applications worldwide.',
    image: '/images/products/turmeric-powder.png',
    accent: 'oklch(0.74 0.13 80)',
    specs: [
      { label: 'Curcumin', value: '3% – 5%' },
      { label: 'Packaging', value: '25kg / 50kg bags' },
      { label: 'Origin', value: 'Single-origin India' },
    ],
  },
  {
    slug: 'garam-masala',
    name: 'Garam Masala',
    category: 'spices',
    tagline: 'A heritage blend',
    description:
      'A balanced blend of hand-selected whole spices, roasted and ground to a traditional recipe for authentic flavour.',
    image: '/images/products/garam-masala.png',
    accent: 'oklch(0.5 0.09 50)',
    specs: [
      { label: 'Blend', value: '9+ whole spices' },
      { label: 'Packaging', value: '10kg / 25kg' },
      { label: 'Profile', value: 'Warm & aromatic' },
    ],
  },
  {
    slug: 'yellow-chilli-powder',
    name: 'Yellow Chilli Powder',
    category: 'spices',
    tagline: 'Mild heat, sunny hue',
    description:
      'A milder, golden chilli powder that adds gentle warmth and a beautiful colour to marinades and curries.',
    image: '/images/products/yellow-chilli-powder.png',
    accent: 'oklch(0.78 0.13 90)',
    specs: [
      { label: 'Heat', value: 'Mild' },
      { label: 'Packaging', value: '25kg bags' },
      { label: 'Colour', value: 'Bright yellow' },
    ],
  },
  {
    slug: 'coriander-powder',
    name: 'Coriander Powder',
    category: 'spices',
    tagline: 'Earthy, citrus aroma',
    description:
      'Freshly milled coriander seeds offering a warm, nutty and citrusy aroma — a kitchen essential across the world.',
    image: '/images/products/coriander-powder.png',
    accent: 'oklch(0.6 0.08 110)',
    specs: [
      { label: 'Mesh', value: '60 – 80 mesh' },
      { label: 'Packaging', value: '25kg / 50kg' },
      { label: 'Aroma', value: 'Citrus & nutty' },
    ],
  },
  {
    slug: 'onion',
    name: 'Onion',
    category: 'vegetables',
    tagline: 'Farm-fresh, long shelf life',
    description:
      'Premium red and yellow onions, carefully graded and packed for export with excellent shelf life and consistency.',
    image: '/images/products/onion.png',
    accent: 'oklch(0.55 0.12 20)',
    specs: [
      { label: 'Sizes', value: '40 – 80mm' },
      { label: 'Packaging', value: '5kg / 10kg / mesh' },
      { label: 'Types', value: 'Red / Yellow' },
    ],
  },
  {
    slug: 'potato',
    name: 'Potato',
    category: 'vegetables',
    tagline: 'Versatile & robust',
    description:
      'Fresh, firm potatoes ideal for processing and table use, sorted by size and packed to international standards.',
    image: '/images/products/potato.png',
    accent: 'oklch(0.6 0.07 70)',
    specs: [
      { label: 'Sizes', value: '50 – 100mm' },
      { label: 'Packaging', value: '10kg / 25kg' },
      { label: 'Variety', value: 'Table & processing' },
    ],
  },
  {
    slug: 'green-chilli',
    name: 'Green Chilli',
    category: 'vegetables',
    tagline: 'Crisp, fresh heat',
    description:
      'Hand-picked fresh green chillies with vibrant colour and crisp texture, cold-chain packed for freshness.',
    image: '/images/products/green-chilli.png',
    accent: 'oklch(0.55 0.13 145)',
    specs: [
      { label: 'Length', value: '6 – 12cm' },
      { label: 'Packaging', value: '5kg cartons' },
      { label: 'Cold chain', value: 'Yes' },
    ],
  },
]

export const spices = products.filter((p) => p.category === 'spices')
export const vegetables = products.filter((p) => p.category === 'vegetables')
