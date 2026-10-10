# Studio TTS — sito ufficiale

Sito multipagina di **Studio TTS** (TTS. — *Time To Shine*), web agency fondata da Alessandro Galli e Halil Korkmaz.
Realizzato con [Astro](https://astro.build): HTML statico, JavaScript minimo, nessun tracciamento, font self-hosted.

## Avvio

```bash
npm install
npm run dev       # sviluppo su http://localhost:4321
npm run build     # build statica in dist/
npm run preview   # anteprima della build
npm run check     # controllo tipi e template
```

Imposta l'URL pubblico prima della build di produzione (canonical, sitemap, Open Graph):

```bash
SITE_URL=https://www.tuodominio.it npm run build
```

## Dove si modifica cosa

| Cosa | File |
| --- | --- |
| Colori, font, navigazione, CTA, recapiti, dati legali, SEO, endpoint del modulo | `src/config/site.ts` |
| Servizi (Home + pagina Servizi) | `src/content/services.ts` |
| Fasi del metodo | `src/content/process.ts` |
| Fondatori (e foto, quando disponibili) | `src/content/founders.ts` |
| Portfolio | `src/content/projects.ts` |
| Stili globali e design token | `src/styles/global.css` |
| Componenti | `src/components/` |
| Pagine | `src/pages/` |

### Dati da completare prima della pubblicazione

Tutti i campi impostati a `null` in `src/config/site.ts` **non vengono mostrati**: nessun dato è stato inventato.

- **Recapiti** (`contacts`): email, telefono, sede, social.
- **Dati legali** (`legal`): ragione sociale, P.IVA, sede, email privacy (compaiono nel footer e nelle pagine legali).
- **Privacy Policy e Cookie Policy**: sono bozze strutturali (con `noindex` ed escluse dalla sitemap). Completare i testi tra `[parentesi quadre]` con un consulente, poi rimuovere `noindex` in `src/layouts/LegalLayout.astro` e il filtro in `astro.config.mjs`.
- **Modulo contatti** (`contactForm.endpoint`): finché è `null` il modulo valida i campi ma **non simula l'invio** e avvisa l'utente che il messaggio non è stato trasmesso. Imposta l'URL di un servizio che accetta `POST` con `FormData` (es. Formspree, Getform, una funzione serverless) e risponde `2xx`. I campi inviati sono: `nome`, `azienda`, `email`, `tipologia`, `messaggio`, `privacy` (+ il campo anti-spam `website`, da scartare se compilato).

### Logo

Gli asset in `public/brand/` sono estratti dal logo ufficiale fornito (sfondo reso trasparente, nessuna modifica al disegno).
Se disponi dei file vettoriali originali (SVG), sostituisci quelli PNG/WebP e aggiorna i percorsi in `logo` dentro `src/config/site.ts`.
Favicon, icone e immagine social (`public/og-image.jpg`) derivano dallo stesso asset.

### Portfolio

Aggiungi i progetti reali in `src/content/projects.ts` (c'è un esempio commentato). Con l'elenco vuoto Home e pagina Progetti mostrano lo stato “Nuovi progetti in arrivo.”. I lavori di studio interni vanno marcati `kind: 'concept'` e vengono etichettati come **Concept**.

### Foto dei fondatori

Salva le foto autentiche in `public/team/` (formato 4:5) e imposta `photo` in `src/content/founders.ts`. Finché manca, viene mostrato un riquadro grafico con le iniziali.

## Strumento preventivi

In `tools/preventivi/` c'è il generatore di preventivi interno: un file HTML autonomo da usare in locale, separato dal sito. Istruzioni in `tools/preventivi/README.md`.

## Note tecniche

- Mobile-first, HTML semantico, skip link, focus visibile, menu mobile accessibile (Esc, focus trap, `aria-expanded`).
- Animazioni leggere in CSS/IntersectionObserver, disattivate con `prefers-reduced-motion`; i contenuti restano visibili senza JavaScript.
- SEO: title e description per pagina, canonical, Open Graph/Twitter, JSON-LD `Organization`, `sitemap-index.xml`, `robots.txt`.
- Nessun cookie, nessuno strumento di analisi, nessuna richiesta a terze parti: se ne aggiungi, aggiorna la Cookie Policy e prevedi la gestione del consenso.
