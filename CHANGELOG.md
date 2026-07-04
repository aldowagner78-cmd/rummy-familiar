# Changelog

## [1.1.0-ui-fichas-azul] - 2026-07-04

### Agregado
- Rediseño visual gratuito y sin dependencias: mesa azul moderna, fichas más legibles y apariencia de juego de fichas.
- Bloque de inicio rápido para orientar al usuario no técnico.
- Botones principales más grandes y claros para demo, sala y turno.
- Tema PWA azul actualizado en `manifest.webmanifest` y cache nueva en `sw.js`.

### Modificado
- Textos de interfaz orientados a juego de fichas, no cartas.
- `Jugar demo ahora` reemplaza el texto técnico de demo local.
- La mesa, el atril y las fichas tienen mayor jerarquía visual.
- Se mantuvieron IDs, lógica del juego, Firebase y modo demo.

### Pruebas esperadas
- `npm test` debe seguir dando `8 passed`.
- Validar escritorio y móvil antes de publicar.


## [1.0.3-fix-e2e-windows] - 2026-07-04

### Corregido
- Ajustadas las pruebas E2E para validar el texto real de la app en español: la combinación 10-10-10 aparece como `Serie`, no como `Grupo`.
- Ajustada la prueba de reinicio de demo para abrir el panel lateral antes de presionar `Reiniciar demo`, porque la app lo colapsa al entrar en partida.
- Se mantuvo la validación del flujo funcional: cargar demo, crear jugada de 30 puntos, terminar turno, avanzar jugador demo, reiniciar demo, ayuda e idioma.

### Resultado esperado
- `npm test` debe ejecutar validación estática y 8 pruebas Playwright.
- Resultado esperado en Windows: `8 passed`.


## [1.0.2-pruebas] - 2026-07-04

### Agregado
- Configuración de Playwright para pruebas automatizadas.
- Pruebas E2E del modo demo local.
- Validación estática de `index.html`, `sw.js`, `manifest.webmanifest`, íconos, IDs principales y documentación.
- Servidor estático local para pruebas.
- Workflow de GitHub Actions para ejecutar pruebas al hacer push o pull request.

### Modificado
- `.gitignore`: se agregaron salidas de Playwright y cachés locales.
- Documentación actualizada con comandos de prueba.

### Resultado técnico
- Validación estática ejecutada correctamente en este entorno.
- Playwright detecta 8 pruebas E2E configuradas.
- La ejecución real del navegador Playwright no pudo completarse en este entorno porque el navegador de Playwright no pudo descargarse desde `cdn.playwright.dev` y el Chromium del sistema falla por configuración gráfica del contenedor. Esto no es un fallo confirmado de la app.

### Pendiente
- Ejecutar las pruebas E2E completas en Windows o en GitHub Actions con navegador Playwright instalado.

## [1.0.1-final] - 2026-07-04

### Agregado
- Modo demo local dentro de la app.
- Botón "Cargar demo local".
- Botón "Reiniciar demo".
- Botón "Avanzar jugador demo" para simular el turno del jugador ficticio.
- Datos demo ficticios identificados como DEMO.
- Carga de demo sin usar Firebase ni salas reales.
- Validación documental del flujo final.

### Modificado
- `index.html`: se agregó demo local, carga dinámica de Firebase y textos finales.
- `sw.js`: se actualizó cache PWA a versión final para evitar servir versiones viejas.
- `manifest.webmanifest`: se ajustó nombre, descripción e identificador PWA.
- Documentación actualizada con pasos reales de prueba.

### Corregido
- La app ya no depende de que los módulos remotos de Firebase carguen antes de mostrar/bindear la interfaz.
- La documentación ya no menciona chat, descarte ni pantalla de configuración Firebase inexistente.
- El modo demo ya no requiere abrir dos navegadores ni crear sala real.
- Se evita confundir datos reales con datos ficticios de prueba.

### Pendiente
- Probar una partida online completa con familiares reales.
- Confirmar reglas familiares finales si difieren de la variante implementada.
- Evaluar modularización futura si se quiere seguir creciendo.
- Endurecer reglas Firebase si se requiere control avanzado por anfitrión.

### Compatibilidad
- Web/PWA estática.
- Navegadores objetivo: Chrome, Edge y Firefox.
- Compatible con Windows, Linux y Android vía navegador.

## [1.0.0] - 2026-07-04

### Agregado
- Documentación de instalación, ejecución y uso.
- Guía de publicación en GitHub Pages.
- Guía de prueba final manual.
- Archivo de reglas sugeridas para Firebase Realtime Database.
- `.gitignore` básico.
- `.nojekyll` para GitHub Pages.

### Modificado
- Se mantiene la app como PWA HTML estática sin dependencias de build.

### Pendiente
- Probar partida completa con al menos dos usuarios reales.

## 2026-07-04 - Corrección pruebas Playwright en Windows

### Corregido
- Servidor estático de pruebas ahora sirve `index.html` correctamente al abrir `/` en Windows.
- `npm test` ya no depende de `&&`, evitando fallos en PowerShell antiguo.
- Prueba E2E inicial ya no falla por diferencia de nombre `Rummy/Rummikub`.

### Verificación
- `npm run test:static` debe pasar.
- `npm test` debe ejecutar validación estática y Playwright.

