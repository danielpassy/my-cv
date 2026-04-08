import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { marked } from 'marked';

const CHROME_BIN = process.env.CHROME_BIN || 'google-chrome';

const EN_TARGET = { input: 'en.md', output: 'danielpassy_cv.pdf', lang: 'en' };
const PT_TARGET = { input: 'pt.md', output: 'daniel_passy_cv.pdf', lang: 'pt-BR' };

marked.setOptions({
  gfm: true,
  breaks: true,
});

function renderHtml(markdown, lang) {
  const normalizedMarkdown = markdown.replace(/<\s*\/?\s*br\s*\/?\s*>/gi, '<br />');
  const content = marked.parse(normalizedMarkdown);

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CV</title>
  <link rel="stylesheet" href="${resolve('scripts/cv.css')}" />
</head>
<body>
  <main class="cv">${content}</main>
</body>
</html>`;
}

function mdToPdf({ input, output, lang }) {
  const markdown = readFileSync(input, 'utf8');
  const html = renderHtml(markdown, lang);

  const tempDir = mkdtempSync(join(tmpdir(), 'cv-pdf-'));
  const htmlPath = join(tempDir, `${input}.html`);

  try {
    writeFileSync(htmlPath, html, 'utf8');

    execFileSync(
      CHROME_BIN,
      [
        '--headless',
        '--disable-gpu',
        '--no-pdf-header-footer',
        `--print-to-pdf=${resolve(output)}`,
        `file://${htmlPath}`,
      ],
      { stdio: 'pipe' }
    );

    console.log(`Built ${output}`);
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
}

const target = process.argv[2];

if (!target) {
  console.error('Target is required. Use: en or pt.');
  process.exit(1);
}

if (target === 'en') {
  mdToPdf(EN_TARGET);
} else if (target === 'pt') {
  mdToPdf(PT_TARGET);
} else {
  console.error('Invalid target. Use: en or pt.');
  process.exit(1);
}
