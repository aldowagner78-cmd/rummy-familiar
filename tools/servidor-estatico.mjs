import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 8000);
const host = process.env.HOST || '127.0.0.1';

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.ico': 'image/x-icon',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  const target = path.join(root, normalized === '/' ? 'index.html' : normalized);
  if (!target.startsWith(root)) return null;
  return target;
}

const server = http.createServer((req, res) => {
  const target = safePath(req.url || '/');
  if (!target) {
    res.writeHead(403);
    res.end('Acceso denegado');
    return;
  }

  fs.readFile(target, (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('Archivo no encontrado');
      return;
    }

    const ext = path.extname(target).toLowerCase();
    res.writeHead(200, {
      'content-type': types[ext] || 'application/octet-stream',
      'cache-control': 'no-store'
    });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Servidor de pruebas: http://${host}:${port}`);
});
