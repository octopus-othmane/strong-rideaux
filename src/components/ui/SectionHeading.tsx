"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  align = 'left',
  className,
  dark = false,
}: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col mb-16",
        align === 'center' && "items-center text-center",
        align === 'right' && "items-end text-right",
        className
      )}
    >
      <motion.h2 
        className={cn(
          "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.1]",
          dark ? "text-[#F3F1EC]" : "text-[#111111]"
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={cn(
            "mt-6 text-lg md:text-xl font-medium max-w-2xl",
            dark ? "text-[#D0D0CC]" : "text-[#A7A7A3]"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
