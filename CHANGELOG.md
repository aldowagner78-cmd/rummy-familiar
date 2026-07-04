# Changelog

## 2026-07-04 - Fix final de reinicio demo en móvil

### Agregado
- Botón `Reiniciar demo` dentro de los controles compactos de partida para móvil.

### Modificado
- Prueba Playwright E2E para usar el botón de reinicio visible en móvil.
- Cache PWA actualizada a versión `v10-reset-demo-mobile`.

### Corregido
- Fallo E2E móvil donde `#resetDemoBtn` quedaba oculto porque el panel lateral se oculta durante la partida.

### Pendiente
- Validar visualmente en teléfono real tras publicar en GitHub Pages.
