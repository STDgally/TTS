/**
 * Fondatori. Per aggiungere una foto autentica:
 * 1. salva l'immagine in /public/team/ (es. /public/team/alessandro-galli.webp, formato 4:5)
 * 2. imposta `photo` con il percorso.
 * Finché `photo` è null viene mostrato un riquadro grafico con le iniziali.
 */
export interface Founder {
  name: string;
  role: string;
  initials: string;
  photo: string | null;
}

export const founders: Founder[] = [
  { name: 'Alessandro Galli', role: 'Co-founder — Studio TTS', initials: 'AG', photo: null },
  { name: 'Halil Korkmaz', role: 'Co-founder — Studio TTS', initials: 'HK', photo: null },
];
