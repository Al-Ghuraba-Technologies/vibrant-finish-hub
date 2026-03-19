import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="brand-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body font-medium text-sm uppercase tracking-widest mb-2 block">
            Find Us
          </span>
          <h2 className="font-heading font-bold text-4xl text-foreground">Visit Us</h2>
          <p className="text-muted-foreground font-body mt-2">
            Come visit our store or get in touch — we're always happy to help
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {/* Info cards */}
            <div className="flex items-start gap-4 bg-muted/50 rounded-brand p-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm text-foreground mb-1">Store Address</p>
                <p className="font-body text-sm text-muted-foreground">
                  Hindustan Paints,<br />
                  Thalassery, Kannur,<br />
                  Kerala, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-muted/50 rounded-brand p-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm text-foreground mb-1">Phone / WhatsApp</p>
                <a
                  href="tel:+918078783063"
                  className="font-body text-sm text-primary hover:underline font-medium block"
                >
                  +91 80787 83063
                </a>
                <a
                  href="https://wa.me/918078783063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 bg-green-500 text-white text-xs font-body font-medium px-3 py-1.5 rounded-full hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-muted/50 rounded-brand p-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm text-foreground mb-1">Email</p>
                <a
                  href="mailto:zaeemthahir@gmail.com"
                  className="font-body text-sm text-primary hover:underline"
                >
                  zaeemthahir@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-muted/50 rounded-brand p-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm text-foreground mb-1">Business Hours</p>
                <p className="font-body text-sm text-muted-foreground">
                  Mon – Sat: 9:00 AM – 7:00 PM<br />
                  Sunday: 10:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-brand overflow-hidden shadow-brand min-h-[350px]"
          >
            <iframe
              title="Hindustan Paints Location - Thalassery"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15618.893219428937!2d75.47534065!3d11.7513415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba42107d04bc24f%3A0xc3f8a28c83e2b75c!2sThalassery%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[350px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
