# Cambios realizados

## Fecha

2026-07-04

## Versión

1.2.0-mesa-real-movil

## Archivos modificados

- index.html
- manifest.webmanifest
- sw.js
- README_INSTALACION.txt
- CHANGELOG.md
- CAMBIOS_REALIZADOS.md
- GUIA_PRUEBA_FINAL.md
- PRUEBA_TECNICA_RESULTADO.md
- tests/e2e/rummy-demo.spec.js
- tools/validar-estatico.mjs

## Archivos agregados

- LEEME_MESA_REAL_MOVIL.txt

## Qué se cambió

Se rediseñó la experiencia para parecerse más a una partida real de Rummy/Rummikub de fichas, priorizando móvil.

Cambios principales:
- Se agregó una franja superior de rivales compactos.
- Cada rival muestra nombre, cantidad de fichas y estado de turno.
- Se agregó una mesa central con todas las jugadas visibles para todos.
- Se agregó un pozo central visual con ficha boca abajo.
- Se mejoró el atril propio inferior para móvil con scroll horizontal.
- Se mantuvieron visibles las jugadas bajadas para que el jugador pueda decidir qué jugar.
- Se actualizó el service worker con nueva cache para renovar GitHub Pages/PWA.
- Se actualizaron pruebas y validación estática para cubrir la nueva UI.

## Por qué se cambió

La interfaz anterior ya funcionaba, pero seguía siendo demasiado parecida a una app técnica.
Para uso real familiar, especialmente en celulares, era necesario:
- mostrar la mesa como espacio central de juego,
- mantener visibles las jugadas bajadas por todos,
- separar claramente rivales, pozo y atril propio,
- reducir la carga visual de paneles,
- hacer que el usuario entienda la partida sin instrucciones externas.

## Cómo probar

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

Prueba manual:
```powershell
npm run serve
```

Abrir:
```text
http://127.0.0.1:8000
```

Validar:
- se ve la mesa azul real,
- se ven rivales arriba,
- se ve el pozo de fichas,
- se ve el atril abajo,
- las jugadas bajadas aparecen en el centro,
- el modo demo sigue funcionando,
- la app entra correctamente en móvil.

## Cómo revertir

Usar Git:
```powershell
git restore .
```

O volver al backup local previo al parche.
