'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollWord = ({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) => {
  const start = index / total;
  const end = (index + 1) / total;

  const rawOpacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
  const opacity = useSpring(rawOpacity, { stiffness: 200, damping: 40 });

  return (
    <motion.span
      style={{ opacity }}
      className="transition-none mr-[0.3em] inline-block"
    >
      {word}
    </motion.span>
  );
};

const PillarCard = ({
  title,
  desc,
  index,
}: {
  title: string;
  desc: string;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [60, 0, 0, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className="text-center py-16 md:py-24"
    >
      <span className="font-mono text-xs tracking-widest text-[#8A4A32] uppercase mb-6 block">
        0{index + 1}
      </span>
      <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#111111] mb-6">
        {title}
      </h3>
      <p className="text-lg md:text-xl text-[#A7A7A3] leading-relaxed max-w-md mx-auto">
        {desc}
      </p>
    </motion.div>
  );
};

export const BrandStatement = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'start 0.2'],
  });

  const words = ["PLUS", "QU'UN", "VOLET.", "UNE", "SOLUTION", "D'ARCHITECTURE."];
  const line1 = ["PLUS", "QU'UN", "VOLET."];
  const line2 = ["UNE", "SOLUTION", "D'ARCHITECTURE."];
  const total = words.length;

  const pillars = [
    {
      title: 'PROTECTION',
      desc: "Sécuriser les espaces sans compromettre leur esthétique.",
    },
    {
      title: 'PERFORMANCE',
      desc: 'Des systèmes conçus pour fonctionner durablement.',
    },
    {
      title: 'PRÉCISION',
      desc: 'Chaque projet est adapté à son environnement et à ses contraintes.',
    },
  ];

  return (
    <section className="bg-[#F3F1EC] relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      {/* Scroll-driven Text Reveal */}
      <div ref={containerRef} className="relative h-[150vh]">
        <div className="sticky top-0 left-0 flex h-screen items-center justify-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.1] text-[#111111]">
                <span className="block">
                  {line1.map((word) => {
                    const globalIndex = words.indexOf(word);
                    return (
                      <ScrollWord
                        key={`l1-${word}`}
                        word={word}
                        index={globalIndex}
                        total={total}
                        scrollYProgress={scrollYProgress}
                      />
                    );
                  })}
                </span>
                <span className="block">
                  {line2.map((word) => {
                    const globalIndex = words.indexOf(word);
                    return (
                      <ScrollWord
                        key={`l2-${word}`}
                        word={word}
                        index={globalIndex}
                        total={total}
                        scrollYProgress={scrollYProgress}
                      />
                    );
                  })}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-Sensitive Pillars */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto border-t border-[#A7A7A3]/30">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.title}
              title={pillar.title}
              desc={pillar.desc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
