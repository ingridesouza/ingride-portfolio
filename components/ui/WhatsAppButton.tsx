"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface Props {
  href: string;
  label: string;
}

export default function WhatsAppButton({ href, label }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
      style={{ background: "#25D366", color: "#fff" }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.35 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={26} fill="#fff" strokeWidth={0} />
    </motion.a>
  );
}
