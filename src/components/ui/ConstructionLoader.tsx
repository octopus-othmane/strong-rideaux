'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ConstructionLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if the user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');

    if (hasSeenLoader) {
      setLoading(false);
      return;
    }

    // Mark as seen for future visits in the same session
    sessionStorage.setItem('hasSeenLoader', 'true');

    // Simulate construction progress
    const intervals = [
      setTimeout(() => setProgress(15), 200),
      setTimeout(() => setProgress(35), 500),
      setTimeout(() => setProgress(60), 900),
      setTimeout(() => setProgress(85), 1300),
      setTimeout(() => setProgress(100), 1700),
      setTimeout(() => setLoading(false), 2200),
    ];

    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#111111] flex flex-col items-center justify-center overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {/* Blueprint grid background */}
            <div className="absolute inset-0 opacity-[0.03]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F3F1EC" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Construction beams — horizontal */}
            <div className="absolute inset-0 pointer-events-none">
              {[20, 40, 60, 80].map((top, i) => (
                <motion.div
                  key={`h-${i}`}
                  className="absolute left-0 h-[1px] bg-[#F3F1EC]/5"
                  style={{ top: `${top}%` }}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const }}
                />
              ))}

              {/* Vertical beams */}
              {[25, 50, 75].map((left, i) => (
                <motion.div
                  key={`v-${i}`}
                  className="absolute top-0 w-[1px] bg-[#F3F1EC]/5"
                  style={{ left: `${left}%` }}
                  initial={{ height: '0%' }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 1.4, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const }}
                />
              ))}
            </div>

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Logo */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#F3F1EC]">
                  STRONG RIDEAUX
                </span>
              </motion.div>

              {/* Progress bar — construction beam style */}
              <div className="w-64 md:w-80 relative">
                {/* Track */}
                <motion.div
                  className="h-[2px] bg-[#F3F1EC]/10 w-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: 'left' }}
                />

                {/* Fill */}
                <motion.div
                  className="absolute top-0 left-0 h-[2px] bg-[#8A4A32]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />

                {/* Bracket endpoints */}
                <div className="flex justify-between mt-1">
                  <motion.div
                    className="w-[2px] h-2 bg-[#F3F1EC]/20"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    style={{ transformOrigin: 'top' }}
                  />
                  <motion.div
                    className="w-[2px] h-2 bg-[#F3F1EC]/20"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    style={{ transformOrigin: 'top' }}
                  />
                </div>
              </div>

              {/* Status text — construction style */}
              <motion.div
                className="mt-8 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8A4A32] animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#A7A7A3]/60">
                  {progress < 30
                    ? 'INITIALISATION DU SYSTÈME'
                    : progress < 70
                    ? 'CHARGEMENT DES MODULES'
                    : progress < 100
                    ? 'ASSEMBLAGE FINAL'
                    : 'PRÊT'}
                </span>
              </motion.div>

              {/* Percentage */}
              <motion.span
                className="mt-4 font-mono text-xs tracking-widest text-[#A7A7A3]/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {progress}%
              </motion.span>
            </div>

            {/* Corner marks — blueprint registration marks */}
            {['top-6 left-6', 'top-6 right-6', 'bottom-6 left-6', 'bottom-6 right-6'].map(
              (pos, i) => (
                <motion.div
                  key={pos}
                  className={`absolute ${pos} text-[#A7A7A3]/10`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    {i < 2 ? (
                      <>
                        <line x1={i === 0 ? 0 : 20} y1="0" x2={i === 0 ? 0 : 20} y2="20" stroke="currentColor" strokeWidth="1" />
                        <line x1="0" y1="0" x2="20" y2="0" stroke="currentColor" strokeWidth="1" />
                      </>
                    ) : (
                      <>
                        <line x1={i === 2 ? 0 : 20} y1="0" x2={i === 2 ? 0 : 20} y2="20" stroke="currentColor" strokeWidth="1" />
                        <line x1="0" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="1" />
                      </>
                    )}
                  </svg>
                </motion.div>
              )
            )}

            {/* Bottom tech line */}
            <motion.div
              className="absolute bottom-6 left-6 md:left-12 right-6 md:right-12 flex justify-between text-[9px] font-mono tracking-[0.25em] uppercase text-[#A7A7A3]/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span>ENGINEERING × ARCHITECTURE × PROTECTION</span>
              <span>V.2026</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content — rendered underneath, revealed when loader exits */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
};
