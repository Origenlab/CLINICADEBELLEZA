---
tags: [layout, l3, categoria, paginas, snapshot, seo]
updated: 2026-05-12
related: ["[[10 - Layout final servicios]]", "[[07 - Hero y patrones de cabecera]]", "[[03 - Estructura de componentes]]"]
---

# Layout L3 — Página de categoría

Jerarquía de páginas del sitio:

| Nivel | Tipo | Ejemplo URL |
|---|---|---|
| **L1** | Home | `/` |
| **L2** | Catálogo / hub | `/servicios` |
| **L3** | **Landing de categoría** | `/servicios/tratamientos-faciales` |
| **L4** | Servicio individual | `/servicios/limpieza-facial-profunda` |

L3 es el **layout que estamos consolidando** como patrón replicable para las 5 categorías clínicas. Este snapshot captura el primero (`tratamientos-faciales`) en su estado final.

## URL convention

URLs SEO-friendly con keywords completas. **Nunca** usar slugs cortos tipo `/faciales`. Mapeo en `CATEGORY_LANDING_PAGES` (`src/consts.ts`):

```ts
facial:             '/servicios/tratamientos-faciales',
corporal:           '/servicios/tratamientos-corporales',
laser:              '/servicios/depilacion-laser',
'medicina-estetica':'/servicios/medicina-estetica-avanzada',
capilar:            '/servicios/tratamientos-capilares',
```

Toda referencia a categoría desde el sitio pasa por `catHref(slug)` que devuelve la URL dedicada o cae a la ancla del L2 si la página no existe aún.

## Estructura de bloques L3 (orden vertical)

```
<BaseLayout>
  <TopBar />
  <Header />                              ← desde BaseLayout

  <Breadcrumb
    kicker="Categoría 0X · {short}"
    items=[{Servicios → /servicios}, {label categoría}]
  />

  <section cat-hero>                      ← Hero 2 cols 50/50, HOMOLOGADO
    LEFT  → eyebrow + headline + lede + trust strip (5 marcas)
    RIGHT → kicker subrayado + 2 párrafos CLIBEL explicando categoría

  <HeroNavBar variant="cream" label="Otras categorías">
    Las otras 4 categorías + CTA "Volver al catálogo"

  <section bg-white>                      ← Catálogo de servicios
    SectionHeader (kicker + título + 2 párrafos CLIBEL + CTA primary)
    Grid 4-col de ServiceCard (solo items de la categoría)

  <section bg-brand-50>                   ← Qué resolvemos
    SectionHeader (2 párrafos CLIBEL)
    Grid 3-col de "concerns" (6 problemas con número italic + texto)

  <section bg-white>                      ← Tecnología y productos
    SectionHeader (2 párrafos CLIBEL)
    Grid 3-col de "stack items" (kicker + valor Fraunces + detalle + numero)

  <section svc-aftercare> (dark)          ← Aftercare clínico
    SectionHeader variant="dark" (2 párrafos CLIBEL)
    Timeline 4-pasos (mismo patrón que Process: número gigante italic + body)

  <section bg-white>                      ← FAQ + Formulario WhatsApp
    SectionHeader (sin CTA — el form ya cumple)
    Grid 2-col:
      LEFT  → kicker + accordion de FAQs específicas (5+ preguntas)
      RIGHT → form sticky con campos + submit a wa.me con mensaje
              pre-armado URL-encoded (script inline)

  <HeroNavBar variant="dark" label="Tratamientos de la categoría">
    Items individuales de la categoría como deep-links + CTA WhatsApp

  <Footer />                              ← desde BaseLayout
</BaseLayout>
```

## Decisiones de diseño

- **Hero homologado** con `Hero.astro` del L1 y el `svc-hero` del L2: mismo patrón 2 cols + capas decorativas.
- **Mínimo 7 invocaciones de `SectionHeader`** — un patrón sin excepciones para todos los títulos.
- **Todos los párrafos mencionan `<strong>CLIBEL</strong>`** explicando qué hace la clínica en esa categoría específica.
- **2 `HeroNavBar`**: top (otras categorías, cream) + pre-footer (servicios individuales de la categoría, dark).
- **Formulario WhatsApp dinámico**: submit handler construye mensaje pre-armado URL-encoded con todos los campos y abre `wa.me/...` en pestaña nueva. Selector con los servicios de la categoría como opciones.
- **Schema dual**: BreadcrumbList + MedicalSpecialty con OfferCatalog anidado de MedicalProcedures.
- **40+ menciones a CLIBEL** en copy.

## Secciones específicas de L3

### 1. Catálogo (grid de ServiceCard)
Reusa el componente `ServiceCard.astro` filtrado por categoría. Pasa props: `href`, `title`, `description`, `category`, `duration`, `sessions`, `icon`, `featured`, `benefits`.

### 2. Concerns ("Qué resolvemos")
Lista de 6 problemas que CLIBEL atiende en la categoría. Cada concern tiene:
- Número italic Fraunces dorado
- Título Fraunces
- Párrafo mencionando CLIBEL
- Línea decorativa que se expande de 24→60px en hover
- Card con border, hover effect translate+shadow

### 3. Tecnología y stack
Grid de 6 items (equipos clínicos + productos). Cada item:
- Kicker uppercase "Equipos clínicos" / "Productos"
- Valor en Fraunces grande
- Detalle de 1 línea
- Número decorativo absolute top-right
- Hover background a cream

### 4. Aftercare (dark)
Timeline vertical 4 pasos. Cada paso:
- Número gigante italic con gradient mauve→gold
- Título Fraunces blanco
- Texto cream/78%
- Separadores dashed dorados

### 5. FAQ + Form (grid 2-col)
- **Left**: label kicker + accordion FAQs específicas (mínimo 5). Cada FAQ con número italic + question + plus que rota 45° al abrir + answer.
- **Right (sticky)**: form completo con WhatsApp. Campos:
  - Nombre (required)
  - Teléfono (required) + Email (grid 2-col interno desde 520px)
  - Select con los servicios de la categoría como opciones
  - Textarea opcional
  - Checkbox aviso de privacidad (required)
- Submit handler con JS inline (define:vars de Astro inyecta `waBase`), valida required, construye mensaje multi-línea y abre wa.me

## Datos requeridos por categoría (frontmatter)

Para clonar el patrón en otra categoría, definir:

```ts
const cat = CATEGORIES[<slug>];
const items = (await getCollection('servicios'))
  .filter(s => s.data.category === <slug>)
  .sort((a,b) => a.data.order - b.data.order);

const concerns = [/* 6 objetos con title + text mencionando CLIBEL */];
const stack    = [/* 6 objetos con kicker, value, detail */];
const aftercare= [/* 4 objetos con n, title, text */];
const faqs     = [/* 5+ objetos con q + a específicas de la categoría */];
```

## Diff vs versión anterior (rename)

| Antes | Ahora |
|---|---|
| `/src/pages/servicios/faciales/` | `/src/pages/servicios/tratamientos-faciales/` |
| URL `/servicios/faciales` | URL `/servicios/tratamientos-faciales` |
| FAQ accordion única columna | FAQ accordion + form WhatsApp en 2 cols con sticky |

## Plantilla rápida para clonar

1. Crear carpeta `/src/pages/servicios/<slug-seo>/index.astro` copiando la de tratamientos-faciales.
2. Cambiar `cat = CATEGORIES.<slug>` y filtrar items por ese slug.
3. Reescribir arrays `concerns`, `stack`, `aftercare`, `faqs` con contenido específico de la categoría (mínimo 1 strong CLIBEL por párrafo).
4. Descomentar la línea en `CATEGORY_LANDING_PAGES` en `consts.ts`.
5. Actualizar `BaseLayout.astro` schema OfferCatalog si aplica.
6. Verificar enlaces internos automáticos vía `catHref()` en Header, Footer, CatalogShowcase, HeroButtons, HeroNavBars.
