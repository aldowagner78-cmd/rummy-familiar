# Rummy Familiar Online - Instalación y uso

## Descripción

Rummy Familiar Online es una PWA estática para jugar en familia desde navegador.
La app no requiere compilación para usarse. Para pruebas automatizadas se agregó Node.js + Playwright como dependencia de desarrollo.

La app incluye:
- juego online mediante Firebase Authentication anónimo y Firebase Realtime Database,
- modo demo local con datos ficticios,
- interfaz bilingüe Español/Inglés,
- diseño responsive para PC, tablet y Android,
- manifest PWA y service worker.

## Requisitos

- Navegador actualizado: Chrome, Edge o Firefox.
- Windows con Python instalado para prueba local rápida.
- Git solo si vas a subir cambios a GitHub.
- Firebase ya configurado si se quiere jugar online.

## Carpeta recomendada en tu PC

Windows:
C:\Users\usuario\Desktop\Rummy_Git

Linux:
~/Escritorio/Rummy_Git

## Archivos principales

- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png
- firebase-rules-rummy-familiar.json
- README_INSTALACION.txt
- CHANGELOG.md
- CAMBIOS_REALIZADOS.md
- GUIA_PRUEBA_FINAL.md
- GUIA_PUBLICACION_GITHUB_PAGES.md
- LEEME_PRIMERO.txt

## Instalación local

No hay instalación de dependencias.

## Ejecutar en Windows PowerShell

Desde:
C:\Users\usuario\Desktop\Rummy_Git

Comando:
py -m http.server 8000

Abrir:
http://localhost:8000

Resultado esperado:
- carga la pantalla principal,
- se ve "Rummy Familiar",
- aparecen sala/configuración, mesa y atril,
- aparece el botón "Cargar demo local".

Para cerrar el servidor:
Ctrl + C

## Ejecutar en Linux

Desde:
~/Escritorio/Rummy_Git

Comando:
python3 -m http.server 8000

Abrir:
http://localhost:8000

Resultado esperado:
- carga la pantalla principal,
- se ve "Rummy Familiar",
- el modo demo local está disponible.

## Modo demo local

El modo demo local permite probar sin Firebase y sin datos reales.

Pasos:
1. Abrir la app.
2. Presionar "Cargar demo local".
3. La app crea una sala "DEMO LOCAL".
4. Carga dos jugadores ficticios: el usuario actual y "Demo Ana".
5. Carga un atril con fichas preparadas.
6. Seleccionar las fichas 10 rojo, 10 azul y 10 amarillo.
7. Presionar "Crear nueva jugada con selección".
8. Presionar "Validar mesa y terminar turno".
9. Cuando sea turno de Demo Ana, presionar "Avanzar jugador demo".
10. Para volver a empezar, presionar "Reiniciar demo".

Resultado esperado:
- no se toca ninguna sala real,
- no se usa Firebase para el demo,
- los datos están identificados como DEMO,
- se puede probar selección, jugada válida, apertura de 30 puntos, turnos y reinicio.

## Juego online con Firebase

La app ya trae un firebaseConfig en index.html para el proyecto usado por esta versión.

Si querés usar tu propio Firebase:
1. Crear proyecto en Firebase.
2. Activar Authentication con inicio anónimo.
3. Crear Realtime Database.
4. Publicar las reglas desde firebase-rules-rummy-familiar.json.
5. Editar el objeto firebaseConfig dentro de index.html.
6. Guardar cambios y probar localmente.

Importante:
- firebaseConfig es público por diseño en apps web.
- La seguridad real depende de Firebase Security Rules.
- No usar esta app para datos sensibles, apuestas, premios ni torneos con conflicto.

## Prueba manual mínima

Ver GUIA_PRUEBA_FINAL.md.

Checklist:
- La app inicia sin errores visibles.
- El modo demo local carga.
- Se puede crear una jugada válida en demo.
- Se puede terminar turno en demo.
- Se puede avanzar el jugador demo.
- Se puede reiniciar demo.
- En modo online, dos navegadores pueden entrar a la misma sala.
- En modo online, se puede iniciar una mano con al menos 2 jugadores.
- La PWA actualiza cache al recargar.

## Empaquetar ZIP limpio en Windows

Desde:
C:\Users\usuario\Desktop

Comando:
Compress-Archive -Path .\Rummy_Git\* -DestinationPath .\Rummy_Git_FINAL.zip -Force

Resultado esperado:
Se crea:
C:\Users\usuario\Desktop\Rummy_Git_FINAL.zip

## Empaquetar ZIP limpio en Linux

Desde:
~/Escritorio

Comando:
zip -r Rummy_Git_FINAL.zip Rummy_Git \
  -x "*/.git/*" "*/node_modules/*" "*/dist/*" "*/build/*" "*/.venv/*" "*/venv/*" "*/__pycache__/*"

Resultado esperado:
Se crea:
~/Escritorio/Rummy_Git_FINAL.zip



## Pruebas automatizadas

Se agregó Playwright para validar la app antes de rediseñar la interfaz.

Desde:
C:\Users\usuario\Desktop\Rummy_Git

Instalar dependencias de prueba:
npm install

Instalar navegador de Playwright:
npx playwright install chromium

Ejecutar validación estática:
npm run test:static

Ejecutar pruebas Playwright:
npm run test:e2e

Ejecutar todo:
npm test

Resultado esperado:
- La validación estática confirma index.html, sw.js, manifest, íconos, IDs principales, modo demo y documentación.
- Playwright abre la app, bloquea Firebase para simular modo sin conexión, carga demo local, crea una jugada válida, termina turno, avanza jugador demo, reinicia demo y prueba ayuda/idioma.

Reportes si falla:
- playwright-report/
- test-results/

No subir:
- node_modules/
- playwright-report/
- test-results/

## Problemas frecuentes

### Abro el archivo con doble clic y no funciona bien

No abrir como archivo local. Usar servidor local:

Windows:
py -m http.server 8000

Linux:
python3 -m http.server 8000

### Veo una versión vieja

Puede ser cache PWA. Probar:
1. Ctrl + F5.
2. Cerrar y abrir navegador.
3. En DevTools/Application, borrar Service Worker y Cache Storage si hace falta.

### Firebase no conecta

Revisar:
- internet,
- Authentication anónimo activado,
- Realtime Database activada,
- reglas publicadas,
- dominio autorizado en Firebase Authentication si está publicado.

### No puedo iniciar mano online

Se necesitan al menos 2 jugadores online en la misma sala.

### El modo demo no aparece

Actualizar con Ctrl + F5. Verificar que index.html y sw.js sean los de este parche.

## Corrección si Playwright no encuentra #appTitle

Si las pruebas fallan con:

```text
Error: element(s) not found
Locator: locator('#appTitle')
```

aplicar el parche de pruebas corregido y ejecutar:

```powershell
cd C:\Users\usuario\Desktop\Rummy_Git
npm test
```

Causa corregida:
- En Windows el servidor de pruebas resolvía `/` como carpeta en vez de `index.html`.
- PowerShell antiguo no aceptaba `&&` en el script `npm test`.

Resultado esperado:

```text
Resultado: validación estática correcta.
8 passed
```



---

## Nota de pruebas automatizadas - corrección Windows 2026-07-04

Si `npm test` muestra que la app carga pero fallan pruebas por textos como `Grupo`/`Serie` o por botón `Reiniciar demo` no visible, aplicar el parche `rummy-familiar-parche-fix-e2e-final.zip`.

Luego ejecutar desde:
C:\Users\usuario\Desktop\Rummy_Git

Comando:
npm test

Resultado esperado:
Resultado: validación estática correcta.
8 passed
