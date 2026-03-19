export interface Product {
  id: number;
  name: string;
  category: "Paints" | "Hardware";
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Apex Ultima Exterior Paint",
    category: "Paints",
    description: "High-performance exterior emulsion with weatherproof technology for lasting protection.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Royale Matt Interior Emulsion",
    category: "Paints",
    description: "Luxurious matte finish for interiors with superior coverage and smooth texture.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Weathercoat All Guard",
    category: "Paints",
    description: "Ultimate protection against harsh weather conditions, algae and fungus.",
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Silk Luxury Emulsion",
    category: "Paints",
    description: "Premium silk finish interior paint with anti-bacterial properties.",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Wood Primer",
    category: "Paints",
    description: "Professional grade wood primer for smooth adhesion and lasting finish.",
    image: "https://images.unsplash.com/photo-1572204292164-b35ba943fca7?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Wall Putty Powder",
    category: "Hardware",
    description: "Premium white cement wall putty for a perfect smooth base coat.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Paint Rollers Set",
    category: "Hardware",
    description: "Professional roller set with handles and refills for smooth application.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Paint Brush Kit",
    category: "Hardware",
    description: "Set of premium quality brushes for precision painting and cutting in.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Enamel Paint (Gloss)",
    category: "Paints",
    description: "High-gloss enamel for doors, windows, and metal surfaces.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Masking Tape",
    category: "Hardware",
    description: "Precision masking tape for clean edges and professional results.",
    image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Distemper Paint",
    category: "Paints",
    description: "Economical distemper paint for budget-friendly interior walls.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Paint Tray & Liner",
    category: "Hardware",
    description: "Sturdy paint tray with disposable liners for mess-free painting.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
];
