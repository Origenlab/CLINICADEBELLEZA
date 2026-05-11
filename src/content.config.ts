import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['facial', 'corporal', 'laser', 'medicina-estetica', 'capilar']),
    duration: z.string().optional(),
    sessions: z.string().optional(),
    price: z.string().optional(),
    icon: z.string().optional(),
    image: z.string().optional(),
    benefits: z.array(z.string()).default([]),
    indications: z.array(z.string()).default([]),
    contraindications: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    publishedAt: z.coerce.date().default(() => new Date()),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Equipo CLIBEL'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { servicios, blog };
