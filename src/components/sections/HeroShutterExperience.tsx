'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export interface HeroShutterExperienceProps {
  mediaType?: 'image' | 'video';
  mediaSrc?: string;
  title?: React.ReactNode;
}

export const HeroShutterExperience = ({ 
  mediaType = 'image', 
  mediaSrc = '/images/hero_volet.jpg',
  title = <>VOLETS<br />CONÇUS<br />POUR DURER.</>
}: HeroShutterExperienceProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Total height is 500vh to give enough scroll space for all phases
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 1. Shutter Closes (0% to 20%)
  // 2. Text Reveals (20% to 40%)
  // 3. Shutter Opens (50% to 70%)
  // 4. Pillars Reveal (70% to 90%)

  const shutterY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.7],
    ['-100%', '0%', '0%', '-100%']
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.45, 0.5, 1],
    [0, 0, 1, 1, 0, 0]
  );
  
  const textY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 1],
    [50, 50, 0, 0]
  );

  // Background swap: Hero visible until 0.4, then Pillars background visible
  const heroOpacity = useTransform(scrollYProgress, [0, 0.39, 0.4, 1], [1, 1, 0, 0]);
  const heroPointerEvents = useTransform(scrollYProgress, [0, 0.39, 0.4, 1], ['auto', 'auto', 'none', 'none']);
  
  const pillarsBgOpacity = useTransform(scrollYProgress, [0, 0.39, 0.4, 1], [0, 0, 1, 1]);
  const pillarsPointerEvents = useTransform(scrollYProgress, [0, 0.39, 0.4, 1], ['none', 'none', 'auto', 'auto']);

  // Pillar Animations
  const pillar1Opacity = useTransform(scrollYProgress, [0, 0.65, 0.75, 1], [0, 0, 1, 1]);
  const pillar1Y = useTransform(scrollYProgress, [0, 0.65, 0.75, 1], [50, 50, 0, 0]);

  const pillar2Opacity = useTransform(scrollYProgress, [0, 0.75, 0.85, 1], [0, 0, 1, 1]);
  const pillar2Y = useTransform(scrollYProgress, [0, 0.75, 0.85, 1], [50, 50, 0, 0]);

  const pillar3Opacity = useTransform(scrollYProgress, [0, 0.85, 0.95, 1], [0, 0, 1, 1]);
  const pillar3Y = useTransform(scrollYProgress, [0, 0.85, 0.95, 1], [50, 50, 0, 0]);

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#111111]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* ================= HERO BACKGROUND (Visible early) ================= */}
        <motion.div className="absolute inset-0 z-0" style={{ opacity: heroOpacity, pointerEvents: heroPointerEvents }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/70 via-[#111111]/30 to-transparent z-10 pointer-events-none" />
          
          {mediaType === 'image' ? (
            <img 
              src={mediaSrc} 
              alt="STRONG RIDEAUX" 
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            >
              <source src={mediaSrc} type="video/mp4" />
            </video>
          )}

          <div className="container relative z-20 mx-auto px-6 md:px-12 text-[#F3F1EC] h-full flex items-end pb-24">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1] mb-8">
                {title}
              </h1>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button href="/produits" variant="primary" className="bg-[#F3F1EC] text-[#111111] hover:bg-[#D0D0CC]">
                  Explorer nos produits
                </Button>
                <Button href="/devis" variant="outline" className="border-[#F3F1EC] text-[#F3F1EC] hover:bg-[#F3F1EC] hover:text-[#111111]">
                  Parler de votre projet
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= PILLARS BACKGROUND (Visible later) ================= */}
        <motion.div className="absolute inset-0 z-0 bg-[#F3F1EC] flex items-center justify-center" style={{ opacity: pillarsBgOpacity, pointerEvents: pillarsPointerEvents }}>
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              
              <motion.div style={{ opacity: pillar1Opacity, y: pillar1Y }} className="text-center">
                <span className="font-mono text-xs tracking-widest text-[#8A4A32] uppercase mb-6 block">01</span>
                <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111] mb-6">PROTECTION</h3>
                <p className="text-lg text-[#A7A7A3] leading-relaxed">Sécuriser les espaces sans compromettre leur esthétique.</p>
              </motion.div>

              <motion.div style={{ opacity: pillar2Opacity, y: pillar2Y }} className="text-center">
                <span className="font-mono text-xs tracking-widest text-[#8A4A32] uppercase mb-6 block">02</span>
                <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111] mb-6">PERFORMANCE</h3>
                <p className="text-lg text-[#A7A7A3] leading-relaxed">Des systèmes conçus pour fonctionner durablement.</p>
              </motion.div>

              <motion.div style={{ opacity: pillar3Opacity, y: pillar3Y }} className="text-center">
                <span className="font-mono text-xs tracking-widest text-[#8A4A32] uppercase mb-6 block">03</span>
                <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111] mb-6">PRÉCISION</h3>
                <p className="text-lg text-[#A7A7A3] leading-relaxed">Chaque projet est adapté à son environnement et à ses contraintes.</p>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* ================= SHUTTER ================= */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-[#2A2A2A] flex flex-col z-[60] shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-b-[16px] border-[#111111] pointer-events-none"
          style={{ y: shutterY }}
        >
          {/* Shutter Slats Background */}
          <div className="absolute inset-0 flex flex-col overflow-hidden opacity-40">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-12 border-b border-[#000000]/50 flex-shrink-0"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -1px 2px rgba(0,0,0,0.5)',
                }}
              />
            ))}
          </div>

          {/* Shutter Text */}
          <motion.div 
            className="relative z-10 flex-grow flex items-center justify-center text-center px-6"
            style={{ opacity: textOpacity, y: textY }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[1.1] text-[#F3F1EC] max-w-5xl text-shadow-xl">
              <span className="block mb-4">PLUS QU'UN VOLET.</span>
              <span className="block text-[#A7A7A3]">UNE SOLUTION D'ARCHITECTURE.</span>
            </h2>
          </motion.div>
          
          {/* Lame Finale */}
          <div className="absolute bottom-0 left-0 w-full h-8 bg-[#1A1A1A] border-t border-[#444] z-20 flex items-center justify-center">
            <div className="w-48 h-2 bg-[#000] rounded-full opacity-50" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
