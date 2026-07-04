# Prueba técnica resultado

## Fecha

2026-07-04

## Objetivo

Verificar el parche `1.2.0-mesa-real-movil`, que transforma la interfaz en una mesa real de fichas optimizada para móviles.

## Cambios verificados

- `index.html`: agrega rivales arriba, mesa central, pozo de fichas y atril inferior móvil.
- `sw.js`: actualiza cache PWA a `rummy-familiar-mesa-real-v8-20260704`.
- `manifest.webmanifest`: actualiza descripción de la PWA.
- `tests/e2e/rummy-demo.spec.js`: agrega validaciones de rivales y pozo.
- `tools/validar-estatico.mjs`: exige los nuevos IDs y textos de interfaz.

## Validación ejecutada en este entorno

Comando:
```bash
node tools/validar-estatico.mjs
```

Resultado:
```text
Resultado: validación estática correcta.
```

## Prueba E2E esperada en Windows

Desde:
```powershell
C:\Users\usuario\Desktop\Rummy_Git
```

Comando:
```powershell
npm test
```

Resultado esperado:
```text
Resultado: validación estática correcta.
8 passed
```

## Nota

El parche no agrega dependencias nuevas y no modifica la lógica central de juego.
La ficha boca abajo del pozo es visual y mantiene la regla actual: tomar 1 ficha y pasar, sin descarte.

---


## Fecha

2026-07-04

## Objetivo

Agregar y verificar una primera base de pruebas automatizadas antes del rediseño visual.

## Archivos verificados

- index.html
- sw.js
- manifest.webmanifest
- icon-192.png
- icon-512.png
- README_INSTALACION.txt
- CHANGELOG.md
- CAMBIOS_REALIZADOS.md
- GUIA_PRUEBA_FINAL.md

## Archivos de prueba agregados

- package.json
- package-lock.json
- playwright.config.js
- tools/servidor-estatico.mjs
- tools/validar-estatico.mjs
- tests/README_PRUEBAS.md
- tests/e2e/rummy-demo.spec.js
- .github/workflows/playwright.yml

## Verificaciones ejecutadas en este entorno

### Validación estática

Comando ejecutado:
```bash
node tools/validar-estatico.mjs
```

Resultado:
```text
Resultado: validación estática correcta.
```

Qué verificó:
- existe `index.html`,
- existe `sw.js`,
- existe `manifest.webmanifest`,
- el JavaScript principal parsea sin errores,
- el service worker parsea sin errores,
- el manifest es JSON válido,
- están presentes IDs principales de UI,
- están presentes textos de demo y partida,
- están presentes funciones principales de demo y validación,
- la cache PWA está versionada,
- los íconos PWA existen,
- la documentación de entrega existe.

### Chequeo de sintaxis de archivos nuevos

Comandos ejecutados:
```bash
node --check tools/servidor-estatico.mjs
node --check tools/validar-estatico.mjs
node --check playwright.config.js
node --check tests/e2e/rummy-demo.spec.js
```

Resultado:
```text
Todos finalizaron con código 0.
```

### Descubrimiento de pruebas Playwright

Comando ejecutado:
```bash
npx playwright test --list
```

Resultado:
```text
8 tests in 1 file.
```

Pruebas detectadas:
- carga la app y permite iniciar demo local sin Firebase,
- crea una jugada válida de 30 puntos y termina turno en modo demo,
- reinicia el demo y restaura los datos ficticios,
- ayuda y cambio de idioma no rompen la pantalla principal,
- las mismas pruebas en perfil móvil Chromium.

## Límite real de esta verificación

No pude completar la ejecución visual del navegador Playwright en este contenedor porque:

1. `npx playwright install chromium` no pudo descargar el navegador desde `cdn.playwright.dev` por error DNS `EAI_AGAIN`.
2. El Chromium del sistema disponible en el contenedor falla al iniciar por configuración gráfica/GPU del entorno.

Esto significa:
- las pruebas quedaron creadas,
- Playwright las reconoce,
- la validación estática pasó,
- pero la ejecución completa de navegador debe correr en Windows o en GitHub Actions.

No voy a afirmar que las pruebas E2E pasaron si no pudieron ejecutarse en navegador real dentro de este entorno.

## Próxima verificación recomendada

Al subir este parche a GitHub, el workflow `.github/workflows/playwright.yml` ejecutará automáticamente:

```bash
npm install
npx playwright install --with-deps chromium
npm test
```

Si GitHub Actions pasa, recién ahí conviene avanzar al rediseño visual.

## Corrección de pruebas automatizadas

### Resultado del diagnóstico
- La validación estática sí pasaba.
- Las 8 pruebas E2E fallaban porque Playwright abría `/`, pero el servidor estático en Windows no devolvía `index.html`.
- Al no cargar la app, el selector `#appTitle` no existía en pantalla.

### Corrección aplicada
- `tools/servidor-estatico.mjs` ahora resuelve `/` explícitamente como `index.html`.
- `package.json` ahora usa `tools/ejecutar-pruebas.mjs` para evitar incompatibilidad con `&&`.
- `tests/e2e/rummy-demo.spec.js` espera `domcontentloaded` y valida título de forma compatible.

### Comando de verificación
```powershell
cd C:\Users\usuario\Desktop\Rummy_Git
npm test
```

### Resultado esperado
```text
Resultado: validación estática correcta.
8 passed
```



---

## Corrección posterior de E2E en Windows - 2026-07-04

### Log analizado

Después de corregir la carga inicial, Windows ejecutó Playwright y obtuvo:

```text
4 passed
4 failed
```

Las fallas fueron:
- expectativa incorrecta: el test esperaba `Grupo`, pero la UI mostraba `Serie`;
- botón `Reiniciar demo` no visible porque el panel lateral se colapsa cuando la partida está activa.

### Corrección aplicada

Archivo:
```text
tests/e2e/rummy-demo.spec.js
```

Cambios:
- se acepta `Serie|Group` para la jugada demo;
- se agregó función `abrirPanelSala(page)`;
- antes de reiniciar demo, la prueba abre el panel lateral;
- se reutilizó helper `crearJugadaDemo30(page)` para evitar duplicación.

### Resultado esperado al ejecutar en Windows

```text
npm test
```

Debe finalizar con:

```text
Resultado: validación estática correcta.
8 passed
```

### Nota técnica

No se cambió la lógica del juego. Se corrigieron pruebas automatizadas para que coincidan con el comportamiento real de la interfaz.


## Actualización UI v1.1.0 - 2026-07-04

### Objetivo
Validar que el rediseño visual mantiene la estructura testeable de la app.

### Cambios cubiertos
- Mesa azul moderna.
- Apariencia de juego de fichas.
- Botones principales simplificados.
- Manifest y service worker actualizados.
- Validación estática actualizada para los nuevos textos.

### Comandos esperados en Windows
Desde `C:\Users\usuario\Desktop\Rummy_Git`:

```powershell
npm test
```

Resultado esperado:

```text
Resultado: validación estática correcta.
8 passed
```

### Nota
El rediseño no agrega dependencias y no cambia las reglas del juego ni Firebase.
