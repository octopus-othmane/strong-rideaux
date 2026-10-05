"use client";

import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

interface Partner {
  name: string;
  logo?: string;
  hoverLogo?: string;
}

const partners: Partner[] = [
  { name: "Domotic X Love", logo: "/images/logo-domotic-x-love.svg" },
  { name: "Somfy", logo: "/images/Somfy_logo.svg.webp" },
  { name: "Simu", logo: "/images/Logo simu.webp" },
  { name: "ACM", logo: "/images/logo-acm-haute-definition-scaled.jpg", hoverLogo: "/images/logo-acm-haute-definition-scaled.svg" },
];

export function PartnerLogos() {
  return (
    <section className="py-24 bg-[#F3F1EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-sm font-mono tracking-widest text-[#A7A7A3] mb-4 uppercase">
            Partenaires
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#111111]">
            Ils nous font confiance
          </h3>
        </motion.div>
        
        <div className="relative mx-auto max-w-3xl">
          <motion.div 
            className="grid grid-cols-2 border-l border-t border-[#D0D0CC]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {partners.map((partner, index) => {
              const row = Math.floor(index / 2);
              const col = index % 2;
              const isGray = (row + col) % 2 === 0;

              return (
                <motion.div
                  key={partner.name}
                  variants={itemVariants}
                  className={`
                    group relative flex items-center justify-center h-32 lg:h-40
                    border-r border-b border-[#D0D0CC] cursor-pointer
                    transition-all duration-500
                    hover:bg-[#111111] hover:border-[#111111] hover:z-20
                    ${isGray ? "bg-white" : "bg-transparent"}
                  `}
                >
                  {partner.logo ? (
                    <div className="relative w-32 h-16 lg:w-40 lg:h-20">
                      {/* Default logo */}
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className={`object-contain transition-all duration-500 ${
                          partner.hoverLogo
                            ? 'group-hover:opacity-0'
                            : 'group-hover:brightness-0 group-hover:invert'
                        }`}
                        sizes="160px"
                      />
                      {/* Hover logo (SVG) — only rendered when a separate hover asset exists */}
                      {partner.hoverLogo && (
                        <Image
                          src={partner.hoverLogo}
                          alt={partner.name}
                          fill
                          className="object-contain opacity-0 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                          sizes="160px"
                        />
                      )}
                    </div>
                  ) : (
                    <span className="text-[#A7A7A3] font-mono font-medium text-sm tracking-wider uppercase transition-colors duration-500 group-hover:text-[#F3F1EC]">
                      {partner.name}
                    </span>
                  )}

                  {/* Plus Signs at intersections */}
                  {col < 1 && row < Math.ceil(partners.length / 2) - 1 && (
                    <div className="absolute -bottom-3 -right-3 z-10 w-6 h-6 flex items-center justify-center bg-[#F3F1EC] text-[#111111] rounded-full transition-transform duration-500 group-hover:rotate-90 group-hover:bg-[#111111] group-hover:text-[#F3F1EC]">
                      <Plus className="w-4 h-4 stroke-[2]" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
