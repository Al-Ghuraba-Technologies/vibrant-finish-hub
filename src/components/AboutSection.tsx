import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-img.jpg";

const features = [
  "20+ years of trusted service in Thalassery",
  "Expert colour consultation & advice",
  "Widest selection of premium paint brands",
  "Trusted by hundreds of local homeowners",
  "Quality hardware tools & accessories",
  "Fast, reliable & friendly service",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="brand-container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-brand overflow-hidden shadow-[0_20px_60px_-15px_rgba(17,24,39,0.2)]">
              <img
                src={aboutImg}
                alt="Professional painter at work"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-2xl p-5 shadow-xl">
              <p className="font-heading font-bold text-3xl">20+</p>
              <p className="font-body text-xs text-primary-foreground/80">Years of<br />Excellence</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-primary font-body font-medium text-sm uppercase tracking-widest mb-2 block">
              Our Story
            </span>
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
              Thalassery's Most Trusted Paint Store
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              For over two decades, Hindustan Paints has been the cornerstone of home transformation in Thalassery. What started as a small shop has grown into the most trusted paint and hardware destination in the Kannur district.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              We carry premium brands and offer personalized colour consultation to help every customer find their perfect finish — whether it's a fresh coat for the living room or a complete exterior makeover.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
