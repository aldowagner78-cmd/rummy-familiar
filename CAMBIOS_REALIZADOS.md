# Cambios realizados

## Fecha

2026-07-04

## Archivos modificados

- index.html
- manifest.webmanifest
- sw.js
- README_INSTALACION.txt
- CHANGELOG.md
- CAMBIOS_REALIZADOS.md
- GUIA_PRUEBA_FINAL.md
- LEEME_PRIMERO.txt

## Archivos agregados

- PRUEBA_TECNICA_RESULTADO.md

## Qué se cambió

Se cerró la app como versión final inicial, agregando un modo demo local real y corrigiendo el comportamiento de carga para que la interfaz pueda usarse aunque Firebase no cargue todavía.

Cambios principales:
- Se agregó botón "Cargar demo local".
- Se agregó botón "Reiniciar demo".
- Se agregó botón "Avanzar jugador demo".
- Se creó una sala local ficticia "DEMO LOCAL".
- Se cargan dos jugadores ficticios, incluido "Demo Ana".
- Se carga un atril demo con combinación inicial válida de 30 puntos.
- Se agregó escritura local para el demo, sin tocar Firebase.
- Se cambió la carga de Firebase a importación dinámica.
- Se actualizó el service worker para renovar cache.
- Se actualizó el manifest PWA.
- Se corrigió documentación que mencionaba funciones no existentes.

## Por qué se cambió

La app ya tenía base funcional online, pero para considerarse finalizable necesitaba:
- modo demo dentro de la app,
- prueba sin datos reales,
- menor dependencia inicial de Firebase,
- cache PWA actualizado,
- documentación precisa y no engañosa.

## Cómo probar

Windows PowerShell, desde:
C:\Users\usuario\Desktop\Rummy_Git

Comando:
py -m http.server 8000

Abrir:
http://localhost:8000

Prueba demo:
1. Presionar "Cargar demo local".
2. Seleccionar 10 rojo, 10 azul y 10 amarillo.
3. Presionar "Crear nueva jugada con selección".
4. Presionar "Validar mesa y terminar turno".
5. Presionar "Avanzar jugador demo".
6. Presionar "Reiniciar demo".

Resultado esperado:
- Se carga la sala DEMO LOCAL.
- Las fichas demo aparecen en el atril.
- La jugada de 30 puntos se acepta.
- El turno pasa a Demo Ana.
- El botón de avance demo devuelve el turno al jugador.
- Reiniciar demo vuelve al estado inicial.

## Verificación técnica realizada

- `node --check` sobre el JavaScript extraído de index.html.
- `node --check` sobre sw.js.
- Validación JSON de manifest.webmanifest.
- Verificación de IDs usados por JavaScript contra IDs existentes en HTML.

## Cómo revertir

Antes de aplicar el parche se recomienda copia de seguridad.

Windows PowerShell, desde:
C:\Users\usuario\Desktop

Comando:
Copy-Item .\Rummy_Git .\Rummy_Git_BACKUP -Recurse -Force

Para revertir manualmente:
1. Restaurar los archivos desde el backup.
2. O usar Git:
   git restore index.html manifest.webmanifest sw.js README_INSTALACION.txt CHANGELOG.md CAMBIOS_REALIZADOS.md GUIA_PRUEBA_FINAL.md LEEME_PRIMERO.txt
3. Eliminar PRUEBA_TECNICA_RESULTADO.md si se agregó.

Resultado esperado:
El proyecto vuelve al estado anterior al parche final.


---

## Ampliación: pruebas automatizadas

### Archivos modificados

- .gitignore
- README_INSTALACION.txt
- CHANGELOG.md
- CAMBIOS_REALIZADOS.md
- GUIA_PRUEBA_FINAL.md
- PRUEBA_TECNICA_RESULTADO.md

### Archivos agregados

- package.json
- package-lock.json
- playwright.config.js
- tools/servidor-estatico.mjs
- tools/validar-estatico.mjs
- tests/README_PRUEBAS.md
- tests/e2e/rummy-demo.spec.js
- .github/workflows/playwright.yml

### Qué se cambió

Se agregó una base de pruebas automatizadas antes de avanzar al rediseño visual.

Las pruebas cubren:
- carga de la app,
- modo demo local sin Firebase,
- creación de jugada válida de 30 puntos,
- validación de mesa y cierre de turno,
- avance del jugador demo,
- reinicio del demo,
- ayuda,
- cambio de idioma,
- estructura PWA y documentación.

### Cómo probar

Desde:
C:\Users\usuario\Desktop\Rummy_Git

Comandos:
npm install
npx playwright install chromium
npm test

### Cómo revertir

Eliminar los archivos agregados de pruebas y restaurar los documentos desde el commit anterior.
