import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/#brands" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop/tablet nav wrapper */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "flex justify-center pt-4"
            : "w-full"
        }`}
      >
        <div
          className={`transition-all duration-500 ease-in-out ${
            scrolled
              ? "w-[90%] bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_-8px_rgba(17,24,39,0.18)] px-6 py-3"
              : "w-full bg-transparent px-8 py-5"
          }`}
        >
          <div className="flex items-center justify-between max-w-[1200px] mx-auto">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-base">HP</span>
              </div>
              <span
                className={`font-heading font-bold text-lg transition-colors duration-500 ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Hindustan Paints
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                    scrolled ? "text-foreground" : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/918078783063"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-body font-medium text-sm hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-20 pb-6 px-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-3 rounded-xl text-foreground font-body font-medium hover:bg-muted hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/918078783063"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-xl font-body font-medium hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
