'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const solutions = [
  {
    id: '01',
    title: 'VOLETS ROULANTS',
    desc: "Solutions sur mesure pour l'habitat, les commerces et les bâtiments professionnels.",
    image: '/images/volet-roulant.webp',
    href: '/produits/volet-roulant'
  },
  {
    id: '02',
    title: 'MOTORISATION',
    desc: 'Automatisez vos systèmes pour plus de confort, de contrôle et de sécurité.',
    image: '/images/motorisation.webp',
    href: '/produits/motorisation'
  },
  {
    id: '03',
    title: 'PORTAILS AUTOMATIQUES',
    desc: 'Contrôlez les accès avec des systèmes fiables et parfaitement intégrés.',
    image: '/images/portail-automatique.webp',
    href: '/produits/portail-automatique'
  },
  {
    id: '04',
    title: 'PORTES SECTIONNELLES',
    desc: 'Solutions adaptées aux environnements résidentiels, commerciaux et industriels.',
    image: '/images/porte-sectionnelle.webp',
    href: '/produits/porte-sectionnelle'
  },
  {
    id: '05',
    title: 'PROFILÉS ALUMINIUM',
    desc: "Des composants conçus pour répondre aux exigences de fabrication et d'installation.",
    image: '/images/profiles-modulaires.webp',
    href: '/produits/profiles-aluminium-modulaires'
  }
];

export const SolutionsGrid = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  // Measure the width of the track minus the viewport width
  // so we know exactly how far to translate it left.
  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current) {
        // total width of the scrolling track minus the visible window width
        const range = trackRef.current.scrollWidth - window.innerWidth;
        setScrollRange(range > 0 ? range : 0);
      }
    };

    updateScrollRange();
    window.addEventListener('resize', updateScrollRange);
    return () => window.removeEventListener('resize', updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Now we use exactly the measured pixels!
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  const activeIndex = useTransform(scrollYProgress, (pos) => {
    const rawIndex = Math.floor(pos * solutions.length);
    return Math.min(Math.max(rawIndex, 0), solutions.length - 1);
  });

  return (
    <section
      ref={targetRef}
      className="bg-[#111111] text-[#F3F1EC] relative h-[400vh]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">

        <div className="container mx-auto px-6 md:px-12 pt-24 md:pt-32 flex-shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-sm font-mono tracking-widest text-[#A7A7A3] mb-4 uppercase">
                Solutions d'Architecture
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
                NOS PRODUITS
              </h3>
            </div>

            <div className="flex flex-col items-end w-full md:w-64 gap-4">
              <div className="flex items-center gap-2 font-mono text-sm tracking-widest">
                <motion.span className="text-[#F3F1EC]">
                  <motion.span>{useTransform(activeIndex, v => `0${v + 1}`)}</motion.span>
                </motion.span>
                <span className="text-[#A7A7A3]">/</span>
                <span className="text-[#A7A7A3]">0{solutions.length}</span>
              </div>
              <div className="w-full h-[2px] bg-[#333333] relative rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#8A4A32] w-full origin-left"
                  style={{ scaleX: smoothProgress }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow flex items-center mt-12 pb-24">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex pl-6 md:pl-12 gap-8 md:gap-16 w-max"
          >
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="w-[85vw] md:w-[50vw] lg:w-[35vw] flex-shrink-0 group"
              >
                <Link href={solution.href} className="block relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-white mb-8 flex items-center justify-center cursor-pointer">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                </Link>

                <div className="flex flex-col">
                  <h4 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-8 group-hover:text-[#8A4A32] group-active:text-[#8A4A32] transition-colors duration-300">
                    {solution.title}
                  </h4>
                  <div>
                    <Button href={solution.href} variant="outline" className="border-[#333333] text-[#F3F1EC] hover:bg-[#8A4A32] active:bg-[#8A4A32] hover:text-[#F3F1EC] active:text-[#F3F1EC] hover:border-[#8A4A32] active:border-[#8A4A32] active:bg-[#8A4A32] active:text-[#F3F1EC] active:border-[#8A4A32] active:scale-[0.98]">
                      Explorer la gamme
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <div className="w-[10vw] flex-shrink-0" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
