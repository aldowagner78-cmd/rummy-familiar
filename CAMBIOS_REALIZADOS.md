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

# Cambios realizados

## 2026-07-05 - Rebuild profesional móvil

## Archivos modificados
- `index.html`
- `sw.js`
- `CAMBIOS_REALIZADOS.md`
- `CHANGELOG.md`
- `GUIA_PRUEBA_FINAL.md`
- `PRUEBA_TECNICA_RESULTADO.md`
- `README_INSTALACION.txt`

## Qué se cambió
- Se reemplazó la estructura visual anterior por una interfaz móvil de juego real.
- Se eliminó el flujo de panel lateral ocupando pantalla.
- Se creó un layout fijo por zonas:
  - header compacto,
  - rivales compactos,
  - mesa central,
  - barra de acciones separada,
  - atril inferior compacto.
- El atril ya no se superpone con los botones.
- Las 14 fichas entran en dos hileras.
- La mesa queda visible para ver jugadas propias y de rivales.
- Se mantiene modo demo local con datos ficticios.
- Se conserva compatibilidad PWA y service worker.

## Por qué se cambió
La versión anterior no era jugable en móvil: el atril y paneles ocupaban demasiado espacio e interceptaban acciones táctiles.

## Cómo probar
Ruta:
`C:\Users\usuario\Desktop\Rummy_Git`

Comando:
```powershell
npm test
npm run serve
```

Abrir:
`http://127.0.0.1:8000/?v=rebuild-pro-v16`

## Cómo revertir
Restaurar el backup previo o usar:
```powershell
git restore .
```
si todavía no se hizo commit.
