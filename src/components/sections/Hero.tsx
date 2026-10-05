'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const Hero = () => {
  return (
    <section className="sticky top-0 -z-10 h-screen min-h-[800px] w-full flex items-end pb-24 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/70 via-[#111111]/30 to-transparent z-10" />
        <img 
          src="/images/hero_volet.jpg" 
          alt="STRONG RIDEAUX Architecture" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 text-[#F3F1EC]">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-2">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight leading-[0.9]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              VOLETS
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight leading-[0.9]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              CONÇUS
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight leading-[0.9]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              POUR DURER.
            </motion.h1>
          </div>

          <motion.p 
            className="text-xl md:text-2xl font-medium tracking-wide mb-12 text-[#D0D0CC]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Protection · Performance · Architecture
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button href="/produits" variant="primary" className="bg-[#F3F1EC] text-[#111111] hover:bg-[#D0D0CC] active:bg-[#D0D0CC]">
              Explorer nos produits
            </Button>
            <Button href="/devis" variant="outline" className="border-[#F3F1EC] text-[#F3F1EC] hover:bg-[#F3F1EC] active:bg-[#F3F1EC] hover:text-[#111111] active:text-[#111111]">
              Parler de votre projet
            </Button>
          </motion.div>
        </div>
      </div>

    </section>
  );
};
