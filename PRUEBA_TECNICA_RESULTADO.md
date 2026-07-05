# Resultado técnico

## Fecha
2026-07-05

## Validación realizada

Se validó que el cambio mantiene estructura de app estática y PWA.

Comandos ejecutados en el entorno de preparación:

```bash
node --check tools/validar-estatico.mjs
npm run test:static
```

## Resultado

```text
Resultado: validación estática correcta.
```

## Archivos verificados

- `index.html`
- `sw.js`
- `manifest.webmanifest`
- documentación obligatoria
- IDs principales de UI
- bloques funcionales principales
- cache PWA versionada

## Alcance de la validación

Se validó sintaxis y estructura. La prueba Playwright completa debe ejecutarse en Windows con:

```powershell
npm test
```

## Cambio principal

Se agregó `UI PRO v12`, pensado para móvil:

- header mínimo,
- rivales compactos,
- mesa protagonista,
- pozo compacto sobre la mesa,
- barra de acciones baja,
- atril inferior en 2 hileras de 7 fichas.
