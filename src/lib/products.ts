export interface ProductSpec {
  name: string;
  value: string;
}

export interface SubProduct {
  id: string; // slug
  name: string;
  description: string;
  features: string[];
  specs: ProductSpec[];
  catalogueUrl?: string;
  imageUrl?: string;
}

export interface ProductCategory {
  id: string; // slug
  name: string;
  description?: string;
  features?: string[];
  subProducts?: SubProduct[];
  imageUrl?: string;
}

export const productsData: ProductCategory[] = [
  {
    id: "volet-roulant",
    name: "Volet Roulant",
    imageUrl: "/images/volet-roulant.webp",
    subProducts: [
      {
        id: "volet-roulant-extrude-55",
        name: "Volet Roulant Extrudé 55",
        description: "Fabrication sur mesure, expertise extrusion haute qualité, technologies avancées d'électrification",
        features: [
          "Système autobloquant PS-40",
          "Tige intermédiaire fermeture automatique",
          "Compatible embouts PS-40 Autobloquante"
        ],
        specs: [
          { name: "Épaisseur nominale", value: "9,50 mm" },
          { name: "Surface de recouvrement", value: "41,90 mm" },
          { name: "Nombre de lattes au mètre", value: "23,90 ud" },
          { name: "Poids", value: "8,60 kg/m²" },
          { name: "Norme unité conditionnement", value: "60 m/l" },
          { name: "Longueurs fabrication", value: "6 m" },
          { name: "Diamètre minimum roulement", value: "42 mm" }
        ],

        imageUrl: "/images/volet-roulant-extrude-55.webp"
      },
      {
        id: "volet-roulant-extrude-100",
        name: "Volet Roulant Extrudé 100",
        description: "Conception Extrudé 100, extrusion haute précision, technologies électrification pointe",
        features: [
          "Système autobloquant PS-40",
          "Tige intermédiaire fermeture automatique",
          "Compatible embouts PS-40 Autobloquante"
        ],
        specs: [
          { name: "Épaisseur nominale", value: "17 mm" },
          { name: "Surface de recouvrement", value: "41,90 mm" },
          { name: "Nombre de lattes au mètre", value: "100" },
          { name: "Poids", value: "8,60 kg/m²" },
          { name: "Norme unité conditionnement", value: "60 m/l" },
          { name: "Longueurs max", value: "4,5 m" },
          { name: "Diamètre minimum roulement", value: "42 mm" }
        ],

        imageUrl: "/images/volet-roulant-extrude-100.webp"
      },
      {
        id: "lame-55-bombee-alumousse",
        name: "Lame 55 bombée alumousse",
        description: "Lame en aluminium profilé, remplie polyuréthane, forme bombée pour résistance intempéries et isolation thermique/acoustique",
        features: [
          "Compatible Alugix-50 S et Alugix-50 S Haute Densité"
        ],
        specs: [
          { name: "Épaisseur aluminium", value: "0,27 mm" },
          { name: "Épaisseur nominale", value: "10,90 mm" },
          { name: "Surface de recouvrement", value: "49,75 mm" },
          { name: "Nombre lattes/mètre", value: "20,10 unités" },
          { name: "Masse volumique (75 kg/m³)", value: "2,64 kg/m²" },
          { name: "Poids haute densité (250 kg/m³)", value: "3,71 kg/m²" },
          { name: "Norme conditionnement", value: "288 m/l" },
          { name: "Longueurs production", value: "5,50 – 6,50 m" },
          { name: "Diamètre minimum roulement", value: "42 mm" }
        ],

        imageUrl: "/images/lame-55-bombee-alumousse.png"
      },
      {
        id: "lame-45-plat-alumousse",
        name: "Lame 45 plat alumousse",
        description: "Lame en aluminium profilé, remplie polyuréthane, conception plate élégante",
        features: [
          "Compatible Alugan-45",
          "Surface lisse facile entretien"
        ],
        specs: [
          { name: "Épaisseur aluminium", value: "0,27 mm" },
          { name: "Épaisseur nominale", value: "8,20 mm" },
          { name: "Surface de recouvrement", value: "44,60 mm" },
          { name: "Nombre lattes/mètre", value: "22,42 ud" },
          { name: "Masse volumique (75 kg/m³)", value: "2,96 kg/m²" },
          { name: "Poids haute densité (250 kg/m³)", value: "4,30 kg/m²" },
          { name: "Conditionnement standard", value: "360 ml" },
          { name: "Longueurs fabrication", value: "5,50 – 6,50 m" },
          { name: "Diamètre minimum roulement", value: "42 mm" }
        ],

        imageUrl: "/images/lame-45-plat-alumousse.webp"
      }
    ]
  },
  {
    id: "porte-sectionnelle",
    name: "Porte Sectionnelle",
    description: "Panneaux horizontaux articulés, ouverture verticale, repli sous plafond. Optimise espace intérieur/extérieur.",
    imageUrl: "/images/porte-sectionnelle.webp",
    features: [
      "Excellente isolation thermique et acoustique",
      "Sécurité renforcée",
      "Pose facile et rapide",
      "Fonctionnement silencieux",
      "Pas d'emprise au plafond",
      "Système motorisé radio",
      "Revêtement anti-corrosion (environnements côtiers)",
      "16 teintes disponibles (Bubendorff)",
      "Matériaux robustes, design épuré",
      "Maintenance réduite"
    ]
  },
  {
    id: "portail-automatique",
    name: "Portail Automatique",
    description: "Mécanismes motorisés, ouverture/fermeture automatique via télécommande, interphone ou contrôle d'accès.",
    imageUrl: "/images/portail-automatique.webp",
    features: [
      "Intégration systèmes sécurité (capteurs mouvement, caméras, alarmes)",
      "Personnalisation finitions décoratives et motifs",
      "Revêtement anti-corrosion haute qualité (environnements côtiers)",
      "Installation facile et rapide",
      "Fonctionnement silencieux",
      "Système motorisé commande radio",
      "Adaptable usage résidentiel/commercial"
    ]
  },
  {
    id: "profiles-aluminium-modulaires",
    name: "Profilés Aluminium Modulaires",
    description: "Solutions polyvalentes pour structures industrielles, aménagements intérieurs, architecture. Conception modulaire pour personnalisation facile.",
    imageUrl: "/images/profiles-modulaires.webp",
    features: [
      "Personnalisation facile et rapide",
      "Résistance conditions climatiques, durabilité accrue, entretien minimal",
      "Légèreté et flexibilité",
      "Montage/démontage facile, ajustements rapides",
      "Intégration harmonieuse avec autres matériaux/systèmes",
      "Catalogue disponible sur demande via formulaire"
    ]
  },
  {
    id: "motorisation",
    name: "Motorisation",
    description: "Automatisation moderne pour volets roulants, portails, portes sectionnelles. Technologies de pointe, expertise reconnue.",
    imageUrl: "/images/motorisation.webp",
    features: [
      "Solutions sur mesure (résidentiel/commercial)",
      "Installation professionnelle",
      "Optimisation efficacité énergétique et sécurité",
      "Support technique complet",
      "Intégration harmonieuse",
      "Fonctionnement fluide et fiable"
    ]
  }
];

export function getCategoryById(id: string): ProductCategory | undefined {
  return productsData.find(cat => cat.id === id);
}

export function getProductById(categoryId: string, productId: string): SubProduct | undefined {
  const category = getCategoryById(categoryId);
  if (!category || !category.subProducts) return undefined;
  return category.subProducts.find(prod => prod.id === productId);
}
