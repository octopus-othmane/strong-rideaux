import { SectionHeading } from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';

export const metadata = {
  title: "Blog",
  description: "Découvrez nos derniers articles, actualités et conseils sur les systèmes de fermeture et l'architecture.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F3F1EC] text-[#111111]">
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 container mx-auto">
        <SectionHeading 
          title="NOTRE BLOG"
          subtitle="Actualités, guides et inspirations."
        />

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post) => (
            <div key={post.slug} className="group relative flex flex-col">
              <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-20" aria-label={`Lire l'article ${post.title}`} />
              
              <div className="relative aspect-[16/10] mb-5 overflow-hidden bg-[#A7A7A3]/10">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-active:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#A7A7A3] mb-2 block">{post.category}</span>
                <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-[#8A4A32] group-active:text-[#8A4A32] transition-colors mb-3">
                  {post.title}
                </h3>
                <p className="text-[#111111]/70 text-sm mb-4 line-clamp-2">
                  {post.summary}
                </p>
                <span className="inline-flex font-bold text-xs tracking-wider uppercase border-b border-[#111111] pb-1 group-hover:text-[#8A4A32] group-active:text-[#8A4A32] group-hover:border-[#8A4A32] group-active:border-[#8A4A32] transition-colors">
                  Lire l&apos;article
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
