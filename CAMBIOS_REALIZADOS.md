# Cambios realizados

## Fecha

2026-07-04

## Archivos modificados

- Ninguno.

## Archivos agregados

- README_INSTALACION.txt
- CHANGELOG.md
- CAMBIOS_REALIZADOS.md
- GUIA_PUBLICACION_GITHUB_PAGES.md
- GUIA_PRUEBA_FINAL.md
- firebase-rules-rummy-familiar.json
- .gitignore
- .nojekyll

## Qué se cambió

Se agregó documentación y archivos de soporte para cerrar una primera entrega usable de la PWA Rummy Familiar Online.

## Por qué se cambió

La app ya existe como PWA estática, pero para finalizar una entrega faltaban instrucciones claras de instalación, ejecución, pruebas, publicación, reglas de Firebase y empaquetado.

## Cómo probar

Desde Windows PowerShell:

Ruta:
C:\Users\usuario\Desktop\Rummy

Comando:
py -m http.server 8000

Abrir:
http://localhost:8000

Resultado esperado:
- La pantalla principal carga.
- Se puede guardar nombre.
- Se puede configurar Firebase.
- Se puede crear o entrar a una sala.
- Se puede probar una partida demo con dos sesiones.

## Cómo revertir

Eliminar los archivos agregados:

Windows PowerShell, desde:
C:\Users\usuario\Desktop\Rummy

Comando:
Remove-Item .\README_INSTALACION.txt, .\CHANGELOG.md, .\CAMBIOS_REALIZADOS.md, .\GUIA_PUBLICACION_GITHUB_PAGES.md, .\GUIA_PRUEBA_FINAL.md, .\firebase-rules-rummy-familiar.json, .\.gitignore, .\.nojekyll -Force

Resultado esperado:
El proyecto vuelve al estado anterior a este parche documental.
