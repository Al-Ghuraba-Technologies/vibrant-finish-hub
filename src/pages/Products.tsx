import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { products, type Product } from "@/data/products";

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group bg-card rounded-brand shadow-brand hover:shadow-brand-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1 text-xs font-body font-medium px-2.5 py-1 rounded-full ${
              product.category === "Paints"
                ? "bg-primary/90 text-primary-foreground"
                : "bg-secondary/90 text-secondary-foreground"
            }`}
          >
            <Tag className="w-3 h-3" />
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-semibold text-base text-foreground group-hover:text-primary transition-colors mb-2">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}

function CategorySection({ category, items }: { category: string; items: Product[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="mb-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-8"
      >
        <div
          className={`h-10 w-1.5 rounded-full ${
            category === "Paints" ? "bg-primary" : "bg-secondary"
          }`}
        />
        <div>
          <h2 className="font-heading font-bold text-3xl text-foreground">{category}</h2>
          <p className="font-body text-sm text-muted-foreground mt-0.5">
            {items.length} products available
          </p>
        </div>
        <span
          className={`ml-auto text-xs font-body font-medium px-3 py-1 rounded-full ${
            category === "Paints"
              ? "bg-primary/10 text-primary"
              : "bg-secondary/10 text-secondary"
          }`}
        >
          {category}
        </span>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((product, i) => (
          <ProductCard key={product.id} product={product} delay={i * 0.07} />
        ))}
      </div>
    </section>
  );
}

export default function Products() {
  const paints = products.filter((p) => p.category === "Paints");
  const hardware = products.filter((p) => p.category === "Hardware");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <div className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/80 pt-32 pb-16">
        <div className="brand-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-body font-medium text-sm uppercase tracking-widest mb-3 block">
              Full Catalogue
            </span>
            <h1 className="font-heading font-bold text-5xl text-white mb-4">Our Products</h1>
            <p className="font-body text-white/70 max-w-lg mx-auto text-base">
              Browse our complete range of premium paints, hardware, and painting accessories
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products grid */}
      <main className="section-padding">
        <div className="brand-container">
          <CategorySection category="Paints" items={paints} />
          <CategorySection category="Hardware" items={hardware} />
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border px-4 py-3">
        <a
          href="tel:+918078783063"
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground w-full py-3 rounded-brand font-body font-medium text-sm"
        >
          📞 Call Us: +91 80787 83063
        </a>
      </div>
    </div>
  );
}
