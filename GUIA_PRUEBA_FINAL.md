# Guía de prueba final - UI profesional móvil

## 1. Prueba automatizada

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

## 2. Prueba visual local

Desde:

```powershell
C:\Users\usuario\Desktop\Rummy_Git
```

Ejecutar:

```powershell
npm run serve
```

Abrir:

```text
http://127.0.0.1:8000
```

## 3. Checklist móvil profesional

En Firefox/Chrome responsive o celular:

- El encabezado ocupa muy poco espacio.
- Los rivales aparecen arriba en una franja fina.
- La mesa ocupa la mayor parte de la pantalla.
- Las jugadas bajadas por todos los jugadores se ven en el centro.
- El pozo queda visible pero compacto.
- La barra de acciones no tapa la mesa.
- El atril queda abajo y no supera aproximadamente el 20%.
- Las 14 fichas iniciales entran en 2 hileras de 7.
- Se puede seleccionar fichas con el dedo.
- Se puede bajar una jugada.
- Se puede terminar turno.
- Se puede tomar ficha.
- Se puede reiniciar demo.

## 4. Actualizar GitHub Pages

Después de aprobar pruebas:

```powershell
git status
git add .
git commit -m "Aplicar UI profesional movil tipo Rummikub"
git push
```

Abrir:

```text
https://aldowagner78-cmd.github.io/rummy-familiar/?v=ui-pro-v12
```

## 5. Si Firefox muestra versión vieja

Abrir:

```text
about:serviceworkers
```

Buscar `aldowagner78-cmd.github.io` o `rummy-familiar` y tocar:

```text
Unregister
```

Luego abrir:

```text
https://aldowagner78-cmd.github.io/rummy-familiar/?v=ui-pro-v12
```
