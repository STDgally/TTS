/**
 * Servizi di Studio TTS.
 * `summary` è usato nella Home; gli altri campi nella pagina Servizi.
 * Aggiungi qui solo servizi realmente offerti e confermati.
 */
export interface Service {
  id: string;
  number: string;
  title: string;
  summary: string;
  what: string;
  forWho: string[];
  needs: string[];
  includes: string[];
}

export const services: Service[] = [
  {
    id: 'siti-vetrina',
    number: '01',
    title: 'Siti web vetrina',
    summary:
      'Siti moderni e professionali per raccontare la tua attività, presentare i tuoi servizi e facilitare il contatto con i clienti.',
    what:
      'Un sito vetrina è il biglietto da visita online della tua attività: poche pagine ben costruite che spiegano chi sei, cosa offri e come contattarti. Niente vendita online, solo una presentazione chiara e curata.',
    forWho: [
      'Attività locali che vogliono farsi trovare e conoscere',
      'Professionisti e studi professionali',
      'Piccole e medie imprese che hanno un sito datato o non ce l’hanno ancora',
    ],
    needs: [
      'Non avere una presenza online, o averne una che non ti rappresenta',
      'Dover spiegare ogni volta a voce cosa fai e come lavori',
      'Rendere più semplice per un potenziale cliente mettersi in contatto',
    ],
    includes: [
      'Definizione della struttura delle pagine',
      'Organizzazione dei contenuti che ci fornisci',
      'Design personalizzato e sviluppo del sito',
      'Versione ottimizzata per smartphone, tablet e desktop',
      'Modulo o riferimenti per il contatto',
    ],
  },
  {
    id: 'web-design',
    number: '02',
    title: 'Web design',
    summary:
      'Interfacce curate, layout personalizzati e una comunicazione visiva coerente con il tuo brand.',
    what:
      'Il web design è la progettazione dell’aspetto e dell’organizzazione visiva di un sito: tipografia, colori, spazi, immagini e gerarchie. Serve a far percepire la tua attività per quello che è, a colpo d’occhio.',
    forWho: [
      'Chi ha già un’identità visiva e vuole portarla online in modo coerente',
      'Chi sente che il proprio sito attuale è “uguale a tutti gli altri”',
      'Chi vuole un aspetto più moderno e professionale',
    ],
    needs: [
      'Un sito che non comunica il livello reale della tua attività',
      'Colori, font e stili usati in modo incoerente',
      'Pagine confuse, dove le informazioni importanti si perdono',
    ],
    includes: [
      'Direzione visiva basata sulla tua identità',
      'Layout personalizzati, non template generici',
      'Scelte tipografiche e cromatiche coerenti',
      'Progettazione dei componenti principali (pulsanti, sezioni, schede)',
    ],
  },
  {
    id: 'responsive-design',
    number: '03',
    title: 'Responsive design',
    summary:
      'Esperienze di navigazione progettate per funzionare correttamente su smartphone, tablet e desktop.',
    what:
      'Responsive significa che il sito si adatta allo schermo di chi lo visita. Non basta “rimpicciolire” la versione desktop: ogni formato va pensato perché testi, immagini e pulsanti restino leggibili e comodi da usare.',
    forWho: [
      'Chi ha clienti che cercano informazioni soprattutto da smartphone',
      'Chi ha un sito che da mobile risulta scomodo o illeggibile',
    ],
    needs: [
      'Testi troppo piccoli o da ingrandire con le dita',
      'Menu e pulsanti difficili da toccare',
      'Elementi che escono dallo schermo o si sovrappongono',
    ],
    includes: [
      'Progettazione mobile-first',
      'Adattamento di layout, testi e immagini ai diversi schermi',
      'Verifiche su più dimensioni di schermo e browser',
    ],
  },
  {
    id: 'esperienza-utente',
    number: '04',
    title: 'Esperienza utente',
    summary:
      'Strutture chiare, contenuti ben organizzati e percorsi intuitivi per chi visita il sito.',
    what:
      'L’esperienza utente (UX) riguarda quanto è semplice usare un sito: trovare un’informazione, capire un servizio, arrivare al contatto. È il lavoro “invisibile” che rende un sito piacevole e comprensibile.',
    forWho: [
      'Chi riceve domande su informazioni che sono già sul sito',
      'Chi ha molti contenuti e non sa come ordinarli',
      'Chi vuole rendere più diretto il percorso verso il contatto',
    ],
    needs: [
      'Visitatori che non trovano quello che cercano',
      'Menu con troppe voci o nomi poco chiari',
      'Pagine lunghe senza una gerarchia evidente',
    ],
    includes: [
      'Analisi dei contenuti e dei percorsi principali',
      'Architettura delle pagine e della navigazione',
      'Gerarchia dei testi e degli inviti all’azione',
      'Attenzione all’accessibilità e alla leggibilità',
    ],
  },
];
