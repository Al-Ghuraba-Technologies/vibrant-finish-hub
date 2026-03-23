import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, ImageIcon } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-padding bg-foreground">
      <div className="brand-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-body font-medium text-sm uppercase tracking-widest mb-2 block">
            Happy Customers
          </span>
          <h2 className="font-heading font-bold text-4xl text-white">What Our Customers Say</h2>
          <p className="font-body text-white/60 mt-3 max-w-xl mx-auto text-sm">
            Real results from real homes — see the work that earned their trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-accent rounded-brand shadow-brand hover:shadow-brand-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Work Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={t.workImage}
                  alt={`${t.workLabel} by Hindustan Paints`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Label badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-body font-medium px-3 py-1.5 rounded-full shadow-sm">
                    <ImageIcon className="w-3 h-3 text-primary" />
                    {t.workLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 relative">
                {/* Quote icon */}
                <div className="absolute top-5 right-6">
                  <Quote className="w-8 h-8 text-accent-foreground/20" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`w-4 h-4 ${
                        si < t.rating ? "fill-amber-500 text-amber-500" : "text-amber-200"
                      }`}
                    />
                  ))}
                </div>

                <p className="font-body text-accent-foreground/80 text-sm leading-relaxed mb-5">
                  "{t.review}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-sm text-primary">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-accent-foreground">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-accent-foreground/60">{t.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
