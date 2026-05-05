import type { APIRoute } from 'astro';
import { site } from '../data/site';

const pages = ['', 'about', 'services', 'projects', 'contact'];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];
  const urls = pages
    .map(
      (path) =>
        `  <url>\n    <loc>${site.url}${path ? `/${path}` : '/'}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
