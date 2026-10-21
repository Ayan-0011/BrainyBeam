import React from 'react';
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen pt-24 sm:pt-28 flex flex-col"
    >
      {children}
    </motion.main>
  );
}
