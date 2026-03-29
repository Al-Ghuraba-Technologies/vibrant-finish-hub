import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      {/* Decorative color accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="relative z-10 brand-container w-full text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-accent text-accent-foreground font-body font-medium text-sm px-4 py-1.5 rounded-full mb-6"
          >
            🎨 Thalassery's Trusted Paint Store
          </motion.span>

          <h1 className="font-heading font-bold text-5xl md:text-7xl text-white leading-tight mb-4">
            Hindustan{" "}
            <span className="text-primary">Paints</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Thalassery's Choice for 20 Years: Expert Care, Dream Finishes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-brand font-body font-medium text-base hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-brand font-body font-medium text-base hover:bg-white hover:text-foreground hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-white/50 font-body text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
