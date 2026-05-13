---
tags: [paginas, rutas, sitemap]
updated: 2026-05-12
---

# Páginas y rutas

## Existentes

- **`/`** — `src/pages/index.astro`. Hero, HeroButtons, CatalogShowcase, PartnersMarquee, WhyClibel, Process, SectorsAudience, Testimonials, BlogPreview, FAQContact, SEO block editorial, CTA.
- **`/servicios`** — `src/pages/servicios/index.astro`. Breadcrumb, Hero homologado 2 cols (brand statement + 2 párrafos explicativos), HeroNavBar con links a otras páginas, Destacados (4 featured), Garantías oscuro (4 pilares), 5 secciones de categoría con grid de ServiceCard, Comparativa CLIBEL vs spa común, Process, FAQContact, CTA.
- **`/tecnologia`** — placeholder. Necesita el mismo tratamiento profesional.
- **`/equipo`** — placeholder. Pendiente.
- **`/nosotros`** — placeholder. Pendiente.
- **`/blog`** — listado con `getCollection('blog')`.
- **`/contacto`** — formulario + datos.
- **`/404`** — fallback con link a /servicios.

## Pendientes

- **`/servicios/[slug]`** — dinámica para cada tratamiento individual. Layout existe (`ServiceLayout.astro`).
- **`/blog/[slug]`** — dinámica para cada post.
- **`/aviso-de-privacidad`** — referenciada desde FAQContact pero no existe.

## Reglas de enlace cruzado

Cuando se crea una página nueva debe enlazarse en:

1. `src/consts.ts` → `NAV` si va en el menú principal.
2. `Header.astro` → ya incluida vía `NAV`.
3. `Footer.astro` → columna "Empresa" usa `NAV`.
4. `HeroNavBar` en otras páginas con links contextual.
5. `CTA.astro` si aplica.
6. Cualquier seo-block editorial relevante en el index.

## Enlaces a `/servicios` actualmente activos

13+ enlaces repartidos en:

- Header desktop (mega menú raíz + 5 cats + sub-items + foot link)
- Header móvil ("Todos los tratamientos" + 5 cats + sub-items)
- Hero del index (vía HeroButtons cats)
- CatalogShowcase (5 cards + CTAs)
- Footer (5 cats + "Ver catálogo completo")
- SEO block del index (inline links)
- Testimonials (CTA)
- SectorsAudience (CTA outline)
- CTA component ("Ver todos los tratamientos")
- 404
- ServiceLayout breadcrumb
- HeroNavBar de servicios (apunta a otras páginas, no aquí)
