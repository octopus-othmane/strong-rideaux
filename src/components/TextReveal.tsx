'use client';

import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextRevealProps {
  body: string;
  className?: string;
  children: (tokens: string[]) => ReactNode;
}

function splitIntoTokens(text: string): string[] {
  // Split by spaces but keep spaces attached as trailing chars for rendering
  return text.split(/(\s+)/).filter(Boolean);
}

const TextRevealComponent = ({ body, className, children }: TextRevealProps) => {
  const tokens = splitIntoTokens(body);
  return <div className={className}>{children(tokens)}</div>;
};

interface TokenProps {
  index: number;
  totalTokens: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  children: (isActive: boolean) => ReactNode;
}

const Token = ({ index, totalTokens, scrollYProgress, children }: TokenProps) => {
  // Each token activates at a specific scroll progress point
  const start = index / totalTokens;
  const end = (index + 1) / totalTokens;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.span style={{ opacity }}>
      {children(true)}
    </motion.span>
  );
};

export { TextRevealComponent as TextReveal, Token as TextRevealToken };
