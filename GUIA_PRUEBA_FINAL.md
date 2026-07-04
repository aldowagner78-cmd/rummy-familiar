# Guía de prueba final

## Objetivo

Validar que Rummy Familiar Online está listo para uso familiar.

## Prueba 1 - Carga básica

Desde:
C:\Users\usuario\Desktop\Rummy

Comando:
py -m http.server 8000

Abrir:
http://localhost:8000

Resultado esperado:
- Se ve "Rummy Familiar Online".
- No aparecen errores visibles.
- La interfaz se adapta al ancho de pantalla.

## Prueba 2 - Nombre de jugador

Pasos:
1. Escribir "Ana Demo".
2. Presionar "Guardar nombre".

Resultado esperado:
- La barra superior muestra el nombre.
- Al recargar, el nombre se mantiene.

## Prueba 3 - Firebase

Pasos:
1. Abrir "Ayuda / Firebase".
2. Pegar firebaseConfig.
3. Guardar y conectar.

Resultado esperado:
- Estado "Conectado online".
- Botones de salas habilitados.
- No aparece error de permisos.

## Prueba 4 - Sala demo

Pasos:
1. Crear sala "DEMO".
2. Abrir otra ventana privada.
3. Entrar como "Luis Demo".
4. Elegir la misma sala.

Resultado esperado:
- Ambos jugadores figuran en la sala.
- Ambos ven la misma mesa.

## Prueba 5 - Partida

Pasos:
1. Iniciar mano.
2. Robar carta.
3. Bajar combinación válida si hay cartas.
4. Descartar.
5. Verificar cambio de turno.

Resultado esperado:
- No permite jugar fuera de turno.
- No permite bajar combinación inválida.
- El descarte actualiza para todos.
- El turno pasa al siguiente jugador.

## Prueba 6 - Chat

Pasos:
1. Enviar "Hola demo".
2. Revisar en la otra ventana.

Resultado esperado:
- El mensaje aparece en ambas sesiones.

## Prueba 7 - Reinicio

Pasos:
1. Presionar "Reiniciar sala".
2. Confirmar si la app lo pide.

Resultado esperado:
- La sala queda limpia o lista para nueva mano.
- No quedan cartas mezcladas de una mano anterior.

## Prueba 8 - PWA/publicación

Pasos:
1. Publicar en GitHub Pages.
2. Abrir la URL desde Android.
3. Probar instalación si el navegador la ofrece.

Resultado esperado:
- La app carga desde HTTPS.
- El manifest está disponible.
- La app puede abrirse como PWA en navegadores compatibles.

## Criterios de aceptación

- La app inicia sin errores visibles.
- La pantalla principal carga.
- El modo demo con datos ficticios funciona.
- Dos jugadores pueden entrar a una sala.
- Una mano puede iniciarse.
- Turnos, robo, descarte y chat funcionan.
- Reinicio de sala funciona.
- Funciona en Chrome, Edge y Firefox.
- Funciona en Android con pantalla táctil.
- No hay datos reales mezclados en pruebas demo.
