/**
 * Conformance with the Figma design spec:
 * https://www.figma.com/design/yC0ZGGqHkUO7Y10Mz4iyMy ("Spec · Kryteria akceptacji")
 * Test titles start with the acceptance criterion number shown on the Figma pins.
 */
import { test, expect } from '@playwright/test';
import { tokens, rgb, color } from './tokens';

test.describe('Tokeny projektu', { tag: '@design' }, () => {
  for (const mode of ['light', 'dark'] as const) {
    test(`kolory w CSS odpowiadają zmiennym z Figmy (${mode})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: mode });
      await page.goto('/');

      const actual = await page.evaluate((names) => {
        const style = getComputedStyle(document.documentElement);
        return Object.fromEntries(names.map((n) => [n, style.getPropertyValue(`--color-${n.replace('/', '-')}`).trim().toUpperCase()]));
      }, Object.keys(tokens.color));

      const expected = Object.fromEntries(Object.entries(tokens.color).map(([n, v]) => [n, v[mode].toUpperCase()]));
      expect(actual).toEqual(expected);
    });
  }

  test('odstępy i promienie w CSS odpowiadają zmiennym z Figmy', async ({ page }) => {
    await page.goto('/');
    const read = (prefix: string, keys: string[]) =>
      page.evaluate(([p, ks]) => {
        const style = getComputedStyle(document.documentElement);
        return Object.fromEntries((ks as string[]).map((k) => [k, parseInt(style.getPropertyValue(`--${p}-${k}`))]));
      }, [prefix, keys] as const);

    expect(await read('space', Object.keys(tokens.spacing))).toEqual(tokens.spacing);
    expect(await read('radius', Object.keys(tokens.radius))).toEqual(tokens.radius);
  });
});

test.describe('Kryteria akceptacji: strona główna', { tag: '@design' }, () => {
  test('AC1: nagłówek przyklejony u góry strony', async ({ page }) => {
    await page.goto('/');
    await page.mouse.wheel(0, 2000);
    await expect(page.getByTestId('topbar')).toHaveCSS('position', 'sticky');
    await expect(page.getByTestId('topbar')).toBeInViewport();
  });

  test('AC1: menu mobilne otwiera się przyciskiem z aria-expanded i zamyka Escape', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const toggle = page.getByRole('button', { name: 'Menu' });
    const navLink = page.getByRole('navigation', { name: 'Nawigacja główna' }).getByRole('link', { name: 'Doświadczenie' });

    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(navLink).toBeHidden();

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(navLink).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toBeFocused();
  });

  test('AC2: H1 to IBM Plex Sans Bold 52 px, interlinia 110%, kolor text/primary', async ({ page }) => {
    await page.goto('/');
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toHaveCSS('font-family', /IBM Plex Sans/);
    await expect(h1).toHaveCSS('font-weight', String(tokens.type.display.weight));
    await expect(h1).toHaveCSS('font-size', `${tokens.type.display.size}px`);
    await expect(h1).toHaveCSS('line-height', `${tokens.type.display.size * tokens.type.display.lineHeight}px`);
    await expect(h1).toHaveCSS('color', rgb(color('text/primary')));
  });

  test('AC3: przyciski mają min. 44 px wysokości i promień 6 px; Primary w kolorze bg/inverse', async ({ page }) => {
    await page.goto('/');
    const buttons = page.locator('.button:visible');
    const count = await buttons.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const box = await button.boundingBox();
      expect(box?.height, `wysokość przycisku "${await button.innerText()}"`).toBeGreaterThanOrEqual(tokens.component['button/min-height']);
      await expect(button).toHaveCSS('border-radius', `${tokens.radius.md}px`);
    }
    await expect(page.locator('.button-primary').first()).toHaveCSS('background-color', rgb(color('bg/inverse')));
  });

  test('AC4: karta kandydata widoczna w całości bez przewijania (1440×900)', async ({ page }) => {
    await page.goto('/');
    const box = await page.getByTestId('candidate-card').boundingBox();
    expect(box).not.toBeNull();
    expect(box!.y + box!.height).toBeLessThanOrEqual(900);
    await expect(page.getByTestId('candidate-card')).toContainText('Od zaraz');
  });

  test('AC5: bez danych z CI pasek jakości pokazuje „brak danych”, nie zmyśloną liczbę', async ({ page }) => {
    await page.route('**/status.json', (route) => route.fulfill({ status: 404 }));
    await page.goto('/');
    const strip = page.getByTestId('quality-strip');
    await expect(strip.getByRole('listitem')).toHaveText([
      'testy E2E: brak danych',
      'WCAG 2.2 AA: brak danych',
      'ostatni run: brak danych'
    ]);
  });

  test('AC5: pasek jakości pokazuje wyniki z /status.json', async ({ page }) => {
    // status.json is produced by CI (scripts/ci-status.mjs), so it is mocked here
    await page.route('**/status.json', (route) =>
      route.fulfill({ json: { e2e: { passed: 21, failed: 0 }, a11y: { violations: 0 }, lastRun: '2026-10-06T03:00:00Z' } })
    );
    await page.goto('/');
    const strip = page.getByTestId('quality-strip');
    await expect(strip.getByRole('listitem')).toHaveText([
      '✓ testy E2E: 21 passing',
      '✓ WCAG 2.2 AA: 0 naruszeń',
      'ostatni run: 6.10.2026'
    ]);
    await expect(strip.getByRole('listitem').first()).toHaveCSS('color', rgb(color('status/pass')));
  });

  test('AC5: nieudany przebieg CI jest pokazany jako błąd, nie ukryty', async ({ page }) => {
    await page.route('**/status.json', (route) =>
      route.fulfill({ json: { e2e: { passed: 19, failed: 2 }, a11y: { violations: 3 }, lastRun: '2026-10-06T03:00:00Z' } })
    );
    await page.goto('/');
    const items = page.getByTestId('quality-strip').getByRole('listitem');
    await expect(items.nth(0)).toHaveText('✗ testy E2E: 2 failing');
    await expect(items.nth(1)).toHaveText('✗ WCAG 2.2 AA: 3 naruszeń');
    await expect(items.nth(0)).toHaveCSS('color', rgb(color('status/fail')));
  });
});

test.describe('Źródła stylów', { tag: '@design' }, () => {
  test('CSS i komponenty nie zawierają kolorów spoza tokenów', async () => {
    const { readFileSync, readdirSync } = await import('node:fs');
    const { join } = await import('node:path');
    const files = (dir: string): string[] =>
      readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? files(join(dir, e.name)) : [join(dir, e.name)]));

    const literals = files('src')
      .filter((f) => /\.(css|astro)$/.test(f))
      .flatMap((f) =>
        readFileSync(f, 'utf8')
          .split('\n')
          .map((line, i) => ({ f, line: i + 1, text: line }))
          .filter(({ text }) => /#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(/.test(text))
          .map(({ f, line, text }) => `${f}:${line} ${text.trim()}`)
      );
    expect(literals).toEqual([]);
  });
});
