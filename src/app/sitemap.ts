import { MetadataRoute } from 'next';
import { INDIVIDUAL_BROWNIES, CURATED_BOXES } from '../lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://the-brownie-hub.vercel.app';
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/custom-box`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/builder`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Dynamic Product Routes
  const brownieRoutes: MetadataRoute.Sitemap = INDIVIDUAL_BROWNIES.map((b) => ({
    url: `${baseUrl}/product/${b.id}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const boxRoutes: MetadataRoute.Sitemap = CURATED_BOXES.map((box) => ({
    url: `${baseUrl}/product/${box.id}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...brownieRoutes, ...boxRoutes];
}
