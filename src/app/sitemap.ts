import { MetadataRoute } from 'next';
import { products } from '@/lib/data';
import { projects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://strongrideaux.com';

  const staticRoutes = [
    '',
    '/produits',
    '/entreprise',
    '/blog',
    '/devis',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/produits/${product.categorySlug}/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projets/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...projectRoutes];
}
