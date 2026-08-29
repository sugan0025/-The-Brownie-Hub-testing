import { MetadataRoute } from 'next';

const CATEGORY_SLUGS = [
  'cupcakes', 'cookies', 'muffins', 'donuts',
  'chocolava', 'tiramisu', 'croissants'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://the-rolling-oven.vercel.app';
  
  const categoryPages = CATEGORY_SLUGS.map(slug => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...categoryPages,
  ];
}
