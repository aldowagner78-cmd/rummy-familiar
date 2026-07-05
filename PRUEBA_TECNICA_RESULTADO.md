# Hotfix v17 - Demo y pruebas Playwright

Fecha: 2026-07-05

## Cambio aplicado
- Corregido error de inicialización JavaScript en el rebuild móvil v16.
- Se agregó referencia faltante a `poolDockTitle`.
- Se actualizó caché PWA a `rummy-familiar-professional-rebuild-v17-hotfix`.
- Motivo: Playwright hacía click en `Jugar demo ahora`, pero `roomInfo` seguía mostrando `Sin sala.` porque `render()` fallaba al acceder a un elemento no registrado.

## Cómo probar
Desde `C:\Users\usuario\Desktop\Rummy_Git`:
```powershell
npm test
```

Resultado esperado:
```text
Resultado: validación estática correcta.
8 passed
```

---

# Prueba técnica - resultado

## 2026-07-05

## Validaciones ejecutadas en entorno de generación
Comando:
```bash
node tools/validar-estatico.mjs
```

Resultado:
```text
Resultado: validación estática correcta.
```

## Alcance
- Sintaxis principal de `index.html`.
- Sintaxis de `sw.js`.
- Manifest PWA.
- IDs requeridos por pruebas.
- Textos principales.
- Documentación obligatoria.

## Nota honesta
En este entorno no pude ejecutar Playwright visual completo porque no hay navegador Playwright disponible. El parche fue diseñado para corregir el error reportado donde `#rackTiles` interceptaba `#newSetBtn`, separando físicamente barra de acciones y atril.
