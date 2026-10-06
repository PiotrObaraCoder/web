import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const pages = [
  { path: '/', name: 'PL' },
  { path: '/en/', name: 'EN' }
];

for (const { path, name } of pages) {
  for (const colorScheme of ['light', 'dark'] as const) {
    test(`WCAG 2.2 AA: strona ${name}, motyw ${colorScheme}`, { tag: '@a11y' }, async ({ page }, testInfo) => {
      await page.emulateMedia({ colorScheme });
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);

      const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();

      // Picked up by scripts/ci-status.mjs to publish the violation count on the site
      testInfo.annotations.push({ type: 'a11y-violations', description: String(results.violations.length) });
      await testInfo.attach('axe-results.json', { body: JSON.stringify(results.violations, null, 2), contentType: 'application/json' });

      expect(
        results.violations.map((v) => `${v.id} (${v.impact}): ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)
      ).toEqual([]);
    });
  }
}

test('mobile 375 px: brak naruszeń WCAG przy otwartym menu', { tag: '@a11y' }, async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Menu' }).click();

  const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
  testInfo.annotations.push({ type: 'a11y-violations', description: String(results.violations.length) });

  expect(results.violations.map((v) => v.id)).toEqual([]);
});

test('klawiatura: pierwszy Tab prowadzi do linku „Przejdź do treści”', { tag: '@a11y' }, async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');

  const skip = page.getByRole('link', { name: 'Przejdź do treści' });
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();

  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});
