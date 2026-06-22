---
tags: [layout, l3, evolucionado, profesional, snapshot, editorial, interlinking]
updated: 2026-05-13
related: ["[[11 - Layout L3 categoría]]", "[[12 - Layout L4 servicio individual]]", "[[03 - Estructura de componentes]]"]
---

# Layout L3 evolucionado profesional

Snapshot del patrón L3 después de las iteraciones facial → corporal → láser. Cada categoría aportó evoluciones que se consolidan aquí como template replicable para futuras categorías (medicina estética, capilar).

## Categorías ya consolidadas

| Categoría | URL | Estado |
|---|---|---|
| Faciales | `/servicios/tratamientos-faciales` | ✅ Profundiza + interlinking + humanización |
| Corporales | `/servicios/tratamientos-corporales` | ✅ Profundiza + interlinking + humanización |
| Láser | `/servicios/depilacion-laser` | ✅ + Stat strip + Calendario visual + Compromisos + Comparativa + Pull-quote (más evolucionado) |
| Medicina Estética | `/servicios/medicina-estetica-avanzada` | 🟡 Próximo objetivo |
| Capilares | `/servicios/tratamientos-capilares` | 🟡 Pendiente |

## Anatomía del L3 evolucionado (orden render)

```
1.  Breadcrumb (kicker "Categoría NN · Short")
2.  Hero 2-col (eyebrow-tag · h1 display · lede · trust strip · kicker + 2p con links inline)
3.  HeroNavBar otras categorías (variant cream)
4.  [evolución láser] Stat strip clínico 4-col
5.  Catálogo cat-grid con SectionHeader humanizado
6.  ★ PROFUNDIZA EN CADA PROTOCOLO ← el patrón estrella interlinking L3→L4
7.  Concerns hipervinculados a L4s
8.  Stack tecnológico
9.  [evolución láser] Pull-quote editorial Fraunces italic
10. Planes integrales / Cases (combos linkados + primaryHref)
11. Timeline resultados clínica
12. Aftercare por fases
13. [evolución láser] Compromisos del paciente (weight cards)
14. [evolución láser] Comparativa clínica (tabla 4-col)
15. Mitos vs realidad (opcional)
16. FAQ + Form 2-col (answerHtml con set:html)
17. RelatedCategories cross-link
18. HeroNavBar pre-footer dark (siblings)
```

## ★ Patrón Profundiza — corazón del interlinking L3→L4

Sección dedicada que va deep en cada L4 con lede editorial original (NO description del frontmatter). Layout: 1 fila por L4, num italic grande a la izquierda (clamp 3-4.5rem gold→mauve), body editorial a la derecha con kicker + título linkeado con underline animado + meta dl 4-col + lede humanizado + 2 beneficios + 2 CTAs.

**Data structure obligatoria:**

```ts
const editorialLedes: Record<string, { lede: string; readMore: string }> = {
  'slug-l4-1': {
    lede: 'Lede humanizado original específico de este L4. NO usa s.data.description.',
    readMore: 'Ver protocolo X',
  },
  // ...uno por cada L4
};
```

Render: itera `items` (= L4s de la categoría) y para cada uno renderiza el spotlight con `editorialLedes[s.id]` + datos auto-detectados del frontmatter MD (duration, sessions, protocolSteps.length, modalities.length).

## Schemas para tablas

### Concerns con interlinking

```ts
const concerns: { title: string; text: string; href?: string; linkLabel?: string }[] = [
  {
    title: 'Acné y brotes hormonales',
    text: 'Texto humanizado, sin "CLIBEL aborda..."',
    href: '/servicios/tratamiento-antiacne',
    linkLabel: 'Ver tratamiento antiacné',
  },
  // ...
];
```

Cada card concern cierra con link "Ver tratamiento X →" en eyebrow uppercase.

### Plans con combos linkados

```ts
const plans = [
  {
    name: 'Plan Reafirmación',
    sessions: '8–12 sesiones',
    frequency: '2 por semana · 6 semanas',
    includes: [
      { label: 'Radiofrecuencia corporal multipolar', href: '/servicios/radiofrecuencia-corporal' },
      { label: 'Masaje reductivo dirigido', href: '/servicios/masaje-anticelulitis' },
      { label: 'Activos reafirmantes profesionales' }, // sin href = no link
    ],
    target: 'Para flacidez visible...',
    accent: 'mauve',
    primaryHref: '/servicios/radiofrecuencia-corporal', // CTA inferior
  },
];
```

### FAQs con hyperlinks inline

```ts
const faqs: { q: string; answerHtml: string }[] = [
  {
    q: '¿Cuántas sesiones necesito?',
    answerHtml: 'El cambio se nota desde la sesión 3. <a href="/servicios/radiofrecuencia-corporal">Conoce el protocolo completo →</a>',
  },
];
```

Render con `set:html={f.answerHtml}` en el `<div class="faq-a">`.

## Evoluciones específicas (replicables por categoría)

### Stat strip clínico (después del Hero)

4-col stats con números italic Fraunces clamp 2-3.25rem en degradado `var(--color-brand-500)→var(--color-mauve-700)`. Eyebrows uppercase 0.22em mauve. Ejemplo láser: 12+ zonas · 03 tecnologías · I–VI fototipos · 80–90% reducción.

### Calendario visual (sección dark)

Stepper horizontal con N steps distribuidos en meses. Cada step con `track` (líneas conectoras + dot), `body` (mes eyebrow + sesión grande italic + label + texto). Dot crece y gana glow en hover. 4-col desktop, 1-col mobile.

### Pull-quote editorial (entre secciones)

Frase fuerte Fraunces italic display (clamp 1.35-2rem) con comilla « gigante decorativa, border lateral gold, `<cite>` como eyebrow mauve. Una por L3 máximo.

### Compromisos del paciente (cards weight)

Schema `commitments[]` con `weight: 'Imprescindible' | 'Recomendado' | 'Opcional'`. Border lateral por color (rojo/gold/mauve).

### Comparativa clínica (tabla 4-col)

Tabla responsive: tabla HTML en desktop (≥820px), cards stack con `<dl>` en mobile. Header dark, columna CLIBEL con border lateral gold.

### Complementa tu plan (cross-link a otras categorías)

Cuando NO hay siblings L4 dentro de la categoría (caso láser con 1 L4), agrega cross-link a L4s de otras áreas que complementan: facial post-láser, peelings para pigmentación residual, corporal integral, etc.

## Reglas anti-bug

1. **Alternancia de fondos** — nunca dos `bg-white` consecutivos. Pattern: white → cream → white → cream → dark → cream...
2. **Hyperlinks inline obligatorios** en hero p2, concerns, plans includes, FAQ answers
3. **`<br/>` en títulos** para ritmo editorial: "Las consultas corporales<br/>más frecuentes en <em>CLIBEL</em>."
4. **Sin repetición "CLIBEL aborda..."** — varía la voz editorial
5. **Cada L4 mencionado debe ser link** — nunca bold suelto
6. **`editorialLedes` map único** por L3 con leds específicos no genéricos

## Cómo crear un L3 nuevo

1. Empezar del template del L3 láser (más evolucionado)
2. Adaptar evoluciones a la categoría:
   - Stat strip: stats relevantes (faciales: 6 protocolos · COFEPRIS · 45 años · expediente)
   - Calendario: si aplica (planes con frecuencia clara)
   - Pull-quote: cita editorial específica
   - Compromisos: hábitos clave para esta categoría
   - Comparativa: vs alternativas habituales
3. Construir `editorialLedes` con voz única por L4
4. Hyperlinks en hero p2, concerns, plans, FAQs
5. Alternar fondos con criterio
6. Sibling navigation se genera automático vía ServiceLayout
