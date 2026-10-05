'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Produits', href: '/produits' },
  { name: 'À propos', href: '/entreprise' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/devis' },
];

const menuVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const linkVariants = {
  closed: { y: 50, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.1 + i * 0.08,
    },
  }),
};

export const Navbar = () => {
  const pathname = usePathname();
  const dark = pathname === '/' || pathname === '/devis' || pathname === '/entreprise' || (pathname.startsWith('/blog/') && pathname !== '/blog/');
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#111111] focus:text-[#F3F1EC] focus:px-6 focus:py-3 focus:text-sm focus:uppercase focus:tracking-wider"
      >
        Aller au contenu principal
      </a>

      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent',
          isScrolled && !mobileMenuOpen
            ? 'bg-[#F3F1EC]/90 backdrop-blur-md py-3 md:py-4 border-[#D0D0CC]/30 shadow-sm'
            : 'bg-transparent py-5 md:py-8'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              'text-2xl font-bold tracking-tight transition-colors duration-500',
              (dark && !isScrolled) || mobileMenuOpen ? 'text-[#F3F1EC]' : 'text-[#111111]'
            )}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="STRONG RIDEAUX — Accueil"
          >
            STRONG RIDEAUX
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors duration-300 uppercase relative group',
                  dark && !isScrolled
                    ? 'text-[#F3F1EC]/80 hover:text-[#F3F1EC]'
                    : 'text-[#111111]/80 hover:text-[#8A4A32]'
                )}
              >
                {link.name}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full',
                    dark && !isScrolled ? 'bg-[#F3F1EC]' : 'bg-[#8A4A32]'
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/devis" variant={isScrolled || !dark ? 'primary' : 'secondary'}>
              Demander un devis
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              'lg:hidden relative z-[70] p-2 -mr-2',
              (dark && !isScrolled) || mobileMenuOpen ? 'text-[#F3F1EC]' : 'text-[#111111]'
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#111111] text-[#F3F1EC] flex flex-col"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header spacer */}
            <div className="h-20" />

            {/* Nav Links */}
            <nav className="flex-1 flex flex-col justify-center px-8 -mt-16" aria-label="Navigation mobile">
              {navLinks.map((link, i) => (
                <div key={link.name} className="overflow-hidden border-b border-[#F3F1EC]/10 last:border-b-0">
                  <motion.div
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between py-5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-3xl md:text-4xl font-bold uppercase tracking-tight group-hover:text-[#8A4A32] group-active:text-[#8A4A32] transition-colors duration-300">
                        {link.name}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-[#A7A7A3] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:translate-x-0.5 group-active:-translate-y-0.5" />
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              className="px-8 pb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="/devis"
                className="block w-full text-center bg-[#F3F1EC] text-[#111111] px-8 py-5 text-sm font-medium uppercase tracking-wider hover:bg-[#8A4A32] hover:text-[#F3F1EC] active:bg-[#8A4A32] active:text-[#F3F1EC] active:scale-[0.98] transition-all duration-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demander un devis
              </Link>
              <a
                href="https://wa.me/21269898220"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full mt-3 bg-[#25D366] text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#1DA851] active:bg-[#1DA851] active:scale-[0.98] transition-all duration-500 rounded-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
                  <path d="M16.004 2.667A13.28 13.28 0 002.72 15.947a13.18 13.18 0 001.84 6.72L2.667 29.333l6.84-1.84A13.3 13.3 0 0016.004 29.3 13.28 13.28 0 0029.333 16 13.28 13.28 0 0016.004 2.667zm7.71 18.706c-.32.906-1.88 1.733-2.587 1.84-.706.107-1.36.48-4.56-.946-3.84-1.707-6.28-5.627-6.467-5.88-.186-.254-1.52-2.027-1.52-3.867s.96-2.747 1.307-3.12c.346-.374.76-.467.96-.467.24 0 .48.013.693.027.213.013.534-.08.827.64.32.747 1.067 2.587 1.16 2.773.093.187.16.414.027.667-.134.253-.2.4-.4.627-.2.227-.413.506-.587.68-.2.2-.413.413-.173.8.24.387 1.053 1.733 2.267 2.813 1.56 1.387 2.867 1.827 3.28 2.027.413.2.653.16.893-.107.24-.267 1.04-1.2 1.32-1.627.28-.4.56-.333.933-.2.374.133 2.387 1.12 2.8 1.32.413.2.68.307.773.48.107.173.107.986-.213 1.92z" fill="white"/>
                </svg>
                WhatsApp
              </a>
              <div className="flex items-center justify-between mt-6 text-[10px] font-mono tracking-[0.2em] uppercase text-[#A7A7A3]/40">
                <span>contact@strongrideaux.com</span>
                <span>+212 698 98 220</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
