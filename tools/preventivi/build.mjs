// Genera Preventivi-TTS.html: un unico file autonomo (logo e font incorporati),
// da aprire con doppio clic, anche offline.  Uso: node tools/preventivi/build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const dataUri = (path, mime) => `data:${mime};base64,${readFileSync(join(root, path)).toString('base64')}`;

const html = readFileSync(join(here, 'app.html'), 'utf8')
  .replaceAll('__LOGO__', dataUri('public/brand/tts-mark-320.webp', 'image/webp'))
  .replaceAll('__FONT_DISPLAY__', dataUri('node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2', 'font/woff2'))
  .replaceAll('__FONT_BODY__', dataUri('node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2', 'font/woff2'));

writeFileSync(join(here, 'Preventivi-TTS.html'), html);
console.log(`Preventivi-TTS.html creato (${Math.round(html.length / 1024)} KB)`);
