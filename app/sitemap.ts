import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = 'https://hariharanr1893.vercel.app';

  return [
    {
      url: `${baseURL}/`,
      lastModified: new Date().toISOString(),
    },
  ];
}
