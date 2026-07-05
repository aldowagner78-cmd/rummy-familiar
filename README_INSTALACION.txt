# Instalación y uso

## Requisitos
- Windows con Node.js instalado.
- Navegador Firefox, Chrome o Edge.

## Ruta del proyecto
C:\Users\usuario\Desktop\Rummy_Git

## Instalar dependencias
Desde PowerShell:
```powershell
cd C:\Users\usuario\Desktop\Rummy_Git
npm install
```

## Ejecutar local
```powershell
npm run serve
```

Abrir:
http://127.0.0.1:8000/?v=rebuild-pro-v16

## Probar
```powershell
npm test
```

Resultado esperado:
```text
Resultado: validación estática correcta.
8 passed
```

## Uso básico
1. Abrir la app.
2. Tocar “Jugar demo ahora”.
3. Seleccionar fichas del atril.
4. Tocar “Bajar fichas”.
5. Ver la jugada en la mesa.
6. Terminar turno.

## Modo demo
El modo demo usa datos ficticios. No usa datos reales.

## Publicar cambios
```powershell
git status
git add .
git commit -m "Reconstruir interfaz movil profesional jugable"
git push
```

Abrir:
https://aldowagner78-cmd.github.io/rummy-familiar/?v=rebuild-pro-v16

## Problemas frecuentes
Si Firefox muestra versión vieja:
1. Abrir `about:serviceworkers`.
2. Buscar `aldowagner78-cmd.github.io`.
3. Tocar `Unregister`.
4. Abrir de nuevo la URL con `?v=rebuild-pro-v16`.
