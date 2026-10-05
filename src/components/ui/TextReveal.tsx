'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  once?: boolean;
}

export const TextReveal = ({
  children,
  className = '',
  delay = 0,
  as: Tag = 'h2',
  once = true,
}: TextRevealProps) => {
  const words = children.split(' ');

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once, margin: '-50px' }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.04,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
