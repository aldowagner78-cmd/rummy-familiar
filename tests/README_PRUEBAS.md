# Pruebas automatizadas

## Objetivo

Validar que la app carga, que el modo demo local funciona sin Firebase y que el flujo principal de partida no se rompe antes de rediseñar la interfaz.

## Comandos

Desde la raíz del proyecto:

```powershell
npm install
npx playwright install chromium
npm test
```

## Qué cubren

- Carga de pantalla principal.
- Modo demo local sin Firebase.
- Creación de jugada válida de 30 puntos.
- Validación de mesa y cambio de turno.
- Avance automático del jugador demo.
- Reinicio del demo.
- Modal de ayuda.
- Cambio básico de idioma ES/EN.
- Manifest, service worker, íconos y documentación mediante validación estática.

## Reporte

Si falla una prueba Playwright, se genera:

```text
playwright-report/
test-results/
```

Estas carpetas no deben subirse a Git.
