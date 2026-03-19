import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/918078783063"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-[0_8px_30px_-4px_hsl(347_80%_50%/0.5)] hover:scale-110 hover:shadow-[0_12px_40px_-4px_hsl(347_80%_50%/0.6)] transition-all duration-300 md:bottom-8 md:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
    </motion.a>
  );
}
