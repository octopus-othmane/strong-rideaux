'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getCategoryById } from '@/lib/products';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  produits: [
    { name: 'Volets roulants', href: '/produits/volet-roulant' },
    { name: 'Motorisation', href: '/produits/motorisation' },
    { name: 'Portails automatiques', href: '/produits/portail-automatique' },
    { name: 'Portes sectionnelles', href: '/produits/porte-sectionnelle' },
    { name: 'Profilés aluminium', href: '/produits/profiles-aluminium-modulaires' },
  ],
  entreprise: [
    { name: 'À propos', href: '/entreprise' },
    { name: 'Blog', href: '/blog' },
  ],
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export const Footer = () => {
  const pathname = usePathname();
  const pathSegments = pathname?.split('/').filter(Boolean) || [];
  
  // Check if we are on a single product page (e.g. /produits/category/product)
  const isSingleProductPage = pathname?.startsWith('/produits/') && pathSegments.length === 3;
  
  // Check if we are on a category page (e.g. /produits/category) that acts as a single product (no subProducts)
  const isCategoryPage = pathname?.startsWith('/produits/') && pathSegments.length === 2;
  const categoryId = isCategoryPage ? pathSegments[1] : null;
  const category = categoryId ? getCategoryById(categoryId) : null;
  const hasNoSubProducts = category ? (!category.subProducts || category.subProducts.length === 0) : false;

  const isEntreprisePage = pathname === '/entreprise';
  const hideTopCta = isSingleProductPage || (isCategoryPage && hasNoSubProducts) || isEntreprisePage;

  return (
    <footer className="bg-[#111111] text-[#F3F1EC] relative overflow-hidden">
      {/* Top CTA Band */}
      {!hideTopCta && (
      <div className="border-b border-[#F3F1EC]/10">
        <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#A7A7A3] mb-4">
                COMMENCER VOTRE PROJET
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
                Un projet en tête ?<br />
                <span className="text-[#8A4A32]">Parlons-en.</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/devis"
                className="group inline-flex items-center gap-3 bg-[#F3F1EC] text-[#111111] px-8 py-5 text-sm font-medium uppercase tracking-wider hover:bg-[#8A4A32] hover:text-[#F3F1EC] active:bg-[#8A4A32] active:text-[#F3F1EC] active:scale-[0.98] transition-all duration-500"
              >
                Demander un devis
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      )}

      {/* Main Footer Grid */}
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand Column */}
          <motion.div className="lg:col-span-4" variants={fadeUp}>
            <Link href="/" className="text-3xl font-bold tracking-tight block mb-6">
              STRONG RIDEAUX
            </Link>
            <p className="text-[#A7A7A3] text-sm max-w-xs leading-relaxed mb-8">
              Solutions de fermeture et d&apos;automatisation conçues pour les exigences de l&apos;architecture contemporaine.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#A7A7A3]/60 uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Casablanca, Maroc
            </div>
          </motion.div>

          {/* Produits Links */}
          <motion.div className="lg:col-span-2 lg:col-start-6" variants={fadeUp}>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A7A7A3] mb-6">
              Produits
            </h4>
            <ul className="space-y-3">
              {footerLinks.produits.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F3F1EC]/70 hover:text-[#8A4A32] active:text-[#8A4A32] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Entreprise Links */}
          <motion.div className="lg:col-span-2" variants={fadeUp}>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A7A7A3] mb-6">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F3F1EC]/70 hover:text-[#8A4A32] active:text-[#8A4A32] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div className="lg:col-span-2" variants={fadeUp}>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A7A7A3] mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-[#F3F1EC]/70">
                Zone Industrielle<br />
                Casablanca, Maroc
              </li>
              <li>
                <a
                  href="tel:+212522000000"
                  className="text-sm text-[#F3F1EC]/70 hover:text-[#8A4A32] active:text-[#8A4A32] transition-colors duration-300"
                >
                  +212 522 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@strongrideaux.com"
                  className="text-sm text-[#F3F1EC]/70 hover:text-[#8A4A32] active:text-[#8A4A32] transition-colors duration-300"
                >
                  contact@strongrideaux.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F3F1EC]/10">
        <div className="container mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-wider text-[#A7A7A3]/50 font-mono uppercase">
            © {new Date().getFullYear()} STRONG RIDEAUX — Tous droits réservés
          </p>
          <div className="flex items-center gap-8 text-[11px] tracking-wider text-[#A7A7A3]/50 font-mono uppercase">
            <Link href="/mentions-legales" className="hover:text-[#F3F1EC] active:text-[#F3F1EC] transition-colors duration-300">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-[#F3F1EC] active:text-[#F3F1EC] transition-colors duration-300">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
