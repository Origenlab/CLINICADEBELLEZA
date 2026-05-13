---
tags: [seo, schema, microdata]
updated: 2026-05-12
---

# SEO y schema.org

## BaseLayout (siempre presente)

Schema combinado `BeautySalon + MedicalBusiness + LocalBusiness` con:
- `@id: clibel.com.mx/#clinic`
- address, geo, openingHoursSpecification, areaServed
- `aggregateRating: 4.9 / 500 reviews`
- `hasOfferCatalog` con 5 OfferCatalog enlazados a `/servicios#${slug}`
- `knowsAbout` con keywords clínicos
- `sameAs` con redes sociales

## Por página

- **`/`** — sin schemas adicionales (basta el BeautySalon)
- **`/servicios`** — `BreadcrumbList` (via Breadcrumb component) + `ItemList` con todos los MedicalProcedure
- **Breadcrumb component** — emite JSON-LD + microdata inline (`itemtype="https://schema.org/BreadcrumbList"`)

## Convenciones futuras

Para nuevas páginas:
1. Usar `<Breadcrumb items={...} />` debajo del Header → schema BreadcrumbList automático.
2. Si la página describe un servicio individual, agregar `MedicalProcedure` con name, description, image, indication, contraindication.
3. Para blog posts, schema `Article` con headline, datePublished, author, image.
4. Sitemap auto via `@astrojs/sitemap` (verificar configuración en astro.config.mjs).

## Meta tags

`SEO.astro` recibe props desde BaseLayout:
- title, description, image, type, publishedAt, canonical, noindex
- OpenGraph + Twitter Card

## Keywords clave a usar en `description`

clínica de belleza, medicina estética, depilación láser, tratamientos faciales/corporales, rejuvenecimiento facial, ácido hialurónico, toxina botulínica, plasma rico en plaquetas, hilos tensores, radiofrecuencia corporal, peelings químicos, tratamientos capilares, CDMX, COFEPRIS.
