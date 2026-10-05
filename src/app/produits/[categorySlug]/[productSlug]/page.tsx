'use client';
import { getCategoryById, getProductById } from "@/lib/products";
import { notFound, useParams } from "next/navigation";
import { Check, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function ProductPage() {
  const params = useParams();
  const categorySlug = params.categorySlug as string;
  const productSlug = params.productSlug as string;
  
  const category = getCategoryById(categorySlug);
  const product = getProductById(categorySlug, productSlug);

  if (!category || !product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F3F1EC] text-[#111111]">
      {/* 1. BREADCRUMBS */}
      <div className="pt-32 pb-8 px-6 md:px-12 max-w-[1400px] mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Produits', href: '/produits' },
            { label: category.name, href: `/produits/${category.id}` },
            { label: product.name },
          ]}
        />
      </div>

      {/* 2. SPLIT LAYOUT */}
      <section className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pb-24">
        {/* Left image fixed on desktop, static on mobile */}
        <div className="w-full lg:w-1/2 relative lg:sticky lg:top-32 h-[400px] md:h-[500px] lg:h-[calc(100vh-8rem)] rounded-sm overflow-hidden bg-[#111111] flex items-center justify-center mb-8 lg:mb-0 shrink-0">
          {product.imageUrl ? (
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              src={product.imageUrl} 
              alt={product.name} 
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
            <div className="font-mono text-sm tracking-widest text-[#8A4A32] mb-4 uppercase">{category.name}</div>
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight mb-8 leading-none">
              {product.name}
            </h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl font-medium leading-relaxed mb-16 text-[#111111]/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {product.description}
          </motion.p>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-16">
              <h3 className="font-mono text-sm tracking-widest text-[#A7A7A3] mb-8 uppercase">POINTS FORTS</h3>
              <ul className="space-y-6">
                {product.features.map((feature, index) => (
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

          {/* Specs */}
          {product.specs && product.specs.length > 0 && (
            <div className="mb-16">
              <h3 className="font-mono text-sm tracking-widest text-[#A7A7A3] mb-8 uppercase">SPÉCIFICATIONS TECHNIQUES</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                {product.specs.map((spec, index) => (
                  <motion.div 
                    key={index}
                    className="border-b border-[#111111]/20 pb-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="font-mono text-xs tracking-widest text-[#A7A7A3] mb-2 uppercase group-hover:text-[#8A4A32] transition-colors">
                      {spec.name}
                    </div>
                    <div className="text-xl font-bold uppercase tracking-tight text-[#111111]">
                      {spec.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* PDF Download */}
          {product.catalogueUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button href={product.catalogueUrl} variant="outline" className="w-fit group text-[#111111] border-[#111111] hover:bg-[#111111] hover:text-[#F3F1EC]">
                <Download className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
                Télécharger la fiche technique
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-32 bg-[#111111] text-center rounded-t-[3rem] mt-12 overflow-hidden">
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
              <span className="text-[#8A4A32]">{product.name}</span>
            </h2>
            <div className="flex justify-center">
              <Button href="/devis" variant="secondary" className="text-lg px-12 py-6">
                Demander un devis
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
