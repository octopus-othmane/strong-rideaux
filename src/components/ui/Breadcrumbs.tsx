'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export const Breadcrumbs = ({ items, light = false }: BreadcrumbsProps) => {
  const textColor = light ? 'text-[#F3F1EC]/60' : 'text-[#A7A7A3]';
  const activeColor = light ? 'text-[#F3F1EC]' : 'text-[#111111]';
  const hoverColor = light ? 'hover:text-[#F3F1EC] active:text-[#F3F1EC]' : 'hover:text-[#8A4A32] active:text-[#8A4A32]';

  return (
    <nav aria-label="Fil d'Ariane" className="mb-8">
      <ol className={`flex items-center flex-wrap gap-1.5 font-mono text-[11px] tracking-widest uppercase ${textColor}`}>
        <li>
          <Link href="/" className={`transition-colors duration-300 ${hoverColor}`}>
            Accueil
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 opacity-40" />
            {item.href ? (
              <Link href={item.href} className={`transition-colors duration-300 ${hoverColor}`}>
                {item.label}
              </Link>
            ) : (
              <span className={activeColor}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
