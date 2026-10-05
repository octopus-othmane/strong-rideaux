'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const FeaturedProduct = () => {
  return (
    <section className="bg-[#F3F1EC] text-[#111111] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Visual Side */}
        <div className="w-full lg:w-3/5 relative h-[60vh] lg:h-auto">
          <div className="absolute inset-0 bg-[#A7A7A3]/20" />
          <motion.div 
            className="absolute inset-0 w-full h-full bg-[#D0D0CC]"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        {/* Technical Side */}
        <div className="w-full lg:w-2/5 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-[#F3F1EC]">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-between items-center mb-16 border-b border-[#111111]/10 pb-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                EXTRUDÉ 55
              </h2>
              <span className="font-mono text-[#A7A7A3] text-sm tracking-widest">
                01 / 05
              </span>
            </div>

            <div className="space-y-8 mb-16 font-mono text-sm uppercase tracking-wider">
              <div className="grid grid-cols-2 gap-4 border-b border-[#111111]/10 pb-6">
                <span className="text-[#A7A7A3]">TYPE</span>
                <span className="font-medium">Volet roulant extrudé</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b border-[#111111]/10 pb-6">
                <span className="text-[#A7A7A3]">MATÉRIAU</span>
                <span className="font-medium">Aluminium haute résistance</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b border-[#111111]/10 pb-6">
                <span className="text-[#A7A7A3]">APPLICATION</span>
                <span className="font-medium">Résidentiel / Commercial</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b border-[#111111]/10 pb-6">
                <span className="text-[#A7A7A3]">CONFIGURATION</span>
                <span className="font-medium">Sur mesure</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b border-[#111111]/10 pb-6">
                <span className="text-[#A7A7A3]">MOTORISATION</span>
                <span className="font-medium">Compatible</span>
              </div>
            </div>

            <Button href="/produits/volet-roulant/volet-roulant-extrude-55" variant="primary" className="w-full sm:w-auto">
              Voir les caractéristiques
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
