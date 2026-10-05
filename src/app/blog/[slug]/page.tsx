'use client';

import React, { use } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getBlogPost, blogPosts } from '@/lib/blog';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F3F1EC] text-[#111111]">

      {/* 1. HERO */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-[#111111] overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full z-20 pb-16">
          <div className="container mx-auto px-6 md:px-12 text-[#F3F1EC]">
            <Breadcrumbs
              light
              items={[
                { label: 'Blog', href: '/blog' },
                { label: post.title },
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6 max-w-4xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-8 font-mono text-sm tracking-widest uppercase text-[#D0D0CC]">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE CONTENT */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-a:text-[#8A4A32] prose-strong:text-[#111111]">
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-2xl mt-8 mb-4">{line.replace('### ', '')}</h3>;
              }
              if (line.trim() === '') return <br key={i} />;
              // basic bold markdown support
              const parts = line.split('**');
              if (parts.length > 1) {
                return (
                  <p key={i} className="mb-4">
                    {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
                  </p>
                );
              }
              return <p key={i} className="mb-4">{line}</p>;
            })}
          </div>
        </div>
      </section>

      {/* 3. OTHER ARTICLES */}
      <section className="py-24 md:py-32 bg-[#111111] text-[#F3F1EC]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="font-mono text-sm tracking-widest uppercase text-[#A7A7A3] mb-16">
            AUTRES ARTICLES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((other, i) => (
                <motion.div
                  key={other.slug}
                  className="group relative flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Link href={`/blog/${other.slug}`} className="absolute inset-0 z-20" aria-label={`Lire ${other.title}`} />

                  <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-[#A7A7A3]/10">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-[#A7A7A3] mb-3">
                    <span>{other.category}</span>
                    <span>—</span>
                    <span>{other.date}</span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-[#D0D0CC] transition-colors">
                    {other.title}
                  </h3>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
