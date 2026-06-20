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

    // === Campos opcionales para L4 template ===
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    /** Lede largo del hero (override del description) */
    heroLede: z.string().optional(),
    /** Sub-tagline del hero, breve */
    heroTagline: z.string().optional(),
    /** Pasos del protocolo clínico del servicio */
    protocolSteps: z.array(z.object({
      n: z.string(),
      title: z.string(),
      text: z.string(),
    })).default([]),
    /** Timeline de resultados esperados */
    timeline: z.array(z.object({
      when: z.string(),
      label: z.string(),
      text: z.string(),
    })).default([]),
    /** Indicaciones pre-sesión */
    preCare: z.array(z.string()).default([]),
    /** Indicaciones post-sesión */
    postCare: z.array(z.string()).default([]),
    /** FAQs específicas del servicio */
    faqs: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).default([]),
    /** Comparativa clínica (opcional) — render como tabla editorial CLIBEL vs alternativas */
    comparison: z.array(z.object({
      aspect: z.string(),
      home: z.string().optional(),
      spa: z.string().optional(),
      clibel: z.string(),
    })).default([]),
    /** Modalidades / variantes del protocolo (opcional) — para tratamientos con múltiples versiones (tipos de peeling, niveles de láser, etc.) */
    modalities: z.array(z.object({
      name: z.string(),
      kicker: z.string().optional(),
      profile: z.string().optional(),
      text: z.string(),
      intensity: z.string().optional(),
      downtime: z.string().optional(),
    })).default([]),
    /** Casos clínicos / perfiles de paciente (opcional) — qué perfiles se atienden y con qué plan */
    clinicalCases: z.array(z.object({
      name: z.string(),
      profile: z.string(),
      duration: z.string().optional(),
      plan: z.array(z.string()).default([]),
      target: z.string(),
      accent: z.enum(['gold', 'mauve', 'rose']).optional(),
    })).default([]),
    /** Zonas de tratamiento (opcional) — para tratamientos corporales con áreas anatómicas específicas */
    treatmentZones: z.array(z.object({
      name: z.string(),
      kicker: z.string().optional(),
      sessions: z.string().optional(),
      text: z.string(),
      accent: z.enum(['gold', 'mauve', 'rose']).optional(),
    })).default([]),
    /** Mitos vs realidad (opcional) — desmontar misinformación común sobre el tratamiento */
    myths: z.array(z.object({
      myth: z.string(),
      reality: z.string(),
    })).default([]),
    /** Compromisos del paciente (opcional) — qué tiene que cumplir el paciente para que el resultado se sostenga */
    commitments: z.array(z.object({
      title: z.string(),
      text: z.string(),
      weight: z.enum(['Imprescindible', 'Recomendado', 'Opcional']).optional(),
    })).default([]),
    /** Protocolo de seguridad clínica (opcional) — para tratamientos invasivos (medicina estética, hilos, PRP, etc) */
    safetyProtocol: z.array(z.object({
      title: z.string(),
      text: z.string(),
      kind: z.enum(['producto', 'protocolo', 'personal', 'reversibilidad']).optional(),
    })).default([]),
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
