export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  summary: string;
  context: string;
  solution: string;
  technicalApproach: string[];
  heroImage: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: 'villa-moderne-casablanca',
    title: 'Villa Moderne Anfa',
    category: 'Résidentiel',
    location: 'Casablanca, Maroc',
    year: '2025',
    summary: 'Sécurisation et isolation thermique d\'une villa d\'architecte avec la solution Extrudé 55.',
    context: 'Le client souhaitait une solution de sécurité invisible qui ne dénature pas les lignes épurées de l\'architecture moderne de la villa, tout en offrant une résistance maximale aux intempéries côtières.',
    solution: 'Intégration de volets roulants Extrudé 55 en finition gris anthracite, parfaitement assortis aux menuiseries aluminium existantes. Motorisation domotique intégrée pour un contrôle centralisé.',
    technicalApproach: [
      'Coffres tunnels intégrés à la maçonnerie',
      'Lames aluminium extrudé 1.2mm d\'épaisseur',
      'Coulisses encastrées pour une invisibilité totale',
      'Système anti-soulèvement automatique'
    ],
    heroImage: '/images/strong-rideaux-img-1.jpg',
    gallery: [
      '/images/strong-rideaux-img-0.jpg',
      '/images/strong-rideaux-img-2.jpg',
      '/images/strong-rideaux-img-3.jpg'
    ]
  },
  {
    slug: 'siege-social-rabat',
    title: 'Siège Social Tech',
    category: 'Commercial',
    location: 'Rabat, Maroc',
    year: '2024',
    summary: 'Gestion des apports solaires et sécurisation des accès pour un bâtiment tertiaire R+4.',
    context: 'Ce nouveau siège social nécessitait une solution globale pour gérer l\'éblouissement sur les façades vitrées tout en assurant la sécurité du site en dehors des heures ouvrées.',
    solution: 'Déploiement de 120 volets roulants Lame 55 isolée avec motorisation intelligente connectée au système de Gestion Technique du Bâtiment (GTB).',
    technicalApproach: [
      'Lames profilées avec mousse haute densité',
      'Pilotage bioclimatique par capteurs d\'ensoleillement',
      'Finition thermolaquée garantie 10 ans',
      'Intégration réseau KNX'
    ],
    heroImage: '/images/strong-rideaux-img-3.jpg',
    gallery: [
      '/images/strong-rideaux-img-2.jpg',
      '/images/strong-rideaux-img-1.jpg'
    ]
  }
];

export const getProject = (slug: string) => {
  return projects.find(p => p.slug === slug);
};
