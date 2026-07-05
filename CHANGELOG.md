# Changelog

## 2026-07-05 - UI profesional móvil tipo Rummikub

### Modificado
- Se agregó `UI PRO v12`, un layout mobile-first más cercano a apps de fichas tipo Rummikub/Rummy Club.
- Se redujo el header a una barra mínima.
- Se eliminó el panel visible durante partida móvil.
- La mesa queda como zona protagonista.
- El pozo ahora queda como dock compacto sobre la mesa.
- La barra de acciones queda en una sola línea compacta y deslizable.
- El atril queda limitado a cerca de 19-20% de la pantalla.
- Las fichas del atril se muestran en 2 hileras de 7.
- Se actualizó la caché PWA a `rummy-familiar-ui-pro-mobile-v12-20260705`.

### Corregido
- El atril ya no debe ocupar casi toda la pantalla.
- Los controles ya no quedan como panel grande antes de la mesa.
- La mesa tiene más espacio real para ver jugadas bajadas por todos los jugadores.

### Validado
- Sintaxis de `index.html`.
- Sintaxis de `sw.js`.
- Validación estática `npm run test:static`.

### Pendiente
- Ejecutar `npm test` en Windows para confirmar Playwright E2E completo.


## 2026-07-04 - Layout profesional móvil jugable

### Modificado
- Se rediseñó el layout móvil para que la mesa sea el área principal de juego.
- Se redujo el encabezado para liberar pantalla.
- Se compactó la franja de rivales.
- Se transformaron los controles en una barra horizontal baja.
- Se ajustó el atril inferior a 20% aproximado de pantalla, con 2 hileras de 7 fichas.
- Se compactó el pozo para que no tape jugadas.
- Se actualizó la caché PWA en `sw.js`.

### Corregido
- El atril deja de tapar la mesa en móvil.
- La mesa central queda más visible para ver jugadas de todos los jugadores.
- Las fichas del atril entran mejor en pantalla chica.

### Validado
- `npm run test:static` ejecutado correctamente.

### Pendiente
- Ejecutar `npm test` en Windows con Playwright para confirmar E2E visual.
