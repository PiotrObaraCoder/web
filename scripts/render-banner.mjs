// Renders design/linkedin/banner.html to design/linkedin/banner.png (1584x396, ×2 for sharpness is not needed: LinkedIn recompresses).
import { chromium } from '@playwright/test';
import { pathToFileURL } from 'node:url';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1584, height: 396 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL('design/linkedin/banner.html').href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'design/linkedin/banner.png' });
await browser.close();
console.log('design/linkedin/banner.png');
