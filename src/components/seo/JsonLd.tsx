import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'STRONG RIDEAUX',
  url: 'https://strongrideaux.com',
  logo: 'https://strongrideaux.com/images/strong-rideaux-logo.png',
  description: "STRONG RIDEAUX conçoit et installe des solutions de fermeture en aluminium au Maroc.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Casablanca',
    addressCountry: 'MA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+212-522-000000',
    contactType: 'customer service',
    availableLanguage: ['French', 'Arabic'],
  },
  sameAs: [],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'STRONG RIDEAUX',
  url: 'https://strongrideaux.com',
  telephone: '+212-522-000000',
  email: 'contact@strongrideaux.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Zone Industrielle',
    addressLocality: 'Casablanca',
    addressCountry: 'MA',
  },
  openingHours: 'Mo-Fr 08:00-18:00',
  priceRange: '$$',
  description: "Spécialiste des solutions de fermeture en aluminium : volets roulants, motorisation, portails automatiques et portes sectionnelles.",
};

export function productSchema(product: {
  name: string;
  description: string;
  categoryName: string;
  slug: string;
  categorySlug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: product.categoryName,
    url: `https://strongrideaux.com/produits/${product.categorySlug}/${product.slug}`,
    brand: {
      '@type': 'Brand',
      name: 'STRONG RIDEAUX',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'STRONG RIDEAUX',
    },
  };
}
