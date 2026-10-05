'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Shield, Zap, Wrench, Award, ChevronRight, MessageSquare, Ruler, Factory, Truck } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    // Extract numeric part and suffix
    const match = value.match(/^(\d+)(.*$)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2]; // e.g. '%', 'h', 'j/7', ' ans'
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplayValue(`${Math.round(current)}${suffix}`);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, animate]);

  return (
    <div ref={ref} className="text-center md:px-8">
      <div className="text-4xl md:text-5xl font-bold mb-2">{displayValue}</div>
      <div className="font-mono text-xs tracking-widest uppercase text-[#A7A7A3]">
        {label}
      </div>
    </div>
  );
};

const values = [
  {
    icon: Shield,
    title: 'Sécurité',
    description:
      'Chaque volet roulant est conçu pour offrir une protection maximale contre les intrusions et les intempéries.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
      'Moteurs tubulaires et centraux de dernière génération, compatibles domotique pour un confort optimal.',
  },
  {
    icon: Wrench,
    title: 'Savoir-Faire',
    description:
      'Une expertise technique pointue en menuiserie aluminium, transmise et perfectionnée au fil des années.',
  },
  {
    icon: Award,
    title: 'Qualité',
    description:
      'Des matériaux premium et un contrôle rigoureux à chaque étape de fabrication pour une durabilité sans compromis.',
  },
];

const stats = [
  { value: '100%', label: 'Sur mesure' },
  { value: '48h', label: 'Devis gratuit' },
  { value: '5 ans', label: 'Garantie' },
  { value: '7j/7', label: 'Support client' },
];

const processSteps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consultation',
    text: 'Échange personnalisé pour comprendre vos besoins, contraintes techniques et budget. Visite sur site si nécessaire.',
  },
  {
    icon: Ruler,
    step: '02',
    title: 'Conception sur mesure',
    text: 'Prise de mesures précises, choix des matériaux et de la motorisation. Devis détaillé sous 48 heures.',
  },
  {
    icon: Factory,
    step: '03',
    title: 'Fabrication',
    text: 'Production dans notre atelier avec des matériaux premium. Contrôle qualité rigoureux avant expédition.',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Installation & SAV',
    text: 'Pose professionnelle par notre équipe. Garantie 5 ans et service après-vente réactif, 7 jours sur 7.',
  },
];

const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const stepVariants: Variants = {
    hidden: (side: 'left' | 'right') => ({
      opacity: 0,
      x: side === 'left' ? -60 : 60,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-[#111111] text-[#F3F1EC]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <h3 className="font-mono text-sm tracking-widest text-[#A7A7A3] mb-6 uppercase">
            Notre processus
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] max-w-3xl">
            DE LA CONSULTATION À L&apos;INSTALLATION.
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Background line (track) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#F3F1EC]/10 md:-translate-x-px" />
          {/* Animated progress line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-px bg-[#8A4A32] origin-top md:-translate-x-px"
            style={{ height: lineHeight }}
          />

          {processSteps.map((item, i) => {
            const StepIcon = item.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={item.step}
                className={`relative flex items-start gap-8 md:gap-0 mb-20 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                custom={isEven ? 'left' : 'right'}
                variants={stepVariants}
              >
                {/* Dot on the line */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#8A4A32] z-10 mt-2 ring-4 ring-[#111111]" />

                {/* Spacer for mobile (left offset past the line) */}
                <div className="w-12 shrink-0 md:hidden" />

                {/* Content card */}
                <div className={`md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} ${isEven ? '' : 'md:ml-auto'}`}>
                  <span className="font-mono text-7xl font-bold text-[#F3F1EC]/5 block leading-none mb-4 select-none">
                    {item.step}
                  </span>
                  <div className={`w-12 h-12 flex items-center justify-center border border-[#F3F1EC]/15 mb-6 ${isEven ? 'md:ml-auto' : ''}`}>
                    <StepIcon className="w-5 h-5 text-[#8A4A32]" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[#A7A7A3] text-base leading-relaxed max-w-sm">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const MotorScrollSequence = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameCount = 30;
  const images = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const loadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new window.Image();
        const num = i.toString().padStart(3, '0');
        img.src = `/images/motor scroll driven /ezgif-frame-${num}.jpg`;
        
        img.onload = () => {
          loadedCount++;
          if (i === 1) { // Draw first frame immediately when it loads
            renderFrame(0, img);
          }
          if (loadedCount === frameCount) {
            setLoaded(true);
          }
        };
        images.current.push(img);
      }
    };
    loadImages();
  }, []);

  const renderFrame = (index: number, specificImg?: HTMLImageElement) => {
    if (!canvasRef.current) return;
    const img = specificImg || images.current[index];
    if (!img) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Scale for retina displays to maintain crispness
    const dpr = window.devicePixelRatio || 1;
    const displayWidth = img.width;
    const displayHeight = img.height;
    
    if (canvas.width !== displayWidth * dpr) {
       canvas.width = displayWidth * dpr;
       canvas.height = displayHeight * dpr;
       ctx.scale(dpr, dpr);
    }
    
    ctx.clearRect(0, 0, displayWidth, displayHeight);
    ctx.drawImage(img, 0, 0, displayWidth, displayHeight);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 40%']
  });

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.floor(latest * frameCount)));
      renderFrame(frameIndex);
    });
  }, [scrollYProgress, loaded]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full">
      <div className="sticky top-[25vh] w-full aspect-video overflow-hidden rounded-sm bg-[#111111] shadow-2xl">
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export const EntrepriseContent = () => {
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (!hasAutoScrolled && video.currentTime >= 2) {
      setHasAutoScrolled(true);
      
      // Custom smooth scroll animation
      const startPosition = window.scrollY;
      const targetPosition = startPosition + window.innerHeight;
      const distance = targetPosition - startPosition;
      const duration = 2000; // 2 seconds for a slow, cinematic pull
      let start: number | null = null;

      // easeInOutQuart easing function
      const easeInOutQuart = (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeInOutQuart(percentage));
        
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F1EC] text-[#111111]">

      <section className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-[#111111] z-0 flex items-center justify-center">
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          onTimeUpdate={handleTimeUpdate}
        >
          <source src="/video/Roller_shutter_opening_commercial_20261004225846.mp4" type="video/mp4" />
        </video>
      </section>

      <div className="relative z-10 bg-[#F3F1EC]">
        
        {/* ────── EXPERTISE VOLETS ────── */}
        <section className="lg:min-h-screen lg:flex lg:items-center pt-32 pb-24 lg:py-20 bg-[#111111] text-[#F3F1EC]">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div
                className="w-full lg:w-5/12 order-2 lg:order-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeUp}
                custom={0}
              >
                <div className="relative aspect-[9/16] w-full max-w-xs md:max-w-[320px] mx-auto overflow-hidden rounded-sm border border-[#333333] shadow-2xl group">
                  <video
                    src="/video/Roller_shutter_opening_window_20261005115509.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle inner shadow for the card effect */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-sm"></div>
                </div>
              </motion.div>
              <motion.div
                className="w-full lg:w-7/12 order-1 lg:order-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeUp}
                custom={0.15}
              >
                <h3 className="font-mono text-sm tracking-widest text-[#A7A7A3] mb-6 uppercase">
                  Notre expertise
                </h3>
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] mb-8 text-white">
                  LE VOLET ROULANT, NOTRE CŒUR DE MÉTIER.
                </h2>
                <p className="text-[#A7A7A3] text-lg md:text-xl leading-relaxed mb-6">
                  Chez STRONG RIDEAUX, nous ne sommes pas de simples assembleurs. Nous sommes des experts de la <strong>fermeture en aluminium</strong>. Chaque volet roulant qui sort de nos ateliers est le fruit d&apos;une ingénierie minutieuse.
                </p>
                <p className="text-[#A7A7A3] text-lg md:text-xl leading-relaxed mb-8">
                  De l&apos;isolation thermique et phonique à la sécurité anti-effraction, nos lames profilées et extrudées répondent aux exigences architecturales les plus strictes, qu&apos;il s&apos;agisse de rénovations complexes ou de constructions neuves.
                </p>
                <Button href="/produits" variant="outline" className="border-[#F3F1EC] text-[#F3F1EC] hover:bg-[#F3F1EC] hover:text-[#111111]">
                  Découvrir notre gamme
                  <ChevronRight className="w-4 h-4 ml-2 inline-block" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ────── MISSION ────── */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
              <motion.div
                className="w-full lg:w-1/2 lg:sticky lg:top-[25vh] pt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeUp}
                custom={0}
              >
                <h3 className="font-mono text-sm tracking-widest text-[#A7A7A3] mb-6 uppercase">
                  Notre mission
                </h3>
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] mb-8">
                  AUTOMATISER ET AMÉLIORER VOS SYSTÈMES DE FERMETURE.
                </h2>
                <p className="text-[#111111]/70 text-lg md:text-xl leading-relaxed mb-8">
                  STRONG RIDEAUX est une entreprise spécialisée dans la menuiserie de <strong>volets roulants</strong>. 
                  Nous proposons divers types de moteurs pour volets roulants, y compris des <strong>moteurs tubulaires</strong> et <strong>moteurs centraux</strong>, 
                  répondant aux besoins de nos clients en termes de confort et de sécurité.
                </p>
                <p className="text-[#111111]/70 text-lg md:text-xl leading-relaxed mb-12">
                  Notre engagement : fournir des solutions de qualité supérieure, fabriquées sur mesure, 
                  pour chaque projet résidentiel ou commercial. De la conception à l&apos;installation, 
                  nous accompagnons nos clients à chaque étape.
                </p>
                <Button href="/devis" variant="primary">
                  Démarrer votre projet
                  <ChevronRight className="w-4 h-4 ml-2 inline-block" />
                </Button>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeUp}
                custom={0.15}
              >
                <MotorScrollSequence />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ────── STATS BAND ────── */}
        <section className="py-16 bg-[#111111] text-[#F3F1EC]">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#F3F1EC]/10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={i * 0.1}
                >
                  <AnimatedStat value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ────── VALUES ────── */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              className="mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h3 className="font-mono text-sm tracking-widest text-[#A7A7A3] mb-6 uppercase">
                Nos valeurs
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] max-w-3xl">
                CE QUI NOUS DISTINGUE.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D0D0CC]">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    className="bg-[#F3F1EC] p-8 md:p-10 group hover:bg-[#111111] transition-colors duration-500"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeUp}
                    custom={i * 0.1}
                  >
                    <div className="w-12 h-12 flex items-center justify-center border border-[#D0D0CC] mb-8 group-hover:border-[#F3F1EC]/20 transition-colors duration-500">
                      <Icon className="w-5 h-5 text-[#111111] group-hover:text-[#F3F1EC] transition-colors duration-500" />
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-[#F3F1EC] transition-colors duration-500">
                      {v.title}
                    </h4>
                    <p className="text-[#A7A7A3] text-sm leading-relaxed group-hover:text-[#D0D0CC] transition-colors duration-500">
                      {v.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ────── SCROLL-DRIVEN PROCESS TIMELINE ────── */}
        <ProcessTimeline />

        {/* ────── MOTORS EXPERTISE ────── */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-16 lg:gap-24">
              <motion.div
                className="w-full lg:w-1/2 flex flex-col justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeUp}
                custom={0}
              >
                <h3 className="font-mono text-sm tracking-widest text-[#A7A7A3] mb-6 uppercase">
                  Expertise complémentaire
                </h3>
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] mb-8">
                  MOTORISATION & INTELLIGENCE.
                </h2>
                <p className="text-[#111111]/70 text-lg leading-relaxed mb-6">
                  Si la conception de <strong>volets roulants</strong> reste notre véritable cœur de métier, nous offrons également un service complet de motorisation pour parfaire vos installations et vous offrir un confort absolu.
                </p>
                <p className="text-[#111111]/70 text-lg leading-relaxed mb-6">
                  Nous intégrons des <strong>moteurs tubulaires</strong> compacts et silencieux, idéaux pour les projets résidentiels, ainsi que des <strong>moteurs centraux</strong> robustes, spécialement conçus pour les volets de grandes dimensions et les applications commerciales.
                </p>
                <p className="text-[#111111]/70 text-lg leading-relaxed">
                  Toutes nos solutions de motorisation sont pensées pour s&apos;intégrer parfaitement à nos volets et sont compatibles avec les systèmes de domotique modernes.
                </p>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2 flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeUp}
                custom={0.15}
              >
                <div className="grid grid-cols-2 grid-rows-2 gap-px bg-[#D0D0CC] w-full">
                  {[
                    { label: 'Moteurs tubulaires', detail: 'Résidentiel & Rénovation' },
                    { label: 'Moteurs centraux', detail: 'Commercial & Industriel' },
                    { label: 'Compatibles domotique', detail: 'Somfy · Simu · ACM' },
                    { label: 'Garantie constructeur', detail: 'Jusqu\'à 5 ans' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="bg-[#F3F1EC] p-6 md:p-8 flex flex-col justify-center hover:bg-[#111111] hover:text-[#F3F1EC] transition-colors duration-500 group"
                      variants={fadeUp}
                      custom={0.2 + i * 0.08}
                    >
                      <div className="font-bold text-sm uppercase tracking-tight mb-2 group-hover:text-[#F3F1EC] transition-colors duration-500">
                        {item.label}
                      </div>
                      <div className="font-mono text-xs tracking-widest text-[#A7A7A3] uppercase group-hover:text-[#A7A7A3] transition-colors duration-500">
                        {item.detail}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ────── CTA ────── */}
        <section className="py-24 md:py-32 bg-[#111111] text-[#F3F1EC]">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1] mb-8 max-w-3xl mx-auto">
                UN PROJET DE VOLETS ROULANTS ?
              </h2>
              <p className="text-[#D0D0CC] text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
                Contactez-nous pour un devis gratuit et personnalisé. Notre équipe vous accompagne de la conception à l&apos;installation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button href="/devis" variant="secondary" className="bg-[#F3F1EC] text-[#111111] hover:bg-[#8A4A32] hover:text-[#F3F1EC]">
                  Demander un devis gratuit
                </Button>
                <Button href="/produits" variant="outline" className="border-[#F3F1EC] text-[#F3F1EC] hover:bg-[#F3F1EC] hover:text-[#111111]">
                  Découvrir nos produits
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

    </div>
  );
};
