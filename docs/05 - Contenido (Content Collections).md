---
tags: [content, collections, servicios, blog]
updated: 2026-05-12
---

# Content Collections

Config en `src/content.config.ts` con loader `glob`.

## Colección `servicios`

Schema Zod (resumido):

```ts
title: string
description: string
category: 'facial' | 'corporal' | 'laser' | 'medicina-estetica' | 'capilar'
duration?: string
sessions?: string
price?: string
icon?: string
image?: string
benefits: string[]
indications: string[]
contraindications: string[]
featured: boolean (default false)
order: number (default 99)
publishedAt: Date
```

**14 archivos en `src/content/servicios/`:**

- `limpieza-facial-profunda.md` (facial, featured, order 1)
- `rejuvenecimiento-facial.md` (facial)
- `peelings-quimicos.md` (facial)
- `tratamiento-antiacne.md` (facial)
- `radiofrecuencia-corporal.md` (corporal)
- `reduccion-grasa-localizada.md` (corporal)
- `drenaje-linfatico.md` (corporal)
- `masaje-anticelulitis.md` (corporal)
- `depilacion-laser.md` (laser)
- `acido-hialuronico.md` (medicina-estetica, featured)
- `toxina-botulinica.md` (medicina-estetica)
- `plasma-rico-plaquetas.md` (medicina-estetica)
- `hilos-tensores.md` (medicina-estetica)
- `tratamiento-capilar.md` (capilar)

## Colección `blog`

Schema:
```ts
title, description, publishedAt, updatedAt?, author='Equipo CLIBEL',
image?, tags[], draft (default false)
```

**3 posts en `src/content/blog/`:**
- `depilacion-laser-guia.md`
- `medicina-estetica-mitos.md`
- `cuidados-piel-cdmx.md`

## Categorías (en `consts.ts`)

5 categorías en `CATEGORIES`. Cada una con `label`, `slug`, `short`, `description`, `icon` (emoji — solo se usa en CatalogShowcase placeholder), `image`, `badgeLabel`, `badgeCount`, `items[]`.

## Datos del sitio (`consts.ts`)

- `SITE` — name, longName, tagline, description, keywords, url, founded (1981), cofepris
- `CONTACT` — phone, whatsapp, email, addressFull, hours, mapsEmbed
- `SOCIAL` — instagram/facebook/tiktok/youtube
- `NAV` — array para menú
- `STATS` — 45 años / +5,000 / 25+ / 4.9★
- `PROCESS` — 4 pasos del proceso
- `ADVANTAGES` — 4 ventajas (kicker, title, text)
- `SECTORS` — 6 audiencias
- `PARTNERS` — 10 marcas
- `BRANCHES` — 2 sucursales (Reforma, Polanco)
- `FAQ_ITEMS` — 8 Q&A
