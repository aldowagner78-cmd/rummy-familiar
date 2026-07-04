# Rummy Familiar Online - Instalación y uso

## Descripción

Rummy Familiar Online es una PWA estática para jugar Rummy en familia desde navegador.
Funciona con un archivo index.html, manifest.webmanifest, sw.js e íconos.
Para jugar online entre varias casas usa Firebase Authentication anónimo y Firebase Realtime Database.

## Requisitos

- Navegador actualizado: Chrome, Edge o Firefox.
- Python instalado solo para probar localmente con servidor simple.
- Una cuenta de Google/Firebase si se quiere usar una base propia.
- Git opcional para subir cambios a GitHub.

No requiere npm, node_modules ni compilación.

## Estructura esperada

Ruta del proyecto en Windows:
C:\Users\usuario\Desktop\Rummy

Archivos principales esperados:
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png

Archivos agregados por este parche:
- README_INSTALACION.txt
- CHANGELOG.md
- CAMBIOS_REALIZADOS.md
- GUIA_PUBLICACION_GITHUB_PAGES.md
- GUIA_PRUEBA_FINAL.md
- firebase-rules-rummy-familiar.json
- .gitignore
- .nojekyll

## Instalación local

No hay instalación de dependencias.

## Ejecución local - Windows PowerShell

Desde:
C:\Users\usuario\Desktop\Rummy

Comando:
py -m http.server 8000

Luego abrir:
http://localhost:8000

Resultado esperado:
- Carga la pantalla principal.
- Se ve el título "Rummy Familiar Online".
- Aparecen la entrada de nombre, salas, mesa, mano, reglas y chat.
- No debe abrirse como archivo local si se quiere probar PWA o Service Worker.

## Ejecución local - Linux

Desde:
~/Escritorio/Rummy

Comando:
python3 -m http.server 8000

Luego abrir:
http://localhost:8000

Resultado esperado:
- Carga la pantalla principal.
- Se ve el título "Rummy Familiar Online".
- La app puede registrar el service worker si se sirve por HTTP local.

## Configurar Firebase

1. Crear un proyecto en Firebase.
2. Agregar una Web App.
3. Activar Authentication con inicio anónimo.
4. Activar Realtime Database.
5. Pegar reglas desde:
   firebase-rules-rummy-familiar.json
6. Copiar el objeto firebaseConfig.
7. Abrir la app.
8. Entrar a "Ayuda / Firebase".
9. Pegar la configuración y guardar.

Importante:
La configuración pública de Firebase no debe tratarse como contraseña, pero las reglas de la base sí deben estar configuradas.
No usar esta app para apuestas, premios, torneos con conflicto ni información sensible.

## Modo demo

Modo demo operativo:
- Crear una sala llamada DEMO, PRUEBA o FAMILIA.
- Abrir la app en dos navegadores o dos pestañas privadas.
- Usar nombres ficticios: Ana Demo, Luis Demo, Marta Demo.
- Iniciar mano.
- Robar, bajar combinación válida, descartar y usar chat.
- Reiniciar sala al terminar.

Los datos demo deben ser ficticios. No usar nombres reales si la base es pública o compartida.

## Pruebas manuales

Ver GUIA_PRUEBA_FINAL.md.

Checklist mínimo:
- La app inicia sin errores visibles.
- Se puede guardar nombre.
- Se conecta a Firebase.
- Se puede crear sala.
- Otra sesión ve la sala en el desplegable.
- Se puede entrar a la misma sala.
- Se puede iniciar mano.
- Los turnos avanzan.
- Se puede robar, bajar y descartar.
- El chat funciona.
- Reiniciar sala funciona.
- El link de invitación se copia.
- La app carga en Chrome/Edge/Firefox.
- En Android se ve usable y responsive.

## Empaquetar ZIP de entrega - Windows PowerShell

Desde:
C:\Users\usuario\Desktop

Comando:
tar -a -cf Rummy_ENTREGA.zip --exclude=Rummy/.git --exclude=Rummy/node_modules --exclude=Rummy/dist --exclude=Rummy/build -C C:\Users\usuario\Desktop Rummy

Resultado esperado:
Se crea:
C:\Users\usuario\Desktop\Rummy_ENTREGA.zip

## Empaquetar ZIP de entrega - Linux

Desde:
~/Escritorio

Comando:
zip -r Rummy_ENTREGA.zip Rummy -x "*/.git/*" "*/node_modules/*" "*/dist/*" "*/build/*" "*/.venv/*" "*/venv/*" "*/__pycache__/*"

Resultado esperado:
Se crea:
~/Escritorio/Rummy_ENTREGA.zip

## Publicación

Ver GUIA_PUBLICACION_GITHUB_PAGES.md.

## Problemas frecuentes

### La app queda en "Sin conectar"

Causa probable:
Firebase no está configurado, hay reglas incorrectas o Realtime Database no está activado.

Qué hacer:
- Revisar que Authentication anónimo esté habilitado.
- Revisar que Realtime Database exista.
- Revisar que las reglas permitan lectura/escritura a usuarios autenticados.

### El service worker no funciona

Causa probable:
La app fue abierta como archivo local.

Qué hacer:
Ejecutar servidor local con:
py -m http.server 8000

### Otra persona no ve la sala

Causa probable:
No están usando el mismo Firebase o la misma URL/configuración.

Qué hacer:
Copiar el link de invitación desde la sala o pegar la misma configuración de Firebase.

### Los cambios no aparecen al actualizar

Causa probable:
Cache del service worker.

Qué hacer:
- Cerrar pestañas.
- Abrir DevTools > Application > Service Workers > Unregister.
- Recargar con Ctrl+F5.
- Si se editó sw.js, cambiar el nombre de CACHE_NAME.
