'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ProductCategory } from '@/lib/products';

interface InteractiveCategoryListProps {
  categories: ProductCategory[];
}

export const InteractiveCategoryList: React.FC<InteractiveCategoryListProps> = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pb-24">
      {/* Left Column: Index List */}
      <div className="lg:w-1/2 flex flex-col z-10 w-full">
        <div className="border-t border-[#111111]/20 mt-8" />
        {categories.map((category, index) => {
          const isActive = index === activeIndex;

          return (
            <Link
              key={category.id}
              href={`/produits/${category.id}`}
              onMouseEnter={() => setActiveIndex(index)}
              className={`group block relative border-b border-[#111111]/20 py-8 lg:py-12 cursor-pointer transition-all duration-500 ease-out lg:px-6 lg:-mx-6 lg:rounded-sm ${isActive ? 'lg:bg-[#111111]' : ''}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex flex-col">
                  <span className={`font-mono text-xs tracking-widest uppercase mb-4 transition-colors duration-300 ${isActive ? 'lg:text-white/60 text-[#111111]' : 'text-[#A7A7A3] group-hover:text-[#111111] group-active:text-[#111111]'}`}>
                    0{index + 1}
                  </span>
                  <h2
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-none transition-all duration-300 ${isActive ? 'lg:text-white text-[#111111]' : 'text-[#111111]/40 group-hover:text-[#111111] group-active:text-[#111111] group-hover:translate-x-2'}`}
                  >
                    {category.name}
                  </h2>
                </div>

                {/* Mobile Image */}
                <div className="block lg:hidden w-full aspect-video relative mt-4 overflow-hidden rounded-sm bg-[#111111]">
                  <img 
                    src={category.imageUrl || `https://placehold.co/800x600/111111/333333?text=${encodeURIComponent(category.name)}`}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>

                {/* Desktop Arrow */}
                <ArrowUpRight
                  className={`hidden lg:block w-8 h-8 flex-shrink-0 transition-all duration-500 ease-out ${isActive ? 'text-white -translate-y-1 opacity-100' : 'text-[#111111]/30 opacity-0'}`}
                />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Right Column: Dynamic Visuals (Sticky) */}
      <div className="hidden lg:flex lg:w-1/2 sticky top-32 h-[calc(100vh-8rem)] min-h-[600px] rounded-sm overflow-hidden bg-[#111111] items-center justify-center shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={categories[activeIndex].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            src={categories[activeIndex].imageUrl || `https://placehold.co/800x1200/111111/333333?text=${encodeURIComponent(categories[activeIndex].name)}`}
            alt={categories[activeIndex].name}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
