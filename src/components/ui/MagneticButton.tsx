'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

export const MagneticButton = ({
  children,
  href,
  className,
  variant = 'primary',
  onClick,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary:
      'bg-[#111111] text-[#F3F1EC] hover:bg-[#8A4A32] active:bg-[#8A4A32] border border-transparent',
    secondary:
      'bg-[#F3F1EC] text-[#111111] hover:bg-[#D0D0CC] active:bg-[#D0D0CC] border border-transparent',
    outline:
      'bg-transparent text-[#111111] border border-[#111111] hover:bg-[#111111] active:bg-[#111111] hover:text-[#F3F1EC] active:text-[#F3F1EC]',
  };

  const baseStyles =
    'inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-wider transition-colors duration-500';

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      className={cn(baseStyles, variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};
