'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';

export const BlogShowcase = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F3F1EC] text-[#111111]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="ACTUALITÉS & BLOG"
          subtitle="Nos dernières publications."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {blogPosts.slice(0, 3).map((post) => (
            <div key={post.slug} className="group relative flex flex-col">
              <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-20" aria-label={`Lire l'article ${post.title}`} />
              
              <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-[#A7A7A3]/10">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#A7A7A3]">{post.date}</span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#A7A7A3]">{post.category}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-[#8A4A32] transition-colors mb-4">
                  {post.title}
                </h3>
                <p className="text-[#111111]/80 text-sm mb-6 line-clamp-3">
                  {post.summary}
                </p>
                <div className="inline-flex font-bold text-xs tracking-wider uppercase border-b border-[#111111] pb-1 group-hover:text-[#8A4A32] group-hover:border-[#8A4A32] transition-colors">
                  Lire l'article
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
