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

## Corrección pruebas automatizadas Windows

### Archivos modificados
- `tools/servidor-estatico.mjs`
- `tests/e2e/rummy-demo.spec.js`
- `playwright.config.js`
- `package.json`

### Archivos agregados
- `tools/ejecutar-pruebas.mjs`

### Qué se cambió
- Se corrigió el servidor estático de pruebas para que `http://127.0.0.1:8000/` sirva `index.html` también en Windows.
- Se reemplazó el script `npm test` que usaba `&&` por un runner Node multiplataforma.
- Se flexibilizó la validación inicial del título para aceptar `Rummy` o `Rummikub`.
- Se agregó espera explícita de `domcontentloaded` al abrir la app.

### Por qué se cambió
- En Windows, la ruta `/` se estaba resolviendo como carpeta raíz del proyecto y el servidor respondía `Archivo no encontrado`; por eso Playwright no encontraba `#appTitle`.
- PowerShell antiguo no acepta `&&` como separador, por eso `npm test` fallaba antes de correr todo.

### Cómo probar
Desde `C:\Users\usuario\Desktop\Rummy_Git`:

```powershell
npm test
```

Resultado esperado:

```text
Resultado: validación estática correcta.
8 passed
```

### Cómo revertir
- Restaurar backup de la carpeta antes del parche, o usar:
```powershell
git restore tools/servidor-estatico.mjs tests/e2e/rummy-demo.spec.js playwright.config.js package.json CAMBIOS_REALIZADOS.md CHANGELOG.md README_INSTALACION.txt PRUEBA_TECNICA_RESULTADO.md
git clean -f tools/ejecutar-pruebas.mjs
```



---

## Corrección pruebas Playwright Windows - 2026-07-04

## Archivos modificados
- tests/e2e/rummy-demo.spec.js
- CHANGELOG.md
- CAMBIOS_REALIZADOS.md
- GUIA_PRUEBA_FINAL.md
- PRUEBA_TECNICA_RESULTADO.md
- README_INSTALACION.txt

## Qué se cambió
- Se corrigió la expectativa incorrecta `Grupo|Group`.
- La app en español muestra `Serie` para una jugada de mismo número y colores distintos.
- Se agregó helper de prueba para abrir el panel lateral antes de usar `Reiniciar demo`, ya que la app lo colapsa automáticamente durante la partida.
- Se mantuvieron las pruebas en escritorio y móvil.

## Por qué se cambió
El log real de Windows mostró 4 pruebas pasadas y 4 fallidas. Las fallas no eran de carga de app, sino de selectores/expectativas de prueba:
- `#sets` mostraba `Jugada 1 · Serie · 30 pts`, pero el test esperaba `Grupo`.
- `#resetDemoBtn` existía, pero no era visible porque el panel lateral estaba colapsado.

## Cómo probar
Desde:
C:\Users\usuario\Desktop\Rummy_Git

Comando:
npm test

Resultado esperado:
Resultado: validación estática correcta.
8 passed

## Cómo revertir
Restaurar el archivo anterior:
tests/e2e/rummy-demo.spec.js


## Actualización UI v1.1.0 - 2026-07-04

### Archivos modificados
- `index.html`
- `manifest.webmanifest`
- `sw.js`
- `tools/validar-estatico.mjs`
- `tests/e2e/rummy-demo.spec.js`
- `README_INSTALACION.txt`
- `CHANGELOG.md`
- `GUIA_PRUEBA_FINAL.md`
- `PRUEBA_TECNICA_RESULTADO.md`

### Qué se cambió
- Se rediseñó la app como juego de fichas con mesa azul moderna.
- Se agregaron estilos visuales para fichas tipo Rummy/Rummikub, atril y mesa.
- Se simplificaron textos de botones para usuarios reales.
- Se agregó bloque de inicio rápido sin cambiar la lógica.
- Se actualizó el tema PWA y la versión de cache.
- Se ajustaron pruebas y validación estática a los nuevos textos.

### Por qué se cambió
- La app necesitaba verse como juego de fichas, no como pantalla técnica.
- El usuario real debe entender rápido cómo iniciar, jugar demo, crear sala y terminar turno.
- Se mantuvo la app gratuita, estática, PWA y sin nuevas dependencias.

### Cómo probar
Desde `C:\Users\usuario\Desktop\Rummy_Git`:

```powershell
npm test
```

Resultado esperado:

```text
Resultado: validación estática correcta.
8 passed
```

### Cómo revertir
Restaurar el backup previo o usar Git:

```powershell
git restore index.html manifest.webmanifest sw.js tools/validar-estatico.mjs tests/e2e/rummy-demo.spec.js README_INSTALACION.txt CHANGELOG.md GUIA_PRUEBA_FINAL.md PRUEBA_TECNICA_RESULTADO.md
```
