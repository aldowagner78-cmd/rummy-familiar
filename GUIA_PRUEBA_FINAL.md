# Guía de prueba final

## Objetivo

Validar que Rummy Familiar de Fichas está listo para uso familiar básico.

## Prueba 1 - Carga básica

Desde:
C:\Users\usuario\Desktop\Rummy_Git

Comando:
py -m http.server 8000

Abrir:
http://localhost:8000

Resultado esperado:
- Se ve "Rummy Familiar de Fichas".
- No aparecen errores visibles.
- La interfaz se adapta al ancho de pantalla.
- Aparecen botones de demo local.

## Prueba 2 - Nombre de jugador

Pasos:
1. Escribir "Ana Demo".
2. Presionar "Guardar nombre".

Resultado esperado:
- Se muestra "Nombre guardado: Ana Demo".
- Al recargar, el nombre se mantiene.

## Prueba 3 - Modo demo local

Pasos:
1. Presionar "Jugar demo ahora".

Resultado esperado:
- Se crea sala "DEMO LOCAL".
- Aparecen dos jugadores ficticios.
- El estado muestra DEMO.
- El atril carga 14 fichas.
- No hace falta Firebase.

## Prueba 4 - Jugada demo válida

Pasos:
1. En el atril demo, seleccionar:
   - 10 rojo,
   - 10 azul,
   - 10 amarillo.
2. Presionar "Bajar fichas seleccionadas".

Resultado esperado:
- Aparece una jugada válida en la mesa.
- La jugada suma 30 puntos.
- La apertura queda en 30/30 o lista para cerrar turno.

## Prueba 5 - Terminar turno demo

Pasos:
1. Presionar "Terminar turno".

Resultado esperado:
- La mesa se valida.
- El jugador queda marcado como "Abrió".
- El turno pasa a "Demo Ana".

## Prueba 6 - Avanzar jugador demo

Pasos:
1. Cuando sea turno de "Demo Ana", presionar "Avanzar jugador demo".

Resultado esperado:
- Demo Ana toma una ficha ficticia si hay pila.
- El turno vuelve al jugador principal.
- El evento queda registrado en el panel de eventos.

## Prueba 7 - Reiniciar demo

Pasos:
1. Presionar "Reiniciar demo".

Resultado esperado:
- Se vuelve a crear la sala "DEMO LOCAL".
- El atril vuelve a 14 fichas.
- La mesa vuelve a estar vacía.
- El turno vuelve al jugador principal.

## Prueba 8 - Salir del demo

Pasos:
1. Presionar "Salir".

Resultado esperado:
- Se sale de la sala demo.
- Se limpia la sala actual.
- La app queda lista para entrar a una sala online real.

## Prueba 9 - Online con dos jugadores

Requiere internet y Firebase activo.

Pasos:
1. Abrir http://localhost:8000 en un navegador.
2. Guardar nombre "Ana Demo".
3. Crear sala "FAMILIA".
4. Abrir otra ventana privada u otro navegador.
5. Guardar nombre "Luis Demo".
6. Entrar a la sala "FAMILIA".
7. Desde el anfitrión, iniciar mano.

Resultado esperado:
- Ambos jugadores aparecen online.
- Se reparten 14 fichas.
- Solo juega quien tiene el turno.
- La mesa se actualiza para ambos.

## Prueba 10 - PWA/cache

Pasos:
1. Recargar con Ctrl + F5.
2. Abrir DevTools si hace falta.
3. Revisar que sw.js use cache final v6.

Resultado esperado:
- No queda servida una versión vieja.
- La app carga index.html, manifest e íconos.

## Criterios de aceptación

- La app inicia sin errores visibles.
- La pantalla principal carga.
- El modo demo local funciona.
- Se puede crear jugada válida en demo.
- Se puede terminar turno en demo.
- Se puede avanzar el jugador demo.
- Se puede reiniciar demo.
- Dos jugadores pueden entrar a una sala online.
- Una mano online puede iniciarse.
- Funciona en Chrome, Edge y Firefox.
- Funciona en Android con pantalla táctil.
- No hay datos reales mezclados en pruebas demo.

## Si algo falla

Copiar exactamente:
- navegador usado,
- URL abierta,
- paso donde falló,
- mensaje visible,
- captura si hay error,
- salida de consola si existe.


## Prueba automatizada

Desde:
C:\Users\usuario\Desktop\Rummy_Git

Comandos:
npm install
npx playwright install chromium
npm test

Resultado esperado:
- `npm run test:static` pasa sin errores.
- Playwright ejecuta pruebas del modo demo local en escritorio y móvil.
- Si falla, revisar `playwright-report/`.

## Criterio para pasar a rediseño visual

Pasar a estética moderna solo si:
- la validación estática pasa,
- el modo demo local funciona,
- las pruebas Playwright pasan en Windows o GitHub Actions,
- no hay errores visibles en navegador.

## Prueba automatizada corregida para Windows

Desde:

```powershell
C:\Users\usuario\Desktop\Rummy_Git
```

Ejecutar:

```powershell
npm test
```

Resultado esperado:

```text
Resultado: validación estática correcta.
8 passed
```

Si falla, abrir reporte:

```powershell
npm run test:report
```



---

## Prueba automatizada corregida - 2026-07-04

Desde:
C:\Users\usuario\Desktop\Rummy_Git

Comando:
npm test

Resultado esperado:
```text
Resultado: validación estática correcta.
8 passed
```

Si falla una prueba:
1. Ejecutar:
```powershell
npx playwright show-report
```
2. Revisar el primer error.
3. No avanzar a rediseño visual hasta que Playwright quede en verde.

## Prueba visual - Interfaz de fichas

Resultado esperado:
- La app se ve como juego de fichas, no como juego de cartas.
- El fondo principal es azul moderno.
- Las fichas son rectangulares, claras y legibles.
- El atril queda visible abajo durante la partida.
- Los botones principales se entienden sin explicación técnica.
- En móvil, las fichas se pueden tocar sin precisión excesiva.


## Prueba 9 - Mesa real móvil

Objetivo:
Validar que la interfaz se parezca a una partida real de fichas y sea usable en celular.

Pasos:
1. Abrir la app.
2. Presionar `Jugar demo ahora`.
3. Revisar la parte superior.
4. Revisar el centro de la pantalla.
5. Revisar el atril inferior.

Resultado esperado:
- Arriba aparecen los rivales compactos.
- Cada rival muestra nombre, cantidad de fichas y turno si corresponde.
- En el centro aparece la mesa común.
- Las jugadas bajadas se ven en la mesa central.
- Aparece el pozo de fichas con ficha boca abajo visual.
- Abajo aparece tu atril con scroll horizontal.
- Los botones principales siguen accesibles en móvil.

## Prueba 10 - Jugadas visibles para jugar

Pasos:
1. En demo, seleccionar 10 rojo, 10 azul y 10 amarillo.
2. Presionar `Bajar fichas seleccionadas`.

Resultado esperado:
- La jugada aparece en la mesa central.
- La jugada queda visible para poder seguir jugando.
- El atril baja de 14 a 11 fichas.
- No desaparece la mesa al usar móvil.

## Prueba automatizada

Desde:
C:\Users\usuario\Desktop\Rummy_Git

Comando:
```powershell
npm test
```

Resultado esperado:
```text
Resultado: validación estática correcta.
8 passed
```
