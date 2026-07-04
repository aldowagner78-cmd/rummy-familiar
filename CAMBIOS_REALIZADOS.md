# Cambios realizados

## Archivos modificados
- `index.html`
- `sw.js`
- `tests/e2e/rummy-demo.spec.js`
- `CAMBIOS_REALIZADOS.md`
- `CHANGELOG.md`
- `GUIA_PRUEBA_FINAL.md`
- `PRUEBA_TECNICA_RESULTADO.md`

## Qué se cambió
- Se agregó un botón `Reiniciar demo` accesible dentro de los controles compactos de partida móvil.
- El botón solo queda visible/activo en modo demo local.
- Se corrigió la prueba E2E móvil para usar el botón visible si el panel lateral está oculto.
- Se actualizó la versión de caché PWA para forzar refresco del `index.html`.

## Por qué se cambió
- Después de compactar el atril al 20%, el panel lateral queda oculto durante la partida móvil.
- La prueba móvil fallaba porque intentaba usar `#resetDemoBtn` dentro de ese panel oculto.
- El usuario debe poder reiniciar el demo sin abrir un panel que está oculto para ahorrar pantalla.

## Cómo probar
1. Ejecutar `npm test`.
2. Confirmar `8 passed`.
3. Probar en móvil o modo responsive:
   - cargar demo,
   - bajar una jugada,
   - tocar `Reiniciar demo`,
   - verificar que el atril vuelve a 14 fichas.

## Cómo revertir
- Restaurar desde el backup previo o ejecutar:
  `git restore index.html sw.js tests/e2e/rummy-demo.spec.js`
