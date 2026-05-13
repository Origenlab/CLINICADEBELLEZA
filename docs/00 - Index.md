---
tags: [clibel, index, project-map]
project: CLIBEL
updated: 2026-05-12
---

# CLIBEL — Mapa del Proyecto

Sitio web de **CLIBEL Clínica de Belleza** (CDMX). Stack: Astro 5 + Tailwind 4 + Fraunces/Inter.

Esta carpeta es un **vault de Obsidian listo para usar**. Si abres Obsidian y apuntas a `/Users/frankoropeza/Documents/Claude/Projects/CLINICADEBELLEZA/docs/`, se carga directamente con la configuración base ya aplicada.

## Jerarquía L1 → L4

| Nivel | Tipo | URL ejemplo | Estado |
|---|---|---|---|
| **L1** | Home | `/` | ✅ |
| **L2** | Catálogo / hub | `/servicios` | ✅ |
| **L3** | Landing de categoría | `/servicios/tratamientos-faciales` | 1/5 |
| **L4** | Servicio individual | `/servicios/limpieza-facial-profunda` | dinámico vía `[...slug]` |

## Notas

- [[01 - Stack y convenciones]]
- [[02 - Sistema de diseño]]
- [[03 - Estructura de componentes]]
- [[04 - Páginas y rutas]]
- [[05 - Contenido (Content Collections)]]
- [[06 - Menú y navegación]]
- [[07 - Hero y patrones de cabecera]]
- [[08 - SEO y schema.org]]
- [[09 - Pendientes y siguientes pasos]]
- [[10 - Layout final servicios]] · L2 — capturado al 2026-05-12
- [[11 - Layout L3 categoría]] · **L3** — patrón replicable para categorías, captura tratamientos-faciales

## Resumen actual

- 5 categorías clínicas: Faciales, Corporales, Láser, Medicina Estética, Capilares.
- 14 servicios MD en `src/content/servicios/` (5 destacados).
- 3 entradas de blog en `src/content/blog/`.
- **L1 — Home `/`**: Hero homologado, HeroButtons, CatalogShowcase, secciones de marketing.
- **L2 — `/servicios`**: Breadcrumb, Hero homologado, 3 HeroNavBar, Destacados, Garantías (dark), 5 categorías con SectionHeader, Comparativa, Process timeline, FAQContact.
- **L3 — `/servicios/tratamientos-faciales`**: Breadcrumb, Hero homologado, HeroNavBar top, Catálogo ServiceCards, Concerns, Tecnología/Stack, Aftercare dark timeline, FAQ + Form WhatsApp 2-col sticky, HeroNavBar pre-footer.
- **L4 — `/servicios/[id]`**: ruta dinámica `[...slug].astro` que renderiza cada MD con `ServiceLayout.astro`.
- **Footer redesigned**: editorial, sin iconos SVG, tipografía Fraunces italic, numeración 01-05.
- **Menú móvil**: drawer fuera del `<header>`, sin CTAs, solo navegación.
- **Mega-menú** con hit-area extendida y bridge (no se cierra al cruzar).
- **URLs SEO-friendly**: keywords completas en slugs (`tratamientos-faciales`, no `faciales`).

## Componentes destacados

- [[03 - Estructura de componentes#Hero y cabecera|Hero.astro]] · [[03 - Estructura de componentes#Hero y cabecera|HeroNavBar.astro]] · [[03 - Estructura de componentes#Hero y cabecera|Breadcrumb.astro]] · [[03 - Estructura de componentes#Hero y cabecera|SectionHeader.astro]]
- `Header.astro` con mega-menú · `Footer.astro` editorial · `Process.astro` timeline · `ServiceCard.astro`
