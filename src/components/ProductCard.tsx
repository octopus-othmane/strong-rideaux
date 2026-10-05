'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  href: string;
  index?: number;
}

export function ProductCard({ title, description, imageUrl, href, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link 
        href={href} 
        className="group flex flex-col h-full bg-white border border-[#D0D0CC]/30 hover:border-[#111111]/20 transition-colors duration-500 overflow-hidden"
      >
        {imageUrl && (
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
              <div className="absolute inset-0 bg-[#111111]/5 group-hover:bg-transparent z-10 transition-colors duration-500" />
              <img 
                src={imageUrl} 
                alt={title} 
                className="h-full w-full object-contain p-6 transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
        )}
        <div className="flex flex-col flex-1 p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#111111] leading-tight">
              {title}
            </h3>
            <div className="bg-[#F3F1EC] p-2 shrink-0 transition-colors duration-300 group-hover:bg-[#111111] group-hover:text-[#F3F1EC]">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          {description && (
            <p className="text-[#A7A7A3] text-sm leading-relaxed line-clamp-3 mt-auto">
              {description}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
