import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsPreview from "@/components/ProductsPreview";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductsPreview />
      <BrandsSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
