// Apparizione graduale dei contenuti. Se il movimento è ridotto o
// IntersectionObserver non esiste, tutto resta visibile.
const targets = document.querySelectorAll<HTMLElement>('[data-reveal], .bg-grid, [data-observe]');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduce || !('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  targets.forEach((el) => io.observe(el));
}
