import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();

function fail(message) {
  console.error(`❌ ${message}`);
  process.exitCode = 1;
}

function ok(message) {
  console.log(`✅ ${message}`);
}

function mustExist(relativePath) {
  const file = path.join(root, relativePath);
  if (!fs.existsSync(file)) {
    fail(`Falta ${relativePath}`);
    return '';
  }
  ok(`Existe ${relativePath}`);
  return fs.readFileSync(file, 'utf8');
}

const index = mustExist('index.html');
const sw = mustExist('sw.js');
const manifestRaw = mustExist('manifest.webmanifest');

try {
  const scriptMatch = index.match(/<script type="module">([\s\S]*?)<\/script>/);
  if (!scriptMatch) {
    fail('index.html no contiene script type="module"');
  } else {
    new vm.Script(scriptMatch[1], { filename: 'index.inline.mjs' });
    ok('JavaScript principal parsea sin errores');
  }
} catch (error) {
  fail(`Error de sintaxis en JavaScript principal: ${error.message}`);
}

try {
  new vm.Script(sw, { filename: 'sw.js' });
  ok('Service worker parsea sin errores');
} catch (error) {
  fail(`Error de sintaxis en sw.js: ${error.message}`);
}

let manifest;
try {
  manifest = JSON.parse(manifestRaw);
  ok('manifest.webmanifest es JSON válido');
} catch (error) {
  fail(`manifest.webmanifest no es JSON válido: ${error.message}`);
}

const requiredIds = [
  'appTitle',
  'langSelect',
  'netStatus',
  'nameInput',
  'saveNameBtn',
  'createRoomBtn',
  'roomSelect',
  'joinRoomBtn',
  'loadDemoBtn',
  'resetDemoBtn',
  'advanceDemoBtn',
  'gameNotice',
  'turnInfo',
  'poolInfo',
  'openedInfo',
  'newSetBtn',
  'addToSetBtn',
  'endTurnBtn',
  'rackTiles',
  'sets'
];

for (const id of requiredIds) {
  if (!index.includes(`id="${id}"`)) {
    fail(`Falta el elemento #${id}`);
  }
}
ok('IDs principales de UI presentes');

const requiredTexts = [
  'Jugar demo ahora',
  'Reiniciar demo',
  'Avanzar jugador demo',
  'Bajar fichas seleccionadas',
  'Terminar turno'
];

for (const text of requiredTexts) {
  if (!index.includes(text)) {
    fail(`Falta texto de interfaz: ${text}`);
  }
}
ok('Textos principales de demo y partida presentes');

const requiredCode = [
  'const VERSION=5',
  'const DEMO_ROOM_ID',
  'function loadDemoRoom',
  'function resetLocalDemo',
  'function advanceDemoTurn',
  'function createDemoGame',
  'function validateSet',
  'function validateBoard',
  'navigator.serviceWorker.register'
];

for (const snippet of requiredCode) {
  if (!index.includes(snippet)) {
    fail(`Falta bloque de código esperado: ${snippet}`);
  }
}
ok('Bloques funcionales principales presentes');

if (!/const\s+CACHE\s*=\s*['\"]rummy-familiar-[^'\"]+['\"]/.test(sw)) {
  fail('El service worker no declara una cache versionada de Rummy Familiar');
} else {
  ok('Cache PWA versionada');
}

if (manifest?.display !== 'standalone') fail('El manifest no usa display standalone');
if (!manifest?.icons?.some(icon => icon.sizes === '192x192')) fail('Falta icono 192x192 en manifest');
if (!manifest?.icons?.some(icon => icon.sizes === '512x512')) fail('Falta icono 512x512 en manifest');
if (manifest?.lang !== 'es') fail('El manifest no declara idioma es');
if (!process.exitCode) ok('Manifest PWA mínimo correcto');

for (const icon of ['icon-192.png', 'icon-512.png']) {
  if (!fs.existsSync(path.join(root, icon))) fail(`Falta ${icon}`);
}
if (!process.exitCode) ok('Íconos PWA presentes');

const docs = [
  'README_INSTALACION.txt',
  'CHANGELOG.md',
  'CAMBIOS_REALIZADOS.md',
  'GUIA_PRUEBA_FINAL.md',
  'PRUEBA_TECNICA_RESULTADO.md'
];

for (const doc of docs) mustExist(doc);
if (!process.exitCode) ok('Documentación de entrega presente');

if (process.exitCode) {
  console.error('\nResultado: validación estática fallida.');
  process.exit(process.exitCode);
}

console.log('\nResultado: validación estática correcta.');
