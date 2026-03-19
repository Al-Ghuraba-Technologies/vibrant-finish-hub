import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Tag } from "lucide-react";
import { products } from "@/data/products";

export default function ProductsPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding bg-background">
      <div className="brand-container" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-body font-medium text-sm uppercase tracking-widest mb-2 block">
              What We Offer
            </span>
            <h2 className="font-heading font-bold text-4xl text-foreground">Our Products</h2>
            <p className="text-muted-foreground font-body mt-2">
              Explore our wide range of paints and hardware solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-brand font-body font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Horizontal scroll */}
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
            {products.slice(0, 8).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group flex-shrink-0 w-60 bg-card rounded-brand shadow-brand hover:shadow-brand-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative overflow-hidden h-40">
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
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground font-body text-xs mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade edge on right */}
          <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
