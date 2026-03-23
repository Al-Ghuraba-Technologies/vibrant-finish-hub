import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

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
      {/* ─── DESKTOP NAV (md+) — unchanged ──────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out hidden md:flex ${
          scrolled ? "justify-center pt-4" : "w-full"
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
              <img
                src={logo}
                alt="Hindustan Paints & Tools"
                className="h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop links */}
            <div className="flex items-center gap-1">
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
        </div>
      </nav>

      {/* ─── MOBILE NAV ──────────────────────────────────────────────────── */}
      {/* Top position: full-width transparent bar (unchanged) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ease-in-out ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-full bg-transparent px-6 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Hindustan Paints & Tools"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Scrolled mobile: two floating circles */}
      <div
        className={`fixed top-4 left-0 right-0 z-50 md:hidden px-4 flex items-center justify-between transition-all duration-500 ease-in-out ${
          scrolled ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Left circle — logo only */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(17,24,39,0.22)] flex items-center justify-center overflow-hidden transition-transform duration-200 active:scale-95"
        >
          <img
            src={logo}
            alt="Hindustan Paints & Tools"
            className="w-9 h-9 object-contain"
          />
        </Link>

        {/* Right circle — hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(17,24,39,0.22)] flex items-center justify-center text-foreground transition-transform duration-200 active:scale-95"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ─── Mobile slide-down menu ───────────────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 md:hidden bg-white shadow-xl transition-transform duration-300 ease-in-out ${
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
