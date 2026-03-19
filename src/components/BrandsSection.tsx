import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { brands } from "@/data/brands";

export default function BrandsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="brands" className="section-padding bg-muted/40">
      <div className="brand-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body font-medium text-sm uppercase tracking-widest mb-2 block">
            Our Partners
          </span>
          <h2 className="font-heading font-bold text-4xl text-foreground">Brands We Sell</h2>
          <p className="text-muted-foreground font-body mt-2 max-w-lg mx-auto">
            We carry the finest paint brands trusted by professionals and homeowners alike
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card rounded-brand p-6 flex flex-col items-center justify-center gap-3 shadow-brand hover:shadow-brand-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Brand logo placeholder with initials */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center font-heading font-bold text-lg transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
                style={{
                  backgroundColor: `${brand.color}20`,
                  color: brand.color,
                  border: `2px solid ${brand.color}30`,
                }}
              >
                {brand.initials}
              </div>
              <span className="font-body text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
