# Guía de prueba final - Fix reinicio demo móvil

## Prueba automática

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

## Prueba visual móvil

1. Ejecutar:

```powershell
npm run serve
```

2. Abrir:

```text
http://127.0.0.1:8000
```

3. En modo móvil:
   - tocar `Jugar demo ahora`;
   - seleccionar las tres fichas 10;
   - tocar `Bajar fichas seleccionadas`;
   - verificar que la mesa queda visible;
   - tocar `Reiniciar demo`;
   - verificar que la mesa queda vacía y el atril vuelve a 14 fichas.

## Si se ve versión vieja en GitHub Pages

- `Ctrl + F5`
- o DevTools → Application → Storage → Clear site data.
