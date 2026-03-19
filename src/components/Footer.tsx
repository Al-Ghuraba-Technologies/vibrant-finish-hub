import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/#brands" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(210,20%,98%)] border-t border-border">
      <div className="brand-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-base">HP</span>
              </div>
              <span className="font-heading font-bold text-lg text-foreground">Hindustan Paints</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Thalassery's Choice for 20 Years: Expert Care, Dream Finishes. Your one-stop shop for premium paints and hardware.
            </p>
            <a
              href="https://wa.me/918078783063"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-brand font-body font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-muted-foreground">
                  Thalassery, Kannur, Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+918078783063"
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 80787 83063
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:zaeemthahir@gmail.com"
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  zaeemthahir@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="brand-container py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hindustan Paints, Thalassery. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Serving Thalassery with pride for 20+ years 🎨
          </p>
        </div>
      </div>
    </footer>
  );
}
