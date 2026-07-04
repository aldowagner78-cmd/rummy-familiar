# Changelog

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
