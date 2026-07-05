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

# Changelog

## 2026-07-05 - Rebuild profesional móvil v16

### Agregado
- Interfaz móvil reconstruida desde cero.
- Mesa central como zona principal de juego.
- Barra de acciones separada del atril.
- Atril inferior compacto en dos hileras.
- Pozo compacto y siempre visible.
- Modo demo local funcional.

### Modificado
- `index.html` fue reorganizado para priorizar usabilidad móvil real.
- `sw.js` actualiza caché a `rummy-familiar-professional-rebuild-v16`.

### Corregido
- El atril ya no tapa la mesa ni los botones.
- `#rackTiles` ya no intercepta clicks sobre `#newSetBtn`.
- Los controles principales quedan siempre disponibles.

### Pendiente
- Reintegrar/fortalecer modo online avanzado si se desea mantener salas reales con Firebase completas.
- Ajustar estética fina luego de validar jugabilidad móvil.

### Compatibilidad
- PWA estática.
- Firefox, Chrome y Edge.
- Diseño mobile-first.
