'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ShutterTransition = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // The shutter translates from -100% (above screen) down to 0% (covering screen)
  const y = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);

  return (
    <div ref={ref} className="h-[200vh] w-full relative z-40">
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-[#F3F1EC] flex flex-col pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          style={{ y }}
        >
          {/* Shutter Slats (Lames) */}
          <div className="w-full h-full flex flex-col overflow-hidden">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-12 border-b border-[#A7A7A3]/20 flex-shrink-0"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -1px 2px rgba(0,0,0,0.05)',
                }}
              />
            ))}
          </div>
          
          {/* Lame Finale (Bottom Rail) */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-[#D0D0CC] border-t border-[#FFFFFF] shadow-2xl flex items-center justify-center z-10">
            {/* Rubber seal at the very bottom */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#111111]/80" />
            
            {/* Small architectural detail / lock */}
            <div className="w-32 h-4 bg-[#A7A7A3]/30 rounded-full shadow-inner mb-2" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
