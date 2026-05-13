---
tags: [hero, patrones, cabecera]
updated: 2026-05-12
---

# Hero y patrones de cabecera

## Hero homologado (index + servicios)

Patrón compartido entre `Hero.astro` (index) y el `svc-hero` (servicios). **Misma estructura visual:**

- Fondo: `linear-gradient(180deg, brand-50 → brand-100)` + `isolation: isolate`
- Capas decorativas en `position: absolute`, `z-index: 0`:
  - `.hero-bg` → radial-gradients dorado + mauve
  - 2 `.hero-blob` con `filter: blur(110px)` (gold top-right + mauve bottom-left)
  - `.hero-grain` → patrón de puntos sutiles con `mix-blend-mode: multiply`
- Grid `1fr 1fr` desde 900px, columna única abajo
- Línea vertical dorada como separador entre columnas en desktop

### Columna izquierda — brand statement
1. `.eyebrow-tag` con dot pulsante (info contextual: "Médicos certificados", "Catálogo clínico", etc.)
2. `.hero-headline` / `.svc-hero-headline` — display Fraunces grande, `font-size: clamp(2.5rem, 10.5cqi, 6.5rem)` usando container queries. Itálica mauve en palabra clave.
3. `.hero-lede` / `.svc-hero-lede` — 1 párrafo corto que resume la idea principal
4. Trust strip: kicker uppercase + marcas listadas en italic Fraunces

### Columna derecha — narrativa
- `.hero-kicker` / `.svc-hero-kicker` — kicker subrayado dorado, align-self flex-start
- 2 párrafos `.hero-paragraph` / `.svc-hero-paragraph` con strong en términos clave
- Border-left dorado en desktop, padding-left clamp

## Breadcrumb (componente)

Va **fuera del hero**, entre Header y Hero. Componente reusable con:
- `kicker` opcional ("Catálogo CLIBEL")
- `items[]` con `{ label, href? }`
- `variant: 'cream' | 'white' | 'dark'`
- Microdata + JSON-LD schema.org `BreadcrumbList`
- Item actual: pill dorado con `aria-current="page"`

## HeroNavBar (componente)

Strip de navegación bajo el hero. **Componente parametrizado**:
- `links: NavItem[]` — pills tipográficos uppercase 0.82rem tracking-12em
- `cta?: NavItem` — link final con flecha, underline mauve
- Separadores dorados verticales en desktop, wrap centered en móvil

Usado en:
- **Index** (`HeroButtons.astro` — legacy, aún en uso) → 5 categorías + Agendar valoración
- **Servicios** (vía `HeroNavBar`) → Inicio · Tecnología · Equipo · Nosotros · Blog + Contacto

Para nuevas páginas, usar `HeroNavBar` con links contextuales distintos en cada página.
