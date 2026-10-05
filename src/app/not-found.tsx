'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#F3F1EC] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Giant background number */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[40vw] font-bold tracking-tighter leading-none">
          404
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase text-[#A7A7A3] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ERREUR 404
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          Page introuvable.
        </motion.h1>

        <motion.p
          className="text-lg text-[#A7A7A3] mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          La page que vous recherchez n&apos;existe plus ou a été déplacée.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-3 bg-[#F3F1EC] text-[#111111] px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#8A4A32] active:bg-[#8A4A32] hover:text-[#F3F1EC] active:text-[#F3F1EC] transition-all duration-500"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 group-active:-translate-x-1" />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center gap-3 border border-[#F3F1EC]/30 text-[#F3F1EC] px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#F3F1EC]/10 active:bg-[#F3F1EC]/10 transition-all duration-500"
          >
            Demander un devis
          </Link>
        </motion.div>
      </div>

      {/* Bottom tech line */}
      <motion.div
        className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 flex justify-between items-center text-[10px] tracking-[0.2em] uppercase text-[#A7A7A3]/40 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span>STRONG RIDEAUX / SYSTÈME</span>
        <span>MAROC</span>
      </motion.div>
    </main>
  );
}
