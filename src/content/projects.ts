/**
 * PORTFOLIO
 * ------------------------------------------------------------
 * Inserisci qui SOLO progetti reali. Finché l'elenco è vuoto,
 * Home e pagina Progetti mostrano lo stato "Nuovi progetti in arrivo".
 *
 * `kind`:
 *  - 'cliente' → lavoro commissionato e pubblicabile
 *  - 'concept' → studio grafico interno: viene etichettato come CONCEPT
 *
 * Immagini: salvale in /public/progetti/ (consigliato 1600×1000, .webp).
 *
 * Esempio:
 * {
 *   slug: 'nome-progetto',
 *   name: 'Nome del progetto',
 *   sector: 'Settore',
 *   kind: 'cliente',
 *   services: ['Sito vetrina', 'Web design'],
 *   description: 'Breve descrizione del lavoro svolto.',
 *   image: { src: '/progetti/nome-progetto.webp', alt: 'Homepage del sito …' },
 *   url: 'https://…', // facoltativo, solo se il sito è pubblicato
 * },
 */
export interface Project {
  slug: string;
  name: string;
  sector: string;
  kind: 'cliente' | 'concept';
  services: string[];
  description: string;
  image: { src: string; alt: string } | null;
  url?: string;
}

export const projects: Project[] = [];
