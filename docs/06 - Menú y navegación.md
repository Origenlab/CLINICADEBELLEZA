---
tags: [menu, navegacion, header, mobile]
updated: 2026-05-12
---

# Menú y navegación

## Header desktop (`.hdr`)

- Sticky top, background `rgba(255,255,255,0.97)` + `backdrop-filter: blur(14px)`.
- Logo: marca circular gradient + nombre + sub "Clínica de Belleza".
- Nav links como pills hover, item activo con marker dorado debajo.
- **Mega-menú "Servicios"**: trigger es `<a href="/servicios">` (navega al click, despliega en hover).
  - Panel sólido blanco con sombra 24px/64px, bridge invisible para no cerrarse al cruzar.
  - Grid `1fr` con 5 categorías en 3 cols (2 cols <900px).
  - Cada categoría: número `01-05` italic Fraunces dorado + label/badgeCount + 4 sub-items.
  - Footer del mega: stats + "Ver catálogo completo".
- Derecha: bloque tipográfico de teléfono (kicker LLÁMANOS + número Fraunces) con border-left dorado + CTA dark "Agendar cita" + toggle hamburguesa.

## Drawer móvil (`.m-nav`)

**Crítico:** El drawer está FUERA del `<header>` (sibling) porque `backdrop-filter` en `.hdr` creaba containing block que atrapaba `position:fixed`.

- `z-index: 9999`, `visibility: hidden` + `pointer-events: none` cuando cerrado.
- Scrim oscuro con blur + drawer 92vw (max 420px) slide-in desde la derecha.
- Header del drawer: logo + botón close.
- Body: scroll con `-webkit-overflow-scrolling: touch`.
- "Servicios" como `<details open={isActive}>` accordion con badge `25+`, chevron animado.
- Submenú: "Todos los tratamientos" (link normal blanco, NO CTA) + 5 categorías con número 01-05 italic + nombre/conteo + 3 sub-items.
- **Sin footer** — no hay CTAs, ni teléfono, ni horario, ni trust tags. Solo navegación.

## Script JS móvil

- DOMContentLoaded guard + `dataset.bound` anti doble-bind.
- Click + touchend handlers en toggle.
- Scroll lock vía `body.m-nav-locked { overflow: hidden !important }`.
- ESC cierra, click en scrim cierra, click en link cierra y navega.
- `matchMedia('(min-width: 1024px)')` listener cierra al pasar a desktop.

## Override del kill-switch

Las transitions del drawer/scrim/mega-panel usan `!important` para vencer el kill-switch global de `global.css`.
