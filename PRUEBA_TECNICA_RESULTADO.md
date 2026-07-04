# Resultado técnico

## Estado
Parche preparado para corregir el último fallo E2E móvil.

## Falla observada
- `7 passed`
- `1 failed`
- La prueba móvil `reinicia el demo y restaura los datos ficticios` fallaba porque `#resetDemoBtn` estaba dentro del panel lateral oculto durante partida móvil.

## Corrección aplicada
- Se agregó `#resetDemoMobileBtn` en los controles visibles de partida.
- Se enlazó al mismo comportamiento `resetLocalDemo`.
- Solo queda visible/activo en modo demo local.
- La prueba E2E usa el botón móvil visible cuando existe.

## Validación esperada
- `npm test`
- Resultado esperado: `8 passed`.

## Archivos críticos
- `index.html`
- `tests/e2e/rummy-demo.spec.js`
- `sw.js`
