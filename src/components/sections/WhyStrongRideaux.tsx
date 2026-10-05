'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const principles = [
  {
    id: '01',
    title: 'SUR MESURE',
    desc: 'Chaque projet possède ses propres contraintes architecturales et techniques.',
    image: '/images/hover_sur_mesure.jpg'
  },
  {
    id: '02',
    title: 'PERFORMANCE',
    desc: 'Des systèmes sélectionnés pour leur fiabilité et leur résistance dans le temps.',
    image: '/images/hover_performance.jpg'
  },
  {
    id: '03',
    title: 'TECHNOLOGIE',
    desc: 'Motorisation et automatisation adaptées aux usages et conforts modernes.',
    image: '/images/hover_technologie.jpg'
  },
  {
    id: '04',
    title: 'ACCOMPAGNEMENT',
    desc: "De l'étude technique initiale jusqu'à l'installation et la maintenance.",
    image: '/images/hover_accompagnement.jpg'
  }
];

export const WhyStrongRideaux = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  
  // Track mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the coordinates
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 25, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 25, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Relative to the viewport
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Fix for stationary mouse while scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (hoveredIndex !== null && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // The mouse coordinates are relative to the viewport (clientY)
        const currentMouseY = mouseY.get();
        if (currentMouseY < rect.top || currentMouseY > rect.bottom) {
          setHoveredIndex(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hoveredIndex, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-40 bg-[#F3F1EC] text-[#111111] relative overflow-hidden cursor-default"
      onMouseMove={handleMouseMove}
    >
      {/* The Floating Image */}
      <motion.div
        className="fixed top-0 left-0 w-72 h-48 md:w-96 md:h-64 rounded-lg overflow-hidden pointer-events-none z-50 shadow-2xl"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
        }}
        transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.3 } }}
      >
        {hoveredIndex !== null && (
          <motion.img
            key={hoveredIndex}
            src={principles[hoveredIndex].image}
            alt={principles[hoveredIndex].title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        )}
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title={<>BÂTI SUR LA<br/>PRÉCISION.</>}
        />

        <div className="mt-24" onMouseLeave={() => setHoveredIndex(null)}>
          {principles.map((principle, index) => (
            <motion.div 
              key={principle.id}
              className="group border-t border-[#111111]/20 py-12 md:py-16 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="md:w-1/4">
                <span className="font-mono text-sm tracking-widest text-[#A7A7A3] group-hover:text-[#8A4A32] group-active:text-[#8A4A32] transition-colors duration-500">
                  PRINCIPE / {principle.id}
                </span>
              </div>
              <div className="md:w-3/4 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:text-[#8A4A32] group-hover:translate-x-4 group-active:text-[#8A4A32] group-active:translate-x-4 transition-all duration-500">
                  {principle.title}
                </h3>
                <p className="text-lg text-[#A7A7A3] md:max-w-xs leading-relaxed group-hover:text-[#111111] group-active:text-[#111111] transition-colors duration-500">
                  {principle.desc}
                </p>
              </div>
              
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-[#A7A7A3]/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />
            </motion.div>
          ))}
          <div className="border-t border-[#111111]/20" />
        </div>
      </div>
    </section>
  );
};
