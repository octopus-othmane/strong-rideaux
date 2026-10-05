'use client';
import { getCategoryById, productsData } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";
import { use } from "react";

// In a real app we'd fetch data server-side or export static params 
// but since we added 'use client' for framer-motion, we handle params with useParams()
// Next.js 13+ allows async Server Components, but framer-motion requires Client Components.
// We'll wrap the content to handle the animation.

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.categorySlug as string;
  const category = getCategoryById(categorySlug);

  if (!category) {
    notFound();
  }

  const hasSubProducts = category.subProducts && category.subProducts.length > 0;

  return (
    <div className={`bg-[#F3F1EC] min-h-screen pt-32 md:pt-40 ${hasSubProducts ? 'pb-24 md:pb-32' : ''}`}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <Link href="/produits" className="inline-flex items-center text-[11px] font-mono tracking-widest uppercase text-[#A7A7A3] hover:text-[#111111] active:text-[#111111] transition-colors">
            <ArrowLeft className="mr-3 h-4 w-4" />
            Retour aux produits
          </Link>
        </motion.div>

        {hasSubProducts ? (
          <>
            <SectionHeading 
              title={category.name}
              subtitle={category.description}
              className="mb-20"
            />
            <div className="mb-24">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-[#111111] mb-10 border-b border-[#111111]/10 pb-6">
                Modèles disponibles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {category.subProducts!.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    index={index}
                    title={product.name}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    href={`/produits/${category.id}/${product.id}`}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* SPLIT LAYOUT FOR SINGLE-PRODUCT CATEGORIES */}
            <section className="relative w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pb-24">
              {/* Left image fixed on desktop, static on mobile */}
              <div className="w-full lg:w-1/2 relative lg:sticky lg:top-32 h-[400px] md:h-[500px] lg:h-[calc(100vh-8rem)] rounded-sm overflow-hidden bg-[#111111] flex items-center justify-center mb-8 lg:mb-0 shrink-0">
                {category.imageUrl ? (
                  <motion.img 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    src={category.imageUrl} 
                    alt={category.name} 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-[#D0D0CC]" />
                )}
              </div>

              {/* Right details scrollable */}
              <div className="lg:w-1/2 flex flex-col pt-8 lg:pb-32">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="font-mono text-sm tracking-widest text-[#8A4A32] mb-4 uppercase">CATÉGORIE</div>
                  <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight mb-8 leading-none">
                    {category.name}
                  </h1>
                </motion.div>

                <motion.p 
                  className="text-xl md:text-2xl font-medium leading-relaxed mb-16 text-[#111111]/80"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  {category.description}
                </motion.p>

                {/* Features */}
                {category.features && category.features.length > 0 && (
                  <div className="mb-16">
                    <h3 className="font-mono text-sm tracking-widest text-[#A7A7A3] mb-8 uppercase">POINTS FORTS</h3>
                    <ul className="space-y-6">
                      {category.features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start text-lg font-medium"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="bg-[#111111] text-[#F3F1EC] p-1 mr-4 shrink-0 mt-1 rounded-sm">
                            <Check className="h-4 w-4" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          </>
        )}
      </div>

      {!hasSubProducts && (
        <section className="py-32 bg-[#111111] text-center rounded-t-[3rem] mt-12 overflow-hidden w-full max-w-none">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-mono text-sm tracking-widest text-[#A7A7A3] mb-6 uppercase">VOTRE PROJET SUR MESURE</p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.1] mb-12 text-[#F3F1EC]">
                OBTENIR UN DEVIS POUR<br />
                <span className="text-[#8A4A32]">{category.name}</span>
              </h2>
              <div className="flex justify-center">
                <Button href="/devis" variant="secondary" className="text-lg px-12 py-6">
                  Demander un devis
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
