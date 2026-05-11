# CLIBEL — Clínica de Belleza

Sitio web oficial de **CLIBEL**, clínica de belleza especializada en tratamientos estéticos faciales, corporales y medicina estética avanzada en Ciudad de México.

## Stack

- **Astro 5** — generador de sitios estáticos rápido y SEO-first
- **Tailwind CSS v4** — estilos utility-first
- **MDX + Markdown** — contenido de servicios y blog
- **Content Collections** — tipado fuerte y validación con Zod
- **Sitemap automático** — `@astrojs/sitemap`
- **Imágenes optimizadas** — `astro:assets` + `sharp`

## Estructura

```
src/
├── components/      # Componentes reutilizables (.astro)
├── content/         # Markdown/MDX de servicios y blog
│   ├── servicios/   # Cada tratamiento como un .md
│   └── blog/        # Artículos
├── layouts/         # Layouts base
├── pages/           # Rutas del sitio
│   ├── servicios/   # /servicios + [slug]
│   └── blog/        # /blog + [slug]
├── styles/          # CSS global
└── consts.ts        # Constantes del sitio (NAP, redes, SEO)
```

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # genera /dist
npm run preview      # preview del build
```

## Despliegue

Compatible con Vercel, Netlify, Cloudflare Pages y cualquier hosting estático. Solo conecta el repositorio y usa `npm run build` con output `dist/`.

## Próximos pasos

1. Reemplazar `src/consts.ts` con datos reales (teléfono, dirección, redes sociales).
2. Subir imágenes reales a `public/img/` y `src/assets/`.
3. Conectar Google Analytics / Meta Pixel en `src/layouts/BaseLayout.astro`.
4. Configurar dominio y certificado SSL.
