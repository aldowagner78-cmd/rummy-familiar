# Guía de publicación en GitHub Pages

## Objetivo

Publicar Rummy Familiar Online como web estática/PWA usando GitHub Pages.

## Requisitos

- Repositorio en GitHub.
- Archivos en la raíz del repositorio:
  - index.html
  - manifest.webmanifest
  - sw.js
  - icon-192.png
  - icon-512.png

## Publicar desde GitHub web

1. Entrar al repositorio.
2. Ir a Settings.
3. Ir a Pages.
4. En "Build and deployment", elegir:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / root
5. Guardar.
6. Esperar a que GitHub genere la URL.
7. Abrir la URL publicada.

Resultado esperado:
La app carga desde una URL similar a:
https://usuario.github.io/rummy-familiar/

## Publicar cambios desde Windows PowerShell

Desde:
C:\Users\usuario\Desktop\Rummy

Comandos:
git status
git add .
git commit -m "Finalizar documentacion y entrega inicial"
git push

Resultado esperado:
Los cambios suben al repositorio y GitHub Pages actualiza la web.

## Verificación final de publicación

Probar en:
- Chrome
- Edge
- Firefox
- Android Chrome

Checklist:
- Carga la pantalla principal.
- El manifest se detecta.
- La app permite instalarse como PWA en navegadores compatibles.
- Firebase conecta.
- Se puede crear sala.
- Otro dispositivo ve la sala.
- El link de invitación funciona.

## Nota sobre caché

Si una versión vieja queda guardada:
- Cambiar el valor de CACHE_NAME en sw.js.
- Hacer commit y push.
- Recargar la app con Ctrl+F5.
