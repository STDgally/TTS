# Preventivi TTS

Strumento interno di Studio TTS per comporre i preventivi. È **un unico file**, `Preventivi-TTS.html`:
non serve installare nulla, non serve internet, non fa parte del sito pubblico.

## Uso

1. Scarica `Preventivi-TTS.html` e mettilo in una cartella del computer (es. `Documenti/Studio TTS/`).
2. Aprilo con doppio clic (Chrome, Edge, Firefox o Safari).
3. **Nuovo** → compila cliente e oggetto, spunta le voci, inserisci quantità e prezzi.
   Nel preventivo compaiono solo le voci spuntate; totali, IVA, rate e costi ricorrenti si calcolano da soli.
4. **Salva** → il preventivo finisce nell'elenco "Preventivi salvati".
5. **Stampa / PDF** → nella finestra di stampa scegli *Salva come PDF* (formato A4, attiva "Grafica di sfondo" se il browser lo chiede).

Altre funzioni: **Duplica** (riparte da un preventivo esistente), **Elimina**, listino prezzi
("Salva questi prezzi come listino"), dati dello studio (P.IVA, indirizzo, IBAN) salvati una volta sola.

## Dove finiscono i dati

I preventivi sono salvati **nel browser del computer** su cui apri il file (memoria locale), non online.

- Usa sempre lo stesso browser e lo stesso file nella stessa posizione: se lo sposti o cambi browser, l'elenco appare vuoto.
- Fai spesso **Backup ↓**: scarica un file `.json` con tutti i preventivi, il listino e i dati dello studio.
- Con **Importa ↑** carichi un backup: serve per passare i preventivi da un computer all'altro
  (es. tra Alessandro e Halil) o per recuperarli. L'import unisce i dati, non cancella quelli esistenti.
- Cancellare i dati di navigazione del browser cancella anche i preventivi: per questo serve il backup.

## Modificare lo strumento

Il sorgente è `app.html` (voci del catalogo in `CATALOG`, testi standard in `DEFAULT_TEXTS`).
Dopo una modifica rigenera il file unico dalla cartella principale del progetto:

```bash
npm install            # solo la prima volta
node tools/preventivi/build.mjs
```
