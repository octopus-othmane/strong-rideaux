'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TextReveal } from '@/components/ui/TextReveal';

const categories = [
  {
    title: 'Volets Roulants',
    slug: 'volets-roulants',
    description: 'Systèmes de fermeture en aluminium extrudé, conçus pour la performance thermique et la durabilité architecturale.',
    count: '12 produits',
    tag: 'PROTECTION',
  },
  {
    title: 'Motorisation',
    slug: 'motorisation',
    description: 'Solutions d\'automatisation silencieuse pour volets, portails et systèmes de fermeture résidentiels et industriels.',
    count: '8 produits',
    tag: 'AUTOMATISATION',
  },
  {
    title: 'Portails Automatiques',
    slug: 'portails-automatiques',
    description: 'Portails coulissants et battants, intégration domotique, sécurité renforcée pour l\'accès automobile.',
    count: '6 produits',
    tag: 'ACCÈS',
  },
  {
    title: 'Portes Sectionnelles',
    slug: 'portes-sectionnelles',
    description: 'Solutions industrielles et résidentielles pour garages et entrepôts. Isolation thermique et acoustique.',
    count: '5 produits',
    tag: 'INDUSTRIEL',
  },
  {
    title: 'Profilés Aluminium',
    slug: 'profiles-aluminium',
    description: 'Systèmes de profilés pour menuiserie aluminium : fenêtres, baies vitrées, façades et murs-rideaux.',
    count: '10 produits',
    tag: 'STRUCTURE',
  },
];

export const SolutionsHero = () => {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <motion.p
            className="font-mono text-xs tracking-[0.3em] uppercase text-[#A7A7A3] mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            NOS SOLUTIONS
          </motion.p>
          <TextReveal
            as="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.95] text-[#F3F1EC] mb-8"
          >
            Conçues pour protéger, automatiser et durer.
          </TextReveal>
          <motion.p
            className="text-xl text-[#A7A7A3] max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Chaque solution STRONG RIDEAUX intègre les standards de l&apos;ingénierie européenne, adaptés aux exigences climatiques et architecturales du Maroc.
          </motion.p>
        </div>

        {/* Category Cards */}
        <div className="space-y-0">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              className="group relative border-t border-[#F3F1EC]/10 last:border-b last:border-[#F3F1EC]/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <Link href={`/produits/${cat.slug}`} className="absolute inset-0 z-10" aria-label={`Voir ${cat.title}`} />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between py-8 md:py-10 gap-4 lg:gap-12 transition-all duration-500 group-hover:pl-4 group-active:pl-4">
                {/* Left: Index + Title */}
                <div className="flex items-baseline gap-6 lg:w-2/5">
                  <span className="font-mono text-xs text-[#A7A7A3]/40 tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#F3F1EC] group-hover:text-[#8A4A32] group-active:text-[#8A4A32] transition-colors duration-500">
                    {cat.title}
                  </h2>
                </div>

                {/* Center: Description */}
                <p className="text-sm text-[#A7A7A3] leading-relaxed lg:w-2/5 pl-12 lg:pl-0">
                  {cat.description}
                </p>

                {/* Right: Tag + Arrow */}
                <div className="flex items-center gap-6 pl-12 lg:pl-0 lg:w-1/5 lg:justify-end">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#8A4A32] uppercase">
                    {cat.tag}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#A7A7A3] transition-all duration-300 group-hover:translate-x-2 group-active:translate-x-2 group-hover:text-[#F3F1EC] group-active:text-[#F3F1EC] group-active:translate-x-2 group-active:text-[#F3F1EC]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
