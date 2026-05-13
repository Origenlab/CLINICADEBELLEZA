---
tags: [design-system, colores, tipografia, tokens]
updated: 2026-05-12
---

# Sistema de diseño v2

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `--color-brand-50` | `#FAF7F2` | Fondos cremosos |
| `--color-brand-100` | `#F2EBDF` | Secciones |
| `--color-brand-200` | `#E8D5C4` | Bordes |
| `--color-brand-300` | `#D9BC9C` | Acentos |
| `--color-brand-400` | `#C9A961` | **Champagne gold** (acento principal) |
| `--color-brand-500` | `#B8923F` | Gold profundo |
| `--color-brand-600` | `#9C7A2E` | — |
| `--color-mauve-300` | `#BC8E9C` | Mauve claro |
| `--color-mauve-500` | `#8B5A6B` | **Mauve principal** (primary brand) |
| `--color-mauve-700` | `#5C3946` | Mauve profundo |
| `--color-ink-900` | `#1F1418` | Tipografía principal |
| `--color-ink-800` | `#2A1A1F` | Texto body |
| `--color-ink-700` | `#4A3540` | Texto secundario |
| `--color-ink-500` | `#6B5560` | Texto terciario |
| `--color-ink-300` | `#A89BA0` | Disabled |

## Tipografía

- **Display**: `Fraunces` (300–700 + italic), `font-variation-settings: "opsz" 144, "SOFT" 50`
- **Sans**: `Inter` (300–700)
- **Letter-spacing**: -0.025em a -0.028em en titulares; 0.18-0.24em en kickers
- **Cursiva (em)** en titulares = color `mauve-500` con weight 400

## Radios y sombras

- Card radius: `--radius-card: 1.25rem`
- Pill: `--radius-pill: 999px`
- Card shadow base: `0 1px 2px rgba(31,20,24,0.04), 0 8px 24px -12px rgba(31,20,24,0.08)`
- Card hover: `0 4px 8px rgba(31,20,24,0.06), 0 28px 48px -20px rgba(31,20,24,0.22)` + `translateY(-6px)`

## Gradientes utilitarios

- `.gradient-mauve-gold` — primary brand gradient (mauve→gold)
- `.gradient-soft` — fondo cremoso
- `.text-gradient` — texto en gradiente

## Reveal animation

`.reveal` con IntersectionObserver (script en `RevealScript.astro`). El kill-switch lo deja **siempre visible** sin animación.

## Filosofía visual

> **Editorial / clínico / lujoso.** Tipografía display sobria, kickers con tracking amplio, numeración italic Fraunces en vez de iconos cuando se busca un look profesional (mega-menú, filter pills, categorías).
