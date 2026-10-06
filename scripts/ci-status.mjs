// Runs in CI after `playwright test`. Reads test-results/results.json and writes into dist/:
//   status.json               - numbers shown in the site's quality strip (never invented)
//   report/test-summary.html  - lightweight, downloadable test summary report
//   report/traces/menu.zip    - one trace to replay in trace.playwright.dev
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';

const results = JSON.parse(readFileSync('test-results/results.json', 'utf8'));
const tokens = JSON.parse(readFileSync('design/tokens.json', 'utf8'));
mkdirSync('dist/report/traces', { recursive: true });

// Flatten suites -> tests
const tests = [];
const walk = (suite, path = []) => {
  const here = suite.title && !suite.title.endsWith('.ts') ? [...path, suite.title] : path;
  for (const spec of suite.specs ?? []) {
    for (const t of spec.tests) {
      const last = t.results.at(-1) ?? {};
      tests.push({
        file: spec.file,
        group: here.join(' › '),
        title: spec.title,
        tags: (spec.tags ?? []).map((tag) => tag.replace(/^@/, '')), // JSON reporter drops the '@'
        status: t.status, // expected | unexpected | flaky | skipped
        duration: t.results.reduce((s, r) => s + r.duration, 0),
        annotations: t.annotations ?? [],
        attachments: last.attachments ?? [],
        error: last.error?.message?.split('\n')[0] ?? ''
      });
    }
  }
  for (const s of suite.suites ?? []) walk(s, here);
};
results.suites.forEach((s) => walk(s));

const passed = tests.filter((t) => t.status === 'expected' || t.status === 'flaky').length;
const failed = tests.filter((t) => t.status === 'unexpected').length;
const skipped = tests.filter((t) => t.status === 'skipped').length;
const violations = tests
  .flatMap((t) => t.annotations)
  .filter((a) => a.type === 'a11y-violations')
  .reduce((s, a) => s + Number(a.description || 0), 0);

const env = process.env;
const runUrl = env.GITHUB_RUN_ID ? `${env.GITHUB_SERVER_URL}/${env.GITHUB_REPOSITORY}/actions/runs/${env.GITHUB_RUN_ID}` : null;
const lastRun = results.stats?.startTime ?? new Date().toISOString();

// Showcase trace: the mobile menu test (acceptance criterion 1)
const showcase = tests.find((t) => t.title.startsWith('AC1: menu mobilne'));
const trace = showcase?.attachments.find((a) => a.name === 'trace' && a.path);
const hasTrace = !!(trace && existsSync(trace.path));
if (hasTrace) copyFileSync(trace.path, 'dist/report/traces/menu.zip');

const status = {
  e2e: { passed, failed, skipped, total: tests.length },
  a11y: { violations },
  lastRun,
  commit: env.GITHUB_SHA?.slice(0, 7) ?? null,
  runUrl,
  report: { html: '/report/', summary: '/report/test-summary.html', trace: hasTrace ? '/report/traces/menu.zip' : null }
};
writeFileSync('dist/status.json', JSON.stringify(status, null, 2));

// ---- Test summary report (self-contained HTML, styled with the design tokens) ----
const c = (k) => tokens.color[k].light;
const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]);
const area = (t) =>
  t.tags.includes('a11y') ? 'Dostępność (WCAG 2.2 AA)' : t.tags.includes('design') ? 'Zgodność z projektem w Figmie' : t.tags.includes('api') ? 'API' : 'Treść i działanie';
const groups = Object.groupBy ? Object.groupBy(tests, area) : tests.reduce((g, t) => ((g[area(t)] ??= []).push(t), g), {});
const badge = (s) =>
  s === 'unexpected' ? `<span class="b fail">FAIL</span>` : s === 'skipped' ? `<span class="b skip">SKIP</span>` : s === 'flaky' ? `<span class="b warn">FLAKY</span>` : `<span class="b pass">PASS</span>`;
const dateFmt = new Date(lastRun).toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });

const html = `<!doctype html>
<html lang="pl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Raport z testów · piotr-obara.pl · ${esc(dateFmt)}</title>
<style>
body{margin:0;background:${c('bg/page')};color:${c('text/primary')};font:16px/1.6 "IBM Plex Sans",system-ui,sans-serif}
main{max-width:960px;margin:0 auto;padding:40px 16px}
h1{font-size:32px;line-height:1.2;margin:0 0 8px}h2{font-size:20px;margin:32px 0 12px}
.label{font:600 12px/1.3 "IBM Plex Mono",monospace;letter-spacing:.08em;text-transform:uppercase;color:${c('accent/redline')}}
.muted{color:${c('text/muted')}}
.sum{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:24px 0}
.tile{background:${c('bg/panel')};border:1px solid ${c('border/default')};border-radius:6px;padding:16px}
.tile b{display:block;font:600 28px/1.1 "IBM Plex Mono",monospace}
table{width:100%;border-collapse:collapse;background:${c('bg/panel')};border:1px solid ${c('border/default')};border-radius:6px;font-size:14px}
th,td{text-align:left;padding:10px 12px;border-bottom:1px solid ${c('border/default')};vertical-align:top}
th{font:600 12px/1.3 "IBM Plex Mono",monospace;text-transform:uppercase;color:${c('text/muted')}}
td.n{font-family:"IBM Plex Mono",monospace;white-space:nowrap;color:${c('text/muted')}}
.b{font:600 12px/1 "IBM Plex Mono",monospace;padding:4px 8px;border-radius:999px}
.pass{background:${c('status/pass-soft')};color:${c('status/pass')}}.fail{background:${c('status/fail-soft')};color:${c('status/fail')}}
.warn{background:${c('status/warn-soft')};color:${c('status/warn')}}.skip{background:${c('status/info-soft')};color:${c('status/info')}}
.err{color:${c('status/fail')};font-size:13px}
a{color:${c('status/info')}}
</style></head><body><main>
<p class="label">Raport z testów · test summary report</p>
<h1>piotr-obara.pl</h1>
<p class="muted">Przebieg: ${esc(dateFmt)}${status.commit ? ` · commit ${esc(status.commit)}` : ''}${runUrl ? ` · <a href="${esc(runUrl)}">przebieg w GitHub Actions</a>` : ''}</p>
<p>Zakres: strona główna w wersji PL i EN. Narzędzia: Playwright ${esc(results.config?.version ?? '')}, axe-core (WCAG 2.0–2.2 A/AA), przeglądarka Chromium.
Kryteria akceptacji pochodzą ze <a href="https://www.figma.com/design/yC0ZGGqHkUO7Y10Mz4iyMy">specyfikacji w Figmie</a>.</p>
<div class="sum">
<div class="tile"><b>${tests.length}</b>testów</div>
<div class="tile"><b style="color:${c('status/pass')}">${passed}</b>zaliczonych</div>
<div class="tile"><b style="color:${failed ? c('status/fail') : c('text/primary')}">${failed}</b>niezaliczonych</div>
<div class="tile"><b style="color:${violations ? c('status/fail') : c('status/pass')}">${violations}</b>naruszeń WCAG</div>
</div>
${Object.entries(groups)
  .map(
    ([name, list]) => `<h2>${esc(name)}</h2>
<table><thead><tr><th>Wynik</th><th>Test</th><th>Czas</th></tr></thead><tbody>
${list
  .map(
    (t) => `<tr><td>${badge(t.status)}</td><td>${t.group ? `<span class="muted">${esc(t.group)} › </span>` : ''}${esc(t.title)}${t.error ? `<div class="err">${esc(t.error)}</div>` : ''}</td><td class="n">${(t.duration / 1000).toFixed(1)} s</td></tr>`
  )
  .join('\n')}
</tbody></table>`
  )
  .join('\n')}
<p class="muted" style="margin-top:32px">Pełny raport Playwright z nagraniami testów: <a href="/report/">piotr-obara.pl/report/</a></p>
</main></body></html>`;
writeFileSync('dist/report/test-summary.html', html);

console.log(`status.json: ${passed} passed, ${failed} failed, ${violations} WCAG violations, trace: ${hasTrace}`);
