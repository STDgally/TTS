/**
 * Validazione e invio del modulo contatti.
 * - Se `data-endpoint` è vuoto il modulo NON simula l'invio: avvisa l'utente.
 * - Se è configurato, invia in POST (FormData) e accetta risposte JSON
 *   compatibili con i più comuni servizi di form (es. Formspree).
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function validate(field: Field): string {
  const value = field.value.trim();

  if (field instanceof HTMLInputElement && field.type === 'checkbox') {
    return field.required && !field.checked ? 'Per inviare la richiesta è necessario accettare l’informativa privacy.' : '';
  }
  if (field.required && !value) {
    switch (field.name) {
      case 'nome':
        return 'Inserisci il tuo nome e cognome.';
      case 'email':
        return 'Inserisci il tuo indirizzo email.';
      case 'tipologia':
        return 'Seleziona la tipologia di progetto.';
      case 'messaggio':
        return 'Scrivi un messaggio per raccontarci il tuo progetto.';
      default:
        return 'Questo campo è obbligatorio.';
    }
  }
  if (field.name === 'email' && value && !EMAIL_RE.test(value)) {
    return 'L’indirizzo email non sembra valido. Controlla, ad esempio, che contenga “@” e un dominio.';
  }
  if (field instanceof HTMLTextAreaElement && field.minLength > 0 && value.length < field.minLength) {
    return `Il messaggio è un po’ breve: servono almeno ${field.minLength} caratteri (ora ${value.length}).`;
  }
  return '';
}

function setError(form: HTMLFormElement, field: Field, message: string) {
  const slot = form.querySelector<HTMLElement>(`[data-error-for="${field.id}"]`);
  if (slot) slot.textContent = message;
  if (message) field.setAttribute('aria-invalid', 'true');
  else field.removeAttribute('aria-invalid');
}

function showStatus(el: HTMLElement, kind: 'success' | 'error' | 'warning', title: string, text: string) {
  el.hidden = false;
  el.dataset.kind = kind;
  el.innerHTML = '';
  const strong = document.createElement('strong');
  strong.textContent = title;
  const p = document.createElement('span');
  p.textContent = text;
  el.append(strong, p);
}

export function initContactForm(form: HTMLFormElement) {
  form.noValidate = true; // la validazione è gestita qui, con messaggi in italiano

  const endpoint = form.dataset.endpoint?.trim() ?? '';
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]')!;
  const fields = Array.from(form.querySelectorAll<Field>('input:not([name="website"]), select, textarea'));
  const touched = new WeakSet<Field>();

  for (const field of fields) {
    field.addEventListener('blur', () => {
      if (field.value.trim() || touched.has(field)) {
        touched.add(field);
        setError(form, field, validate(field));
      }
    });
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') setError(form, field, validate(field));
    });
    field.addEventListener('change', () => {
      if (field.getAttribute('aria-invalid') === 'true') setError(form, field, validate(field));
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.hidden = true;

    let firstInvalid: Field | null = null;
    for (const field of fields) {
      touched.add(field);
      const message = validate(field);
      setError(form, field, message);
      if (message && !firstInvalid) firstInvalid = field;
    }
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    // Anti-spam: se il campo trappola è compilato, interrompi in silenzio.
    const honeypot = form.querySelector<HTMLInputElement>('[name="website"]');
    if (honeypot?.value) return;

    if (!endpoint) {
      showStatus(
        status,
        'warning',
        'Messaggio non inviato.',
        'Il modulo contatti non è ancora collegato a un servizio di invio. I tuoi dati non sono stati trasmessi: riprova più avanti.',
      );
      return;
    }

    submit.setAttribute('aria-busy', 'true');
    submit.disabled = true;
    const originalLabel = submitLabel.textContent;
    submitLabel.textContent = 'Invio in corso…';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      form.reset();
      showStatus(
        status,
        'success',
        'Grazie, abbiamo ricevuto il tuo messaggio.',
        'Leggeremo la tua richiesta e ti risponderemo all’indirizzo email che ci hai indicato.',
      );
      status.setAttribute('tabindex', '-1');
      status.focus();
    } catch {
      showStatus(
        status,
        'error',
        'Si è verificato un problema durante l’invio.',
        'Il messaggio non è stato inviato. Controlla la connessione e riprova tra qualche istante.',
      );
    } finally {
      submit.removeAttribute('aria-busy');
      submit.disabled = false;
      submitLabel.textContent = originalLabel;
    }
  });
}
