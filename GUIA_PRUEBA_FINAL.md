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

# Guía de prueba final

## Objetivo
Verificar que la app sea jugable en móvil con mesa visible y atril compacto.

## Ruta
`C:\Users\usuario\Desktop\Rummy_Git`

## Prueba automatizada
```powershell
npm test
```

Resultado esperado:
```text
Resultado: validación estática correcta.
8 passed
```

## Prueba manual local
```powershell
npm run serve
```

Abrir:
`http://127.0.0.1:8000/?v=rebuild-pro-v16`

## Checklist manual
- La pantalla no muestra panel lateral gigante.
- La mesa ocupa la zona central.
- El atril ocupa la parte inferior y no tapa botones.
- Las fichas del atril se ven en dos hileras.
- El botón “Bajar fichas” se puede tocar en móvil.
- Se puede cargar demo.
- Se pueden seleccionar 10 rojo, 10 azul y 10 amarillo.
- Se puede bajar la jugada.
- Se ve la jugada en la mesa.
- Se puede terminar turno.
- Se puede reiniciar demo.
