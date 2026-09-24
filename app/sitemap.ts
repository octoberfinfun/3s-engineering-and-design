import type { MetadataRoute } from 'next';
import { services } from '@/data/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.3sengineeringanddesign.com';
  const paths = ['/', '/about-3s', ...services.map((service) => service.href), '/safety', '/contact-us', '/job-board'];
  return paths.map((path) => ({ url: `${base}${path === '/' ? '' : path}`, changeFrequency: path === '/' ? 'monthly' : 'yearly', priority: path === '/' ? 1 : .7 }));
}
