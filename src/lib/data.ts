export type Product = {
  slug: string;
  categorySlug: string;
  name: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  applications: string[];
  benefits: string[];
  specifications: Record<string, string>;
  options: { name: string; values: string[] }[];
  downloadUrl?: string;
};

export const products: Product[] = [
  {
    slug: 'extrude-55',
    categorySlug: 'volets-roulants',
    name: 'Extrudé 55',
    categoryName: 'Volets Roulants',
    shortDescription: 'Solution haute sécurité en aluminium extrudé.',
    fullDescription: "Le volet roulant Extrudé 55 offre une résistance mécanique exceptionnelle et une protection optimale contre l'effraction. Conçu pour les exigences des architectures modernes, il s'intègre parfaitement aux projets résidentiels de standing et aux espaces commerciaux.",
    images: ['/images/strong-rideaux-img-1.jpg', '/images/strong-rideaux-img-2.jpg'],
    applications: ['Résidentiel de prestige', 'Commerces', 'Banques et assurances', 'Bâtiments industriels'],
    benefits: ['SÉCURITÉ MAXIMALE', 'DURABILITÉ EXTRÊME', 'ISOLATION ACOUSTIQUE', 'ESTHÉTIQUE ÉPURÉE'],
    specifications: {
      'MATÉRIAU': 'Aluminium extrudé',
      'ÉPAISSEUR NOMINALE': '1.2 mm',
      'POIDS AU M²': '8.5 kg',
      'LARGEUR MAXIMALE': '5000 mm',
      'SURFACE MAXIMALE': '12 m²',
      'MOTORISATION': 'Obligatoire'
    },
    options: [
      { name: 'FINITIONS', values: ['Thermolaquage RAL standard', 'Finition texturée', 'Aspect bois'] },
      { name: 'COMMANDES', values: ['Filaire', 'Radio IO', 'Domotique intégrée'] },
      { name: 'SÉCURITÉ', values: ['Verrous automatiques', 'Coulisses renforcées', 'Lame finale avec joint'] }
    ],
    downloadUrl: '/downloads/extrude-55-tech.pdf'
  },
  {
    slug: 'lame-45-plat',
    categorySlug: 'volets-roulants',
    name: 'Lame 45 Plat Alumousse',
    categoryName: 'Volets Roulants',
    shortDescription: 'Légèreté et isolation thermique optimisée.',
    fullDescription: "La lame 45 plat Alumousse combine un design rectiligne contemporain avec des performances d'isolation supérieures. L'injection de mousse polyuréthane garantit un confort thermique et phonique idéal pour l'habitat moderne.",
    images: ['/images/strong-rideaux-img-0.jpg', '/images/strong-rideaux-img-3.jpg'],
    applications: ['Résidentiel', 'Appartements', 'Rénovation'],
    benefits: ['ISOLATION THERMIQUE', 'DESIGN CONTEMPORAIN', 'FONCTIONNEMENT SILENCIEUX', 'EXCELLENT RAPPORT QUALITÉ/PRIX'],
    specifications: {
      'MATÉRIAU': 'Aluminium profilé isolé',
      'ISOLANT': 'Mousse polyuréthane sans CFC',
      'ÉPAISSEUR NOMINALE': '8.5 mm',
      'POIDS AU M²': '2.8 kg',
      'LARGEUR MAXIMALE': '2800 mm',
      'MOTORISATION': 'Compatible'
    },
    options: [
      { name: 'FINITIONS', values: ['Nuancier standard 12 teintes'] },
      { name: 'COMMANDES', values: ['Treuil manuel', 'Motorisation filaire', 'Motorisation radio'] }
    ],
    downloadUrl: '/downloads/lame-45-plat-tech.pdf'
  },
  {
    slug: 'portail-coulissant',
    categorySlug: 'portails-automatiques',
    name: 'Portail Coulissant Aluminium',
    categoryName: 'Portails Automatiques',
    shortDescription: 'Accès sécurisé et design sur mesure.',
    fullDescription: "Nos portails coulissants en aluminium sont conçus pour offrir une sécurité périmétrique sans compromis sur l'esthétique. Chaque portail est fabriqué sur mesure et équipé des systèmes de motorisation les plus fiables du marché.",
    images: ['/images/strong-rideaux-img-2.jpg'],
    applications: ['Résidentiel', 'Copropriétés', 'Sites industriels'],
    benefits: ['SÉCURITÉ D\'ACCÈS', 'RÉSISTANCE CORROSION', 'MOTORISATION FLUIDE', 'DESIGN PERSONNALISABLE'],
    specifications: {
      'MATÉRIAU': 'Aluminium assemblé ou soudé',
      'LARGEUR MAXIMALE': 'Jusqu\'à 8000 mm',
      'REMPLISSAGE': 'Plein, ajouré, mixte',
      'MOTORISATION': 'Intégrée ou apparente'
    },
    options: [
      { name: 'FINITIONS', values: ['Tous les RAL', 'Finitions texturées'] },
      { name: 'CONTRÔLE D\'ACCÈS', values: ['Vidéophonie', 'Clavier à code', 'GSM'] }
    ]
  }
];

export const getProductsByCategory = (categorySlug: string) => {
  return products.filter(p => p.categorySlug === categorySlug);
};

export const getProduct = (categorySlug: string, slug: string) => {
  return products.find(p => p.categorySlug === categorySlug && p.slug === slug);
};
