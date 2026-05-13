---
tags: [servicios, layout, paginas, snapshot]
updated: 2026-05-12
related: ["[[03 - Estructura de componentes]]", "[[07 - Hero y patrones de cabecera]]"]
---

# Layout final de `/servicios` — snapshot 2026-05-12

## Estructura de bloques (orden vertical)

```
<BaseLayout>
  <TopBar />                      ← desde BaseLayout
  <Header />                      ← desde BaseLayout (sticky)

  <Breadcrumb kicker="Catálogo CLIBEL" items=[Tratamientos] />

  <section svc-hero>              ← Hero 2 cols 50/50
    LEFT  → eyebrow + headline + lede + trust strip (5 marcas)
    RIGHT → kicker + 2 párrafos explicativos sobre CLIBEL

  <HeroNavBar variant="cream" label="Explora el sitio">
    Inicio · Tecnología · Equipo · Nosotros · Blog → Contacto

  <section Destacados (white)>
    SectionHeader (2 cols, párrafos CLIBEL)
    Grid 4-col de ServiceCard (featured)

  <section Garantías (dark)>
    SectionHeader variant="dark" (2 cols, párrafos CLIBEL)
    Grid 4-col de garantías (icono + título + texto)

  {5 secciones de categoría — alternando white/cream}
    SectionHeader (kicker + título + 2 párrafos específicos CLIBEL + CTA outline)
    Grid 3-4 cols de ServiceCard
    Footer "Relacionado" con links

  <section Comparativa (cream)>
    SectionHeader (2 cols, párrafos CLIBEL)
    Tabla 3-col CLIBEL vs spa común

  <Process />                     ← Timeline editorial, ver más abajo

  <HeroNavBar variant="dark" label="Tratamientos más solicitados">
    Limpieza · AH · BTX · Láser · RF → Ver catálogo

  <FAQContact />                  ← FAQ accordion + form sticky

  <HeroNavBar variant="cream" label="Categorías de tratamientos">
    Faciales · Corporales · Láser · Medicina · Capilares → WhatsApp

  <Footer />                      ← desde BaseLayout, pegado sin gap
</BaseLayout>
```

## Decisiones clave

- **Breadcrumb fuera del hero** (componente independiente).
- **Hero homologado** con `Hero.astro` del index: misma estructura 2 cols + capas decorativas (blob mauve, blob gold, grain).
- **6 invocaciones de `SectionHeader`** — todos los títulos siguen el mismo patrón 2 cols (título izq + 2 párrafos der).
- **3 `HeroNavBar`** en posiciones estratégicas con links distintos:
  1. Top — páginas del sitio + Contacto
  2. Medio (post-Process) — 5 servicios destacados + Ver catálogo
  3. Pre-footer — 5 categorías + WhatsApp
- **30+ menciones a CLIBEL** en párrafos explicando qué hace.
- **`<CTA />` final eliminado** porque `FAQContact` ya tiene formulario.
- **`<PartnersMarquee />` eliminado** — las marcas están ahora en el hero (trust strip) y footer (partners list).

## Process redesigned

Timeline editorial:
- Layout `aside | body` por paso, separados por dashed border.
- Número gigante italic Fraunces (clamp 3.5rem→6.5rem) con gradient mauve→gold y background-clip text.
- Tag pill "ETAPA 01" con border dorado.
- **Conector vertical**: línea fina dorada con fade + punto dorado con halo doble.
- Body con título + texto + grid 3-col de meta (Quién / Duración / Entregable) con dashed borders.
- Barra de trazabilidad final con CTA dorado sólido a /contacto.

## Footer redesigned

Editorial, **cero SVGs**:
- Top: logo circular + brand name + statement con CLIBEL.
- Grid 4 cols: Catálogo (numerado 01-05) · Empresa (NAV + legales) · Sucursales (numeradas con teléfono Fraunces grande) · Contacto + Síguenos (links sociales en italic Fraunces con underline animado).
- Partners list: 10 marcas en italic Fraunces con separadores `·`.
- Bottom: copyright + permiso COFEPRIS uppercase.
- Fondo: radial-gradients sutiles + grid pattern 80x80px.
- Sin `mt-24` — pegado a lo que esté encima.

## Diff vs versión anterior

| Antes | Ahora |
|---|---|
| Hero con stats card | Hero 2 cols con 2 párrafos explicativos |
| Breadcrumb inline en hero | Breadcrumb componente separado |
| `<CTA />` final | Eliminado (FAQContact ya cubre) |
| `<PartnersMarquee />` | Eliminado |
| Filter pills "Saltar a categoría" | Eliminadas |
| Header de categoría custom | `SectionHeader` con 2 párrafos CLIBEL |
| Garantías centrado | `SectionHeader variant="dark"` 2 cols |
| Process grid 4-cols horizontal | Timeline editorial vertical con números gigantes |
| Footer con SVG icons sociales | Footer editorial con links tipográficos |
| 1 HeroNavBar | 3 HeroNavBars (top/mid/pre-footer) |
