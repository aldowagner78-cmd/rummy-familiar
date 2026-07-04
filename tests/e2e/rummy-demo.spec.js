import { test, expect } from '@playwright/test';

async function abrirAppSinFirebase(page) {
  await page.route('https://www.gstatic.com/**', route => route.abort());
  await page.route('https://*.firebaseio.com/**', route => route.abort());
  await page.route('https://*.firebaseapp.com/**', route => route.abort());
  await page.addInitScript(() => {
    localStorage.clear();
  });
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#appTitle')).toHaveText(/Rummy|Rummikub/i);
}

async function cargarDemoLocal(page) {
  await abrirAppSinFirebase(page);
  await expect(page.locator('#loadDemoBtn')).toBeVisible();
  await page.locator('#loadDemoBtn').click();
  await expect(page.locator('#roomInfo')).toContainText(/DEMO/i);
  await expect(page.locator('#playersList')).toContainText(/Demo Ana/i);
  await expect(page.locator('#rackInfo')).toContainText(/14/);
}

async function abrirPanelSala(page) {
  const panel = page.locator('#sideDrawer');
  const reset = page.locator('#resetDemoBtn');
  if (!(await reset.isVisible())) {
    await panel.evaluate(element => {
      element.open = true;
    });
  }
  await expect(reset).toBeVisible();
}

async function crearJugadaDemo30(page) {
  await page.locator('#rackTiles .tile[title="Rojo 10"]').click();
  await page.locator('#rackTiles .tile[title="Azul 10"]').click();
  await page.locator('#rackTiles .tile[title="Amarillo 10"]').click();

  await expect(page.locator('#selectionInfo')).toContainText(/3/);

  await page.locator('#newSetBtn').click();

  await expect(page.locator('#sets .set')).toHaveCount(1);
  await expect(page.locator('#sets')).toContainText(/Serie|Group/i);
  await expect(page.locator('#rackInfo')).toContainText(/11/);
  await expect(page.locator('#openedInfo')).toContainText(/Ya abriste|Opened|Apertura/i);
}

test('carga la app y permite iniciar demo local sin Firebase', async ({ page }) => {
  await cargarDemoLocal(page);

  await expect(page.locator('#netStatus')).toContainText(/DEMO|Firebase/i);
  await expect(page.locator('#turnInfo')).toContainText(/Turno|turno|Demo/i);
  await expect(page.locator('#poolInfo')).toContainText(/Pila|Pool/i);
  await expect(page.locator('#openedInfo')).toContainText(/Apertura|Opening|Opened/i);
  await expect(page.locator('#rackTiles .tile')).toHaveCount(14);
});

test('crea una jugada válida de 30 puntos y termina turno en modo demo', async ({ page }) => {
  await cargarDemoLocal(page);
  await crearJugadaDemo30(page);

  await page.locator('#endTurnBtn').click();

  await expect(page.locator('#turnInfo')).toContainText(/Demo Ana/i);
  await expect(page.locator('#advanceDemoBtn')).toBeEnabled();

  await page.locator('#advanceDemoBtn').click();

  await expect(page.locator('#turnInfo')).toContainText(/Jugador Demo|Demo Player|TE TOCA|Your turn/i);
});

test('reinicia el demo y restaura los datos ficticios', async ({ page }) => {
  await cargarDemoLocal(page);
  await crearJugadaDemo30(page);

  await abrirPanelSala(page);
  await page.locator('#resetDemoBtn').click();

  await expect(page.locator('#sets .set')).toHaveCount(0);
  await expect(page.locator('#rackInfo')).toContainText(/14/);
  await expect(page.locator('#rackTiles .tile[title="Rojo 10"]')).toBeVisible();
});

test('ayuda y cambio de idioma no rompen la pantalla principal', async ({ page }) => {
  await cargarDemoLocal(page);

  await page.locator('#helpBtn').click();
  await expect(page.locator('#helpModal')).toBeVisible();
  await expect(page.locator('#rulesList')).toContainText(/106|Rummikub|fichas|tiles/i);
  await page.locator('#closeHelpBtn').click();
  await expect(page.locator('#helpModal')).toHaveClass(/hide/);

  await page.locator('#langSelect').selectOption('en');
  await expect(page.locator('#loadDemoBtn')).toHaveText(/Play demo now|Load local demo/i);
  await expect(page.locator('#rackInfo')).toContainText(/tiles/i);

  await page.locator('#langSelect').selectOption('es');
  await expect(page.locator('#loadDemoBtn')).toHaveText(/Jugar demo ahora|Cargar demo local/i);
});
