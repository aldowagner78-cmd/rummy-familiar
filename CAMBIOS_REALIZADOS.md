# Cambios realizados

## Fecha
2026-07-05

## Objetivo
Corregir profesionalmente la experiencia móvil para que sea jugable como app de fichas: mesa protagonista, atril compacto, controles mínimos y pozo visible sin tapar las jugadas.

## Archivos modificados
- `index.html`
- `sw.js`
- `CHANGELOG.md`
- `CAMBIOS_REALIZADOS.md`
- `GUIA_PRUEBA_FINAL.md`
- `PRUEBA_TECNICA_RESULTADO.md`

## Qué se cambió
- Se agregó el bloque CSS `UI PRO v12`.
- Se redujo el header móvil.
- Se ocultó completamente el panel lateral durante una partida.
- Se definió layout móvil con:
  - rivales compactos arriba,
  - mesa central grande,
  - barra de acciones baja y deslizable,
  - atril inferior de aproximadamente 19-20%.
- Se hizo que el pozo sea un dock pequeño sobre la mesa.
- Se ajustaron las fichas:
  - atril en 2 hileras de 7,
  - fichas más pequeñas,
  - jugadas de mesa más compactas.
- Se actualizaron textos/documentación.
- Se actualizó la caché PWA en `sw.js`.

## Por qué se cambió
La versión anterior seguía sin ser jugable en móvil: el atril y los controles ocupaban demasiado espacio y la mesa quedaba sin protagonismo. Para jugar Rummy/Rummikub de fichas, el usuario debe ver siempre las jugadas bajadas en la mesa.

## Cómo probar

Desde:

```powershell
C:\Users\usuario\Desktop\Rummy_Git
```

Ejecutar:

```powershell
npm test
```

Resultado esperado:

```text
Resultado: validación estática correcta.
8 passed
```

## Prueba visual recomendada

```powershell
npm run serve
```

Abrir:

```text
http://127.0.0.1:8000
```

Activar demo y verificar:
- mesa visible como zona principal,
- pozo compacto,
- rivales arriba,
- atril abajo en 2 filas,
- controles en barra compacta,
- jugadas bajadas visibles.

## Cómo revertir
Restaurar la copia de seguridad previa o ejecutar:

```powershell
git restore index.html sw.js CHANGELOG.md CAMBIOS_REALIZADOS.md GUIA_PRUEBA_FINAL.md PRUEBA_TECNICA_RESULTADO.md
```
