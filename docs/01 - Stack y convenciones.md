---
tags: [stack, convenciones, astro, tailwind]
updated: 2026-05-12
---

# Stack y convenciones

## Tecnologías

- **Astro 5** (SSG) con Content Collections v5 (glob loader)
- **Tailwind CSS 4** (`@import "tailwindcss"` + `@theme` tokens)
- **Tipografías**: Fraunces (display) + Inter (sans), cargadas desde Google Fonts
- **Deploy**: GitHub Pages (workflow en `.github/workflows/deploy.yml`)
- **Idioma**: `es-MX`
- **Dominio**: clibel.com.mx (vía CNAME)

## Convenciones

- **Componentes**: PascalCase `.astro`, scoped `<style>` por defecto.
- **Páginas**: kebab-case en `/src/pages/`. Carpetas con `index.astro` para rutas tipo `/servicios`.
- **Container**: `.container-x` (full-width fluid, padding `clamp(1.25rem, 3.5vw, 4rem)`).
- **Section spacing**: `.section { padding-block: clamp(4rem, 7vw, 7.5rem) }`.
- **Buttons**: `.btn` + variant (`.btn-primary` mauve, `.btn-gold` champagne, `.btn-outline`, `.btn-ghost`, `.btn-dark`).
- **Kicker**: `.kicker-line` (uppercase + dorado con línea decorativa).
- **Headlines**: `.h-display` (clamp grande Fraunces) o equivalente scoped.

## Kill-switch global

`src/styles/global.css` tiene un **kill-switch** que mata todas las animaciones y transitions globales — solo permite transitions en `.btn`, `button`, `[role="button"]`. Para componentes que necesitan transitions reales (mega menu, drawer móvil, etc.) hay que usar `!important` en `transition` para vencer el kill-switch.

## Estructura de archivos

```
src/
├─ components/      # .astro componentes
├─ content/
│  ├─ blog/         # *.md posts
│  └─ servicios/    # *.md tratamientos
├─ content.config.ts  # Zod schemas
├─ layouts/         # BaseLayout, ServiceLayout
├─ pages/           # rutas
├─ styles/global.css
├─ consts.ts        # SITE, CONTACT, SOCIAL, NAV, CATEGORIES, STATS, PROCESS, ADVANTAGES, SECTORS, PARTNERS, BRANCHES, FAQ_ITEMS
└─ env.d.ts
```
