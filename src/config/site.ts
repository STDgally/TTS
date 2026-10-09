/**
 * CONFIGURAZIONE CENTRALE — Studio TTS
 * ------------------------------------------------------------
 * Tutto ciò che riguarda brand, colori, font, navigazione, recapiti,
 * dati legali e modulo contatti si modifica da qui.
 *
 * Regola d'oro: i campi impostati a `null` NON vengono mostrati sul sito.
 * Compilali solo con dati reali e verificati.
 */

export const brand = {
  name: 'Studio TTS',
  mark: 'TTS.',
  meaning: 'Time To Shine',
  descriptor: 'Web Agency',
  tagline: 'Web design per aziende e professionisti.',
  founders: ['Alessandro Galli', 'Halil Korkmaz'],
  locale: 'it_IT',
  lang: 'it',
} as const;

/** Palette ufficiale. Viene convertita in variabili CSS (--color-*) nel layout. */
export const colors = {
  acid: '#B8FF3B',
  black: '#111111',
  white: '#FFFFFF',
  soft: '#F4F4F0',
  gray: '#777777',
} as const;

/** Famiglie tipografiche (i file dei font sono self-hosted, nessuna chiamata a terzi). */
export const fonts = {
  display: "'Space Grotesk Variable', 'Space Grotesk', system-ui, sans-serif",
  body: "'Inter Variable', 'Inter', system-ui, sans-serif",
} as const;

/** Logo ufficiale (estratto dall'asset approvato, sfondo trasparente). */
export const logo = {
  mark: { src: '/brand/tts-mark-320.webp', fallback: '/brand/tts-mark-320.png', width: 320, height: 120 },
  full: { src: '/brand/tts-logo-480.webp', fallback: '/brand/tts-logo-480.png', width: 480, height: 225 },
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Servizi', href: '/servizi/' },
  { label: 'Chi siamo', href: '/chi-siamo/' },
  { label: 'Progetti', href: '/progetti/' },
  { label: 'Contatti', href: '/contatti/' },
] as const;

export const legalNavigation = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Cookie Policy', href: '/cookie-policy/' },
] as const;

export const cta = {
  primary: { label: 'Parliamo del tuo progetto', href: '/contatti/' },
} as const;

/**
 * Recapiti ufficiali. Lasciare `null` finché non sono confermati:
 * il sito mostrerà un messaggio neutro al posto del dato.
 */
export const contacts: {
  email: string | null;
  phone: string | null;
  address: string | null;
  social: { label: string; href: string }[];
} = {
  email: null, // es. 'ciao@tuodominio.it'
  phone: null, // es. '+39 000 000 0000'
  address: null, // es. 'Via Esempio 1, 00000 Città (XX)'
  social: [], // es. [{ label: 'Instagram', href: 'https://instagram.com/...' }]
};

/** Dati fiscali e legali: mostrati nel footer solo se compilati. */
export const legal: {
  companyName: string | null;
  vatNumber: string | null;
  registeredOffice: string | null;
  privacyContactEmail: string | null;
} = {
  companyName: null,
  vatNumber: null,
  registeredOffice: null,
  privacyContactEmail: null,
};

/**
 * Modulo contatti.
 * `endpoint`: URL che riceve i dati in POST (es. Formspree, Getform, una funzione
 * serverless o un backend proprio). Finché è `null`, il modulo valida i campi
 * ma NON simula l'invio: mostra un avviso chiaro all'utente.
 */
export const contactForm: {
  endpoint: string | null;
  projectTypes: string[];
} = {
  endpoint: null,
  projectTypes: [
    'Nuovo sito vetrina',
    'Restyling di un sito esistente',
    'Web design / interfaccia',
    'Non lo so ancora, ne parliamo',
  ],
};

export const seo = {
  defaultTitle: 'Studio TTS — Web agency | Time To Shine',
  titleTemplate: '%s — Studio TTS',
  defaultDescription:
    'Studio TTS è una web agency italiana: progettiamo siti web vetrina moderni, curati e su misura per aziende e professionisti.',
  ogImage: '/og-image.jpg',
} as const;
