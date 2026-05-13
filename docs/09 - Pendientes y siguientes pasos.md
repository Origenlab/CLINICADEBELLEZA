---
tags: [pendientes, roadmap, todo]
updated: 2026-05-12
---

# Pendientes y siguientes pasos

## Estado por nivel

- ✅ **L1 — Home** — finalizada, sin CTA final, seo-block editorial
- ✅ **L2 — `/servicios` (catálogo)** — finalizada, 3 HeroNavBar, layout documentado en [[10 - Layout final servicios]]
- 🟡 **L3 — Landing de categoría** — 1/5 completada (`tratamientos-faciales`), pendientes 4. Patrón en [[11 - Layout L3 categoría]]
- 🟡 **L4 — Servicio individual** — ruta `[...slug]` existe y renderiza, falta diseño profesional de `ServiceLayout.astro`

## Completado en esta iteración (2026-05-12)

- ✅ **`/servicios`** completa y profesional: Breadcrumb (componente separado), Hero homologado, 3 HeroNavBar, Destacados, Garantías dark, 5 cat sections con SectionHeader + 2 párrafos CLIBEL, Comparativa, Process redesigned, FAQ.
- ✅ **Process** rediseñado como timeline editorial vertical con números gigantes, conector vertical dorado, grid de meta 3-col por etapa.
- ✅ **Footer** rediseñado editorial sin SVGs.
- ✅ **Header** con mega-menú sólido + drawer móvil sin CTAs.
- ✅ **Breadcrumb.astro** componente reusable con schema.org.
- ✅ **HeroNavBar.astro** parametrizado con label/variant/cta.
- ✅ **30+ enlaces a /servicios** distribuidos por todo el sitio.
- ✅ **mt-24 del footer eliminado** para que pegue con la última sección.

## Categorías L3 pendientes

Aplicar el patrón documentado en [[11 - Layout L3 categoría]] a las 4 categorías restantes:

- **`/servicios/tratamientos-corporales`** (corporal) — 4 tratamientos: radiofrecuencia, reducción grasa, drenaje, anticelulitis
- **`/servicios/depilacion-laser`** (laser) — 1 tratamiento + zonas por separado
- **`/servicios/medicina-estetica-avanzada`** (medicina-estetica) — 4 tratamientos: AH, BTX, PRP, hilos
- **`/servicios/tratamientos-capilares`** (capilar) — 1 tratamiento + variaciones

Pasos por categoría:
1. Crear `/src/pages/servicios/<slug-seo>/index.astro` clonando tratamientos-faciales.
2. Reescribir arrays `concerns`, `stack`, `aftercare`, `faqs` con contenido específico.
3. Descomentar la línea en `CATEGORY_LANDING_PAGES` en `consts.ts`.
4. Actualizar schema OfferCatalog en `BaseLayout.astro`.

## L4 — Servicio individual

Diseñar `ServiceLayout.astro` con el mismo nivel de profesionalismo:
- Breadcrumb con 4 niveles (Inicio › Servicios › Categoría L3 › Servicio)
- Hero homologado 2 cols con kicker + título + lede + trust strip
- Sections: ¿En qué consiste?, Protocolo CLIBEL, Beneficios, Indicaciones, Contraindicaciones, FAQ + Form WhatsApp, HeroNavBars
- Schema.org `MedicalProcedure`

## Páginas top-level que faltan terminar

- **`/tecnologia`** — mismo tratamiento profesional que `/servicios`:
  - [[Breadcrumb]] + Hero homologado 2 cols + HeroNavBar con links a otras páginas
  - Catálogo de equipos por área clínica
  - Sección de marcas certificadoras (FDA/COFEPRIS)
- **`/equipo`** — médicos certificados con bio + especialidad + foto + cédula
- **`/nosotros`** — historia, filosofía, sucursales, equipo directivo
- **`/contacto`** — formulario completo + mapa embed + sucursales
- **`/blog`** — listado ya existe; mejorar diseño de la index del blog
- **`/blog/[slug]`** — página dinámica para cada post
- **`/servicios/[slug]`** — página dinámica para cada tratamiento (usar `ServiceLayout.astro`)
- **`/aviso-de-privacidad`** — referenciada en formularios y footer, no existe

## Mejoras del catálogo de servicios

- Generar páginas `/servicios/[slug]` para los 14 tratamientos existentes
- Agregar `image` real a cada MD (hoy solo gradientes placeholder)
- Considerar páginas dedicadas para casos complejos (ej. depilación láser por zonas)

## Funcionalidad

- Formularios de contacto realmente conectados (Resend, SendGrid, o backend custom)
- Newsletter signup
- Modal/popup de WhatsApp con mensajes pre-armados por servicio
- Internacionalización si llegará público fuera de CDMX

## SEO

- Generar sitemap.xml (verificar `@astrojs/sitemap`)
- robots.txt
- Imagen `og-default.jpg` real (hoy es placeholder)
- Imágenes optimizadas (WebP/AVIF) para cada tratamiento
- Alt text en todas las imágenes
- Rich snippets para FAQs

## Performance / accesibilidad

- Quitar kill-switch global de transitions o restringirlo más selectivamente
- Audit Lighthouse mobile
- Contraste WCAG AAA en todos los textos
- Focus visible en todos los elementos interactivos
- Test con lector de pantalla

## Reglas de oro para todo lo nuevo

1. **Toda página nueva debe enlazarse** en `NAV` (consts.ts), Header, Footer, HeroNavBar de otras páginas relevantes.
2. **Hero homologado** con la estructura de `Hero.astro` (2 cols + capas decorativas + brand statement + 2 párrafos).
3. **Breadcrumb fuera del hero** usando el componente `Breadcrumb.astro`.
4. **Todos los títulos de sección** usan `SectionHeader` (2 cols: título izq + 2 párrafos der).
5. **Todos los párrafos mencionan CLIBEL** y explican qué hace la clínica.
6. **HeroNavBar** debajo del hero y otra antes del footer (mínimo 2 por página) con links contextuales distintos.
7. **Sin emojis en navegación, mega-menús, footer ni headers de sección** — usar numeración italic Fraunces o tipografía editorial.
8. **Mobile-first**: drawer, touch targets 44px, safe-area-inset, sin CTAs en menú móvil.
9. **Kill-switch override**: cualquier transition crítica usa `!important`.
10. **Sin iconos SVG decorativos en footer** — todo tipográfico.
