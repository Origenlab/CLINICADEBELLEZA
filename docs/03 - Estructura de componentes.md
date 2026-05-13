---
tags: [componentes, arquitectura]
updated: 2026-05-12
---

# Componentes (`src/components/`)

## Globales / chrome

- **`Header.astro`** — Sticky header sólido (white 97% + backdrop-blur). Mega-menú servicios con numeración 01–05 (sin iconos). Drawer móvil con scrim, scroll-lock iOS-friendly. **El drawer está FUERA del `<header>`** porque `backdrop-filter` crea containing block que atrapaba `position:fixed`. Sin CTAs ni footer en móvil — solo navegación pura.
- **`TopBar.astro`** — Barra superior oscura con teléfono/email/horario + CTA WhatsApp verde.
- **`Footer.astro`** — Editorial redesigned (sin SVGs). Top: logo + brand + statement con CLIBEL. Grid 4 cols (Catálogo numerado · Empresa · Sucursales numeradas · Contacto + Síguenos italic). Partners list italic Fraunces con separadores. Bottom legal. Background radial + grid 80px. Sin `mt-24` — pegado al elemento previo.
- **`SEO.astro`** — Meta tags + OpenGraph + Twitter Card.
- **`WhatsAppFloat.astro`** — Floating button verde con badge, safe-area-inset.
- **`RevealScript.astro`** — IntersectionObserver para `.reveal`.

## Hero y cabecera

- **`Hero.astro`** — Hero del index (2 cols 50/50). Izq: eyebrow + headline + lede + trust strip. Der: kicker subrayado + 2 párrafos. **Sin CTAs**.
- **`HeroButtons.astro`** — Strip de nav debajo del hero del index: 5 categorías + CTA Agendar.
- **`HeroNavBar.astro`** — **Componente parametrizado reusable**. Props: `links[]`, `cta`, `label`, `ariaLabel`, `variant: 'cream' | 'white' | 'dark'`. Soporta etiqueta lateral con kicker + línea decorativa gradient, links uppercase con underline animado, CTA con flecha que auto-detecta enlaces externos (target="_blank"). Servicios usa 3 instancias (top cream / mid dark / pre-footer cream).
- **`Breadcrumb.astro`** — Componente reusable con props `items[]`, `kicker`, `variant` (cream/white/dark). Microdata + JSON-LD schema.org BreadcrumbList. Item actual como pill dorado con `aria-current="page"`. Va FUERA del hero, entre Header y Hero.
- **`SectionHeader.astro`** — Header de sección con kicker + h2 (HTML permitido), paragraphs[] y CTA opcional. Grid 1fr/1fr con divider vertical dorado. Variant `light` o `dark`. Es el patrón obligatorio para todos los títulos de sección.

## Catálogo y servicios

- **`CatalogShowcase.astro`** — Showcase de 5 categorías en el index (cards grandes con gradient placeholder, items y CTA).
- **`ServicesGrid.astro`** — Grid filtrable por categoría/featured/limit que usa ServiceCard.
- **`ServiceCard.astro`** — Card de servicio con head visual gradient + badge categoría + icono + título + descripción + 3 bullets de beneficios + footer meta (duración/sesiones) + CTA "Ver detalle". Acepta props `featured` y `benefits`.
- **`CategoryStrip.astro`** — Strip horizontal de categorías (en home).

## Secciones del index

- **`WhyClibel.astro`** — 4 ventajas (ADVANTAGES) con icono SVG en cards con hover effect.
- **`Process.astro`** — **Redesigned 2026-05-12**. Timeline editorial vertical. Aside (número gigante italic con gradient + tag pill ETAPA 01) | Body (título + texto + grid 3-col Quién/Duración/Entregable). Conector vertical dorado con puntos halo. Barra de trazabilidad final con CTA dorado sólido.
- **`SectorsAudience.astro`** — 6 sectores SECTORS con numeración.
- **`Testimonials.astro`** — 6 testimonios 4.9★, avatars con gradient. Tiene CTAs de cierre.
- **`PartnersMarquee.astro`** — Marquee de marcas (Allergan, Galderma, Merz…). Kill-switch lo deja estático. Usado solo en index, removido de servicios.
- **`BlogPreview.astro`** — Últimos 3 posts.
- **`FAQContact.astro`** — FAQ accordion + formulario sticky de contacto con WhatsApp.
- **`CTA.astro`** — CTA final gradiente con título/subtítulo configurables + botón gold + "Ver tratamientos" + WhatsApp. **NO usado en servicios** porque FAQContact ya cubre.

## Layouts

- **`BaseLayout.astro`** — Doctype, head, fonts, schema.org BeautySalon+MedicalBusiness+LocalBusiness, TopBar+Header, main, Footer, WhatsAppFloat, RevealScript.
- **`ServiceLayout.astro`** — Layout para `[slug].astro` de servicios individuales (no creado todavía como página dinámica, pero el layout existe).
