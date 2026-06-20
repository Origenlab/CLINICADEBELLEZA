---
tags: [layout, l4, servicio, paginas, snapshot, editorial, template]
updated: 2026-05-13
related: ["[[11 - Layout L3 categoría]]", "[[10 - Layout final servicios]]", "[[03 - Estructura de componentes]]", "[[07 - Hero y patrones de cabecera]]", "[[05 - Contenido (Content Collections)]]"]
---

# Layout L4 — Página de servicio individual

Jerarquía:

| Nivel | Tipo | Ejemplo URL |
|---|---|---|
| **L1** | Home | `/` |
| **L2** | Catálogo / hub | `/servicios` |
| **L3** | Landing de categoría | `/servicios/tratamientos-faciales` |
| **L4** | **Servicio individual** | `/servicios/limpieza-facial-profunda` |

L4 es la página de **venta clínica final**. Captura el primer L4 consolidado (`limpieza-facial-profunda`) como template editorial replicable para todos los servicios.

Toda página renderiza desde un solo layout: `src/layouts/ServiceLayout.astro`. La página dinámica `src/pages/servicios/[...slug].astro` recorre la colección `servicios` y pasa el frontmatter al layout. **Nunca duplicar el layout** — sólo crear/editar el `.md` en `src/content/servicios/`.

## Filosofía editorial

L4 transmite **profesionalismo médico tipo revista clínica** (referencia NYT Magazine). Cada sección se trata como un **capítulo numerado en romanos** (I, II, III, IV, V, VI). El usuario debe sentir que lee un dossier clínico, no un folleto comercial.

- Capítulos romanos en italic Fraunces con degradado gold→mauve
- Stat strips clínicos con números italic grandes en degradado
- Drop cap en primer párrafo del MD
- Texto justificado con hyphens en prose
- Stickyy TOC con scroll-spy
- Sidebar de 6 widgets para interlinking denso
- Cero emojis en estructura

## Anatomía completa (orden render)

```
┌── BREADCRUMB (Inicio · Servicios · Categoría · Servicio)
│
├── HERO 2-col 50/50
│   ├── L: eyebrow + h1 svc-hero-headline + lede + meta strip 4-col + CTAs
│   └── R: kicker + 2 párrafos CLIBEL + link a categoría
│
├── HERONAVBAR siblings (variant cream) — otros tratamientos de la categoría
│
├── STICKY TOC (top: 76px, scroll-spy con IntersectionObserver)
│   └── Numerales romanos I-VI + CTA "Agendar valoración"
│
├── CAP I · #resumen (white) ── body grid 2-col [body | sidebar widgets]
│   ├── Article (svc-body prose-clibel)
│   │   ├── svc-chapter-mark--inline (Capítulo I)
│   │   ├── svc-stats (4-col stat strip)
│   │   ├── <slot /> ── MD prose con drop cap + justify + UL editorial
│   │   ├── svc-block #beneficios (Cap II inline)
│   │   │   ├── svc-chapter II + svc-block-head + svc-benefits grid 1/2/3-col
│   │   ├── svc-block (Indicaciones)
│   │   │   └── svc-block-head + svc-indic grid de cards
│   │   └── svc-block svc-contra (Contraindicaciones)
│   │       └── svc-contra-grid 2-col [tag+h2+lede+CTA wa | lista numerada]
│   │
│   └── Aside (svc-side) ── 6 widgets fluidos
│       ├── 1. Ficha clínica (svc-widget--main)
│       ├── 2. Incluido en cada sesión (checklist de protocolSteps)
│       ├── 3. Respaldo clínico ¿Por qué CLIBEL? (trust list + links)
│       ├── 4. Tratamientos relacionados (siblings misma categoría)
│       ├── 5. Complementa tu plan (cross-link otras 4 categorías)
│       └── 6. Contacto directo (dark: WhatsApp, email, horario, ubicación)
│
├── CASOS CLÍNICOS · #casos (white→cream, opcional) ── svc-cases
│   ├── svc-chapter-mark--marker (★ sin roman, kicker "Casos clínicos")
│   ├── SectionHeader (mb=md)
│   └── Grid 1/2/3-col cards [num · profile eyebrow · name · duration pill · plan checklist · target italic]
│       └── Border lateral con accent (gold/mauve/rose). Render condicional: clinicalCases.length > 0
│
├── MITOS VS REALIDAD · #mitos (white, opcional) ── svc-myths
│   ├── svc-chapter-mark--marker (❖ sin roman, kicker "Mitos vs realidad")
│   ├── SectionHeader (mb=md)
│   └── Grid 1/2-col cards split horizontalmente:
│       └── Mitad superior (rojo): tag "Mito NN" + texto italic
│       └── Mitad inferior (verde): tag "Realidad clínica" + texto bold
│       └── Render condicional: myths.length > 0
│
├── COMPROMISOS · #compromisos (cream→white, opcional) ── svc-commit
│   ├── svc-chapter-mark--marker (◐ sin roman, kicker "Tu compromiso clínico")
│   ├── SectionHeader (mb=md)
│   └── Grid 1/2/3-col cards [num italic · weight pill · title · texto]
│       └── Border lateral 4px por weight (rojo Imprescindible · gold Recomendado · mauve Opcional)
│       └── Render condicional: commitments.length > 0
│
├── PROTOCOLO DE SEGURIDAD · #seguridad (dark, opcional · tratamientos invasivos) ── svc-safety
│   ├── svc-chapter-mark--marker --dark (⚕ sin roman, kicker "Protocolo de seguridad clínica")
│   ├── SectionHeader dark (mb=md)
│   └── Grid 1/2/4-col cards [num italic · kind pill (producto/protocolo/personal/reversibilidad) · title · text]
│       └── Solo para tratamientos invasivos. Render condicional: safetyProtocol.length > 0
│
├── ZONAS DE TRATAMIENTO · #zonas (white→cream, opcional) ── svc-zones
│   ├── svc-chapter-mark--marker (▲ sin roman, kicker "Zonas de tratamiento")
│   ├── SectionHeader (mb=md)
│   └── Grid 1/2/3/4-col cards [num · kicker · name · text · sessions pill]
│       └── Top-border accent (gold/mauve/rose). Render condicional: treatmentZones.length > 0
│       └── Usar para tratamientos corporales con áreas anatómicas específicas
│
├── MODALIDADES · #modalidades (white, opcional) ── svc-modalities
│   ├── svc-chapter-mark--marker (◆ sin roman, kicker "Modalidades del protocolo")
│   ├── SectionHeader (mb=md)
│   └── Grid 1/2/3-col cards [num · kicker · name · profile pill · text · meta intensidad+downtime]
│       └── Render condicional: modalities.length > 0
│
├── COMPARATIVA · #comparativa (cream→white, opcional) ── svc-compare
│   ├── svc-chapter-mark--marker (• sin roman, kicker "Comparativa clínica")
│   ├── SectionHeader (mb=md)
│   └── Tabla 4-col desktop [Aspecto · En casa · Spa · CLIBEL] / Cards stack mobile
│       └── Render condicional: comparison.length > 0
│
├── CAP III · #protocolo (dark) ── svc-protocol-section
│   ├── svc-chapter-mark--dark III
│   ├── SectionHeader variant=dark (mb=md)
│   ├── psteps-meta (4-col stat strip dark)
│   └── psteps grid de cards 1/2/3-col con flechas conectoras
│       └── pstep: num italic + eyebrow Paso N/total + title + text
│
├── CAP IV · #resultados (white)
│   ├── svc-chapter-mark IV
│   ├── SectionHeader (mb=md)
│   ├── tl-meta (4-col stat strip)
│   └── tl-list ── stepper horizontal con dots conectados (≥1100px)
│       └── tl-step: track[line·dot·line] + kicker + when italic + label + text
│
├── CAP V · #cuidados (dark) ── svc-protocols
│   ├── svc-chapter-mark--dark V
│   ├── SectionHeader variant=dark
│   └── protocol-grid 2-col [Pre | Post] con tag gold/mauve + lista numerada
│
├── CAP VI · #preguntas (cream brand-50)
│   ├── svc-chapter-mark VI
│   ├── SectionHeader
│   └── faq-grid 2-col 1.15fr/0.85fr [accordion details | form WhatsApp sticky]
│
├── RELATEDCATEGORIES (SectionHeader homologado + 3 cards cross-cat)
│
└── HERONAVBAR siblings (variant dark, pre-footer)
```

## Frontmatter requerido (template)

Cada archivo en `src/content/servicios/<slug>.md`:

```yaml
---
title: "Nombre del Tratamiento"
description: "Descripción 1 línea para SEO y meta strip."
category: "facial" | "corporal" | "laser" | "medicina-estetica" | "capilar"
duration: "60–75 min"
sessions: "1 sesión mensual recomendada"
price: "Desde $X,XXX" # opcional
icon: "✦"
order: 1
featured: true
seoTitle: "Nombre del Tratamiento en CDMX | CLIBEL"
seoDescription: "Descripción SEO de hasta 160 caracteres con keywords."
heroTagline: "Protocolo clínico CLIBEL"
heroLede: "Lede de 2-3 oraciones para el hero. Mencionar CLIBEL."

benefits:           # → Cap II Beneficios
  - "Beneficio 1"
  - "..."
indications:        # → Cap II Indicado para
  - "Indicación 1"
  - "..."
contraindications:  # → Cap II Contraindicaciones (card roja)
  - "Contraindicación 1"
  - "..."

protocolSteps:      # → Cap III Protocolo paso a paso
  - n: "01"
    title: "Diagnóstico cutáneo profesional"
    text: "Texto del paso mencionando CLIBEL."
  - n: "02"
    title: "..."
    text: "..."

timeline:           # → Cap IV Resultados esperados
  - when: "Día 0"
    label: "Resultado inmediato"
    text: "Texto del hito."
  - when: "Día 03"
    label: "..."
    text: "..."

preCare:            # → Cap V Pre-sesión
  - "Indicación previa 1"
  - "..."
postCare:           # → Cap V Post-sesión
  - "Indicación posterior 1"
  - "..."

faqs:               # → Cap VI Preguntas frecuentes
  - q: "¿Pregunta 1?"
    a: "Respuesta CLIBEL."

clinicalCases:      # → Casos clínicos (opcional · perfiles típicos de paciente con plan tipo)
  - name: "Acné adolescente"
    profile: "14–19 años · perfil puberal"
    duration: "6–8 sesiones · 3 meses"
    plan:
      - "Limpieza profunda mensual"
      - "Peeling salicílico fraccionado"
    target: "Controlar brotes activos y prevenir cicatrices permanentes."
    accent: "gold"  # opcional: gold | mauve | rose
  # ...casos adicionales

commitments:        # → Compromisos del paciente (opcional · adherencia)
  - title: "Hidratación 2.5L diarios"
    text: "Razón clínica del compromiso."
    weight: "Imprescindible"  # | "Recomendado" | "Opcional"
  # ...compromisos adicionales

myths:              # → Mitos vs realidad (opcional · desmontar misinformación)
  - myth: "Frase de marketing común sobre el tratamiento."
    reality: "Aclaración clínica honesta de lo que sí hace y lo que no hace."
  # ...mitos adicionales

treatmentZones:     # → Zonas de tratamiento (opcional · áreas anatómicas)
  - name: "Abdomen y flancos"
    kicker: "Zona principal · Demanda alta"
    sessions: "6–8 sesiones"
    text: "Descripción del enfoque clínico para la zona."
    accent: "gold"
  # ...zonas adicionales

modalities:         # → Modalidades del protocolo (opcional · para tratamientos con variantes)
  - name: "Ácido Glicólico"
    kicker: "AHA · Superficie"
    profile: "Pieles normales y mixtas que buscan luminosidad"
    text: "Descripción de la modalidad."
    intensity: "Superficial"
    downtime: "0–1 día"
  # ...modalidades adicionales

comparison:         # → Comparativa clínica (opcional · entre Modalidades y Cap III)
  - aspect: "Diagnóstico previo"
    home: "Auto-evaluación frente al espejo"
    spa: "Visual rápido sin instrumental"
    clibel: "Análisis con dermatoscopio digital + historia clínica completa"
  # ...filas adicionales

publishedAt: 2026-MM-DD
---

## ¿Título h2 prose?

Párrafo MD que arranca con el drop cap...
```

**Si una sección falta**, el capítulo no renderiza (condicional `length > 0`). El TOC sticky se ajusta dinámicamente.

## Componentes (no recrear, sólo importar)

| Componente | Función | Variantes |
|---|---|---|
| `BaseLayout.astro` | Wrapper SEO + Header + Footer | — |
| `Breadcrumb.astro` | Trail jerárquico + schema | cream / white / dark |
| `SectionHeader.astro` | **OBLIGATORIO** para todos los títulos de capítulo | light / dark · mb sm/md/lg |
| `HeroNavBar.astro` | Barra navegación tipográfica | cream / white / dark |
| `RelatedCategories.astro` | Cross-linking categorías con razones | cream / white |
| `WhatsAppFloat.astro` | Botón flotante (heredado BaseLayout) | — |

## Sticky TOC (índice editorial)

Se construye dinámicamente en el frontmatter del layout:

```ts
const toc = [
  { id: 'resumen', label: 'Resumen clínico', n: 'I' },
  ...(benefits || indications || contraindications ? [{ id: 'beneficios', n: 'II' }] : []),
  ...(protocolSteps.length ? [{ id: 'protocolo', n: 'III' }] : []),
  ...(timeline.length ? [{ id: 'resultados', n: 'IV' }] : []),
  ...(preCare.length || postCare.length ? [{ id: 'cuidados', n: 'V' }] : []),
  ...(faqs.length ? [{ id: 'preguntas', n: 'VI' }] : []),
];
```

- CSS: `position: sticky; top: 76px` (debajo del header sticky)
- z-index: 30 (header es 50)
- backdrop-filter blur
- Scroll-spy con IntersectionObserver `rootMargin: -30% 0px -60% 0px`
- `scroll-margin-top: 140px` (116px mobile) en cada sección con ID

## Capítulos romanos (chapter-mark)

Cada sección lleva una marca tipográfica encima del SectionHeader:

```astro
<div class="svc-chapter-mark[ svc-chapter-mark--dark]">
  <span class="svc-chapter-num"><em>III</em></span>
  <span class="svc-chapter-line"></span>
  <span class="svc-chapter-kicker">Capítulo</span>
</div>
```

Variante `--inline` se usa dentro del article MD (Cap I + Cap II). Variante `--dark` para secciones oscuras (Cap III, Cap V).

## Stat strips (3 lugares)

Patrón replicado con clases distintas:

| Sección | Clase | Items |
|---|---|---|
| Cap I | `.svc-stats` | Pasos · Duración · Frecuencia · Aplica |
| Cap III | `.psteps-meta` | Pasos · Duración total · Documentación · Productos |
| Cap IV | `.tl-meta` | Hitos · Primer cambio · Seguimiento · Validación |

Estructura:
- Grid 2-col mobile → 4-col tablet+
- Borders cream o gold sobre dark
- `dt`: eyebrow 0.58rem, uppercase, 0.22em letter-spacing
- `dd em`: italic Fraunces grande con degradado gold→mauve (clamp 1.85–2.85rem)
- `dd.svc-stats-text` / `.psteps-meta-text` / `.tl-meta-text`: italic Fraunces tamaño normal para strings

## Body prose editorial (Cap I)

- `.svc-body { max-width: none; width: 100%; min-width: 0; }` — llena 100% columna
- **Drop cap**: `.svc-body > h2 + p::first-letter` italic Fraunces font-size 4.6em float left con degradado gold→mauve
- **Justify**: `p { text-align: justify; hyphens: auto; hyphenate-limit-chars: 7 3 3; }`
- **H2 con rule top**: `padding-top: 1.75rem; ::before` línea horizontal gold→mauve
- **H3 con rule lateral**: `padding-left: 1.6rem; ::before` línea corta gold
- **UL editorial**: grid 2-col con bordes top/bottom dashed, circles dorados con check verde inscrito (sólo `> ul` directos del MD slot, `>` combinator filtra block ULs)

## Sidebar widgets modulares (6 widgets)

`.svc-side` fluye con body (no sticky). Cada widget en `.svc-widget`:

1. **Ficha clínica** (`.svc-widget--main`) — icon · kicker · title · meta dl · CTAs · foot dinámico años CLIBEL (`new Date().getFullYear() - parseInt(SITE.founded)`)
2. **Incluido en cada sesión** — checklist de `protocolSteps.title` + link anchor `#protocolo`
3. **¿Por qué CLIBEL?** (trust) — 4 trust rows + links a `/nosotros` y `/equipo`
4. **Tratamientos relacionados** — siblings misma categoría con num + name + description clamp 2 lines + flecha
5. **Complementa tu plan** (`.svc-widget--cross`) — todas las otras categorías con flecha italic + name + description
6. **Contacto directo** (`.svc-widget--contact`, dark) — WhatsApp · email · horario · ubicación → `/contacto`

## Grid columns

```css
.svc-body-grid {
  grid-template-columns: minmax(0, 1fr) clamp(320px, 26vw, 400px);
  gap: clamp(2.5rem, 4vw, 4.5rem);
}
```

## Reglas críticas (no romper)

1. **NO usar `svc-section-head` centrado** — siempre `SectionHeader` 2-col.
2. **NO duplicar ServiceLayout** — toda L4 pasa por el mismo layout.
3. **Frontmatter completo** — secciones se rendean condicionalmente. Si falta `protocolSteps`, no hay Cap III.
4. **Sticky TOC top: 76px** — calza con header height.
5. **Drop cap sólo MD** — selector `.svc-body > h2 + p` filtra block headers.
6. **Capítulos consecutivos romanos** I→VI (hardcoded en layout).
7. **Stat strips 4 items siempre** para grid limpio.
8. **Cap II NO usa SectionHeader** — usa `<header class="svc-block-head">` porque está dentro del article del Cap I.
9. **Ambos párrafos del SectionHeader mencionan CLIBEL** (regla homologada del sitio).
10. **Interlinking obligatorio**: hero links a categoría · siblings nav top y bottom · sidebar widget 4 (siblings) y 5 (cross-cat) · TOC CTA contacto · RelatedCategories · footer.

## Pull-quote editorial (blockquotes en MD)

Cualquier `> blockquote` en el MD del L4 se renderiza como **pull quote editorial**:

- Card cream con border lateral gold
- Comilla `«` gigante italic Fraunces en esquina (decorativa, opacity 0.55)
- Párrafo en Fraunces italic display (clamp 1.15–1.45rem)
- `<cite>` se estiliza como eyebrow uppercase mauve
- Drop cap deshabilitado dentro del blockquote (`::first-letter { all: unset }`)

Sintaxis MD:

```md
> Frase fuerte en italic. Puedes resaltar **CLIBEL** o **conceptos clave** que se renderizan en mauve sin italic.
> <cite>Filosofía CLIBEL · Categoría</cite>
```

Úsalo **1 vez por L4** para destacar la filosofía del servicio. Va dentro del slot MD (Cap I).

## Evoluciones del template (changelog)

| Fecha | Evolución |
|---|---|
| 2026-05-13 | **v1** consolidado: 6 capítulos romanos I-VI, sticky TOC, sidebar 6 widgets, body editorial con drop cap + justify, stat strips clínicos en Cap I/III/IV, capítulo III en grid 3-col, Cap IV stepper horizontal con dots conectados |
| 2026-05-13 | **+ Comparativa clínica** opcional entre Cap II y III. Schema `comparison[]` con `aspect, home?, spa?, clibel`. Render: tabla 4-col desktop / cards mobile. TOC entry con marker `•` (sin roman) |
| 2026-05-13 | **+ Pull-quote editorial** para blockquotes en MD. Auto-aplicado, drop cap deshabilitado dentro |
| 2026-05-13 | **+ Modalidades del protocolo** opcional entre Cap II y Comparativa. Schema `modalities[]` con `name, kicker?, profile?, text, intensity?, downtime?`. Render: grid 1/2/3-col cards con num italic + profile pill + meta dl. TOC entry con marker `◆`. Usar para tratamientos con variantes (peelings, láser, PRP, etc.) |
| 2026-05-13 | **+ Casos clínicos** opcional entre Cap II y Modalidades. Schema `clinicalCases[]` con `name, profile, duration?, plan[], target, accent? (gold/mauve/rose)`. Render: grid 1/2/3-col cards con border lateral coloreado por accent, profile eyebrow + name + duration pill + plan checklist en bloque cream + target italic con prefijo "Objetivo:". TOC entry con marker `★`. Usar para mostrar perfiles típicos de paciente atendidos (adolescente, adulto hormonal, cicatrices residuales, mantenimiento) |
| 2026-05-13 | **+ Zonas de tratamiento** opcional entre Casos y Modalidades. Schema `treatmentZones[]` con `name, kicker?, sessions?, text, accent? (gold/mauve/rose)`. Render: grid 1/2/3/4-col cards con top-border accent coloreado, num italic + kicker eyebrow + name + texto + sessions pill con icon reloj. TOC entry con marker `▲`. Usar para tratamientos corporales con áreas anatómicas específicas (abdomen, flancos, brazos, papada, muslos, glúteos) |
| 2026-05-13 | **+ Mitos vs realidad** opcional entre Casos y Zonas. Schema `myths[]` con `myth, reality`. Render: grid 1/2-col cards split horizontalmente — mitad superior roja con tag "Mito NN" + texto italic, mitad inferior verde con tag "Realidad clínica" + texto bold. TOC entry con marker `❖`. Usar para tratamientos con mucha misinformación pública (drenaje linfático "desintoxica", peelings "borra arrugas", antiacné "limpio en 2 semanas", etc.) |
| 2026-05-13 | **+ Protocolo de seguridad clínica** opcional dark entre Compromisos y Zonas. Schema `safetyProtocol[]` con `title, text, kind? ('producto'/'protocolo'/'personal'/'reversibilidad')`. Render: grid 1/2/4-col dark cards con num italic + kind pill coloreado. TOC entry con marker `⚕`. Usar SOLO para tratamientos invasivos (medicina estética inyectable, hilos, PRP) para mostrar infraestructura real (hialuronidasa, protocolo complicaciones, coord especialidad) |
| 2026-05-13 | **+ Compromisos del paciente** opcional entre Mitos y Zonas. Schema `commitments[]` con `title, text, weight? ('Imprescindible'/'Recomendado'/'Opcional')`. Render: grid 1/2/3-col cards con border lateral 4px coloreado por weight (rojo/gold/mauve), num italic + weight pill + title + texto. TOC entry con marker `◐`. Usar para tratamientos donde el comportamiento del paciente es determinante del resultado (anticelulitis, antiacné, planes corporales) |

## SEO y schema.org

- `BreadcrumbList` (Breadcrumb componente)
- `MedicalProcedure` (auto-generado con name, description, url, bodyLocation, preparation, followup)
- `FAQPage` si `faqs.length > 0`
- `og:type=article` con `publishedAt`
- Title fallback: `${title} en CDMX | CLIBEL`

## Para crear un nuevo L4

1. Crear `src/content/servicios/<slug>.md` con frontmatter completo (template arriba)
2. El slug debe coincidir con la URL: `/servicios/<slug>`
3. La categoría debe existir en `CATEGORIES` (consts.ts)
4. Verificar interlinking: añadir el servicio a `CATEGORIES.<cat>.items[]` si quieres que aparezca en el mega menú del header
5. Verificar que aparezca como sibling en el L3 de su categoría (automático si comparten `category`)
6. Si la categoría no tiene aún landing L3, crear `src/pages/servicios/<categoria-slug>/index.astro` o mantener fallback a `/servicios#<slug>` vía `catHref()`
7. Refresh dev → la página renderiza completa con TOC, capítulos y widgets sin tocar el layout

## Referencias

- Layout: `src/layouts/ServiceLayout.astro` (~2400 líneas: HTML + CSS + scroll-spy script)
- Página dinámica: `src/pages/servicios/[...slug].astro`
- Schema colección: `src/content/config.ts` (o equivalente)
- Componentes reusados: `SectionHeader`, `Breadcrumb`, `HeroNavBar`, `RelatedCategories`
- Memory pointer: `feedback_clibel_l4_pattern.md`
