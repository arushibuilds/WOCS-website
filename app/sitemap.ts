import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/links';

export const dynamic = 'force-static';

const routes = [
  '',
  '/timeline',
  '/projects',
  '/resources',
  '/get-involved',
  '/guidelines',
  '/sponsors',
  '/leaderboard',
  '/faqs',
  '/code-of-conduct',
  '/privacy-policy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${SITE_URL}${route}` }));
}
