import { test, expect } from '@playwright/test';

test.describe('Kontakt', { tag: '@content' }, () => {
  test('numer telefonu nie jest w HTML i pojawia się dopiero po kliknięciu', async ({ page, request }) => {
    const html = await (await request.get('/')).text();
    expect(html).not.toMatch(/602\s?363\s?240/);

    await page.goto('/');
    const contact = page.locator('#kontakt');
    await expect(contact.getByRole('link', { name: /\+48/ })).toHaveCount(0);

    await contact.getByRole('button', { name: 'Pokaż numer' }).click();
    const phone = contact.getByRole('link', { name: '+48 602 363 240' });
    await expect(phone).toHaveAttribute('href', 'tel:+48602363240');
    await expect(phone).toBeFocused();
  });

  test('CV pod starym adresem jest dostępne jako PDF', async ({ request }) => {
    const response = await request.get('/public/Piotr-Obara-CV-PL.pdf');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/pdf');
  });
});

test.describe('API', { tag: '@api' }, () => {
  test('GET /api/profile.json zwraca profil zgodny z kartą kandydata', async ({ request }) => {
    const response = await request.get('/api/profile.json');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    expect(body).toMatchObject({
      name: 'Piotr Obara',
      availability: 'immediately',
      contract: ['employment', 'b2b'],
      certifications: ['ISTQB CTFL 4.0']
    });
    expect(body.languages).toContainEqual({ code: 'en', level: 'B2' });
  });
});

test.describe('Wersje językowe', { tag: '@content' }, () => {
  test('przełącznik prowadzi do wersji angielskiej z lang="en"', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'English version' }).click();
    await expect(page).toHaveURL(/\/en\/$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('I test systems where every detail matters.');
  });

  test('obie wersje wskazują siebie nawzajem przez hreflang', async ({ page }) => {
    await page.goto('/en/');
    await expect(page.locator('link[rel="alternate"][hreflang="pl"]')).toHaveAttribute('href', 'https://piotr-obara.pl/');
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute('href', 'https://piotr-obara.pl/en/');
  });
});

test.describe('Responsywność', { tag: '@content' }, () => {
  for (const width of [320, 375, 768]) {
    test(`brak przewijania w poziomie przy szerokości ${width} px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto('/');
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBe(0);
    });
  }
});

test('wszystkie obrazy mają tekst alternatywny', { tag: '@a11y' }, async ({ page }) => {
  await page.goto('/');
  const images = page.locator('img');
  const count = await images.count();
  for (let i = 0; i < count; i++) {
    await expect(images.nth(i)).toHaveAttribute('alt', /.{10,}/);
  }
});

test.describe('Raport z testów', { tag: '@content' }, () => {
  test('bez opublikowanego raportu linki do raportu są ukryte', async ({ page }) => {
    await page.route('**/status.json', (route) => route.fulfill({ status: 404 }));
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Pobierz raport z testów (HTML)' })).toBeHidden();
  });

  test('po przebiegu CI można pobrać raport i otworzyć nagranie testu', async ({ page }) => {
    await page.route('**/status.json', (route) =>
      route.fulfill({
        json: {
          e2e: { passed: 27, failed: 0 },
          a11y: { violations: 0 },
          lastRun: '2026-10-06T03:00:00Z',
          report: { html: '/report/', summary: '/report/test-summary.html', trace: '/report/traces/menu.zip' }
        }
      })
    );
    await page.goto('/');
    const evidence = page.locator('#dowody');

    await expect(evidence.getByRole('link', { name: 'Pobierz raport z testów (HTML)' })).toHaveAttribute('download', /\.html$/);
    await expect(evidence.getByRole('link', { name: 'Pełny raport Playwright online' })).toHaveAttribute('href', '/report/');
    await expect(evidence.getByRole('link', { name: 'Nagranie testu w Trace Viewer' })).toHaveAttribute(
      'href',
      `https://trace.playwright.dev/?trace=${encodeURIComponent(new URL('/report/traces/menu.zip', page.url()).href)}`
    );
  });
});
