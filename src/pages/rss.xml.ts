import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).filter((p) => !p.data.draft);
  return rss({
    title: `${SITE.name} | Blog`,
    description: 'Belleza, cuidado de la piel y medicina estética por CLIBEL',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.publishedAt,
      description: p.data.description,
      link: `/blog/${p.id}/`,
    })),
    customData: `<language>es-mx</language>`,
  });
}
